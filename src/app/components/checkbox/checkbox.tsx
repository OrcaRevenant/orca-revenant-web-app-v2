"use client";

import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import * as React from "react";

import { cn } from "@/lib/utils";
import IconSelector from "@/app/components/icon-selector";
import Typography from "../typography";

type CheckboxProps = {
  label?: string;
  helperText?: string;
} & React.ComponentProps<typeof CheckboxPrimitive.Root>;

export default function Checkbox({ label, helperText, className, ...props }: CheckboxProps) {
  return (
    <div className="flex flex-row space-x-2">
      <CheckboxPrimitive.Root
        data-slot="checkbox"
        className={cn(
          "peer mt-0.5 bg-bg-primary border-border-primary data-[state=checked]:bg-bg-brand-solid data-[state=checked]:text-fg-white data-[state=checked]:border-bg-brand-solid focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:border-destructive size-4 shrink-0 rounded-xs border-1 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-button-primary-bg focus:ring-offset-bg-primary disabled:text-fg-disabled-subtle disabled:border-border-disabled disabled:bg-bg-disabled-subtle",
          className
        )}
        {...props}
      >
        <CheckboxPrimitive.Indicator
          data-slot="checkbox-indicator"
          className="flex items-center justify-center text-current transition-none"
        >
          <IconSelector icon="Check" size={12} />
        </CheckboxPrimitive.Indicator>
      </CheckboxPrimitive.Root>

      <div className="flex flex-col">
        {label && (
          <Typography variant="small" weight="medium">
            {label}
          </Typography>
        )}
        {helperText && (
          <Typography variant="small" color="tertiary">
            {helperText}
          </Typography>
        )}
      </div>
    </div>
  );
} 