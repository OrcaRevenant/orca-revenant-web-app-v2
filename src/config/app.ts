import { Timeframe } from "@/api";
import { NextFontWithVariable } from "next/dist/compiled/@next/font";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export type BaseCurrency = {
  key: string;
  currency: string;
  symbol: string;
  percision: number;
  options?: {
    align?: `left` | `right`;
    space?: boolean;
  };
};

export type BaseTimeframe = {
  key: string;
  timeframe: Timeframe;
  label: string;
};

const currencies: BaseCurrency[] = [
  {
    key: `usdt`,
    currency: `USDT`,
    symbol: `$`,
    percision: 2,
  },
  {
    key: `btc`,
    currency: `Bitcoin`,
    symbol: `BTC`,
    percision: 8,
    options: {
      align: `right`,
      space: true,
    },
  },
  {
    key: `irt`,
    currency: `Iranian Toman`,
    symbol: `IRT`,
    percision: 0,
    options: {
      align: `right`,
      space: true,
    },
  },
];

const timeframes: BaseTimeframe[] = [
  {
    key: "daily",
    timeframe: "daily",
    label: "Daily",
  },
  {
    key: "weekly",
    timeframe: "weekly",
    label: "Weekly",
  },
  {
    key: "monthly",
    timeframe: "monthly",
    label: "Monthly",
  },
  {
    key: "yearly",
    timeframe: "yearly",
    label: "Yearly",
  },
];

export type SupportedLocales = `en` | `fa`;
export type ThemePalette = `light` | `dark`;

type LocaleAppConfig = {
  defaultLocale: SupportedLocales;
  locales: SupportedLocales[];
};

type ThemeAppConfig = {
  default: ThemePalette;
};

export type AppConfig = {
  locale: LocaleAppConfig;
  theme: ThemeAppConfig;
  title: string;
  description: string;
  name: string;
  typography: {
    fontFamily: NextFontWithVariable;
  };
  timeframe: {
    default: BaseTimeframe;
    timeframes: BaseTimeframe[];
  };
  quote: {
    default: BaseCurrency;
    currencies: BaseCurrency[];
  };
  navigations: Record<string, string>;
};

export const appConfig: AppConfig = {
  name: `orca`,
  locale: {
    defaultLocale: `en`,
    locales: [`en`, `fa`],
  },
  typography: {
    fontFamily: montserrat,
  },
  quote: {
    default: currencies[0],
    currencies: currencies,
  },
  timeframe: {
    default: timeframes[0],
    timeframes: timeframes,
  },
  theme: {
    default: `dark`,
  },
  title: `Orca`,
  description: `Description`,
  navigations: {
    dashboard: `/dashboard`,
    tracking: `/tracking`,
    settings: `/settings`,
    connectPortfolio: `/connect/[portfolio]`,
    login: `/`,
  },
};
