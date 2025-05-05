"use client";

import { cn } from "@/lib/utils";
import * as SheetPrimitive from "@radix-ui/react-dialog";
import Typography from "../../typography";

export default function SheetDescription({
  className,
  ...props
}: Omit<React.ComponentProps<typeof SheetPrimitive.Description>, "color">) {
  return (
    <Typography
      as={SheetPrimitive.Description}
      color="tertiary"
      variant="small"
      data-slot="sheet-description"
      className={cn(className)}
      {...props}
    />
  );
} 