import {
  UseMutationOptions,
  UseQueryOptions,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import * as Types from "@/api/core/interface";
import service from "@/api/service";
import { useControlPanel } from "@/providers/control-provider";
import {
  useSelectedPortfolio,
  useSyncSelectedPortfolio,
} from "@/providers/portfolio-provider";

usePortfolios.queryKey = [`portfolios`];
export function usePortfolios(
  options?: Partial<
    UseQueryOptions<unknown, Error, Types.GetPortfoliosResponse>
  >
) {
  const {
    config: { quoteCurrency },
  } = useControlPanel();

  const modifiedPayload: Types.GetPortfoliosPayload = {
    quote: quoteCurrency.key,
  };

  return useQuery({
    queryKey: usePortfolios.queryKey,
    queryFn: () =>
      service.portfolio.getPortfolios({ payload: modifiedPayload }),
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    ...options,
  });
}

usePortfolioById.queryKey = (payload: Types.GetPortfolioByIdPayload) => [
  `portfolios`,
  ...Object.values(payload),
];
export function usePortfolioById(
  payload: Types.GetPortfolioByIdPayload,
  options?: UseQueryOptions<unknown, Error, Types.GetPortfolioByIdResponse>
) {
  return useQuery({
    queryKey: usePortfolioById.queryKey(payload),
    queryFn: () => service.portfolio.getPortfolioById({ payload }),
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    enabled: !!payload.id,
    ...options,
  });
}

useAssets.queryKey = (payload: Types.GetAssetsPayload) => [
  `assets`,
  ...Object.values(payload),
];
export function useAssets(
  options?: UseQueryOptions<unknown, Error, Types.GetAssetsResponse>
) {
  const selectedPortfolio = useSelectedPortfolio();
  const {
    config: { quoteCurrency },
  } = useControlPanel();

  const modifiedPayload: Types.GetAssetsPayload = {
    id: selectedPortfolio?.id as string,
    type: selectedPortfolio?.type as "portfolio" | "group",
    quote: quoteCurrency.key,
  };

  const enabled = !!selectedPortfolio?.isAvailable;

  return useQuery({
    queryKey: useAssets.queryKey(modifiedPayload),
    queryFn: () =>
      service.portfolio.getAssets({
        payload: modifiedPayload,
      }),
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    enabled,
    ...options,
  });
}

useAssetAllocation.queryKey = (payload: Types.GetAssetAllocationPayload) => [
  `asset`,
  `allocation`,
  ...Object.values(payload),
];
export function useAssetAllocation(
  options?: UseQueryOptions<unknown, Error, Types.GetAssetAllocationResponse>
) {
  const selectedPortfolio = useSelectedPortfolio();
  const {
    config: { quoteCurrency },
  } = useControlPanel();

  const modifiedPayload: Types.GetAssetAllocationPayload = {
    id: selectedPortfolio?.id as string,
    type: selectedPortfolio?.type as "portfolio" | "group",
    quote: quoteCurrency.key,
  };

  const enabled = !!selectedPortfolio?.isAvailable;

  return useQuery({
    queryKey: useAssetAllocation.queryKey(modifiedPayload),
    queryFn: () =>
      service.portfolio.getAssetAllocation({
        payload: modifiedPayload,
      }),
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    enabled,
    ...options,
  });
}

usePortfolioAllocation.queryKey = (
  payload: Types.GetPortfolioAllocationPayload
) => [`portfolio`, `allocation`, ...Object.values(payload)];
export function usePortfolioAllocation(
  options?: UseQueryOptions<
    unknown,
    Error,
    Types.GetPortfolioAllocationResponse
  >
) {
  const selectedPortfolio = useSelectedPortfolio();
  const {
    config: { quoteCurrency },
  } = useControlPanel();

  const modifiedPayload: Types.GetAssetAllocationPayload = {
    id: selectedPortfolio?.id as string,
    type: selectedPortfolio?.type as "portfolio" | "group",
    quote: quoteCurrency.key,
  };

  const enabled = !!selectedPortfolio?.isAvailable;

  return useQuery({
    queryKey: usePortfolioAllocation.queryKey(modifiedPayload),
    queryFn: () =>
      service.portfolio.getPortfolioAllocation({
        payload: modifiedPayload,
      }),
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    enabled,
    ...options,
  });
}

useBalance.queryKey = (payload: Types.GetBalancePayload) => [
  `balance`,
  ...Object.values(payload),
];
export function useBalance(
  options?: UseQueryOptions<unknown, Error, Types.GetBalanceResponse>
) {
  const selectedPortfolio = useSelectedPortfolio();
  const {
    config: { quoteCurrency },
  } = useControlPanel();

  const modifiedPayload: Types.GetBalancePayload = {
    id: selectedPortfolio?.id as string,
    type: selectedPortfolio?.type as "portfolio" | "group",
    quote: quoteCurrency.key,
  };

  const enabled = !!selectedPortfolio?.isAvailable;

  return useQuery({
    queryKey: useBalance.queryKey(modifiedPayload),
    queryFn: () =>
      service.portfolio.getBalance({
        payload: modifiedPayload,
      }),
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    enabled,
    ...options,
  });
}

usePortfolioValueOverTime.queryKey = (
  payload: Types.GetPortfolioValueOverTimePayload
) => [`portfolio`, `value`, `points`, ...Object.values(payload)];

export function usePortfolioValueOverTime(
  payload: Omit<Types.GetPortfolioValueOverTimePayload, `id` | `type`>,
  options?: UseQueryOptions<
    unknown,
    Error,
    Types.GetPortfolioValueOverTimeResponse
  >
) {
  const selectedPortfolio = useSelectedPortfolio();
  const {
    config: { quoteCurrency },
  } = useControlPanel();

  const modifiedPayload: Types.GetPortfolioValueOverTimePayload = {
    id: selectedPortfolio?.id as string,
    type: selectedPortfolio?.type as "portfolio" | "group",
    quote: quoteCurrency.key,
    timeframe: payload.timeframe,
  };

  const enabled = !!selectedPortfolio?.isAvailable;

  return useQuery({
    queryKey: usePortfolioValueOverTime.queryKey(modifiedPayload),
    queryFn: () =>
      service.portfolio.getPortfolioValueOverTime({
        payload: modifiedPayload,
      }),
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    enabled,
    ...options,
  });
}

useAssetPerformance.queryKey = (payload: Types.GetAssetPerformancePayload) => [
  `asset`,
  `performance`,
  ...Object.values(payload),
];
export function useAssetPerformance(
  payload: Omit<Types.GetAssetPerformancePayload, `id` | `type`>,
  options?: UseQueryOptions<unknown, Error, Types.GetAssetPerformanceResponse>
) {
  const selectedPortfolio = useSelectedPortfolio();
  const {
    config: { quoteCurrency },
  } = useControlPanel();

  const modifiedPayload: Types.GetAssetPerformancePayload = {
    id: selectedPortfolio?.id as string,
    type: selectedPortfolio?.type as "portfolio" | "group",
    ...payload,
    quote: quoteCurrency.key,
  };

  const enabled = !!selectedPortfolio?.isAvailable;

  return useQuery({
    queryKey: useAssetPerformance.queryKey(modifiedPayload),
    queryFn: () =>
      service.portfolio.getAssetPerformance({
        payload: modifiedPayload,
      }),
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    enabled,
    ...options,
  });
}

useAssetPerformanceOverTime.queryKey = (
  payload: Types.GetAssetPerformanceOverTimePayload
) => [`asset`, `performance`, ...Object.values(payload)];

export function useAssetPerformanceOverTime(
  payload: Types.GetAssetPerformanceOverTimePayload,
  options?: UseQueryOptions<
    unknown,
    Error,
    Types.GetAssetPerformanceOverTimeResponse
  >
) {
  const selectedPortfolio = useSelectedPortfolio();
  const enabled = !!selectedPortfolio?.isAvailable && !!payload.assetName;
  const {
    config: { quoteCurrency },
  } = useControlPanel();

  const modifiedPayload: Types.GetAssetPerformanceOverTimePayload = {
    ...payload,
    quote: quoteCurrency.key,
  };

  return useQuery({
    queryKey: useAssetPerformanceOverTime.queryKey(modifiedPayload),
    queryFn: () =>
      service.portfolio.getAssetPerformanceOverTime({
        payload: modifiedPayload,
      }),
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    enabled,
    ...options,
  });
}

export function useCreatePortfolio(
  options?: UseMutationOptions<
    Types.CreatePortfolioResponse,
    Error,
    Types.CreatePortfolio
  >
) {
  const qc = useQueryClient();

  return useMutation({
    mutationFn: service.portfolio.createPortfolio,
    ...options,
    async onSuccess(data, variables, context) {
      await qc.invalidateQueries({
        queryKey: usePortfolios.queryKey,
        exact: true,
      });

      options?.onSuccess?.(data, variables, context);
    },
  });
}

export function useRemovePortfolio(
  options?: UseMutationOptions<
    Types.RemovePortfolioResponse,
    Error,
    Types.RemovePortfolio
  >
) {
  const qc = useQueryClient();
  const syncSelectedPortfolio = useSyncSelectedPortfolio();

  return useMutation({
    mutationFn: service.portfolio.removePortfolio,
    ...options,
    async onSuccess(data, variables, context) {
      await qc.invalidateQueries({
        queryKey: usePortfolios.queryKey,
        exact: true,
      });

      syncSelectedPortfolio();

      options?.onSuccess?.(data, variables, context);
    },
  });
}

export function useUpdatePortfolio(
  options?: UseMutationOptions<
    Types.UpdatePortfolioResponse,
    Error,
    Types.UpdatePortfolio
  >
) {
  const qc = useQueryClient();

  return useMutation({
    mutationFn: service.portfolio.updatePortfolio,
    ...options,
    async onSuccess(data, variables, context) {
      await qc.invalidateQueries({
        queryKey: usePortfolios.queryKey,
        exact: true,
      });

      options?.onSuccess?.(data, variables, context);
    },
  });
}

export function useUpdatePortfolioListOrder(
  options?: UseMutationOptions<
    Types.UpdatePortfolioListOrderResponse,
    Error,
    Types.UpdatePortfolioListOrder
  >
) {
  return useMutation({
    mutationFn: service.portfolio.updatePortfolioListOrder,
    ...options,
  });
}

useTransactions.queryKey = (payload: Types.GetTransactionsPayload) => [
  `transactions`,
  ...Object.values(payload),
];
export function useTransactions(
  payload: Omit<Types.GetTransactionsPayload, `id` | `type`>,
  options?: UseQueryOptions<unknown, Error, Types.GetTransactionsResponse>
) {
  const selectedPortfolio = useSelectedPortfolio();

  const {
    config: { quoteCurrency },
  } = useControlPanel();

  const modifiedPayload: Types.GetTransactionsPayload = {
    ...payload,
    id: selectedPortfolio?.id as string,
    type: selectedPortfolio?.type as "portfolio" | "group",
    quote: quoteCurrency.key,
  };

  const enabled = !!selectedPortfolio?.isAvailable;

  return useQuery({
    queryKey: useTransactions.queryKey(modifiedPayload),
    queryFn: () =>
      service.portfolio.getTransactions({ payload: modifiedPayload }),
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    enabled,
    ...options,
  });
}

export function useRefreshPortfolio(
  options?: UseMutationOptions<
    Types.RefreshPortfolioResponse,
    Error,
    Types.RefreshPortfolio
  >
) {
  return useMutation({
    mutationFn: () => Promise.resolve(),
    ...options,
  });
}

usePortfolioStatus.queryKey = (payload: Types.GetPortfolioStatusPayload) => [
  `portfolio`,
  `status`,
  ...Object.values(payload),
];

export function usePortfolioStatus(
  options?: UseQueryOptions<unknown, Error, Types.GetPortfolioStatusResponse>
) {
  const selectedPortfolio = useSelectedPortfolio();

  const modifiedPayload: Types.GetPortfolioStatusPayload = {
    id: selectedPortfolio?.id as string,
  };

  return useQuery({
    queryKey: usePortfolioStatus.queryKey(modifiedPayload),
    queryFn: () =>
      service.portfolio.getPortfolioStatus({ payload: modifiedPayload }),
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchInterval:
      !selectedPortfolio?.isAvailable && !!selectedPortfolio ? 3_000 : false,
    enabled:
      !selectedPortfolio?.isAvailable && !!selectedPortfolio ? true : false,
    ...options,
  });
}

export function useReorderPortfolioGroups(
  options?: UseMutationOptions<
    Types.UpdatePortfolioListOrderResponse,
    Error,
    Types.UpdatePortfolioListOrder
  >
) {
  const qc = useQueryClient();

  return useMutation({
    mutationFn: service.portfolio.updatePortfolioListOrder,
    ...options,
    async onSuccess(data, variables, context) {
      await qc.invalidateQueries({
        queryKey: usePortfolios.queryKey,
        exact: true,
      });

      options?.onSuccess?.(data, variables, context);
    },
  });
}

export function useGenerateAdvice(
  options?: UseMutationOptions<
    Types.GenerateAdviceResponse,
    Error,
    Types.GenerateAdvice
  >
) {
  return useMutation({
    mutationFn: service.portfolio.generateAdvice,
    ...options,
  });
}
