import Button from "../button";
import Command, { CommandInput } from "../command";
import Dialog, {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../dialog";
import DialogBody from "../dialog/dialog-body";
import Typography from "../typography";
import ConnectionCard from "./connection-card";

export default function ConnectionDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="primary">Open Modal</Button>
      </DialogTrigger>
      <DialogContent className="max-w-[640px]">
        <DialogHeader>
          <DialogTitle>Connect to a new exchange</DialogTitle>
          <DialogDescription>
            Select the exchange you want to connect to
          </DialogDescription>
        </DialogHeader>

        <DialogBody className="space-y-6">
          <Command className="rounded-lg border shadow-md md:min-w-[450px]">
            <CommandInput placeholder="Binance, KuCoin, etc." />
          </Command>

          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-3">
              <Typography variant={"small"} weight={"semibold"}>
                Most popular
              </Typography>
              <div className="flex flex-row gap-3">
                <ConnectionCard />
                <ConnectionCard />
                <ConnectionCard />
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <Typography variant={"small"} weight={"semibold"}>
                Other Exchanges
              </Typography>
              <div className="flex flex-row gap-3">
                <ConnectionCard />
                <ConnectionCard />
                <ConnectionCard />
              </div>
            </div>
          </div>
        </DialogBody>
      </DialogContent>
    </Dialog>
  );
}
