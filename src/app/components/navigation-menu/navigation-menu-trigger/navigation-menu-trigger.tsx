import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import * as React from "react";
import { cn } from "@/lib/utils";
import IconSelector from "@/app/components/icon-selector";
import { cva } from "class-variance-authority";

export const navigationMenuTriggerStyle = cva(
  "md font-medium text-fg-secondary group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground disabled:pointer-events-none disabled:opacity-50 data-[state=open]:hover:bg-accent data-[state=open]:text-accent-foreground data-[state=open]:focus:bg-accent data-[state=open]:bg-accent/50 focus-visible:ring-ring/50 outline-none transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 gap-3"
); 

export type NavigationMenuTriggerProps = React.ComponentProps<
  typeof NavigationMenuPrimitive.Trigger
> & {
  disableChevron?: boolean;
};

export default function NavigationMenuTrigger({
  className,
  children,
  disableChevron = true,
  ...props
}: NavigationMenuTriggerProps) {
  return (
    <NavigationMenuPrimitive.Trigger
      data-slot="navigation-menu-trigger"
      className={cn(navigationMenuTriggerStyle(), "group", className)}
      {...props}
    >
      {children}
      {disableChevron && (
        <IconSelector
          className="text-fg-quinary"
          icon="ChevronDown"
          size={16}
          aria-hidden="true"
        />
      )}
    </NavigationMenuPrimitive.Trigger>
  );
} 