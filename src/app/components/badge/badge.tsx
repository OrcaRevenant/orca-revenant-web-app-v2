import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";
import Typography, { TypographyProps } from "../typography";

export const badgeVariants = cva(
  "inline-flex items-center justify-center w-fit whitespace-nowrap shrink-0 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden",
  {
    variants: {
      variant: {
        default: "border [a&]:hover:bg-primary/90",
        outline: "bg-transparent! [a&]:hover:bg-secondary/90",
      },
      color: {
        gray: "border-gray-200 bg-utility-gray-50 text-utility-gray-700",
        brand: "border-brand-200 bg-utility-brand-50 text-utility-brand-700",
        error: "border-error-200 bg-utility-error-50 text-utility-error-700",
        warning:
          "border-warning-200 bg-utility-warning-50 text-utility-warning-700",
        success:
          "border-success-200 bg-utility-success-50 text-utility-success-700",
      },
      size: {
        sm: "px-2 py-0.5 [&>svg]:size-3",
        md: "px-2.5 py-0.5 [&>svg]:size-4",
        lg: "px-3 py-1 [&>svg]:size-5",
      },
      pill: {
        true: "rounded-full",
        false: "rounded-md",
      },
    },
    compoundVariants: [
      {
        variant: "outline",
        pill: true,
        className: "border-2",
      },
      {
        variant: "outline",
        pill: false,
        className: "border",
      },
    ],
    defaultVariants: {
      variant: "default",
      color: "gray",
      size: "md",
      pill: false,
    },
  }
);

export type BadgeProps = React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean };
  
const typographySize: Record<
  NonNullable<VariantProps<typeof badgeVariants>["size"]>,
  TypographyProps["variant"]
> = {
  sm: "small",
  md: "medium",
  lg: "large",
};

export default function Badge({
  className,
  variant,
  color,
  size = "md",
  pill,
  asChild = false,
  ...props
}: BadgeProps) {
  const Comp = asChild ? Slot : "span";

  return (
    <Typography
      as={Comp}
      variant={typographySize[size!]}
      data-slot="badge"
      className={cn(badgeVariants({ variant, color, size, pill }), className)}
      {...props}
    />
  );
}
