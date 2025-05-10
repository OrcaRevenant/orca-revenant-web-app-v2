"use client";

import PaperWithTitle from "@/app/components/paper-with-title";
import PieChart from "@/app/components/doughnut-chart";
import { generatePieColor } from "@/app/components/doughnut-chart/utils";
import ChartLegendList from "@/app/components/chart/chart-legend-list";
import { usePortfolioAllocation } from "@/api";

export default function PortfolioHoldings() {

  const { data: portfolioAllocation} = usePortfolioAllocation()
  const data = portfolioAllocation?.map((item, index) => ({
    key: item.label,
    value: item.value,
    color: `var(${generatePieColor(index)})`,
  })) ?? [];

  return (
    <PaperWithTitle title="Portfolio Holdings">
      <div className="space-y-12 py-12 flex flex-col justify-center items-center">
        <PieChart data={data} />
        <ChartLegendList data={data} />
      </div>
    </PaperWithTitle>
  );
}
