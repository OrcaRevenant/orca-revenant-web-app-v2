"use client";

import { useAssets } from "@/api";
import PieceOfInfo from "../piece-of-info";
import FeaturedIcon from "@/app/components/featured-icon";
import QuotedAmount from "@/app/components/quoted-amount";

export default function MainTokenValueCard() {
  const { data: assets } = useAssets();

  const mainToken = assets?.reduce((prev, current) => {
    return prev.value > current.value ? prev : current;
  });

  return (
    <PieceOfInfo
      title="Main Token Value"
      value={
        <QuotedAmount
          variant={"inherit"}
          color={"inherit"}
          weight={"inherit"}
          amount={mainToken?.value}
        />
      }
      icon={
        <FeaturedIcon
          icon="PresentationChart01"
          color="brand"
          size="md"
          variant="light"
        />
      }
    />
  );
}
