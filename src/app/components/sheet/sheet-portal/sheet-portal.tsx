"use client";

import * as SheetPrimitive from "@radix-ui/react-dialog";

export default function SheetPortal({
  children,
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Portal>) {
  return (
    <SheetPrimitive.Portal data-slot="sheet-portal" {...props}>
      {children}
    </SheetPrimitive.Portal>
  );
} 