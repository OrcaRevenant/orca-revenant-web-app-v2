import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { appConfig, BaseCurrency, ThemePalette, BaseTimeframe } from "@/config";

type Config = {
  quoteCurrency: BaseCurrency;
  timeframe: BaseTimeframe;
  palette: ThemePalette;
};

type UseControlPanelType = {
  config: Config;
  setConfig(config: Partial<Config>): void;
};

export const useControlPanel = create(
  persist<UseControlPanelType>(
    (set) => ({
      config: {
        quoteCurrency: appConfig.quote.default,
        timeframe: appConfig.timeframe.default,
        palette: appConfig.theme.default,
      },
      setConfig(config) {
        set((prevState) => ({ config: { ...prevState.config, ...config } }));
      },
    }),
    {
      name: `${appConfig.name}-config`,
      storage: createJSONStorage(() => localStorage),
    }
  )
);
