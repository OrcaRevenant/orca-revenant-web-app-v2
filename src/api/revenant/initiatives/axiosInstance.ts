/* eslint-disable @typescript-eslint/no-explicit-any */

import axios, { HttpStatusCode } from "axios";
import { AxiosRequestConfig } from "axios";
import Cookies from "js-cookie";
import {
  ACCESS_TOKEN_NAME,
  REFRESH_TOKEN_NAME,
} from "@/services/storage/storage";
import AuthService from "../adapter/auth";

interface RetryQueueItem {
  resolve: (value?: any) => void;
  reject: (error?: any) => void;
  config: AxiosRequestConfig;
}

const refreshAndRetryQueue: RetryQueueItem[] = [];
let isRefreshing = false;

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL || `http://localhost:3000`,
});

instance.interceptors.request.use(
  (request) => {
    const token = Cookies.get(ACCESS_TOKEN_NAME);

    if (token) {
      request.headers[`Authorization`] = `Bearer ${token}`;
    }

    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest: AxiosRequestConfig = error.config!;
    const refreshToken = Cookies.get(REFRESH_TOKEN_NAME);

    if (
      !!refreshToken &&
      error.response &&
      error.response.status === HttpStatusCode.Unauthorized
    ) {
      Cookies.remove(REFRESH_TOKEN_NAME);
      Cookies.remove(ACCESS_TOKEN_NAME);

      if (!isRefreshing) {
        isRefreshing = true;
        try {
          const loginResponse = await new AuthService().renewToken({
            payload: { refreshToken },
          });

          error.config!.headers.Authorization = `Bearer ${loginResponse.session.access_token}`;
          Cookies.set(REFRESH_TOKEN_NAME, loginResponse.session.refresh_token);
          Cookies.set(ACCESS_TOKEN_NAME, loginResponse.session.access_token);

          refreshAndRetryQueue.forEach(({ config, resolve, reject }) => {
            instance
              .request(config)
              .then((response) => resolve(response))
              .catch((err) => reject(err));
          });

          refreshAndRetryQueue.length = 0;

          return instance(originalRequest);
        } catch (refreshError) {
          throw refreshError;
        } finally {
          isRefreshing = false;
        }
      }

      return new Promise<void>((resolve, reject) => {
        refreshAndRetryQueue.push({ config: originalRequest, resolve, reject });
      });
    }

    return Promise.reject(error);
  }
);

export default instance;
