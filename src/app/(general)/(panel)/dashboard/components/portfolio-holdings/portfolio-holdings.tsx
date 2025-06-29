"use client";

import PaperWithTitle from "@/app/components/paper-with-title";
import PieChart from "@/app/components/doughnut-chart";
import { generatePieColor } from "@/app/components/doughnut-chart/utils";
import ChartLegendList from "@/app/components/chart/chart-legend-list";
import { usePortfolioAllocation } from "@/api";
import Placeholder from "@/app/components/placeholder";
import LoadingText from "@/app/components/loading-text";

export default function PortfolioHoldings() {
  const { data: portfolioAllocation, isLoading } = usePortfolioAllocation();
  const data =
    portfolioAllocation?.map((item, index) => ({
      key: item.label,
      value: item.value,
      color: `var(${generatePieColor(index)})`,
    })) ?? [];

  return (
    <PaperWithTitle title="Portfolio Holdings" className="h-full">
      <div className="space-y-12 py-12 h-full flex flex-col justify-center items-center">
        <Placeholder
          NothingToShowPlaceholderProps={{
            icon: "PieChart01",
            title: "It's like a desert",
            description: "We couldn't find any data to show",
            decorativeSize: "sm",
            size: "sm",
          }}
          placeholder={
            <div className="w-full h-full flex justify-center items-center">
              <LoadingText text="Loading" />
            </div>
          }
          loading={isLoading}
          data={data}
        >
          <PieChart data={data} />
          <ChartLegendList data={data} />
        </Placeholder>
      </div>
    </PaperWithTitle>
  );
}
