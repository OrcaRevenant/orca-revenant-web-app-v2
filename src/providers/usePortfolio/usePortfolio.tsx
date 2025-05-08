import { useQueryClient } from "@tanstack/react-query";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { GetPortfoliosResponse, usePortfolios } from "@/api";
import { appConfig } from "@/config";

export const ALL_PORTFOLIO_ID = `root`;

type UsePortfolioType = {
  openConnectionModal: boolean;
  setOpenConnectionModal(state: boolean): void;
  openControlPanel: boolean;
  setOpenControlPanel(state: boolean): void;
  selectedPortfolio: GetPortfoliosResponse["portfolios"][number] | null;
  setSelectedPortfolio(
    state: GetPortfoliosResponse["portfolios"][number] | null
  ): void;
  syncSelectedPortfolio(list: GetPortfoliosResponse["portfolios"]): void;
};

export const usePortfolio = create(
  persist<UsePortfolioType>(
    (set, get) => ({
      openControlPanel: false,
      setOpenControlPanel: (state: boolean) => {
        set({ openControlPanel: state });
      },
      openConnectionModal: false,
      setOpenConnectionModal: (state: boolean) => {
        set({
          openConnectionModal: state,
          openControlPanel: false,
        });
      },

      selectedPortfolio: null,
      setSelectedPortfolio: (state) => {
        set({ selectedPortfolio: state });
      },
      syncSelectedPortfolio(list) {
        if (!list.length || !list) {
          set({ selectedPortfolio: null });
          return;
        }

        const selectedPortfolio = get().selectedPortfolio;

        if (selectedPortfolio?.id === ALL_PORTFOLIO_ID) return;

        const currentPortfolio = list.find(
          (item) => item.id === selectedPortfolio?.id
        );

        set({ selectedPortfolio: currentPortfolio || list[0] });
      },
    }),
    {
      name: `${appConfig.name}-portfolio`,
      storage: createJSONStorage(() => localStorage),
      partialize({ selectedPortfolio, setSelectedPortfolio }) {
        return {
          selectedPortfolio,
          setSelectedPortfolio,
        } as UsePortfolioType;
      },
    }
  )
);

export function useSyncSelectedPortfolio() {
  const qc = useQueryClient();
  const { syncSelectedPortfolio } = usePortfolio();

  return () => {
    const portfolioList = qc.getQueryData<GetPortfoliosResponse>(
      usePortfolios.queryKey
    );

    syncSelectedPortfolio(portfolioList?.portfolios || []);
  };
}

export function useSelectedPortfolio() {
  const { selectedPortfolio } = usePortfolio();

  if (!selectedPortfolio) return null;

  return {
    ...selectedPortfolio,
    isAvailable:
      selectedPortfolio.type === "group" || 
      (selectedPortfolio.type === "portfolio" &&
       selectedPortfolio.status !== "syncing" &&
       selectedPortfolio.status !== "unknown"),
  };
}
