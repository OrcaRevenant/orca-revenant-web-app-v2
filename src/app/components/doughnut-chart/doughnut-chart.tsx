"use client";

import { PieChart as RechartsPieChart, Pie } from "recharts";
import ChartContainer, { ChartTooltip, ChartTooltipContent } from "../chart";
import { cn } from "@/lib/utils";
import { generatePieColor } from "./utils";

export type DoughnutChartData = Record<string, unknown>;

export type DoughnutChartProps = {
  data: DoughnutChartData[];
  className?: string;
  nameKey?: string;
  dataKey?: string;
};

export default function DoughnutChart({
  data = [],
  className,
  nameKey = "key",
  dataKey = "value",
}: DoughnutChartProps) {
  return (
    <ChartContainer
      className={cn("min-h-[200px] max-w-[200px]", className)}
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
          data={data.map((v, index) => ({
            ...v,
            fill: `var(${generatePieColor(index)})`,
          }))}
          nameKey={nameKey}
          dataKey={dataKey}
        />
        <ChartTooltip content={<ChartTooltipContent />} />
      </RechartsPieChart>
    </ChartContainer>
  );
}
