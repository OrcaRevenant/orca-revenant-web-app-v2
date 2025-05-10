"use client";

import { useStatistics } from "@/api";
import StatCard from "../stat-card";

export default function TotalBalanceCard() {
  const { data } = useStatistics();

  return (
    <StatCard
      title="Estimated Total Balance"
      value={data?.totalValue}
      percentage={data?.pnl.percentage}
      icon="CoinsStacked03"
    />
  );
}
