import { cn } from "@/lib/utils";
import Button from "../../button";
import IconSelector from "../../icon-selector";
import Typography from "../../typography";

export type ConnectionTypeCardProps = {
  title: string;
  description: string;
  onClick?: () => void;
  disabled?: boolean;
};

export default function ConnectionTypeCard({
  title,
  description,
  onClick,
  disabled,
}: ConnectionTypeCardProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-2 bg-bg-secondary border border-border-secondary h-full w-full rounded-xl p-6",
        disabled && "opacity-50"
      )}
    >
      <div className="flex flex-row w-full justify-between items-center ">
        <Typography weight={"semibold"}>{title}</Typography>
        <IconSelector icon="HelpCircle" className="size-4 text-fg-quinary" />
      </div>
      <div className="flex flex-col items-center justify-center h-full">
        <Typography variant={"xSmall"} color={"tertiary"}>
          {description}
        </Typography>
      </div>
      <Button
        disabled={disabled}
        variant={"secondaryGray"}
        size={"sm"}
        onClick={onClick}
      >
        Connect
        <IconSelector icon="ArrowRight" />
      </Button>
    </div>
  );
}
