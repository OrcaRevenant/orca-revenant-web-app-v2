import AssetLogo from "@/app/components/asset-logo";
import QuotedAmount from "@/app/components/quoted-amount";
import Typography from "@/app/components/typography";

type TransactionAssetProps = {
  assetShortName: string;
  assetName: string;
  amount: number;
};

export default function TransactionAsset({
  assetShortName,
  assetName,
  amount,
}: TransactionAssetProps) {
  return (
    <div className="flex items-center space-x-3">
      <AssetLogo shortName={assetShortName} size="md" />
      <div>
        <Typography variant="small" weight="medium">
          {assetName}
        </Typography>
        <QuotedAmount amount={amount} variant="small" color="tertiary" />
      </div>
    </div>
  );
}
