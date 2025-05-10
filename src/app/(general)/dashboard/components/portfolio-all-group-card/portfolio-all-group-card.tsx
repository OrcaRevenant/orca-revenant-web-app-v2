import { GetPortfoliosResponse } from "@/api";
import Amount from "@/app/components/amount";
import AssetAvatarGroup from "@/app/components/asset-avatar-group";
import Paper, { PaperProps } from "@/app/components/paper";
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
        <Amount weight={"semibold"} variant={"displaySmall"}>
          {stats.totalValue}
        </Amount>

        <AssetAvatarGroup />
      </div>
    </Paper>
  );
}
