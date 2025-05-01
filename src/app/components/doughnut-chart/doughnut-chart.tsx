"use client";

import { PieChart as RechartsPieChart, Pie } from "recharts";
import ChartContainer, { ChartTooltip, ChartTooltipContent } from "../chart";

export type DoughnutChartData = { key: string; value: number; color: string };

export type DoughnutChartProps = {
  data: DoughnutChartData[];
};

export default function DoughnutChart({ data = [] }: DoughnutChartProps) {
  return (
    <ChartContainer className="min-h-[200px]" config={{}}>
      <RechartsPieChart>
        <Pie
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
