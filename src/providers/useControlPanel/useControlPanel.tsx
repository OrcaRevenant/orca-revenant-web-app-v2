import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { appConfig, BaseCurrency, ThemePalette } from "@/config";

type Config = {
  baseCurrency: BaseCurrency;
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
        baseCurrency: appConfig.quote.default,
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
