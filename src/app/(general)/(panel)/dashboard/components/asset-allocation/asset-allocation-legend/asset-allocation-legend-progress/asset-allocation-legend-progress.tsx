import { DoughnutChartData } from "@/app/components/doughnut-chart";
import Percentage from "@/app/components/percentage";
import Progress from "@/app/components/progress";

export type AssetAllocationLegendProgressProps = {
  data: DoughnutChartData;
};

export default function AssetAllocationLegendProgress({
  data,
}: AssetAllocationLegendProgressProps) {
  return (
    <div className="flex-row flex-1 flex items-center justify-end gap-3">
      <Progress
        className={`max-w-[194px] w-full`}
        value={+(data.value as string)}
      />
      <Percentage
        weight={"medium"}
        className="w-12 text-end"
        color={"secondary"}
        variant={"small"}
        percentage={+(data.value as string)}
      />
    </div>
  );
}
