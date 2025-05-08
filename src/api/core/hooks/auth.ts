import {
  UseMutationOptions,
  UseQueryOptions,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import * as Types from "@/api/core/interface";
import service from "@/api/service";

export function useLogin(
  options?: UseMutationOptions<Types.LoginResponse, Error, Types.Login>
) {
  return useMutation({ mutationFn: service.auth.login, ...options });
}

export function useLoginWithProvider(
  options?: UseMutationOptions<
    Types.LoginWithProviderResponse,
    Error,
    Types.LoginWithProvider
  >
) {
  return useMutation({
    mutationFn: service.auth.loginWithProvider,
    ...options,
  });
}

export function useLogout(
  options?: UseMutationOptions<Types.LogoutResponse, Error, void>
) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: service.auth.logout,
    ...options,
    onSuccess(data, variables, context) {
      options?.onSuccess?.(data, variables, context);
      queryClient.removeQueries();
    },
  });
}

export function useRegister(
  options?: UseMutationOptions<Types.RegisterResponse, Error, Types.Register>
) {
  return useMutation({ mutationFn: service.auth.register, ...options });
}

useProfile.queryKey = [`profile`];
export function useProfile(
  options?: UseQueryOptions<unknown, Error, Types.GetProfileResponse>
) {
  return useQuery({
    queryKey: useProfile.queryKey,
    queryFn: service.auth.getProfile,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    ...options,
  });
}
