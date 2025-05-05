"use client";

import * as SheetPrimitive from "@radix-ui/react-dialog";
import * as React from "react";

export type SheetProps = React.ComponentProps<typeof SheetPrimitive.Root>;

export default function Sheet({ ...props }: SheetProps) {
  return <SheetPrimitive.Root data-slot="sheet" {...props} />;
}
