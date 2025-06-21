"use client";

import { usePortfolios } from "@/api";
import { ConnectedPortfolio } from "@/api/core/interface/portfolio";
import Button from "@/app/components/button";
import IconSelector from "@/app/components/icon-selector";
import Typography from "@/app/components/typography";
import { cn } from "@/lib/utils";
import { usePortfolio } from "@/providers/portfolio-provider";
import { useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

export type AddPortfolioCompleteProps = {
  portfolio: ConnectedPortfolio;
  className?: string;
};

export default function AddPortfolioComplete({
  portfolio,
  className,
}: AddPortfolioCompleteProps) {
  const { setSelectedPortfolio, selectedPortfolio } = usePortfolio();
  const queryClient = useQueryClient();
  const router = useRouter();

  return (
    <div
      className={cn(
        "flex flex-1 flex-col justify-between w-full gap-5 sm:gap-0",
        className
      )}
    >
      <div className="flex flex-col gap-5">
        <Typography variant="displaySmall" weight={"semibold"}>
          Your portfolio successfully connected!
        </Typography>
        <Typography color={"tertiary"}>
          Start your journey, you can connect other account and track your
          aggregated value.
        </Typography>
      </div>

      <Button
        onClick={async () => {
          if (portfolio.id === selectedPortfolio?.id) return;

          await queryClient.refetchQueries({
            queryKey: usePortfolios.queryKey,
          });

          setSelectedPortfolio(portfolio);
          router.replace("/dashboard");
        }}
        type="submit"
        size="lg"
      >
        <IconSelector icon="Rocket02" />
        Start Tracking
      </Button>
    </div>
  );
}
