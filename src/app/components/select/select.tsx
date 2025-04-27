import * as React from "react";
import * as SelectPrimitive from "@radix-ui/react-select";

export type SelectProps = React.ComponentProps<typeof SelectPrimitive.Root>;

export default function Select({ ...props }: SelectProps) {
  return <SelectPrimitive.Root data-slot="select" {...props} />;
}
