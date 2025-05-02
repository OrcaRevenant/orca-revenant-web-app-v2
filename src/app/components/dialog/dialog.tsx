"use client";

import * as DialogPrimitive from "@radix-ui/react-dialog";
import * as React from "react";
import { DialogClose } from "./dialog-close";
import { DialogContent } from "./dialog-content";
import { DialogDescription } from "./dialog-description";
import { DialogFooter } from "./dialog-footer";
import { DialogHeader } from "./dialog-header";
import { DialogOverlay } from "./dialog-overlay";
import { DialogPortal } from "./dialog-portal";
import { DialogTitle } from "./dialog-title";
import { DialogTrigger } from "./dialog-trigger";

function Dialog({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Root>) {
  return <DialogPrimitive.Root data-slot="dialog" {...props} />;
}

export {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
};
