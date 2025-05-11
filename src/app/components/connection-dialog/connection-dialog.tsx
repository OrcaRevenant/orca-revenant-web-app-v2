import Button from "../button";
import Dialog, {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../dialog";
import DialogBody from "../dialog/dialog-body";
import IconSelector from "../icon-selector";
import { useState } from "react";
import ConnectionSelectContent from "./connection-select-content";
import ConnectionTypeSelectContent from "./connection-type-select-content";

export default function ConnectionDialog() {
  const [showExchangeSelection, setShowExchangeSelection] = useState(false);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-full" variant="secondaryGray">
          <IconSelector icon="PlusSquare" />
          Add Portfolio
        </Button>
      </DialogTrigger>
      <DialogContent className={showExchangeSelection ? "max-w-[640px]" : ""}>
        <DialogHeader>
          <DialogTitle>
            {showExchangeSelection
              ? "Connect to a new exchange"
              : "Add portfolio"}
          </DialogTitle>
          <DialogDescription>
            {showExchangeSelection
              ? "Select the exchange you want to connect to"
              : "Select the type of connection"}
          </DialogDescription>
        </DialogHeader>

        <DialogBody
          className={
            showExchangeSelection
              ? "space-y-6"
              : "flex flex-row gap-4 h-full w-full"
          }
        >
          {!showExchangeSelection ? (
            <ConnectionTypeSelectContent
              onSelect={(type) => {
                setShowExchangeSelection(type === "exchange");
              }}
            />
          ) : (
            <ConnectionSelectContent />
          )}
        </DialogBody>
      </DialogContent>
    </Dialog>
  );
}
