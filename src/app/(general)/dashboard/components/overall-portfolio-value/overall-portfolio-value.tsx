"use client";

import PaperWithTitle from "@/app/components/paper-with-title";
import TradingLineChart from "@/app/components/trading-line-chart";
import Select, {
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/app/components/select";
import Typography from "@/app/components/typography";
import { Timeframe, usePortfolioValueOverTime } from "@/api";
import { useMemo, useState } from "react";
import QuotedAmount from "@/app/components/quoted-amount";

export default function OverallPortfolioValue() {
  const [timeframe, setTimeframe] = useState<Timeframe>("daily");

  const { data: portfolioValueOverTime } = usePortfolioValueOverTime({
    timeframe,
  });

  const overview = useMemo(() => {
    if (!portfolioValueOverTime) {
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
    <PaperWithTitle
      className="h-full"
      title="Overall Portfolio Value"
      action={
        <Select
          onValueChange={(value) => {
            setTimeframe(value as Timeframe);
          }}
        >
          <SelectTrigger>
            <SelectValue placeholder="Time" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Time Periods</SelectLabel>
              <SelectItem value="daily">Daily</SelectItem>
              <SelectItem value="weekly">Weekly</SelectItem>
              <SelectItem value="monthly">Monthly</SelectItem>
              <SelectItem value="yearly">Yearly</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      }
    >
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

      <div className="flex flex-1 items-center flex-row gap-4 justify-evenly">
        <div className="flex flex-col gap-2 p-5">
          <Typography variant={"small"} weight={"semibold"} color={"tertiary"}>
            All Time High
          </Typography>
          <QuotedAmount
            variant={"displaySmall"}
            weight={"semibold"}
            color={"primary"}
            amount={overview.max as number}
          />
        </div>

        <div className="flex flex-col gap-2 p-5">
          <Typography variant={"small"} weight={"semibold"} color={"tertiary"}>
            Average
          </Typography>
          <QuotedAmount
            variant={"displaySmall"}
            weight={"semibold"}
            color={"primary"}
            amount={overview.avg as number}
          />
        </div>

        <div className="flex flex-col gap-2 p-5">
          <Typography variant={"small"} weight={"semibold"} color={"tertiary"}>
            All Time Low
          </Typography>
          <QuotedAmount
            variant={"displaySmall"}
            weight={"semibold"}
            color={"primary"}
            amount={overview.min as number}
          />
        </div>
      </div>
    </PaperWithTitle>
  );
}
