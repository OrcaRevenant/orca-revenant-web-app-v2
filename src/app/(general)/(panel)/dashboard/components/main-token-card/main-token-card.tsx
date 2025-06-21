"use client";

import { useAssets } from "@/api";
import PieceOfInfo from "../piece-of-info";
import AssetLogo from "@/app/components/asset-logo";

export default function MainTokenCard() {
  const { data: assets } = useAssets();

  const mainToken = assets?.reduce((prev, current) => {
    return prev.value > current.value ? prev : current;
  });

  return (
    <PieceOfInfo
      title="Main Token"
      value={mainToken?.shortName.toUpperCase()}
      icon={<AssetLogo shortName={mainToken?.shortName} />}
    />
  );
}
