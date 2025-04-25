"use client";
import * as React from "react";

import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
import Typography from "@/app/components/typography";

interface InputProps extends React.ComponentProps<"input"> {
  label?: string;
  helperText?: string;
  endAdornment?: React.ReactNode;
  startAdornment?: React.ReactNode;
  variant?: "default" | "destructive";
  inputSize?: "sm" | "md";
  required?: boolean;
  fullWidth?: boolean;
}

const inputVariants = cva(
  "flex gap-2 border-1 rounded-md shadow-sx w-full transition-colors duration-200",
  {
    variants: {
      variant: {
        default: "bg-bg-primary border-border-primary",
        destructive: "border-border-error",
      },
      inputSize: {
        sm: "max-h-10 px-3 py-2",
        md: "max-h-[44px] px-[14px] py-2.5",
      },
    },
  }
);

export default function Input({
  className,
  type,
  label,
  helperText,
  startAdornment,
  endAdornment,
  inputSize = "md",
  variant = "default",
  required = false,
  fullWidth = false,
  ...props
}: InputProps) {
  const [isFocused, setIsFocused] = React.useState(false);

  return (
    <div
      className={cn(
        "flex flex-col gap-1.5 w-[320px]",
        fullWidth && "w-full",
        className
      )}
    >
      {label && (
        <label htmlFor={props.id} className="text-text-secondary font-medium">
          {label}{" "}
          {required && <span className="text-text-brand-tertiary">*</span>}
        </label>
      )}
      <div
        className={cn(
          inputVariants({ variant, inputSize }),
          isFocused && "border-border-brand"
        )}
      >
        {startAdornment && (
          <div className="flex items-center text-fg-quaternary">
            {startAdornment}
          </div>
        )}
        <input
          type={type}
          data-slot="input"
          className={cn(
            "md file:text-text-primary placeholder:text-text-placeholder focus:outline-0 w-full"
          )}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          {...props}
        />
        {endAdornment && (
          <div
            className={cn(
              "flex items-center text-fg-quinary",
              variant === "destructive" && "text-fg-error-primary"
            )}
          >
            {endAdornment}
          </div>
        )}
      </div>
      {helperText && (
        <Typography
          variant="Small"
          color={variant === "destructive" ? "error" : "tertiary"}
        >
          {helperText}
        </Typography>
      )}
    </div>
  );
}
