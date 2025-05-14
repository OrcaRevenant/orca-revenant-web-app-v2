import Dialog, {
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../dialog";
import Button from "../button";
import DialogBody from "../dialog/dialog-body";
import Typography from "../typography";

export type ConfirmDialogProps = {
  isOpen: boolean;
  title: string;
  description: string;
  onConfirm: () => void;
  onCancel: () => void;
  confirmText?: string;
  cancelText?: string;
};

export default function ConfirmDialog({
  isOpen,
  title = "Confirm",
  description = "Are you sure you want to confirm this action?",
  onConfirm,
  onCancel,
  confirmText = "Confirm",
  cancelText = "Cancel",
}: ConfirmDialogProps) {
  if (!isOpen) {
    return null;
  }

  return (
    <Dialog
      open={isOpen}
      onOpenChange={(open) => {
        if (!open) {
          onCancel();
        }
      }}
    >
      <DialogContent maxWidth={"sm"}>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        <DialogBody>
          <Typography variant={"medium"} color={"tertiary"}>
            {description}
          </Typography>
        </DialogBody>
        <DialogFooter>
          <Button
            className="flex-1"
            variant={"secondaryGray"}
            onClick={onCancel}
          >
            {cancelText}
          </Button>
          <Button className="flex-1" onClick={onConfirm}>
            {confirmText}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
