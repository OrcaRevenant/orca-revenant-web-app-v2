import { SupportedIcons } from "@/icons";

type NavigationLink = {
  id: string;
  name: string;
  href: string;
  disabled?: boolean;
  icon?: SupportedIcons;
  comingSoon?: boolean;
};

type NavigationItem = {
  id: string;
  name: string;
  item: NavigationLink[];
};

type Navigation = Record<string, NavigationItem>;

export const navigation: Navigation = {
  portfolioTracker: {
    id: "portfolio",
    name: "Portfolio",
    item: [
      {
        id: "dashboard",
        name: "Dashboard",
        href: "/dashboard",
        comingSoon: false,
        icon: "LayoutAlt01",
      },
      {
        id: "stella",
        name: "Stella",
        href: "/stella",
        comingSoon: false,
        icon: "Stars01",
      },
    ],
  },
  connectionHub: {
    id: "connections",
    name: "Connections",
    item: [
      {
        id: "market",
        name: "Market",
        href: "/market",
        comingSoon: true,
        icon: "Grid01",
      },
      {
        id: "hub",
        name: "Hub",
        href: "/hub",
        comingSoon: true,
        icon: "LayersThree01",
      },
    ],
  },
};
