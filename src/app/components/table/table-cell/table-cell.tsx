import * as React from "react";
import { cn } from "@/lib/utils";
import Typography, { TypographyProps } from "../../typography";

export default function TableCell({
  className,
  ...props
}: TypographyProps<"td">) {
  return (
    <Typography
      as="td"
      data-slot="table-cell"
      variant={"small"}
      className={cn(
        "px-6 py-4 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
        className
      )}
      {...props}
    />
  );
}
