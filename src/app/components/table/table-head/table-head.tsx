import * as React from "react";
import { cn } from "@/lib/utils";
import Typography, { TypographyProps } from "../../typography";

export default function TableHead({
  className,
  ...props
}: React.ComponentProps<"th">) {
  return (
    <Typography
      variant={"xSmall"}
      color={"quaternary"}
      as="th"
      data-slot="table-head"
      weight={"semibold"}
      className={cn(
        "h-11 px-6 align-middle text-left font-medium whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
        className
      )}
      {...(props as TypographyProps<"th">)}
    />
  );
}
