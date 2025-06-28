import Button from "../button";
import Command, { CommandInput } from "../command";
import IconButton from "../icon-button";
import IconSelector from "../icon-selector";
import Sheet, {
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../sheet";
import Typography from "../typography";

export default function ChatHistory() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <IconButton variant="secondaryColor">
          <IconSelector icon="ClockFastForward" />
        </IconButton>
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle>Chat History</SheetTitle>
          <SheetDescription>
            Here you can see the history of your chats with Stella.
          </SheetDescription>
        </SheetHeader>

        <div className="flex flex-col gap-6 px-5">
          <Command className="rounded-lg border shadow-md w-full">
            <CommandInput
              disableChevronIcon
              placeholder="Search"
              // value={search}
              // onValueChange={setSearch}
            />
          </Command>
          <div className="flex flex-col gap-1">
            <Typography variant="xSmall" color="tertiary">
              Yesterday
            </Typography>
            <div className="flex flex-row w-full items-center justify-between gap-2">
              <div className="w-full">
                <Button
                  variant="tertiaryGray"
                  size="md"
                  className="w-full flex flex-row items-center justify-between text-left"
                >
                  Portfolio health check...
                </Button>
              </div>
              <div>
                <IconButton variant="tertiaryGray" size="md" className="w-fit">
                  <IconSelector icon="DotsHorizontal" />
                </IconButton>
              </div>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
