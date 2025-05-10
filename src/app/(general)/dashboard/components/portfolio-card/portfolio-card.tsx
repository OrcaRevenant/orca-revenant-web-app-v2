import { ConnectedPortfolio } from "@/api";
import AssetAvatarGroup from "@/app/components/asset-avatar-group";
import ConnectionLogo from "@/app/components/connection-logo";
import IconSelector from "@/app/components/icon-selector";
import Paper, { PaperProps } from "@/app/components/paper";
import QuotedAmount from "@/app/components/quoted-amount";
import Typography from "@/app/components/typography";
import { cva } from "class-variance-authority";

type PortfolioCardProps = {
  portfolio: ConnectedPortfolio;
  active?: boolean;
} & PaperProps;

const portfolioCardVariants = cva(
  "space-y-2 relative cursor-pointer transition-colors",
  {
    variants: {
      active: {
        true: "bg-bg-active!",
        false: "hover:bg-bg-primary-hover",
      },
    },
    defaultVariants: {
      active: false,
    },
  }
);

export default function PortfolioCard({
  active,
  portfolio,
  className,
  ...rest
}: PortfolioCardProps) {
  return (
    <Paper
      className={portfolioCardVariants({ active, className })}
      color="secondary"
      {...rest}
    >
      <div className="space-y-5">
        <div className="flex flex-row justify-between">
          <ConnectionLogo size={"lg"} connectionName={portfolio.connection.name} />
          <IconSelector className="size-5" icon="DotsVertical" />
        </div>
        <div className="space-y-2">
          <Typography variant={"small"} color={"tertiary"}>
            {portfolio.name}
          </Typography>

          <div className="flex flex-row items-center justify-between">
            <QuotedAmount
              amount={portfolio.value}
              weight={"semibold"}
              variant={"displaySmall"}
            />

            <AssetAvatarGroup assets={portfolio.assets} />
          </div>
        </div>
      </div>
    </Paper>
  );
}
