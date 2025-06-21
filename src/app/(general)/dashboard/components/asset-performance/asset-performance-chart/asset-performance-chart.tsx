"use client";

import { useAssetPerformanceOverTime } from "@/api";
import AreaChart from "@/app/components/area-chart";
import { useControlPanel } from "@/providers/control-provider";

export type AssetPerformanceChartProps = {
  assetName?: string;
};

export default function AssetPerformanceChart({
  assetName,
}: AssetPerformanceChartProps) {
  const { config } = useControlPanel();

  const { data: assetPerformance } = useAssetPerformanceOverTime({
    timeframe: config.timeframe.timeframe,
    assetName: assetName!,
  });

  if (!assetPerformance) return null;

  return (
    <AreaChart
      dataKey="value"
      data={
        assetPerformance?.map((item) => ({
          time: item.time,
          value: item.value,
        })) || []
      }
    />
  );
}
