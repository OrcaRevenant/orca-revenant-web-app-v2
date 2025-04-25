import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import * as React from "react";
import { cn } from "@/lib/utils";

export default function NavigationMenuItem({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Item>) {
  return (
    <NavigationMenuPrimitive.Item
      data-slot="navigation-menu-item"
      className={cn("relative", className)}
      {...props}
    />
  );
} 