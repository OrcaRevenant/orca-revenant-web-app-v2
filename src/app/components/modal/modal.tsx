import { cn } from "@/lib/utils";
import { DialogContentProps } from "@radix-ui/react-dialog";
import { HtmlHTMLAttributes, ReactElement } from "react";
import { Dialog, DialogContent, DialogTrigger } from "../dialog";
import ModalAction, { ModalActionProps } from "./modal-action";
import ModalContent from "./modal-content";
import ModalHeader, { ModalHeaderProps } from "./modal-header";

export type ModalProps = {
  headerProps?: ModalHeaderProps;
  children?: React.ReactNode;
  actionProps?: ModalActionProps;
  contentProps?: HtmlHTMLAttributes<HTMLDivElement>;
  trigger?: ReactElement;
  disableAction?: boolean;
  DialogContentProps?: DialogContentProps;
};

export default function Modal({
  headerProps,
  children,
  actionProps,
  contentProps,
  trigger,
  disableAction = false,
  DialogContentProps,
}: ModalProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent
        className={cn("overflow-hidden", DialogContentProps?.className)}
      >
        <ModalHeader {...headerProps} />
        <ModalContent {...contentProps}>{children}</ModalContent>
        {!disableAction && <ModalAction {...actionProps} />}
      </DialogContent>
    </Dialog>
  );
}
