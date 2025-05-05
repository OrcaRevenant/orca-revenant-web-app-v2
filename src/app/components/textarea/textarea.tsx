"use client";
import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
import * as React from "react";
import Label from "../label";
import Typography from "../typography";

export type TextareaProps = {
  label?: string;
  helperText?: string;
  startAdornment?: React.ReactNode;
  endAdornment?: React.ReactNode;
  fullWidth?: boolean;
  required?: boolean;
  variant?: "default" | "destructive";
} & React.ComponentProps<"textarea">;

const textareaVariants = cva(
  "flex gap-2 border-1 rounded-md shadow-sx w-full transition-colors duration-200 px-3.5 py-3",
  {
    variants: {
      variant: {
        default: "bg-bg-primary border-border-primary",
        destructive: "border-border-error",
      },
    },
  }
);

export default function Textarea({
  className,
  label,
  helperText,
  startAdornment,
  endAdornment,
  fullWidth = false,
  required = false,
  variant = "default",
  ...props
}: TextareaProps) {
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
        <Label htmlFor={props.id} className="text-text-secondary">
          {label}{" "}
          {required && (
            <Typography as="span" className="text-text-brand-tertiary">
              *
            </Typography>
          )}
        </Label>
      )}
      <div
        className={cn(
          textareaVariants({ variant }),
          isFocused && "border-border-brand"
        )}
      >
        {startAdornment && (
          <div className="flex items-center text-fg-quaternary">
            {startAdornment}
          </div>
        )}
        <textarea
          data-slot="textarea"
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
          variant="small"
          color={variant === "destructive" ? "error" : "tertiary"}
        >
          {helperText}
        </Typography>
      )}
    </div>
  );
}
