import Percentage from "@/app/components/percentage";
import QuotedAmount from "@/app/components/quoted-amount";
import { SupportedIcons } from "@/icons/icons";
import { cn } from "@/lib/utils";
import IconSelector from "../../../../components/icon-selector";
import Paper from "../../../../components/paper";
import Typography from "../../../../components/typography";

export type StatCardProps = {
  title: string;
  value?: number | string;
  percentage?: number;
  icon: SupportedIcons;
};

export default function StatCard({
  title,
  value,
  percentage = 0,
  icon,
}: StatCardProps) {
  const iconColor =
    +percentage > 0 ? `text-fg-success-secondary` : `text-fg-error-secondary`;

  const isZero = +percentage === 0;

  return (
    <Paper className="space-y-5">
      <div className="flex flex-row items-center space-x-3">
        <div className="bg-bg-brand-secondary w-12 h-12 rounded-full flex items-center justify-center">
          <IconSelector icon={icon} />
        </div>

        <Typography weight={"semibold"}>{title}</Typography>
      </div>

      <div className="space-y-3">
        <QuotedAmount
          variant={"displaySmall"}
          weight={"semibold"}
          amount={value}
        />

        <div className="flex flex-row space-x-2">
          <div className="flex flex-row items-center">
            {!isZero && (
              <IconSelector
                className={cn("size-4", iconColor)}
                icon={+percentage > 0 ? "ArrowUp" : "ArrowDown"}
              />
            )}
            <Percentage
              variant={"small"}
              color={"success"}
              percentage={percentage}
            />
          </div>

          <Typography variant={"small"} color={"tertiary"}>
            vs last month
          </Typography>
        </div>
      </div>
    </Paper>
  );
}
