"use client";

import Button from "@/app/components/button";
import Sheet, {
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/app/components/sheet";
import { useState } from "react";
import PortfolioAllGroupCard from "../portfolio-all-group-card";
import ConnectionDialog from "@/app/components/connection-dialog";
import ScrollArea, { ScrollBar } from "@/app/components/scroll-area";
import PortfolioCard from "../portfolio-card";
import { usePortfolios } from "@/api";
import { ALL_PORTFOLIO_ID, usePortfolio } from "@/providers/usePortfolio";

export default function PortfolioPanel() {
  const [open, setOpen] = useState(false);

  const { data } = usePortfolios();

  const { selectedPortfolio, setSelectedPortfolio } = usePortfolio();

  return (
    <>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button disabled={!data} variant="secondaryGray">
            Portfolio Tracker
          </Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Portfolios</SheetTitle>
            <SheetDescription>Select your portfolio</SheetDescription>
          </SheetHeader>

          {data && (
            <div className="h-full flex flex-col w-full py-3 px-2.5 space-y-3">
              <ConnectionDialog />
              <PortfolioAllGroupCard
                active={selectedPortfolio?.id === ALL_PORTFOLIO_ID}
                onClick={() => {
                  setSelectedPortfolio({
                    id: ALL_PORTFOLIO_ID,
                    assetsCount: data?.stats.totalAssets || 0,
                    name: `All Portfolios`,
                    order: 0,
                    type: `group`,
                    value: data?.stats.totalValue || 0,
                    color: "",
                  });
                  setOpen(false);
                }}
                stats={data?.stats}
              />
              <ScrollArea
                type="auto"
                className="flex-auto w-full overflow-y-auto h-0"
              >
                <div className="space-y-3">
                  {data.portfolios?.map((portfolio) => {
                    if (portfolio.type === "group") {
                      return null;
                    }

                    return (
                      <PortfolioCard
                        active={selectedPortfolio?.id === portfolio.id}
                        key={portfolio.id}
                        portfolio={portfolio}
                        onClick={() => {
                          setSelectedPortfolio(portfolio);
                          setOpen(false);
                        }}
                      />
                    );
                  })}
                </div>
                <ScrollBar />
              </ScrollArea>
            </div>
          )}
        </SheetContent>
      </Sheet>
    </>
  );
}
