import { cn } from "@/lib/utils";

export default function DialogBody({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="dialog-body"
      className={cn("px-6 pb-6", className)}
      {...props}
    />
  );
}
