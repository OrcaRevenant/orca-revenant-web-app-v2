"use client";

import Fluctuation from "@/app/components/fluctuation";
import PaperWithTitle, {
  PaperWithTitleProps,
} from "@/app/components/paper-with-title";
import Typography from "@/app/components/typography";
import { cn } from "@/lib/utils";
import { useAssetPerformance } from "@/api";
import AssetPerformanceChart from "./asset-performance-chart";
import QuotedAmount from "@/app/components/quoted-amount";

export type AssetPerformanceProps = Omit<PaperWithTitleProps, "title">;

export default function AssetPerformance({
  className,
  ...rest
}: AssetPerformanceProps) {
  const { data: assetPerformance } = useAssetPerformance({
    timeframe: "yearly",
  });

  return (
    <PaperWithTitle
      color="tertiary"
      title="Top Performance"
      compact
      className={cn(className)}
      {...rest}
    >
      <div className="space-y-10">
        <div className="flex flex-row w-full justify-between items-center">
          <Typography variant={"displaySmall"} weight={"bold"}>
            {assetPerformance?.shortName.toUpperCase()}
          </Typography>

          <div className="flex flex-row items-center gap-2">
            <Fluctuation
              size={"md"}
              className="border-none! px-0!"
              variant={"outline"}
              fluctuation={assetPerformance?.change.percentage}
            />
            <QuotedAmount
              amount={assetPerformance?.change.amount}
              variant={"small"}
              weight={"semibold"}
              color={"tertiary"}
            />
          </div>
        </div>

        <AssetPerformanceChart assetName={assetPerformance?.shortName} />
      </div>
    </PaperWithTitle>
  );
}
