"use client";

import * as LabelPrimitive from "@radix-ui/react-label";
import * as React from "react";

import { cn } from "@/lib/utils";
import Typography from "../typography";

export default function Label({
  className,
  children,
  ...props
}: Omit<React.ComponentProps<typeof LabelPrimitive.Root>, "color">) {
  return (
    <Typography
      variant="small"
      weight="medium"
      as={LabelPrimitive.Root}
      data-slot="label"
      className={cn(
        "flex items-center gap-2 select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
        className
      )}
      {...props}
    >
      {children}
    </Typography>
  );
}
