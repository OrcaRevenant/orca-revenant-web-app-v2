import * as React from "react";
import * as SelectPrimitive from "@radix-ui/react-select";
import { cn } from "@/lib/utils";

export type SelectLabelProps = React.ComponentProps<
  typeof SelectPrimitive.Label
>;

export default function SelectLabel({ className, ...props }: SelectLabelProps) {
  return (
    <SelectPrimitive.Label
      data-slot="select-label"
      className={cn("text-text-tertiary px-2 py-1.5 text-xs", className)}
      {...props}
    />
  );
}
