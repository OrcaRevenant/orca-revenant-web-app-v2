import { cn } from "@/lib/utils";

export function DialogHeader({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return <div data-slot="dialog-header" className={cn(className)} {...props} />;
}
