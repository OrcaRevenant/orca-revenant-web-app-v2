import { cn } from "@/lib/utils";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import Typography from "../../typography";

export function DialogDescription({
  className,
  ...props
}: Omit<React.ComponentProps<typeof DialogPrimitive.Description>, "color">) {
  return (
    <Typography
      as={DialogPrimitive.Description}
      color="tertiary"
      variant="small"
      data-slot="dialog-description"
      className={cn(className)}
      {...props}
    />
  );
}
