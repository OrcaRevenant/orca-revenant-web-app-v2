import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-1 whitespace-nowrap transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive font-semibold cursor-pointer",
  {
    variants: {
      size: {
        sm: "sm font-medium h-[36px] rounded-md  px-3 py-2",
        md: "sm font-medium h-[40px] rounded-md px-[14px] py-2.5",
        lg: "md font-medium h-[44px] rounded-md px-4 py-2.5",
        xl: "md font-medium h-[48px] rounded-md gap-1.5 px-[18px] py-3",
        "2xl": "lg font-medium h-[60px] rounded-lg gap-2 px-[22px] py-4",
        smIcon: "w-[36px] h-[36px] p-2 rounded-md",
        mdIcon: "w-[40px] h-[40px] p-2.5 rounded-md",
        lgIcon: "w-[44px] h-[44px] p-3 rounded-md",
        xlIcon: "w-[48px] h-[48px] p-3.5 rounded-md",
        "2xlIcon": "w-[60px] h-[60px] p-4 rounded-lg",
      },
      variant: {
        primary:
          "shadow-xs-skeuomorphic skeuemorphic-gradient-border bg-button-primary-bg hover:bg-button-primary-bg-hover text-button-primary-fg hover:text-button-primary-fg-hover focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-button-primary-bg focus:ring-offset-bg-primary disabled:bg-bg-disabled disabled:border-bg-disabled-subtle disabled:text-fg-disabled",
        secondaryGray:
          "bg-button-secondary-bg border-button-secondary-border border-[1px] text-button-secondary-fg hover:bg-button-secondary-bg-hover hover:text-button-secondary-fg-hover hover:border-button-secondary-border-hover focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-button-primary-bg focus:ring-offset-bg-primary disabled:bg-bg-primary disabled:border-bg-disabled-subtle disabled:text-fg-disabled",
        secondaryColor:
          "bg-button-secondary-color-bg border-button-secondary-color-border border-[1px] text-button-secondary-color-fg hover:bg-button-secondary-color-bg-hover hover:text-button-secondary-color-fg-hover focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-button-primary-bg focus:ring-offset-bg-primary disabled:bg-bg-primary disabled:border-bg-disabled-subtle disabled:text-fg-disabled",
        tertiaryGray:
          "text-button-tertiary-fg hover:bg-button-tertiary-bg-hover hover:text-button-tertiary-fg-hover focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-button-primary-bg focus:ring-offset-bg-primary disabled:text-fg-disabled",
        tertiaryColor:
          "text-button-tertiary-color-fg hover:bg-button-tertiary-color-bg-hover hover:text-button-tertiary-color-fg-hover focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-button-primary-bg focus:ring-offset-bg-primary disabled:text-fg-disabled",
        linkGray:
          "px-0 py-0 h-fit rounded-sm text-button-tertiary-fg hover:text-button-tertiary-fg-hover focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-button-primary-bg focus:ring-offset-bg-primary disabled:text-fg-disabled",
        linkColor:
          "px-0 py-0 h-fit rounded-sm text-button-tertiary-color-fg hover:text-button-tertiary-color-fg-hover focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-button-primary-bg focus:ring-offset-bg-primary disabled:text-fg-disabled",
        primaryDestructive:
          "shadow-xs-skeuomorphic skeuemorphic-gradient-border bg-button-primary-error-bg text-button-primary-error-fg hover:bg-button-primary-error-bg-hover hover:text-button-primary-error-fg-hover focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-button-primary-error-bg focus:ring-offset-bg-primary disabled:bg-bg-disabled disabled:border-bg-disabled-subtle disabled:text-fg-disabled",
        secondaryDestructive:
          "bg-button-secondary-error-bg border-button-secondary-error-border border-[1px] text-button-secondary-error-fg hover:bg-button-secondary-bg-hover hover:text-button-secondary-error-fg-hover hover:border-button-secondary-error-border-hover focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-button-primary-error-bg focus:ring-offset-bg-primary disabled:bg-bg-primary disabled:border-bg-disabled-subtle disabled:text-fg-disabled",
        tertiaryDestructive:
          "text-button-tertiary-error-fg hover:bg-button-tertiary-error-bg-hover hover:text-button-tertiary-error-fg-hover focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-button-tertiary-error-fg focus:ring-offset-bg-primary disabled:text-fg-disabled",
      },
    },

    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants }; 