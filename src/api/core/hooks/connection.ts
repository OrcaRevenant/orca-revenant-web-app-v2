import { UseQueryOptions, useQuery } from "@tanstack/react-query";
import service from "@/api/service";
import * as Types from "../interface";

useConnections.queryKey = [`connections`];
export function useConnections(
  options?: Partial<
    UseQueryOptions<unknown, Error, Types.GetConnectionsResponse>
  >
) {
  return useQuery({
    queryKey: useConnections.queryKey,
    queryFn: service.connection.getConnections,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    ...options,
  });
}

useConnectionById.queryKey = (params: Types.GetConnectionByIdPayload) => [
  `connections`,
  ...Object.values(params),
];
export function useConnectionById(
  payload: Types.GetConnectionByIdPayload,
  options?: Partial<
    UseQueryOptions<unknown, Error, Types.GetConnectionByIdResponse>
  >
) {
  return useQuery({
    queryKey: useConnectionById.queryKey(payload),
    queryFn: () => service.connection.getConnectionById({ payload }),
    enabled: !!payload.id,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    ...options,
  });
}
