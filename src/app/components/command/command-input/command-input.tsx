"use client";

import * as React from "react";
import { Command as CommandPrimitive } from "cmdk";
import { cn } from "@/lib/utils";
import IconSelector from "../../icon-selector";

export type CommandInputProps = React.ComponentProps<
  typeof CommandPrimitive.Input
>;

export default function CommandInput({
  className,
  ...props
}: CommandInputProps) {
  return (
    <div
      data-slot="command-input-wrapper"
      className="flex items-center gap-2 px-3"
    >
      <IconSelector icon="SearchLg" className="size-5 shrink-0 opacity-50" />
      <CommandPrimitive.Input
        data-slot="command-input"
        className={cn(
          "placeholder:text-text-placeholder w-full outline-hidden disabled:cursor-not-allowed disabled:opacity-50 flex rounded-md bg-transparent py-2 shadow-xs min-h-10 transition-[color,box-shadow] ",
          className
        )}
        {...props}
      />
      <IconSelector icon="ChevronDown" className="size-5 shrink-0 opacity-50" />
    </div>
  );
}
