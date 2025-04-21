import { cn } from "@/lib/utils";
import { ComponentProps, PropsWithChildren } from "react";

type AppBarPosition = "fixed" | "absolute" | "relative" | "sticky";

type AppBarProps = {
  position?: AppBarPosition;
} & ComponentProps<"nav">;

export default function AppBar({
  children,
  position = "relative",
  className,
}: PropsWithChildren<AppBarProps>) {
  const positionClasses = {
    fixed: "fixed top-0 left-0 right-0 z-100",
    absolute: "absolute top-0 left-0 right-0 z-100",
    relative: "relative z-100",
    sticky: "sticky top-0 left-0 right-0 z-100",
  };

  return (
    <nav
      className={cn(`flex flex-row ${positionClasses[position]}`, className)}
    >
      {children}
    </nav>
  );
}
