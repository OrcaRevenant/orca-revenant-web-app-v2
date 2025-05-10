"use client";

import Textarea from "@/app/components/textarea";
import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";
import { useForm } from "react-hook-form";

type FeedbackFormData = {
  feedback: string;
};

export type FeedbackFormProps = {
  onSubmit: (data: FeedbackFormData) => void;
} & Omit<HTMLAttributes<HTMLFormElement>, "onSubmit">;

export default function FeedbackForm({
  onSubmit,
  className,
  ...rest
}: FeedbackFormProps) {
  const form = useForm<FeedbackFormData>({
    defaultValues: {
      feedback: "",
    },
  });

  return (
    <form
      className={cn("px-6", className)}
      onSubmit={form.handleSubmit(onSubmit)}
      {...rest}
    >
      <Textarea
        placeholder="e.g. Website design"
        {...form.register("feedback")}
      />
    </form>
  );
}
