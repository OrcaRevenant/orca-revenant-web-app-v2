import { DoughnutChartData } from "../doughnut-chart";
import PieChartLegendItem from "../pie-chart-legend-item";

export type PieChartLegendGridProps = {
  data: DoughnutChartData[];
};

export default function PieChartLegendGrid({ data }: PieChartLegendGridProps) {
  return (
    <div className="flex justify-center max-w-md mx-auto flex-row gap-2">
      {data.map(({ color, key }, index) => {
        return (
          <div key={index}>
            <PieChartLegendItem color={color} label={key} />
          </div>
        );
      })}
    </div>
  );
}
