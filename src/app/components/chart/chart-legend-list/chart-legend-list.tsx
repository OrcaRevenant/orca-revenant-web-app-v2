import { DoughnutChartData } from "../../doughnut-chart/doughnut-chart";
import ChartLegendItem from "../chart-legend-item";

export type ChartLegendListProps = {
  data: DoughnutChartData[];
};

export default function ChartLegendList({ data }: ChartLegendListProps) {
  return (
    <div className="flex justify-center max-w-md mx-auto flex-row flex-wrap gap-2">
      {data.map(({ color, key }, index) => {
        return (
          <div key={index}>
            <ChartLegendItem color={color as string} label={key as string} />
          </div>
        );
      })}
    </div>
  );
}
