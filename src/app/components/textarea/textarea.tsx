import * as React from "react";

import { cn } from "@/lib/utils";
import Typography, { TypographyProps } from "../typography";

export default function Textarea({
  className,
  ...props
}: React.ComponentProps<"textarea">) {
  return (
    <Typography
      as="textarea"
      variant={"medium"}
      data-slot="textarea"
      className={cn(
        "border-border-primary placeholder:text-text-placeholder focus-visible:border-ring focus-visible:ring-utility-brand-500 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content w-full rounded-md border bg-transparent px-3 py-2 shadow-xs min-h-32 transition-[color,box-shadow] outline-none focus-visible:ring-2 disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props as TypographyProps<"textarea">}
    />
  );
}
