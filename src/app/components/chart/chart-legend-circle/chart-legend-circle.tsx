import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

export type ChartLegendCircleProps = {
  size?: number;
} & HTMLAttributes<HTMLDivElement>;

export default function ChartLegendCircle({
  className,
  ...rest
}: ChartLegendCircleProps) {
  return <div className={cn("size-4 rounded-full", className)} {...rest} />;
}
