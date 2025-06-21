"use client";

import { usePortfolioValueOverTime, useBalance } from "@/api";
import StatCard from "../stat-card";
import { useMemo } from "react";
import { useControlPanel } from "@/providers/control-provider";

export default function TotalBalanceCard() {
  const { data } = useBalance();
  const { config } = useControlPanel();
  const { data: portfolioValueOverTimeData } = usePortfolioValueOverTime({
    timeframe: config.timeframe.timeframe,
  });

  const percentage = useMemo(() => {
    if (!portfolioValueOverTimeData?.[0]?.value) return;

    return (
      ((portfolioValueOverTimeData[portfolioValueOverTimeData?.length - 1]
        .value -
        portfolioValueOverTimeData[0].value) /
        portfolioValueOverTimeData[0].value) *
      100
    );
  }, [portfolioValueOverTimeData]);

  return (
    <StatCard
      title="Estimated Total Balance"
      value={data?.balance}
      percentage={percentage}
      icon="CoinsStacked03"
    />
  );
}
