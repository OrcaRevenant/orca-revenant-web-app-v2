import AssetAvatarGroup from "@/app/components/asset-avatar-group";
import IconSelector from "@/app/components/icon-selector";
import Paper from "@/app/components/paper";
import Typography from "@/app/components/typography";

export default function PortfolioCard() {
  return (
    <Paper className="space-y-2 relative" color="secondary">
      <div className="space-y-5">
        <div className="flex flex-row justify-between">
          <div className="size-12 bg-bg-success-solid rounded-md"></div>
          <IconSelector className="size-5" icon="DotsVertical" />
        </div>
        <div className="space-y-2">
          <Typography variant={"small"} color={"tertiary"}>
            Binance
          </Typography>

          <div className="flex flex-row items-center justify-between">
            <Typography weight={"semibold"} variant={"displaySmall"}>
              $42,000.00
            </Typography>

            <AssetAvatarGroup />
          </div>
        </div>
      </div>
    </Paper>
  );
}
