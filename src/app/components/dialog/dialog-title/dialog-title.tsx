import { cn } from "@/lib/utils";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import Typography from "../../typography";

export default function DialogTitle({
  className,
  ...props
}: Omit<React.ComponentProps<typeof DialogPrimitive.Title>, "color">) {
  return (
    <Typography
      as={DialogPrimitive.Title}
      color="primary"
      variant="large"
      weight={"semibold"}
      data-slot="dialog-title"
      className={cn(className)}
      {...props}
    />
  );
}
