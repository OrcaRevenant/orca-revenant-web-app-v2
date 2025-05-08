import { AsyncCatchError } from "@/api/core/error/decorator";
import type * as Types from "@/api/core/interface";
import { Auth } from "@/api/core/interface";
import * as service from "@/api/revenant";

export default class AuthService extends Auth {
  @AsyncCatchError()
  async renewToken(): Promise<Types.RenewTokenResponse> {
    throw new Error("Method not implemented.");
  }

  @AsyncCatchError()
  async getProfile(): Promise<Types.User> {
    const { data } = await service.getProfile();

    return data as unknown as Types.User;
  }

  @AsyncCatchError()
  async login({ payload }: Types.Login): Promise<Types.LoginResponse> {
    const { data } = await service.singIn({
      payload: { email: payload.email, password: payload.password },
    });

    return data as unknown as Types.User;
  }

  async loginWithProvider(): Promise<Types.LoginWithProviderResponse> {
    throw new Error("Method not implemented.");
  }

  async register(): Promise<Types.User> {
    throw new Error("Method not implemented.");
  }

  async logout(): Promise<void> {
    return Promise.resolve();
  }
}
