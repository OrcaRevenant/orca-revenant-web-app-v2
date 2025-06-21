"use client";

import { AreaChart as RechartsAreaChart, Area } from "recharts";
import ChartContainer, { ChartTooltip } from "../chart";
import { cn } from "@/lib/utils";
import { useId } from "react";
import ChartPriceTooltipContent from "../chart/chart-price-tooltip-content";

export type AreaChartProps = {
  className?: string;
  data: Record<string, unknown>[];
  dataKey: string;
};

export default function AreaChart({
  className,
  data,
  dataKey = "value",
}: AreaChartProps) {
  const id = useId();

  const getChartColor = () => {
    if (!data || data.length < 2) return "var(--fg-quaternary)";

    const firstValue = data[0][dataKey] as number;
    const lastValue = data[data.length - 1][dataKey] as number;

    if (firstValue > lastValue) return "var(--fg-error-secondary)";
    if (firstValue < lastValue) return "var(--fg-success-secondary)";
    return "var(--fg-quaternary)";
  };

  const chartColor = getChartColor();

  return (
    <ChartContainer
      className={cn("h-[72px] w-full", className)}
      config={{
        value: {
          label: "Price",
        },
      }}
    >
      <RechartsAreaChart>
        <defs>
          <linearGradient
            id={`area-chart-gradient-${id}`}
            x1="0"
            y1="0"
            x2="0"
            y2="1"
          >
            <stop offset="5%" stopColor={chartColor} stopOpacity={0.25} />
            <stop offset="100%" stopColor="transparent" stopOpacity={0.25} />
          </linearGradient>
        </defs>
        <Area
          type={"bump"}
          stroke={chartColor}
          strokeWidth={2}
          dot={false}
          fill={`url(#area-chart-gradient-${id})`}
          data={data}
          dataKey={dataKey}
        />
        <ChartTooltip content={<ChartPriceTooltipContent hideLabel />} />
      </RechartsAreaChart>
    </ChartContainer>
  );
}
