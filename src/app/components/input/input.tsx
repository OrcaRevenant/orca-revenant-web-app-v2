import * as React from "react";

import { cn } from "@/lib/utils";

interface InputProps extends React.ComponentProps<"input"> {
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
}

export default function Input({
  className,
  type,
  startIcon,
  endIcon,
  ...props
}: InputProps) {
  return (
    <div className="relative flex w-full items-center">
      {startIcon && (
        <div className="absolute left-3 flex items-center pointer-events-none">
          {startIcon}
        </div>
      )}
      <input
        type={type}
        data-slot="input"
        className={cn(
          "border-border-primary placeholder:text-text-placeholder focus-visible:border-ring focus-visible:ring-utility-brand-500 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content w-full rounded-md border bg-transparent px-3 py-2 shadow-xs min-h-10 transition-[color,box-shadow] outline-none focus-visible:ring-2 disabled:cursor-not-allowed disabled:opacity-50",
          startIcon && "pl-10",
          endIcon && "pr-10",
          className
        )}
        {...props}
      />
      {endIcon && (
        <div className="absolute right-3 flex items-center pointer-events-none">
          {endIcon}
        </div>
      )}
    </div>
  );
}
