import { cn } from "@/lib/utils";
import * as SheetPrimitive from "@radix-ui/react-dialog";
import Typography from "../typography";

export function SheetTitle({
  className,
  ...props
}: Omit<React.ComponentProps<typeof SheetPrimitive.Title>, "color">) {
  return (
    <Typography
      as={SheetPrimitive.Title}
      color="primary"
      weight="semibold"
      variant="large"
      data-slot="sheet-title"
      className={cn(className)}
      {...props}
    />
  );
}
