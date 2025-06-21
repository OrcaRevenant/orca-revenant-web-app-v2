"use client";

import { usePortfolioValueOverTime } from "@/api";
import PaperWithTitle from "@/app/components/paper-with-title";
import QuotedAmount from "@/app/components/quoted-amount";
import TradingLineChart from "@/app/components/trading-line-chart";
import Typography from "@/app/components/typography";
import { useControlPanel } from "@/providers/control-provider";
import { useMemo } from "react";

export default function OverallPortfolioValue() {
  const { config } = useControlPanel();

  const { data: portfolioValueOverTime } = usePortfolioValueOverTime({
    timeframe: config.timeframe.timeframe,
  });

  const overview = useMemo(() => {
    if (!portfolioValueOverTime?.length) {
      return { min: null, max: null, avg: null };
    }

    let minValue = portfolioValueOverTime[0].value;
    let maxValue = portfolioValueOverTime[0].value;
    let total = 0;

    for (const obj of portfolioValueOverTime) {
      const value = obj.value;
      if (value < minValue) {
        minValue = value;
      }
      if (value > maxValue) {
        maxValue = value;
      }
      total += value;
    }

    const avgValue = total / portfolioValueOverTime.length;

    return { min: minValue, max: maxValue, avg: avgValue };
  }, [portfolioValueOverTime]);

  return (
    <PaperWithTitle className="h-full" title="Overall Portfolio Value">
      <div className="h-[240px]">
        <TradingLineChart
          data={
            portfolioValueOverTime?.map((item) => ({
              time: item.time,
              value: +item.value,
            })) || []
          }
        />
      </div>

      <div className="flex flex-1 items-center gap-4 justify-evenly overflow-auto">
        <div className="flex flex-col gap-2 p-5">
          <Typography variant={"xSmall"} weight={"semibold"} color={"tertiary"}>
            All Time High
          </Typography>
          <QuotedAmount
            variant={"xLarge"}
            weight={"semibold"}
            color={"primary"}
            amount={overview.max as number}
          />
        </div>

        <div className="flex flex-col gap-2 p-5">
          <Typography variant={"xSmall"} weight={"semibold"} color={"tertiary"}>
            Average
          </Typography>
          <QuotedAmount
            variant={"xLarge"}
            weight={"semibold"}
            color={"primary"}
            amount={overview.avg as number}
          />
        </div>

        <div className="flex flex-col gap-2 p-5">
          <Typography variant={"xSmall"} weight={"semibold"} color={"tertiary"}>
            All Time Low
          </Typography>
          <QuotedAmount
            variant={"xLarge"}
            weight={"semibold"}
            color={"primary"}
            amount={overview.min as number}
          />
        </div>
      </div>
    </PaperWithTitle>
  );
}
