import { type UseMutationOptions, useMutation } from "@tanstack/react-query";
import service from "@/api/service";
import type * as Types from "../interface";

export function useCreateFeedback(
  options?: UseMutationOptions<
    Types.CreateFeedbackResponse,
    Error,
    Types.CreateFeedback
  >
) {
  const mutation = useMutation({
    mutationFn: service.feedback.createFeedback,
    ...options,
  });
  return mutation;
}
