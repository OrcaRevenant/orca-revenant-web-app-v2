import IconSelector from "../icon-selector";
import Paper from "../paper";
import Typography from "../typography";
import { SupportedIcons } from "@/icons/icons";
export type StatCardProps = {
  title: string;
  value: string;
  icon: SupportedIcons;
};

export default function StatCard({
  title,
  value,
  icon,
}: StatCardProps) {
  return (
    <Paper className="space-y-5">
      <div className="flex flex-row items-center space-x-3">
        <div className="bg-bg-brand-secondary w-12 h-12 rounded-full flex items-center justify-center">
          <IconSelector icon={icon} />
        </div>

        <Typography weight={"semibold"}>{title}</Typography>
      </div>

      <div className="space-y-3">
        <Typography variant={"displaySmall"} weight={"semibold"}>
          {value}
        </Typography>

        <div className="flex flex-row space-x-2">
          <div className="flex flex-row items-center">
            <IconSelector
              size={16}
              className="text-fg-success-secondary"
              icon="ArrowUp"
            />
            <Typography color={"success"}>100%</Typography>
          </div>

          <Typography variant={"small"} color={"tertiary"}>
            vs last month
          </Typography>
        </div>
      </div>
    </Paper>
  );
}
