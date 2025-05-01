import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

export type PieChartLegendCircleProps = {
  size?: number;
} & HTMLAttributes<HTMLDivElement>;

export default function PieChartLegendCircle({
  className,
  ...rest
}: PieChartLegendCircleProps) {
  return <div className={cn("size-4 rounded-full", className)} {...rest} />;
}
