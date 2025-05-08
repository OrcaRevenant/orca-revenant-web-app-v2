import { DoughnutChartData } from "@/app/components/doughnut-chart";
import Progress from "@/app/components/progress";
import Typography from "@/app/components/typography";

export type AssetAllocationLegendProgressProps = {
  data: DoughnutChartData;
};

export default function AssetAllocationLegendProgress({
  data,
}: AssetAllocationLegendProgressProps) {
  return (
    <div className="flex-row flex-1 flex items-center justify-end gap-3">
      <Progress className="max-w-[194px] w-full" value={data.value} />
      <Typography weight={"medium"} className="w-10 text-end" color={"secondary"} variant={"small"}>
        {data.value}%
      </Typography>
    </div>
  );
}
