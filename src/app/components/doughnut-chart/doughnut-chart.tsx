"use client";

import { PieChart as RechartsPieChart, Pie } from "recharts";
import ChartContainer, { ChartTooltip, ChartTooltipContent } from "../chart";
import { cn } from "@/lib/utils";

export type DoughnutChartData = { key: string; value: number; color: string };

export type DoughnutChartProps = {
  data: DoughnutChartData[];
  className?: string;
};

export default function DoughnutChart({
  data = [],
  className,
}: DoughnutChartProps) {
  return (
    <ChartContainer
      className={cn("h-[200px] w-[280px]", className)}
      config={{}}
    >
      <RechartsPieChart>
        <Pie
          width={200}
          height={200}
          outerRadius={100}
          innerRadius={45}
          cx={"50%"}
          cy={"50%"}
          data={data.map((v) => ({ ...v, fill: v.color }))}
          nameKey="key"
          dataKey="value"
        />
        <ChartTooltip content={<ChartTooltipContent />} />
      </RechartsPieChart>
    </ChartContainer>
  );
}
