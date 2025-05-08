import { cn } from "@/lib/utils";

export default function DialogFooter({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="dialog-footer"
      className={cn(
        "flex flex-col-reverse gap-2 px-6 pb-6 pt-8 sm:flex-row sm:justify-end",
        className
      )}
      {...props}
    />
  );
}
