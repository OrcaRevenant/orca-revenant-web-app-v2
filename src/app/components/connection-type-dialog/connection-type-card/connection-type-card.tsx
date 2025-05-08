import Button from "../../button";
import IconSelector from "../../icon-selector";
import Typography from "../../typography";

export type ConnectionTypeCardProps = {
  title: string;
  description: string;
  onClick?: () => void;
};

export default function ConnectionTypeCard({
  title,
  description,
  onClick,
}: ConnectionTypeCardProps) {
  return (
    <div className="flex flex-col gap-2 bg-bg-secondary border border-border-secondary h-full w-full rounded-xl p-6">
      <div className="flex flex-row w-full justify-between items-center ">
        <Typography weight={"semibold"}>{title}</Typography>
        <IconSelector icon="HelpCircle" className="size-4 text-fg-quinary" />
      </div>
      <div className="flex flex-col items-center justify-center h-full">
        <Typography variant={"xSmall"} color={"tertiary"}>
          {description}
        </Typography>
      </div>
      <Button variant={"secondaryGray"} size={"sm"} onClick={onClick}>
        Connect
        <IconSelector icon="ArrowRight" />
      </Button>
    </div>
  );
}
