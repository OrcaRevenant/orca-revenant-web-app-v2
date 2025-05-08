import * as React from "react";
import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";

const formLabelVariants = cva("", {
  variants: {
    orientation: {
      vertical: "space-y-1.5",
      horizontal: "flex flex-row items-center gap-2",
    },
  },
  defaultVariants: {
    orientation: "vertical",
  },
});

export type FormLabelProps = VariantProps<typeof formLabelVariants> &
  React.HTMLAttributes<HTMLDivElement>;

export default function FormLabel({
  className,
  children,
  orientation,
  ...props
}: FormLabelProps) {
  return (
    <div
      className={cn(formLabelVariants({ orientation }), className)}
      {...props}
    >
      {children}
    </div>
  );
}
