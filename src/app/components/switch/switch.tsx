"use client";

import * as SwitchPrimitive from "@radix-ui/react-switch";
import * as React from "react";

import { cn } from "@/lib/utils";
import SwitchThumb, { SwitchThumbProps } from "./switch-thumb";

export type SwitchProps = React.ComponentProps<typeof SwitchPrimitive.Root> & {
  thumbProps?: SwitchThumbProps;
};

export default function Switch({
  className,
  thumbProps,
  ...props
}: SwitchProps) {
  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      className={cn(
        "peer data-[state=checked]:bg-bg-brand-solid data-[state=unchecked]:bg-bg-tertiary focus-visible:border-ring focus-visible:ring-ring/50 inline-flex h-5 w-9 shrink-0 items-center rounded-full border border-transparent transition-all outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    >
      <SwitchThumb {...thumbProps} />
    </SwitchPrimitive.Root>
  );
}
