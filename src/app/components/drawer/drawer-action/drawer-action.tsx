import { cn } from "@/lib/utils";
import Button, { ButtonProps } from "../../button/button";
import { SheetFooter } from "../../sheet";

export type DrawerActionProps = {
  disabledCancel?: boolean;
  disabledSubmit?: boolean;
  submitText?: string;
  submitProps?: ButtonProps;
  cancelText?: string;
  cancelProps?: ButtonProps;
  divider?: boolean;
  orientation?: "horizontal" | "vertical";
};

export default function DrawerAction({
  disabledCancel,
  disabledSubmit,
  submitText = "Submit",
  submitProps,
  cancelText = "Cancel",
  cancelProps,
  divider = false,
  orientation = "horizontal",
}: DrawerActionProps) {
  return (
    <SheetFooter
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
    </SheetFooter>
  );
}
