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
};

export default function Modal({
  headerProps,
  children,
  actionProps,
  contentProps,
  trigger,
  disableAction = false,
}: ModalProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="sm:max-w-[400px] overflow-hidden">
        <ModalHeader {...headerProps} />
        <ModalContent {...contentProps}>{children}</ModalContent>
        {!disableAction && <ModalAction {...actionProps} />}
      </DialogContent>
    </Dialog>
  );
}
