import { HTMLAttributes } from "react";
import PieChartLegendIcon from "../pie-chart-legend-icon";
import Typography from "../../typography";

export type PieChartLegendItemProps = {
  label: string;
  color: string;
} & HTMLAttributes<HTMLDivElement>;

export default function PieChartLegendItem({
  label,
  color,
  ...rest
}: PieChartLegendItemProps) {
  return (
    <div className="flex items-center gap-2" {...rest}>
      <PieChartLegendIcon
        style={{
          background: color,
        }}
      />
      <Typography variant="xSmall">{label}</Typography>
    </div>
  );
}
