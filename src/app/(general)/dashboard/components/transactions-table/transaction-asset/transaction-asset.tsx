import AssetPairAvatar from "@/app/components/asset-pair-avatar";
import Typography from "@/app/components/typography";

export default function TransactionAsset() {
  return (
    <div className="flex items-center space-x-3">
      <AssetPairAvatar />

      <div>
        <Typography variant="small" weight="medium">
          Bitcoin
        </Typography>
        <Typography variant="small" color="tertiary">
          $100
        </Typography>
      </div>
    </div>
  );
}
