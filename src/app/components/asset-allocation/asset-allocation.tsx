import Button from "../button";
import { generatePieColor } from "../doughnut-chart/utils";
import IconSelector from "../icon-selector";
import PaperWithTitle from "../paper-with-title";
import Typography from "../typography";
import AssetAllocationLegend from "./asset-allocation-legend";
import DoughnutChart from "../doughnut-chart";
export default function AssetAllocation() {
  const data = [
    { key: "Ethereum", value: 100, color: `var(${generatePieColor(0)})` },
    { key: "Tether", value: 200, color: `var(${generatePieColor(1)})` },
    { key: "Bitcoin", value: 300, color: `var(${generatePieColor(2)})` },
    { key: "Solana", value: 400, color: `var(${generatePieColor(3)})` },
    { key: "Avalanche", value: 500, color: `var(${generatePieColor(4)})` },
    { key: "Polygon", value: 600, color: `var(${generatePieColor(5)})` },
    { key: "Binance", value: 700, color: `var(${generatePieColor(6)})` },
  ];

  return (
    <PaperWithTitle
      action={
        <Button size="sm">
          View Details
          <IconSelector icon="ChevronRight" />
        </Button>
      }
      title="Asset Allocation"
    >
      <div className="flex flex-row">
        <div className="space-y-8 pb-3 flex-1">
          <div className="flex items-end flex-row gap-2">
            <Typography variant={"displaySmall"} weight={"semibold"}>
              27
            </Typography>
            <Typography variant={"xSmall"} color={"tertiary"}>
              Tokens
            </Typography>
          </div>

          <AssetAllocationLegend data={data} />
        </div>
        <div className="flex-1 flex justify-center items-center">
          <DoughnutChart data={data} />
        </div>
      </div>
    </PaperWithTitle>
  );
}
