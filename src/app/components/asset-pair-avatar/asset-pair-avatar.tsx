import AssetLogo from "../asset-logo";

export type AssetPairAvatarProps = {
  firstAsset?: string;
  secondAsset?: string;
};

export default function AssetPairAvatar({
  firstAsset,
  secondAsset,
}: AssetPairAvatarProps) {
  return (
    <div className="flex flex-row gap-2 relative">
      <AssetLogo shortName={firstAsset} size="md" />
      <AssetLogo
        shortName={secondAsset}
        size="sm"
        className="size-5 absolute bottom-0 right-0 ring-2 ring-bg-primary"
      />
    </div>
  );
}
