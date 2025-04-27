import DotLG from "./assets/dot-lg.svg";
import DotMD from "./assets/dot-md.svg";
import DotSM from "./assets/dot-sm.svg";

export type DecorativeVariant = "dots";

export type DecorativeSize = "sm" | "md" | "lg";

export type DecorativeAttributes = {
  src: string;
  size: number;
  alt: string;
};

export type DecorativeConfig = {
  [key in DecorativeVariant]: {
    [key in DecorativeSize]: DecorativeAttributes;
  };
};

export const decorativeConfig: DecorativeConfig = {
  dots: {
    sm: {
      src: DotSM,
      size: 336,
      alt: "dots",
    },
    md: {
      src: DotMD,
      size: 480,
      alt: "dots",
    },
    lg: {
      src: DotLG,
      size: 768,
      alt: "dots",
    },
  },
};

export type DecorativeMask =
  | "redialCenter"
  | "redialDown"
  | "redialUp"
  | "linearUp"
  | "linearDown";

type DecorativeMaskConfig = {
  [key in DecorativeMask]: string;
};

export const decorativeMaskConfig: DecorativeMaskConfig = {
  redialCenter:
    "radial-gradient(50% 50% at 50% 50%, #000000 0%, #00000000 100%)",
  redialDown: "radial-gradient(50% 50% at 50% 0%, #000000 0%, #00000000 100%)",
  redialUp: "radial-gradient(50% 50% at 50% 100%, #000000 0%, #00000000 100%)",
  linearUp: "linear-gradient(to top, #000000 0%, #00000000 100%)",
  linearDown: "linear-gradient(to bottom, #000000 0%, #00000000 100%)",
};
