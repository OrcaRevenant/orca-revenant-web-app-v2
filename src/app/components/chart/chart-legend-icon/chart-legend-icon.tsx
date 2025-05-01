import { cn } from "@/lib/utils";
import ChartLegendCircle from "../chart-legend-circle";
import { HTMLAttributes } from "react";

export type ChartLegendIconProps = HTMLAttributes<HTMLDivElement>;

export default function ChartLegendIcon({
  className,
  ...rest
}: ChartLegendIconProps) {
  return (
    <ChartLegendCircle className={cn("bg-inherit", className)} {...rest} />
  );
}
