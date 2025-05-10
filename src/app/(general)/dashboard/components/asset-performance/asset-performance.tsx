import Fluctuation from "@/app/components/fluctuation";
import AreaChart from "@/app/components/area-chart";
import PaperWithTitle, {
  PaperWithTitleProps,
} from "@/app/components/paper-with-title";
import Typography from "@/app/components/typography";
import { cn } from "@/lib/utils";

export type AssetPerformanceProps = Omit<PaperWithTitleProps, "title">;

export default function AssetPerformance({
  className,
  ...rest
}: AssetPerformanceProps) {
  return (
    <PaperWithTitle
      color="tertiary"
      title="Top Performance"
      compact
      className={cn(className)}
      {...rest}
    >
      <div className="space-y-5">
        <div className="flex flex-row w-full justify-between items-center">
          <Typography variant={"displaySmall"} weight={"bold"}>
            Solana
          </Typography>

          <div className="flex flex-row items-center gap-2">
            <Fluctuation
              size={"md"}
              className="border-none! px-0!"
              variant={"outline"}
            />
            <Typography
              variant={"small"}
              weight={"semibold"}
              color={"tertiary"}
            >
              -$1,206
            </Typography>
          </div>
        </div>

        <AreaChart />
      </div>
    </PaperWithTitle>
  );
}
