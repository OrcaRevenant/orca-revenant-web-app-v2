"use client";

import Button from "@/app/components/button";
import Container from "@/app/components/container";
import IconSelector from "@/app/components/icon-selector";
import Typography from "@/app/components/typography";
import AssetsTable from "@/app/(general)/dashboard/components/assets-table/assets-table";
import OverallPortfolioValue from "./components/overall-portfolio-value/overall-portfolio-value";
import PortfolioHoldings from "./components/portfolio-holdings";
import AssetPerformance from "./components/asset-performance";
import AssetAllocation from "./components/asset-allocation";
import TransactionsTable from "./components/transactions-table/transactions-table";
import PortfolioPanel from "./components/portfolio-panel";
import TotalBalanceCard from "./components/total-balance-card";
import Empty from "@/app/components/empty";
import MainTokenCard from "./components/main-token-card";
import MainTokenValueCard from "./components/main-token-value-card";
import { usePortfolios } from "@/api/core/hooks/portfolio";
import { useSelectedPortfolio } from "@/providers/portfolio-provider";
import { usePortfolioStatus } from "@/api/core/hooks/portfolio";
import { useSyncSelectedPortfolio } from "@/providers/portfolio-provider";
import { useEffect } from "react";
import LoadingText from "@/app/components/loading-text";
import Image from "next/image";

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
    <Container
      className="py-16 w-full min-h-[calc(100vh-var(--navbar-height))]"
      maxWidth="2xl"
    >
      <div className="space-y-5">
        <div className="flex flex-row w-full">
          <div className="space-y-2 flex-1">
            <Typography variant="displayMedium">Overview</Typography>
            <Typography variant="medium" className="text-text-tertiary">
              Manage your team members and their account permissions here.
            </Typography>
          </div>
          <div className="flex items-center flex-row space-x-3">
            <Button variant="tertiaryGray">
              <IconSelector icon="RefreshCcw01" />
            </Button>
            <PortfolioPanel />
          </div>
        </div>

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
                      <div className="col-span-4">
                        <TotalBalanceCard />
                      </div>
                      <div className="col-span-8 relative h-full">
                        <Image
                          className="rounded-xl"
                          alt="orca"
                          src="/assets/images/abstract-blue.webp"
                          objectFit="cover"
                          fill
                        />
                        <Typography
                          weight={"bold"}
                          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                          variant="displayMedium"
                        >
                          Coming Soon
                        </Typography>
                      </div>

                      <div className="col-span-12">
                        <AssetsTable />
                      </div>

                      <div className="col-span-12 lg:col-span-8">
                        <OverallPortfolioValue />
                      </div>

                      <div className="col-span-12 lg:col-start-9 lg:col-span-4">
                        <PortfolioHoldings />
                      </div>

                      <div className="col-span-12 lg:col-span-8">
                        <div className="space-y-5">
                          <AssetAllocation />
                          <div className="flex flex-row gap-5">
                            <MainTokenCard />
                            <MainTokenValueCard />
                          </div>
                        </div>
                      </div>

                      <div className="col-span-12 lg:col-start-9 lg:col-span-4">
                        <div className="h-full flex flex-col gap-5">
                          <AssetPerformance performance="best" className="flex-1" />
                          <AssetPerformance performance="worst" className="flex-1" />
                        </div>
                      </div>

                      <div className="col-span-12 ">
                        <TransactionsTable />
                      </div>
                    </div>
                  </>
                )}
              </>
            )}
          </>
        )}
      </div>
    </Container>
  );
}
