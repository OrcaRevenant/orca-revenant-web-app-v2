"use client";

import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";

export const sheetHeaderVariants = cva("flex flex-col gap-2 p-6 pb-5", {
  variants: {
    divider: {
      true: "border-b border-border-secondary",
      false: "",
    },
  },
});

export type SheetHeaderProps = VariantProps<typeof sheetHeaderVariants> &
  React.ComponentProps<"div">;

export default function SheetHeader({
  className,
  divider = false,
  ...props
}: SheetHeaderProps) {
  return (
    <div
      data-slot="sheet-header"
      className={cn(sheetHeaderVariants({ divider }), className)}
      {...props}
    />
  );
}
