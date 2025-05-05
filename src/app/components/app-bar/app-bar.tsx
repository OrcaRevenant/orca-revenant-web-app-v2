import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import { ComponentProps, PropsWithChildren } from "react";

export const appBarVariants = cva("flex flex-row z-40", {
  variants: {
    position: {
      fixed: "fixed top-0 left-0 right-0",
      absolute: "absolute top-0 left-0 right-0",
      relative: "relative",
      sticky: "sticky top-0 left-0 right-0",
    },
  },
  defaultVariants: {
    position: "relative",
  },
});

type AppBarProps = ComponentProps<"nav"> & VariantProps<typeof appBarVariants>;

export default function AppBar({
  children,
  position,
  className,
  ...rest
}: PropsWithChildren<AppBarProps>) {
  return (
    <nav {...rest} className={cn(appBarVariants({ position, className }))}>
      {children}
    </nav>
  );
}
