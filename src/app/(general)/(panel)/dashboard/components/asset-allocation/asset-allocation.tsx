"use client";

import { useAssetAllocation } from "@/api";
import DoughnutChart from "@/app/components/doughnut-chart";
import PaperWithTitle from "@/app/components/paper-with-title";
import LoadingText from "@/app/components/loading-text";
import Typography from "@/app/components/typography";
import { useMemo } from "react";
import AssetAllocationLegend from "./asset-allocation-legend";
import Placeholder from "@/app/components/placeholder";
import Button from "@/app/components/button";
import IconSelector from "@/app/components/icon-selector";

export default function AssetAllocation() {
  const { data: assetAllocation, isLoading } = useAssetAllocation();

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
        <Button disabled size="sm">
          View Details
          <IconSelector icon="ChevronRight" />
        </Button>
      }
      title="Asset Allocation"
      className="flex-1"
    >
      <Placeholder
        NothingToShowPlaceholderProps={{
          icon: "PieChart01",
          title: "It's like a desert",
          description: "We couldn't find any data to show",
          decorativeSize: "sm",
        }}
        placeholder={
          <div className="w-full h-full flex justify-center items-center">
            <LoadingText text="Loading" />
          </div>
        }
        loading={isLoading}
        data={data}
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
      </Placeholder>
    </PaperWithTitle>
  );
}
