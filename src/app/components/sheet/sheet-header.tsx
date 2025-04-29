import { cn } from "@/lib/utils";

export function SheetHeader({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return <div data-slot="sheet-header" className={cn(className)} {...props} />;
}
