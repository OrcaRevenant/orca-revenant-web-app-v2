import { create } from "zustand";

type Currency = "USD" | "EUR" | "GBP";
type Timeframe = "Daily" | "Weekly" | "Monthly" | "Yearly";

interface ControlPanelState {
  isDarkMode: boolean;
  currency: Currency;
  timeframe: Timeframe;
  setDarkMode: (isDark: boolean) => void;
  setCurrency: (currency: Currency) => void;
  setTimeframe: (timeframe: Timeframe) => void;
}

export const useControlPanelStore = create<ControlPanelState>((set) => ({
  isDarkMode: true,
  currency: "USD",
  timeframe: "Daily",
  setDarkMode: (isDark) => set({ isDarkMode: isDark }),
  setCurrency: (currency) => set({ currency }),
  setTimeframe: (timeframe) => set({ timeframe }),
}));
