import { cn } from "@/lib/utils";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import DialogClose from "../dialog-close";
import DialogOverlay from "../dialog-overlay";
import DialogPortal from "../dialog-portal";
import { cva, VariantProps } from "class-variance-authority";

const dialogContentVariants = cva(
  "bg-bg-primary overflow-hidden data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-md translate-x-[-50%] translate-y-[-50%] gap-4 rounded-xl shadow-xl duration-200",
  {
    variants: {
      maxWidth: {
        sm: "max-w-[400px]",
        md: "max-w-[640px]",
        lg: "max-w-lg",
        xl: "max-w-xl",
      },
    },
    defaultVariants: {
      maxWidth: "md",
    },
  }
);

export type DialogContentProps = React.ComponentProps<
  typeof DialogPrimitive.Content
> &
  VariantProps<typeof dialogContentVariants>;

export default function DialogContent({
  className,
  children,
  maxWidth,
  ...props
}: DialogContentProps) {
  return (
    <DialogPortal data-slot="dialog-portal">
      <DialogOverlay />
      <DialogPrimitive.Content
        data-slot="dialog-content"
        className={cn(dialogContentVariants({ maxWidth }), className)}
        {...props}
      >
        {children}
        <DialogClose />
      </DialogPrimitive.Content>
    </DialogPortal>
  );
}
