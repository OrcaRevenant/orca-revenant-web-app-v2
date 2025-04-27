import { cn } from "@/lib/utils";
import Button from "../../button";
import { ButtonProps } from "../../button/button";
import { DialogFooter } from "../../dialog";

export type ModalActionProps = {
  disabledCancel?: boolean;
  disabledSubmit?: boolean;
  submitText?: string;
  submitProps?: ButtonProps;
  cancelText?: string;
  cancelProps?: ButtonProps;
  divider?: boolean;
  orientation?: "horizontal" | "vertical";
};

export default function ModalAction({
  disabledCancel,
  disabledSubmit,
  submitText = "Submit",
  submitProps,
  cancelText = "Cancel",
  cancelProps,
  divider = false,
  orientation = "horizontal",
}: ModalActionProps) {
  return (
    <DialogFooter
      className={cn(
        "w-full p-6",
        divider && "border-t border-border-secondary"
      )}
    >
      <div
        className={cn(
          "flex flex-row gap-3 w-full",
          orientation === "vertical" && "flex-col-reverse"
        )}
      >
        <Button
          className="flex-1"
          variant="secondaryGray"
          size="lg"
          {...cancelProps}
          disabled={disabledCancel}
        >
          {cancelText}
        </Button>
        <Button
          className="flex-1"
          type="submit"
          size="lg"
          {...submitProps}
          disabled={disabledSubmit}
        >
          {submitText}
        </Button>
      </div>
    </DialogFooter>
  );
}
