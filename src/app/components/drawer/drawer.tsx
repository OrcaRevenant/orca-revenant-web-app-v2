"use client";

import { cn } from "@/lib/utils";
import { HtmlHTMLAttributes, ReactElement } from "react";
import Container from "../container";
import { Sheet, SheetContent, SheetTrigger } from "../sheet";
import DrawerAction, { DrawerActionProps } from "./drawer-action";
import DrawerContent from "./drawer-content";
import DrawerHeader, { DrawerHeaderProps } from "./drawer-header";

export type DrawerProps = {
  headerProps?: DrawerHeaderProps;
  children?: React.ReactNode;
  actionProps?: DrawerActionProps;
  contentProps?: HtmlHTMLAttributes<HTMLDivElement>;
  trigger?: ReactElement;
  side?: "left" | "right" | "top" | "bottom";
  disableAction?: boolean;
};

export default function Drawer({
  actionProps,
  children,
  contentProps,
  headerProps,
  trigger,
  side = "bottom",
  disableAction = false,
}: DrawerProps) {
  return (
    <Sheet>
      <SheetTrigger asChild>{trigger}</SheetTrigger>
      <SheetContent
        className={cn(
          "max-w-[400px] overflow-hidden",
          side === "bottom" && "max-w-none w-full",
          side === "top" && "max-w-none w-full",
          side === "left" && "h-full",
          side === "right" && "h-full"
        )}
        side={side}
      >
        {side === "bottom" || side === "top" ? (
          <Container>
            <DrawerHeader {...headerProps} />
            <DrawerContent {...contentProps}>{children}</DrawerContent>
            {!disableAction && <DrawerAction {...actionProps} />}
          </Container>
        ) : (
          <>
            <DrawerHeader {...headerProps} />
            <DrawerContent className={cn("h-full")} {...contentProps}>
              {children}
            </DrawerContent>
            {!disableAction && <DrawerAction {...actionProps} />}
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}
