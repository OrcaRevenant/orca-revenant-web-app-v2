"use client"

import * as React from "react"
import { Command as CommandPrimitive } from "cmdk"

export type CommandEmptyProps = React.ComponentProps<typeof CommandPrimitive.Empty>

export default function CommandEmpty({
  ...props
}: CommandEmptyProps) {
  return (
    <CommandPrimitive.Empty
      data-slot="command-empty"
      className="py-6 text-center text-sm"
      {...props}
    />
  )
} 