/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";

import { SourceConnection, useCreatePortfolio } from "@/api";
import Button from "@/app/components/button";
import FormLabel from "@/app/components/form-label";
import HelperText from "@/app/components/helper-text";
import IconSelector from "@/app/components/icon-selector";
import Input from "@/app/components/input";
import Label from "@/app/components/label/label";
import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";
import { useForm } from "react-hook-form";

export type AddPortfolioFormProps = {
  connection: SourceConnection;
} & Omit<HTMLAttributes<HTMLFormElement>, "onSubmit">;

type AddPortfolioFormData = {
  name: string;
  meta: Record<string, unknown>;
};

export default function AddPortfolioForm({
  className,
  connection,
  ...props
}: AddPortfolioFormProps) {
  const form = useForm<AddPortfolioFormData>({
    defaultValues: {
      name: "",
      meta: {},
    },
  });

  const { mutate: createPortfolio, isPending } = useCreatePortfolio();

  const onSubmit = (data: AddPortfolioFormData) => {
    createPortfolio({
      payload: {
        meta: data.meta,
        name: data.name,
        connectionId: connection.id,
      },
    });
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
      <Button disabled={isPending} type="submit" size="lg">
        <IconSelector icon="Rocket02" />
        Start Tracking
      </Button>
    </form>
  );
}
