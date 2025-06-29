import { AxiosRequestConfig } from "axios";
import instance from "./initiatives/axiosInstance";
import * as Types from "./type";

export async function singIn({ payload }: Types.SignIn) {
  const { data } = await instance.post<Types.SignInResponse>(
    "/auth/signin",
    payload
  );
  return data;
}

export async function getProfile(options?: AxiosRequestConfig) {
  const { data } = await instance.get<Types.GetProfileResponse>(
    "/auth/profile",
    options
  );
  return data;
}

export async function renewToken(
  { payload }: Types.RenewToken,
  options?: AxiosRequestConfig
) {
  const { data } = await instance.post<Types.RenewTokenResponse>(
    "/auth/renew",
    payload,
    options
  );
  return data;
}

export async function getConnections() {
  const { data } = await instance.get<Types.GetConnectionsResponse>(
    "/connections"
  );
  return data;
}

export async function getConnectionByName({
  param,
}: Types.GetConnectionByName) {
  const { data } = await instance.get<Types.GetConnectionByNameResponse>(
    `/connections/${param.name}`
  );
  return data;
}

export async function createFeedback({ payload }: Types.CreateFeedback) {
  const { data } = await instance.post<Types.CreateFeedbackResponse>(
    "/feedbacks",
    payload
  );
  return data;
}

export async function createPortfolio({ payload }: Types.CreatePortfolio) {
  const { data } = await instance.post<Types.CreatePortfolioResponse>(
    "/portfolios",
    payload
  );
  return data;
}

export async function updatePortfolio({ payload }: Types.UpdatePortfolio) {
  const { data } = await instance.post<Types.UpdatePortfolioResponse>(
    "/portfolios",
    payload
  );
  return data;
}

export async function deletePortfolio({ param }: Types.DeletePortfolio) {
  const { data } = await instance.delete<Types.DeletePortfolioResponse>(
    `/portfolios/${param.id}`
  );
  return data;
}

export async function syncPortfolio({ param }: Types.SyncPortfolio) {
  const { data } = await instance.post<Types.SyncPortfolioResponse>(
    `/portfolios/${param.id}/sync`
  );
  return data;
}

export async function getPortfolioById({ param }: Types.GetPortfolioById) {
  const { data } = await instance.get<Types.GetPortfolioByIdResponse>(
    `/portfolios/${param.id}`
  );
  return data;
}

export async function getPortfolios({ query }: Types.GetPortfolios) {
  const { data } = await instance.get<Types.GetPortfoliosResponse>(
    "/portfolio-groups",
    {
      params: query,
    }
  );
  return data;
}

export async function getPortfolioStatus({ param }: Types.GetPortfolioStatus) {
  const { data } = await instance.get<Types.GetPortfolioStatusResponse>(
    `/portfolios/${param.id}/status`
  );
  return data;
}

export async function getPortfolioGroups() {
  const { data } = await instance.get<Types.GetPortfolioGroupsResponse>(
    "/portfolio-groups"
  );
  return data;
}

export async function getTransactions({ param, query }: Types.GetTransactions) {
  const { data } = await instance.get<Types.GetTransactionsResponse>(
    `/aggregation/${param.id}/transactions`,
    {
      params: query,
    }
  );
  return data;
}

export async function getAssets({ param, query }: Types.GetAssets) {
  const { data } = await instance.get<Types.GetAssetsResponse>(
    `/aggregation/${param.id}/assets`,
    {
      params: query,
    }
  );
  return data;
}

export async function getBalance({ param, query }: Types.GetBalance) {
  const { data } = await instance.get<Types.GetBalanceResponse>(
    `/aggregation/${param.id}/balance`,
    {
      params: query,
    }
  );
  return data;
}

export async function getBalanceHistory({
  param,
  query,
}: Types.GetHistoryChart) {
  const { data } = await instance.get<Types.GetHistoryChartResponse>(
    `/aggregation/${param.id}/balance/history`,
    {
      params: query,
    }
  );

  return data;
}

export async function getAssetAllocation({
  param,
  query,
}: Types.GetAssetAllocation) {
  const { data } = await instance.get<Types.GetAssetAllocationResponse>(
    `/aggregation/${param.id}/assets/allocation`,
    {
      params: query,
    }
  );
  return data;
}

export async function getAllocation({
  param,
  query,
}: Types.GetPortfolioAllocation) {
  const { data } = await instance.get<Types.GetPortfolioAllocationResponse>(
    `/aggregation/${param.id}/allocation`,
    {
      params: query,
    }
  );
  return data;
}

export async function getAssetPerformance({
  param,
  query,
}: Types.GetAssetPerformance) {
  const { data } = await instance.get<Types.GetAssetPerformanceResponse>(
    `/aggregation/${param.id}/assets/performance`,
    {
      params: query,
    }
  );
  return data;
}

export async function getAssetPerformanceOverTime({
  param,
  query,
}: Types.GetAssetPerformanceOverTime) {
  const { data } =
    await instance.get<Types.GetAssetPerformanceOverTimeResponse>(
      `/assets/${param.symbol}/history`,
      {
        params: query,
      }
    );

  return data;
}

export async function reorderPortfolioGroups({
  payload,
}: Types.ReorderPortfolioGroups) {
  const { data } = await instance.post<Types.ReorderPortfolioGroupsResponse>(
    "/portfolio-groups/reorder",
    payload
  );
  return data;
}

export async function generateAdvice({
  param,
  payload,
  query,
}: Types.GenerateAdvice) {
  const { data } = await instance.post<Types.GenerateAdviceResponse>(
    `/aggregation/${param.id}/advice`,
    payload,
    {
      params: query,
    }
  );
  return data;
}

export async function sendMessage({ payload }: Types.SendMessage) {
  const { data } = await instance.post<Types.SendMessageResponse>(
    "/ask",
    payload
  );
  return data;
}
