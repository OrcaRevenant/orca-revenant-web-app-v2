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

export default function ConnectionTypeModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="primary">Open Modal</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add portfolio</DialogTitle>
          <DialogDescription>Select the type of connection</DialogDescription>
        </DialogHeader>

        <DialogBody className="flex flex-row gap-4 h-full w-full">
          <div className="flex flex-col gap-4 w-full md:w-5/9  h-full bg-bg-primary">
            <ConnectionTypeCard
              title="Exchange Connections"
              description="With exchange connections you can track any centralized exchanges."
            />
            <ConnectionTypeCard
              title="Exchange Connections"
              description="With exchange connections you can track any centralized exchanges."
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
                    “Do
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
                  one basket.”
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
        </DialogBody>
      </DialogContent>
    </Dialog>
  );
}
