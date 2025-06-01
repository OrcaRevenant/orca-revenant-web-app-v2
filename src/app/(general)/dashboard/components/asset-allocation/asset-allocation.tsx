"use client";

import { useAssetAllocation } from "@/api";
import Button from "@/app/components/button";
import DoughnutChart from "@/app/components/doughnut-chart";
import IconSelector from "@/app/components/icon-selector";
import PaperWithTitle from "@/app/components/paper-with-title";
import Typography from "@/app/components/typography";
import { useMemo } from "react";
import AssetAllocationLegend from "./asset-allocation-legend";

export default function AssetAllocation() {
  const { data: assetAllocation } = useAssetAllocation();

  const data = useMemo(() => {
    return (
      assetAllocation?.map((item) => ({
        key: item.id,
        label: item.label,
        value: item.value,
      })) ?? []
    );
  }, [assetAllocation]);

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
      <div className="flex flex-col md:flex-row">
        <div className="space-y-8 pb-3 flex-1">
          <div className="flex items-end flex-row gap-2">
            <Typography variant={"displaySmall"} weight={"semibold"}>
              {assetAllocation?.length}
            </Typography>
            <Typography variant={"xSmall"} color={"tertiary"}>
              Tokens
            </Typography>
          </div>

          <AssetAllocationLegend data={data} />
        </div>
        <div className="hidden p-5 justify-center items-center md:flex">
          <DoughnutChart nameKey="label" dataKey="value" data={data} />
        </div>
      </div>
    </PaperWithTitle>
  );
}
