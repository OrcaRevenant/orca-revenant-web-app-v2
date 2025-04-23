import dotsDesktopMd from "./assets/dots-desktop-md.svg";
import dotsDesktopSm from "./assets/dots-desktop-sm.svg";
import dotsMobileMd from "./assets/dots-mobile-md.svg";
import dotsMobileSm from "./assets/dots-mobile-sm.svg";

type breakpoint = "sm" | "md";

type breakpointConfig = {
  [key in breakpoint]: {
    alt: string;
    src: string;
    width: number;
    height: number;
  };
};

type BackgroundPatternConfig = {
  dots: {
    desktop: breakpointConfig;
    mobile: breakpointConfig;
  };
};

const desktopWidth = 1920;
const desktopHeight = 1440;

const mobileWidth = 960;
const mobileHeight = 960;

export const backgroundPatternConfig: BackgroundPatternConfig = {
  dots: {
    desktop: {
      sm: {
        alt: "dots-desktop-sm",
        src: dotsDesktopSm,
        width: desktopWidth,
        height: desktopHeight,
      },
      md: {
        alt: "dots-desktop-md",
        src: dotsDesktopMd,
        width: desktopWidth,
        height: desktopHeight,
      },
    },
    mobile: {
      sm: {
        alt: "dots-mobile-sm",
        src: dotsMobileSm,
        width: mobileWidth,
        height: mobileHeight,
      },
      md: {
        alt: "dots-mobile-md",
        src: dotsMobileMd,
        width: mobileWidth,
        height: mobileHeight,
      },
    },
  },
};

type mask =
  | "redialCenter"
  | "redialDown"
  | "redialUp"
  | "linearUp"
  | "linearDown";

type BackgroundMaskConfig = {
  [key in mask]: string;
};

export const backgroundMaskConfig: BackgroundMaskConfig = {
  redialCenter:
    "radial-gradient(50% 50% at 50% 50%, #000000 0%, #00000000 100%)",
  redialDown: "radial-gradient(50% 50% at 50% 0%, #000000 0%, #00000000 100%)",
  redialUp: "radial-gradient(50% 50% at 50% 100%, #000000 0%, #00000000 100%)",
  linearUp: "linear-gradient(to top, #000000 0%, #00000000 100%)",
  linearDown: "linear-gradient(to bottom, #000000 0%, #00000000 100%)",
};
