import * as React from "react";
import * as SelectPrimitive from "@radix-ui/react-select";

export type SelectValueProps = React.ComponentProps<
  typeof SelectPrimitive.Value
>;

export default function SelectValue({ ...props }: SelectValueProps) {
  return <SelectPrimitive.Value data-slot="select-value" {...props} />;
}
