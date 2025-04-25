import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import * as React from "react";
import { cn } from "@/lib/utils";

import NavigationMenuViewport from "./navigation-menu-viewport";

export type NavigationMenuProps = React.ComponentProps<
  typeof NavigationMenuPrimitive.Root
> & {
  viewport?: boolean;
};

export default function NavigationMenu({
  className,
  children,
  viewport = true,
  ...props
}: NavigationMenuProps) {
  return (
    <NavigationMenuPrimitive.Root
      data-slot="navigation-menu"
      data-viewport={viewport}
      className={cn(
        "group/navigation-menu relative flex max-w-max flex-1 items-center justify-center",
        className
      )}
      {...props}
    >
      {children}
      {viewport && <NavigationMenuViewport />}
    </NavigationMenuPrimitive.Root>
  );
}
