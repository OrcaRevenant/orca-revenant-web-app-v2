"use client";

import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import * as React from "react";
import DropdownMenuRadioItem from "./dropdow-menu-radio-item";
import DropdownMenuCheckboxItem from "./dropdown-menu-checkbox-item";
import DropdownMenuContent from "./dropdown-menu-content";
import DropdownMenuGroup from "./dropdown-menu-group";
import DropdownMenuItem from "./dropdown-menu-item";
import DropdownMenuLabel from "./dropdown-menu-label";
import DropdownMenuPortal from "./dropdown-menu-portal";
import DropdownMenuRadioGroup from "./dropdown-menu-radio-group";
import DropdownMenuSeparator from "./dropdown-menu-separator/dropdown-menu-separator";
import DropdownMenuShortcut from "./dropdown-menu-shortcut/dropdown-menu-shortcut";
import DropdownMenuSubContent from "./dropdown-menu-sub-content/dropdown-menu-sub-content";
import DropdownMenuSubTrigger from "./dropdown-menu-sub-trigger/dropdown-menu-sub-trigger";
import DropdownMenuSub from "./dropdown-menu-sub/dropdown-menu-sub";
import DropdownMenuTrigger from "./dropdown-menu-trigger";

export default function DropdownMenu({
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Root>) {
  return <DropdownMenuPrimitive.Root data-slot="dropdown-menu" {...props} />;
}

export {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
};
