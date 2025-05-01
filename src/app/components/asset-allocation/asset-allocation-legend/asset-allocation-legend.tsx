import { DoughnutChartData } from "@/app/components/doughnut-chart";
import Typography from "../../typography";
import { useMemo } from "react";
import { destructure } from "@/app/utils/destructure";
import AssetAvatarGroup from "../../asset-avatar-group";
import AssetAllocationLegendProgress from "./asset-allocation-legend-progress";

type AssetAllocationLegendProps = {
  data: DoughnutChartData[];
  max?: number;
};

export default function AssetAllocationLegend({
  data,
  max = 4,
}: AssetAllocationLegendProps) {
  const allocation = useMemo(() => {
    if (!data) return null;

    const { items, others } = destructure(data, max || data.length);

    return {
      assets: items,
      others: others.slice(0, 3),
    };
  }, [data]);

  return (
    <div className="space-y-6 w-full">
      {allocation?.assets.map((v) => {
        return (
          <div
            className="flex flex-roww-full items-center justify-between"
            key={v.key}
          >
            <div className="flex-row flex items-center gap-1">
              <div
                className="size-6 rounded-full"
                style={{ backgroundColor: v.color }}
              />
              <Typography weight={"medium"} variant={"small"}>
                {v.key}
              </Typography>
            </div>

            <AssetAllocationLegendProgress data={v} />
          </div>
        );
      })}

      <div className="flex flex-roww-full items-center justify-between">
        <AssetAvatarGroup max={3} />
        <AssetAllocationLegendProgress
          data={{ key: "Others", value: 10, color: "#000" }}
        />
      </div>
    </div>
  );
}
