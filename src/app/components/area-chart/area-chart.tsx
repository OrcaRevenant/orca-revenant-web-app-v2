"use client";

import { AreaChart as RechartsAreaChart, Area } from "recharts";
import ChartContainer, { ChartTooltip, ChartTooltipContent } from "../chart";
import { cn } from "@/lib/utils";

export type AreaChartProps = {
  className?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any[];
};

export default function AreaChart({ className, data }: AreaChartProps) {
  return (
    <ChartContainer className={cn("h-[72px] w-full", className)} config={{}}>
      <RechartsAreaChart>
        <defs>
          <linearGradient id="area-chart-gradient" x1="0" y1="0" x2="0" y2="1">
            <stop
              offset="5%"
              stopColor="var(--fg-success-secondary)"
              stopOpacity={0.25}
            />
            <stop offset="100%" stopColor="transparent" stopOpacity={0.25} />
          </linearGradient>
        </defs>
        <Area
          type={"bump"}
          stroke="var(--fg-success-secondary)"
          strokeWidth={2}
          dot={false}
          fill="url(#area-chart-gradient)"
          data={data}
          dataKey="value"
        />
        <ChartTooltip content={<ChartTooltipContent />} />
      </RechartsAreaChart>
    </ChartContainer>
  );
}
