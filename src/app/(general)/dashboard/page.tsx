import Button from "@/app/components/button";
import Container from "@/app/components/container";
import IconSelector from "@/app/components/icon-selector";
import StatCard from "@/app/(general)/dashboard/components/stat-card/stat-card";
import Typography from "@/app/components/typography";
import AssetsTable from "@/app/(general)/dashboard/components/assets-table/assets-table";
import OverallPortfolioValue from "./components/overall-portfolio-value/overall-portfolio-value";
import PortfolioHoldings from "./components/portfolio-holdings";
import AssetPerformance from "./components/asset-performance";
import AssetAllocation from "./components/asset-allocation";
import PieceOfInfo from "./components/piece-of-info";
import TransactionsTable from "./components/transactions-table/transactions-table";

export default function DashboardPage() {
  return (
    <Container
      className="py-16 w-full min-h-[calc(100vh-var(--navbar-height))]"
      maxWidth="2xl"
    >
      <div className="space-y-5">
        <div className="flex flex-row w-full">
          <div className="space-y-2 flex-1">
            <Typography variant="displayMedium">Overview</Typography>
            <Typography variant="medium" className="text-text-tertiary">
              Manage your team members and their account permissions here.
            </Typography>
          </div>
          <div className="flex flex-row space-x-3">
            <Button variant="tertiaryGray">
              <IconSelector icon="RefreshCcw01" />
            </Button>
            <Button variant="secondaryGray">Portfolio Tracker</Button>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-5">
          <div className="col-span-4">
            <StatCard
              title="Estimated Total Balance"
              value="$72,531.42"
              icon="CoinsStacked03"
            />
          </div>
          <div className="col-span-4">
            <StatCard
              title="Total Earning"
              value="$3,124.15"
              icon="CoinsHand"
            />
          </div>
          <div className="col-span-4">
            <StatCard
              title="Portfolio Volatility"
              value="24.8%"
              icon="BankNote01"
            />
          </div>

          <div className="col-span-12">
            <AssetsTable
              assets={[
                {
                  name: "Bitcoin",
                  price: 10000,
                  change: 10,
                  marketCap: 1000000,
                  volume: 1000000,
                },
                {
                  name: "Ethereum",
                  price: 10000,
                  change: 10,
                  marketCap: 1000000,
                  volume: 1000000,
                },
                {
                  name: "Tether",
                  price: 10000,
                  change: 10,
                  marketCap: 1000000,
                  volume: 1000000,
                },
              ]}
            />
          </div>

          <div className="col-span-12 lg:col-span-8">
            <OverallPortfolioValue />
          </div>

          <div className="col-span-12 lg:col-start-9 lg:col-span-4">
            <PortfolioHoldings />
          </div>

          <div className="col-span-12 lg:col-span-8">
            <div className="space-y-5">
              <AssetAllocation />
              <div className="flex flex-row gap-5">
                <PieceOfInfo />
                <PieceOfInfo />
              </div>
            </div>
          </div>

          <div className="col-span-12 lg:col-start-9 lg:col-span-4">
            <div className="h-full flex flex-col gap-5">
              <AssetPerformance className="flex-1" />
              <AssetPerformance className="flex-1" />
            </div>
          </div>

          <div className="col-span-12 ">
            <TransactionsTable
              transactions={[
                {
                  id: "1",
                  type: "Buy",
                  date: "2021-01-01",
                  asset: "BTC",
                  connection: "Binance",
                },
                {
                  id: "2",
                  type: "Sell",
                  date: "2021-01-01",
                  asset: "BTC",
                  connection: "Binance",
                },
                {
                  id: "3",
                  type: "Sell",
                  date: "2021-01-01",
                  asset: "BTC",
                  connection: "Binance",
                },
                {
                  id: "4",
                  type: "Sell",
                  date: "2021-01-01",
                  asset: "BTC",
                  connection: "Binance",
                },
              ]}
            />
          </div>
        </div>
      </div>
    </Container>
  );
}
