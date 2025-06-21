/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";

import {
  ConnectedPortfolio,
  SourceConnection,
  useCreatePortfolio,
  usePortfolios,
} from "@/api";
import FormLabel from "@/app/components/form-label";
import HelperText from "@/app/components/helper-text";
import IconSelector from "@/app/components/icon-selector";
import Input from "@/app/components/input";
import Label from "@/app/components/label/label";
import LoadingButton from "@/app/components/loading-button";
import { cn } from "@/lib/utils";
import { useQueryClient } from "@tanstack/react-query";
import { HTMLAttributes } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

export type AddPortfolioFormProps = {
  connection: SourceConnection;
  onDone?: (portfolio: ConnectedPortfolio) => void;
} & Omit<HTMLAttributes<HTMLFormElement>, "onSubmit">;

type AddPortfolioFormData = {
  name: string;
  meta: Record<string, unknown>;
};

export default function AddPortfolioForm({
  className,
  connection,
  onDone,
  ...props
}: AddPortfolioFormProps) {
  const form = useForm<AddPortfolioFormData>({
    defaultValues: {
      name: "",
      meta: {},
    },
  });

  const { mutateAsync: createPortfolio, isPending } = useCreatePortfolio();

  const qc = useQueryClient();

  const onSubmit = async (data: AddPortfolioFormData) => {
    const portfolio = await createPortfolio({
      payload: {
        meta: data.meta,
        name: data.name,
        connectionId: connection.id,
      },
    });

    await qc.invalidateQueries({
      queryKey: usePortfolios.queryKey,
      exact: true,
    });

    onDone?.(portfolio);
    toast.success("Portfolio created successfully");
  };

  return (
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      className={cn(
        "flex flex-1 flex-col justify-between w-full gap-5 sm:gap-0",
        className
      )}
      {...props}
    >
      <div className="flex flex-col gap-5">
        <FormLabel>
          <Label>Portfolio Title</Label>
          <Input required {...form.register("name")} />
          <HelperText>This is the name of your portfolio.</HelperText>
        </FormLabel>

        {Object.entries((connection.schema as any).properties).map(
          ([fieldName, fieldSchema]) => (
            <FormLabel key={fieldName}>
              <Label>
                {fieldName
                  .split("_")
                  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                  .join(" ")}
              </Label>
              <Input {...form.register(`meta.${fieldName}`)} />
              <HelperText>{(fieldSchema as any).description}</HelperText>
            </FormLabel>
          )
        )}
      </div>
      <LoadingButton loading={isPending} type="submit" size="lg">
        <IconSelector icon="Rocket02" />
        Connect Portfolio
      </LoadingButton>
    </form>
  );
}
