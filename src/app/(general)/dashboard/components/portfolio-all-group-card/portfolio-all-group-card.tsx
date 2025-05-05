import AssetAvatarGroup from "@/app/components/asset-avatar-group";
import Paper from "@/app/components/paper";
import Typography from "@/app/components/typography";

export default function PortfolioAllGroupCard() {
  return (
    <Paper className="space-y-2" color="primary">
      <Typography weight={"semibold"} color={"tertiary"} variant="small">
        All Portfolios
      </Typography>

      <div className="flex flex-row items-center justify-between">
        <Typography weight={"semibold"} variant={"displaySmall"}>
          $42,000.00
        </Typography>

        <AssetAvatarGroup />
      </div>
    </Paper>
  );
}
