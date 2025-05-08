"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

export type CommandShortcutProps = React.ComponentProps<"span">

export default function CommandShortcut({
  className,
  ...props
}: CommandShortcutProps) {
  return (
    <span
      data-slot="command-shortcut"
      className={cn(
        "text-muted-foreground ml-auto text-xs tracking-widest",
        className
      )}
      {...props}
    />
  )
} 