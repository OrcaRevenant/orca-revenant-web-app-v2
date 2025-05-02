import PaperWithTitle from "@/app/components/paper-with-title";
import PieChart from "@/app/components/doughnut-chart";
import { generatePieColor } from "@/app/components/doughnut-chart/utils";
import ChartLegendList from "@/app/components/chart/chart-legend-list";

export default function PortfolioHoldings() {
  const data = [
    { key: "Ethereum", value: 100, color: `var(${generatePieColor(0)})` },
    { key: "Tether", value: 200, color: `var(${generatePieColor(1)})` },
    { key: "Bitcoin", value: 300, color: `var(${generatePieColor(2)})` },
  ];

  return (
    <PaperWithTitle title="Portfolio Holdings">
      <div className="space-y-12 py-12 flex flex-col justify-center items-center">
        <PieChart data={data} />
        <ChartLegendList data={data} />
      </div>
    </PaperWithTitle>
  );
}
