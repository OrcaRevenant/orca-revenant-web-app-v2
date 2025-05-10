"use client";

import { useAssetPerformanceOverTime } from "@/api";
import AreaChart from "@/app/components/area-chart";

export type AssetPerformanceChartProps = {
  assetName?: string;
};

export default function AssetPerformanceChart({
  assetName,
}: AssetPerformanceChartProps) {
  const { data: assetPerformance } = useAssetPerformanceOverTime({
    timeframe: "yearly",
    assetName: assetName!,
  });

  return (
    <AreaChart
      data={
        assetPerformance?.map((item) => ({
          time: item.time,
          value: item.value,
        })) || []
      }
    />
  );
}
