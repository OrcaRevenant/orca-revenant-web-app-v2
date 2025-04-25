import Button from "@/app/components/button";
import Container from "@/app/components/container";
import IconSelector from "@/app/components/icon-selector";
import StatCard from "@/app/components/stat-card/stat-card";
import Typography from "@/app/components/typography";

export default function DashboardPage() {
  return (
    <Container className="py-16 w-full" maxWidth="2xl">
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
      </div>
    </Container>
  );
}
