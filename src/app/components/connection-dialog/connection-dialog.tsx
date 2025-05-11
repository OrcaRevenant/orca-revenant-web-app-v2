import Image from "next/image";
import Button from "../button";
import Typography from "../typography";
import ConnectionTypeCard from "./connection-type-card";
import Dialog, {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../dialog";
import DialogBody from "../dialog/dialog-body";
import IconSelector from "../icon-selector";
import Command, { CommandInput } from "../command";
import ConnectionCard from "./connection-card";
import { useState } from "react";

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
            <>
              <div className="flex flex-col gap-4 w-full md:w-5/9 h-full bg-bg-primary">
                <ConnectionTypeCard
                  title="Exchange Connections"
                  description="With exchange connections you can track any centralized exchanges."
                  onClick={() => setShowExchangeSelection(true)}
                />
                <ConnectionTypeCard
                  title="Exchange Connections"
                  description="With exchange connections you can track any centralized exchanges."
                  onClick={() => setShowExchangeSelection(true)}
                />
              </div>
              <div className="relative w-4/9 h-[395px] rounded-xl hidden md:block">
                <Image
                  className="w-full h-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-xl"
                  src={"/assets/images/abstract-blue.jpg"}
                  width={256}
                  height={395}
                  alt="abstract"
                />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full flex flex-col items-center justify-center px-6 gap-8">
                  <div className="flex flex-col gap-2">
                    <Typography
                      className="w-full"
                      variant={"displayXSmall"}
                      weight={"semibold"}
                    >
                      <Typography
                        as="span"
                        variant={"inherit"}
                        weight={"semibold"}
                        className="text-utility-gray-600"
                      >
                        &ldquo;Do
                      </Typography>{" "}
                      not{" "}
                      <Typography
                        as="span"
                        variant={"inherit"}
                        weight={"semibold"}
                        className="text-utility-gray-600"
                      >
                        put all your eggs in{" "}
                      </Typography>
                      one basket.&rdquo;
                    </Typography>
                    <Typography
                      variant={"xSmall"}
                      className="text-utility-gray-500"
                    >
                      -Andrew Carnegie
                    </Typography>
                  </div>
                  <Image
                    src={"/assets/svgs/ratings-badge.svg"}
                    width={220}
                    height={80}
                    alt="ratings badge"
                  />
                </div>
              </div>
            </>
          ) : (
            <>
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
            </>
          )}
        </DialogBody>
      </DialogContent>
    </Dialog>
  );
}
