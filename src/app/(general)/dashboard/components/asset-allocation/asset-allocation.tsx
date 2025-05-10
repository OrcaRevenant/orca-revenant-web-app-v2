"use client";

import AssetAllocationLegend from "./asset-allocation-legend";
import DoughnutChart from "@/app/components/doughnut-chart";
import PaperWithTitle from "@/app/components/paper-with-title";
import Button from "@/app/components/button";
import IconSelector from "@/app/components/icon-selector";
import Typography from "@/app/components/typography";
import { generatePieColor } from "@/app/components/doughnut-chart/utils";
import { useAssetAllocation } from "@/api";

export default function AssetAllocation() {
  const { data: assetAllocation } = useAssetAllocation();
  const data =
    assetAllocation?.map((item, index) => ({
      key: item.label,
      value: item.value,
      color: `var(${generatePieColor(index)})`,
    })) ?? [];

  return (
    <PaperWithTitle
      action={
        <Button size="sm">
          View Details
          <IconSelector icon="ChevronRight" />
        </Button>
      }
      title="Asset Allocation"
    >
      <div className="flex flex-row">
        <div className="space-y-8 pb-3 flex-1">
          <div className="flex items-end flex-row gap-2">
            <Typography variant={"displaySmall"} weight={"semibold"}>
              27
            </Typography>
            <Typography variant={"xSmall"} color={"tertiary"}>
              Tokens
            </Typography>
          </div>

          <AssetAllocationLegend data={data} />
        </div>
        <div className="flex p-5 justify-center items-center">
          <DoughnutChart data={data} />
        </div>
      </div>
    </PaperWithTitle>
  );
}
