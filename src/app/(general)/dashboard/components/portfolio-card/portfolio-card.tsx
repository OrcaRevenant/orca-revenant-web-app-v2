import { ConnectedPortfolio, useRemovePortfolio } from "@/api";
import AssetAvatarGroup from "@/app/components/asset-avatar-group";
import ConnectionLogo from "@/app/components/connection-logo";
import IconSelector from "@/app/components/icon-selector";
import Paper, { PaperProps } from "@/app/components/paper";
import QuotedAmount from "@/app/components/quoted-amount";
import Typography from "@/app/components/typography";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/app/components/dropdown-menu";
import { cva } from "class-variance-authority";
import Button from "@/app/components/button";
import { useConfirmDialog } from "@/app/components/confirm-dialog/providers/confirm-dialog-provider";

type PortfolioCardProps = {
  portfolio: ConnectedPortfolio;
  active?: boolean;
} & PaperProps;

const portfolioCardVariants = cva(
  "space-y-2 relative cursor-pointer transition-colors group",
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
  const { confirm } = useConfirmDialog();

  const { mutate: removePortfolio, isPending } = useRemovePortfolio();

  return (
    <Paper
      className={portfolioCardVariants({ active, className })}
      color="secondary"
      {...rest}
    >
      <div className="space-y-5">
        <div className="flex flex-row justify-between">
          <ConnectionLogo
            size={"lg"}
            connectionName={portfolio.connection.name}
          />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant={"linkColor"}
                size={"mdIcon"}
                className="hover:bg-bg-quaternary/30 rounded-full p-1 transition-colors group-hover:bg-transparent"
              >
                {isPending ? (
                  <IconSelector icon="Loading02" className="size-5 animate-spin" />
                ) : (
                  <IconSelector className="size-5" icon="DotsVertical" />
                )}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem
                onClick={(e) => {
                  e.stopPropagation();
                  alert("edit");
                }}
              >
                <IconSelector icon="Pencil01" className="size-4" />
                Edit
              </DropdownMenuItem>

              <DropdownMenuItem
                variant="destructive"
                onClick={(e) => {
                  e.stopPropagation();
                  confirm({
                    title: "Remove Portfolio",
                    description:
                      "Are you sure you want to remove this portfolio?",
                    onConfirm: () => {
                      removePortfolio({
                        payload: { id: portfolio.id },
                      });
                    },
                  });
                }}
              >
                <IconSelector icon="Trash01" className="size-4" />
                Remove
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
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
