import { SupportedIcons } from "@/icons";
import { HTMLAttributes } from "react";
import Dark from "./components/dark";
import Light from "./components/light";
import Modern from "./components/modern";
import {
  FeaturedIconColor,
  FeaturedIconSize,
  FeaturedIconVariant,
} from "./types";

export type FeaturedIconProps = {
  icon?: SupportedIcons;
  size?: FeaturedIconSize;
  variant?: FeaturedIconVariant;
  color?: FeaturedIconVariant extends "modern" ? never : FeaturedIconColor;
} & HTMLAttributes<HTMLDivElement>;

export default function FeaturedIcon({
  icon = "Placeholder",
  color = "brand",
  size = "md",
  variant = "dark",
  ...rest
}: FeaturedIconProps) {
  switch (variant) {
    case "light":
      return <Light {...rest} icon={icon} color={color} size={size} />;
    case "dark":
      return <Dark {...rest} size={size} icon={icon} color={color} />;
    case "modern":
      return <Modern {...rest} size={size} icon={icon} color={color} />;
    default:
      return <Modern {...rest} size={size} icon={icon} color={color} />;
  }
}
