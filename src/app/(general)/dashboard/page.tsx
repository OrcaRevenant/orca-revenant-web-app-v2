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
import PortfolioPanel from "./components/portfolio-panel";
import TotalBalanceCard from "./components/total-balance-card";
import Empty from "@/app/components/empty";
export default function DashboardPage() {
  const isSyncing = false;
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
          <div className="flex items-center flex-row space-x-3">
            <Button variant="tertiaryGray">
              <IconSelector icon="RefreshCcw01" />
            </Button>
            <PortfolioPanel />
          </div>
        </div>

        {isSyncing && (
          <div className="flex items-center justify-center min-h-[calc(100vh-var(--navbar-height)-380px)]">
            <Empty
              decorativeSize={"lg"}
              className="**:data-[slot=empty-decorative]:animate-pulse **:data-[slot=empty-featured-icon]:[&_svg]:animate-spin"
              icon="RefreshCcw02"
              title="Syncing, It just take a few seconds..."
              description="Are you ready?"
            />
          </div>
        )}

        {!isSyncing && (
          <div className="grid grid-cols-12 gap-5">
            <div className="col-span-4">
              <TotalBalanceCard />
            </div>
            <div className="col-span-4">
              <StatCard
                title="Total Earning"
                value="3,124.15"
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
              <AssetsTable />
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
              <TransactionsTable />
            </div>
          </div>
        )}
      </div>
    </Container>
  );
}
