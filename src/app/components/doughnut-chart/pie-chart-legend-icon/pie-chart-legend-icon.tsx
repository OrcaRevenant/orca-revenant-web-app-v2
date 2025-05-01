import { cn } from "@/lib/utils";
import PieChartLegendCircle from "../pie-chart-legend-circle";
import { HTMLAttributes } from "react";

export type PieChartLegendIconProps = HTMLAttributes<HTMLDivElement>;

export default function PieChartLegendIcon({
  className,
  ...rest
}: PieChartLegendIconProps) {
  return (
    <PieChartLegendCircle className={cn("bg-inherit", className)} {...rest} />
  );
}
