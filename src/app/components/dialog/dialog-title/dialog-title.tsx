import { cn } from "@/lib/utils";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import Typography from "../../typography";

export function DialogTitle({
  className,
  ...props
}: Omit<React.ComponentProps<typeof DialogPrimitive.Title>, "color">) {
  return (
    <Typography
      as={DialogPrimitive.Title}
      color="primary"
      weight="semibold"
      variant="large"
      data-slot="dialog-title"
      className={cn(className)}
      {...props}
    />
  );
}
