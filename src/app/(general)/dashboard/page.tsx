import Button from "@/app/components/button";
import Container from "@/app/components/container";
import IconSelector from "@/app/components/icon-selector";
import StatCard from "@/app/(general)/dashboard/components/stat-card/stat-card";
import Typography from "@/app/components/typography";
import AssetsTable from "@/app/(general)/dashboard/components/assets-table/assets-table";

export default function DashboardPage() {
  return (
    <Container className="py-16 w-full flex-1" maxWidth="2xl">
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

        <div className="flex flex-row items-center space-x-5">
          <StatCard
            title="Estimated Total Balance"
            value="$72,531.42"
            icon="CoinsStacked03"
          />

          <StatCard title="Total Earning" value="$3,124.15" icon="CoinsHand" />

          <StatCard
            title="Portfolio Volatility"
            value="24.8%"
            icon="BankNote01"
          />
        </div>

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
    </Container>
  );
}
