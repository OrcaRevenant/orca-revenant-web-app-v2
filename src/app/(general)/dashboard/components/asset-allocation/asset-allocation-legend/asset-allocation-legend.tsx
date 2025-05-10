import { useMemo } from "react";
import { destructure } from "@/app/utils/destructure";
import AssetAllocationLegendProgress from "./asset-allocation-legend-progress";
import Typography from "@/app/components/typography";
import AssetAvatarGroup from "@/app/components/asset-avatar-group";
import AssetLogo from "@/app/components/asset-logo";

type AssetAllocationLegendProps = {
  data: { key: string; label: string; value: number }[];
  max?: number;
  nameKey?: string;
  dataKey?: string;
};

export default function AssetAllocationLegend({
  data,
  max = 3,
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
              <AssetLogo shortName={v.key} size="sm" />{" "}
              <Typography weight={"medium"} variant={"small"}>
                {v.label}
              </Typography>
            </div>

            <AssetAllocationLegendProgress data={v} />
          </div>
        );
      })}

      {!!allocation?.others.length && (
        <div className="flex flex-roww-full items-center justify-between">
          <AssetAvatarGroup max={3} />
          <AssetAllocationLegendProgress
            data={{
              key: "others",
              label: "Others",
              value: allocation.others.reduce(
                (acc, curr) => acc + curr.value,
                0
              ),
              color: "#000",
            }}
          />
        </div>
      )}
    </div>
  );
}
