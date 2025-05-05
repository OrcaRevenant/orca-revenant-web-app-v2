import { CexLogo } from "react-cex-logo";
import IconSelector from "../../icon-selector";
import Typography from "../../typography";

export default function ConnectionCard() {
  return (
    <div className="flex flex-col bg-bg-secondary border border-border-secondary rounded-xl p-3 w-full h-[100px] justify-between">
      <div className="flex flex-row gap-1 items-center">
        <CexLogo exchange="binance" className="size-6 rounded-sm" />
        <Typography variant={"small"} weight={"medium"}>
          Binance
        </Typography>
      </div>
      <div className="flex flex-row gap-1 items-center justify-between">
        <Typography variant={"xSmall"} color={"quaternary"}>
          Connected
        </Typography>
        <IconSelector
          icon="ArrowRight"
          className="size-6 text-border-secondary"
        />
      </div>
    </div>
  );
}
