import Skeleton from "../../skeleton";
import PieChartLegendItem from "../pie-chart-legend-item";

type PieChartLegendGridLoadingProps = {
  count?: number;
};

export default function PieChartLegendGridLoading({
  count = 4,
}: PieChartLegendGridLoadingProps) {
  return (
    <div>
      <div className="grid grid-cols-2 gap-2">
        {Array(count)
          .fill(0)
          .map((_, index) => {
            return (
              <div key={index}>
                <PieChartLegendItem
                  renderLabel={<Skeleton className="w-20 h-4" />}
                />
              </div>
            );
          })}
      </div>
    </div>
  );
}
