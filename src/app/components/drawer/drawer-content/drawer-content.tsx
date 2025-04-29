import { cn } from "@/lib/utils";
import { HTMLAttributes, PropsWithChildren } from "react";

type DrawerContentProps = {} & HTMLAttributes<HTMLDivElement>;

export default function DrawerContent({
  children,
  className,
  ...props
}: PropsWithChildren<DrawerContentProps>) {
  return (
    <div className={cn("px-6", className)} {...props}>
      {children}
    </div>
  );
}
