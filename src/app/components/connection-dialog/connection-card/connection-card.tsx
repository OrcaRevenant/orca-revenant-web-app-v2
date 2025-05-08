import IconSelector from "../../icon-selector";
import Typography from "../../typography";

export default function ConnectionCard() {
  return (
    <div
      data-slot="connection-card"
      className="flex hover:cursor-pointer hover:**:data-[slot=connection-card-arrow-right]:text-bg-primary transition-colors hover:bg-bg-active flex-col bg-bg-secondary border border-border-secondary rounded-xl p-3 w-full h-[100px] justify-between"
    >
      <div className="flex flex-row gap-1 items-center">
        <div className="size-6 rounded-sm bg-bg-primary" />
        <Typography variant={"small"} weight={"medium"}>
          Binance
        </Typography>
      </div>
      <div className="flex flex-row gap-1 items-center justify-between">
        <Typography variant={"xSmall"} color={"quaternary"}>
          Connected
        </Typography>
        <IconSelector
          data-slot="connection-card-arrow-right"
          icon="ArrowRight"
          className="size-6 text-border-secondary transition-colors"
        />
      </div>
    </div>
  );
}
