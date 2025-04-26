import * as React from "react";
import { cn } from "@/lib/utils";

export default function TableRow({
  className,
  ...props
}: React.ComponentProps<"tr">) {
  return (
    <tr
      data-slot="table-row"
      className={cn(
        "hover:bg-muted/50 data-[state=selected]:bg-muted transition-colors border-b border-border-secondary last:border-t",
        className
      )}
      {...props}
    />
  );
}
