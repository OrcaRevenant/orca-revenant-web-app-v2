"use client";

import { cn } from "@/lib/utils";
import * as SheetPrimitive from "@radix-ui/react-dialog";
import IconSelector from "../../icon-selector";

export default function SheetClose({
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Close>) {
  return (
    <SheetPrimitive.Close
      data-slot="sheet-close"
      className={cn(
        "flex flex-col items-center justify-center w-11 h-11 data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-button-primary-bg focus:ring-offset-bg-primary disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        props.className
      )}
      {...props}
    >
      <IconSelector icon="XClose" className="size-6" />
    </SheetPrimitive.Close>
  );
} 