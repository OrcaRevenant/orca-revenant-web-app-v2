import { HTMLAttributes } from "react";
import Typography from "../../typography";
import ChartLegendIcon from "../chart-legend-icon";

export type ChartLegendItemProps = {
  label: string;
  color: string;
} & HTMLAttributes<HTMLDivElement>;

export default function ChartLegendItem({
  label,
  color,
  ...rest
}: ChartLegendItemProps) {
  return (
    <div className="flex items-center gap-2" {...rest}>
      <ChartLegendIcon
        style={{
          background: color,
        }}
      />
      <Typography variant="xSmall">{label}</Typography>
    </div>
  );
}
