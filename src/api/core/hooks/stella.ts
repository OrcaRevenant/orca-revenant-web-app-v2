import * as Types from "@/api/revenant/type";
import service from "@/api/service";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";

export function useStella(
  options?: UseMutationOptions<
    Types.SendMessageResponse["data"],
    Error,
    Types.SendMessage
  >
) {
  return useMutation({
    mutationFn: (payload: Types.SendMessage) =>
      service.stella.sendMessage(payload),
    ...options,
  });
}
