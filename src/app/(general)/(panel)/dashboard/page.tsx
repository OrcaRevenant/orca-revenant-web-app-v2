"use client";

import { usePortfolios, usePortfolioStatus } from "@/api/core/hooks/portfolio";
import AssetsTable from "@/app/(general)/(panel)/dashboard/components/assets-table/assets-table";
import Empty from "@/app/components/empty";
import LoadingText from "@/app/components/loading-text";

import {
  useSelectedPortfolio,
  useSyncSelectedPortfolio,
} from "@/providers/portfolio-provider";
import { useEffect } from "react";
import AssetAllocation from "./components/asset-allocation";
import AssetPerformance from "./components/asset-performance";
import MainTokenCard from "./components/main-token-card";
import MainTokenValueCard from "./components/main-token-value-card";
import OverallPortfolioValue from "./components/overall-portfolio-value/overall-portfolio-value";
import PortfolioHoldings from "./components/portfolio-holdings";
import TotalBalanceCard from "./components/total-balance-card";
import TransactionsTable from "./components/transactions-table/transactions-table";
import PageHeader from "../components/page-header";

export default function DashboardPage() {
  const { data, isSuccess, isLoading, refetch } = usePortfolios();

  const syncSelectedPortfolio = useSyncSelectedPortfolio();
  const syncPortfolioStatus = usePortfolioStatus();
  const selectedPortfolio = useSelectedPortfolio();

  const needsConnection = data?.portfolios?.length === 0 || !data;

  useEffect(() => {
    if (!isSuccess) return;
    syncSelectedPortfolio();
  }, [isSuccess]);

  useEffect(() => {
    if (
      selectedPortfolio?.type === "portfolio" &&
      syncPortfolioStatus?.data === selectedPortfolio?.status
    )
      return;

    refetch().then(syncSelectedPortfolio);
  }, [selectedPortfolio?.id, syncPortfolioStatus.dataUpdatedAt]);

  const isSyncing =
    syncPortfolioStatus.data === "syncing" ||
    syncPortfolioStatus.data === "unknown";

  return (
    <div className="space-y-5">
      <PageHeader
        title="Overview"
        description="Manage your team members and their account permissions here."
      />

      {isSyncing && (
        <div className="flex items-center justify-center min-h-[calc(100vh-var(--navbar-height)-380px)]">
          <Empty
            decorativeSize={"lg"}
            className="**:data-[slot=empty-featured-icon]:[&_svg]:animate-spin"
            icon="RefreshCcw02"
            title="Syncing, It just take a few seconds..."
            description="Are you ready?"
          />
        </div>
      )}

      {!isSyncing && (
        <>
          {isLoading && (
            <div className="flex items-center justify-center min-h-[calc(100vh-var(--navbar-height)-380px)]">
              <Empty
                decorativeSize={"lg"}
                icon="Loading01"
                title={<LoadingText variant={"inherit"} />}
                className="**:data-[slot=empty-featured-icon]:[&_svg]:animate-pulse"
              />
            </div>
          )}
          {!isLoading && (
            <>
              {needsConnection && (
                <div className="flex items-center justify-center min-h-[calc(100vh-var(--navbar-height)-380px)]">
                  <Empty
                    decorativeSize={"lg"}
                    icon="SearchLg"
                    className="**:data-[slot=empty-decorative]:animate-pulse"
                    title="No connection found"
                    description="Please connect your portfolio to continue"
                  />
                </div>
              )}
              {!needsConnection && (
                <>
                  <div className="grid grid-cols-12 gap-5">
                    <div className="col-span-12">
                      <TotalBalanceCard />
                    </div>

                    {/* <div className="relative col-span-4 border border-border-secondary rounded-lg overflow-hidden">
                          <Typography
                            variant="displayMedium"
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 text-nowrap"
                          >
                            Coming Soon
                          </Typography>
                          <div className="blur-sm">
                            <TotalBalanceCard />
                          </div>
                        </div> */}

                    {/* <div className="relative col-span-4 border border-border-secondary rounded-lg overflow-hidden">
                          <Typography
                            variant="displayMedium"
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 text-nowrap"
                          >
                            Coming Soon
                          </Typography>
                          <div className="blur-sm">
                            <TotalBalanceCard />
                          </div>
                        </div> */}

                    <div className="col-span-12">
                      <AssetsTable preview />
                    </div>

                    <div className="col-span-12 lg:col-span-8">
                      <OverallPortfolioValue />
                    </div>

                    <div className="col-span-12 lg:col-start-9 lg:col-span-4 hidden md:block">
                      <PortfolioHoldings />
                    </div>

                    <div className="col-span-12 lg:col-span-8">
                      <div className="gap-5 h-full flex flex-col">
                        <AssetAllocation />
                        <div className="flex flex-col md:flex-row gap-5">
                          <MainTokenCard />
                          <MainTokenValueCard />
                        </div>
                      </div>
                    </div>

                    <div className="col-span-12 lg:col-start-9 lg:col-span-4">
                      <div className="h-full flex flex-col gap-5">
                        <AssetPerformance
                          performance="best"
                          className="flex-1"
                        />
                        <AssetPerformance
                          performance="worst"
                          className="flex-1"
                        />
                      </div>
                    </div>

                    <div className="col-span-12 ">
                      <TransactionsTable preview />
                    </div>
                  </div>
                </>
              )}
            </>
          )}
        </>
      )}
    </div>
  );
}
