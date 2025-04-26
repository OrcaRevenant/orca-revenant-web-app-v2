import * as React from "react";
import { cn } from "@/lib/utils";

export default function TableHeader({
  className,
  ...props
}: React.ComponentProps<"thead">) {
  return (
    <thead data-slot="table-header" className={cn(className)} {...props} />
  );
}
