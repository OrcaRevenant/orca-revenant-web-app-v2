"use client";

import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";

export default function DropdownMenuPortal({
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Portal>) {
  return (
    <DropdownMenuPrimitive.Portal data-slot="dropdown-menu-portal" {...props} />
  );
}
