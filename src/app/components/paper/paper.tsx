import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";
export type PaperProps = {
  disablePadding?: boolean;
} & HTMLAttributes<HTMLDivElement>;

export default function Paper({
  children,
  className,
  disablePadding,
  ...props
}: PaperProps) {
  return (
    <div
      className={cn(
        "bg-bg-primary w-full p-5 rounded-xl border border-border-secondary shadow-xs",
        disablePadding && "p-0",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
