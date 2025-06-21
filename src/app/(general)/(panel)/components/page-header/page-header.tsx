import Typography from "@/app/components/typography";
import SyncButton from "../../dashboard/components/sync-button";
import PortfolioPanel from "../../dashboard/components/portfolio-panel";

export type PageHeaderProps = {
  title: string;
  description: string;
};

export default function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 w-full">
      <div className="space-y-2 flex-1">
        <Typography variant="displayMedium">{title}</Typography>
        <Typography variant="medium" className="text-text-tertiary">
          {description}
        </Typography>
      </div>
      <div className="flex items-center flex-row space-x-3 self-end">
        <SyncButton />
        <PortfolioPanel />
      </div>
    </div>
  );
}
