import { GetPortfoliosResponse } from "@/api";
import AssetAvatarGroup from "@/app/components/asset-avatar-group";
import Paper, { PaperProps } from "@/app/components/paper";
import QuotedAmount from "@/app/components/quoted-amount";
import Typography from "@/app/components/typography";
import { cva, VariantProps } from "class-variance-authority";

type PortfolioAllGroupCardProps = {
  stats: GetPortfoliosResponse["stats"];
} & VariantProps<typeof portfolioAllGroupCardVariants> &
  PaperProps;

const portfolioAllGroupCardVariants = cva(
  "space-y-2 cursor-pointer hover:bg-bg-active transition-colors",
  {
    variants: {
      active: {
        true: "bg-bg-active!",
        false: "hover:bg-bg-active",
      },
    },
    defaultVariants: {
      active: false,
    },
  }
);

export default function PortfolioAllGroupCard({
  stats,
  active,
  className,
  ...rest
}: PortfolioAllGroupCardProps) {
  return (
    <Paper
      className={portfolioAllGroupCardVariants({ active, className })}
      color="primary"
      {...rest}
    >
      <Typography weight={"semibold"} color={"tertiary"} variant="small">
        All Portfolios
      </Typography>

      <div className="flex flex-row items-center justify-between">
        <QuotedAmount
          amount={stats.totalValue}
          weight={"semibold"}
          variant={"displaySmall"}
        />

        <AssetAvatarGroup assets={stats.assets} />
      </div>
    </Paper>
  );
}
