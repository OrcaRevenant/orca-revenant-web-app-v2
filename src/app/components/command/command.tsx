"use client"

import * as React from "react"
import { Command as CommandPrimitive } from "cmdk"
import { cn } from "@/lib/utils"

export type CommandProps = React.ComponentProps<typeof CommandPrimitive>

export default function Command({
  className,
  ...props
}: CommandProps) {
  return (
    <CommandPrimitive
      data-slot="command"
      className={cn(
        "flex border border-border-primary shadow-xs w-full flex-col overflow-hidden rounded-md",
        className
      )}
      {...props}
    />
  )
} 