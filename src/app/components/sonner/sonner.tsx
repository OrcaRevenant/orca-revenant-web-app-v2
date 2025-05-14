"use client"

import { useTheme } from "next-themes"
import { Toaster as Sonner, ToasterProps } from "sonner"

export default function Toaster({ ...props }: ToasterProps) {
  const { theme = "system" } = useTheme()

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      style={
        {
          "--normal-bg": "var(--bg-secondary)",
          "--normal-text": "var(--fg-primary)",
          "--normal-border": "var(--border-primary)",
        } as React.CSSProperties
      }
      {...props}
    />
  )
}

