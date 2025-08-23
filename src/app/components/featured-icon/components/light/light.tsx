import IconSelector from "@/app/components/icon-selector";
import { SupportedIcons } from "@/icons";
import { cva } from "class-variance-authority";
import { HTMLAttributes } from "react";
import { FeaturedIconColor, FeaturedIconSize } from "../../types";

type LightProps = HTMLAttributes<HTMLDivElement> & {
  color: FeaturedIconColor;
  size: FeaturedIconSize;
  icon: SupportedIcons;
};

const lightVariants = cva("flex items-center justify-center rounded-full", {
  variants: {
    backgroundColor: {
      brand: "bg-bg-brand-secondary",
      gray: "bg-bg-tertiary",
      success: "bg-bg-success-secondary",
      warning: "bg-bg-warning-secondary",
      error: "bg-bg-error-secondary",
    },
    iconColor: {
      brand: "text-featured-icon-light-fg-brand",
      gray: "text-featured-icon-light-fg-gray",
      success: "text-featured-icon-light-fg-success",
      warning: "text-featured-icon-light-fg-warning",
      error: "text-featured-icon-light-fg-error",
    },
    size: {
      sm: "w-8 h-8",
      md: "w-10 h-10",
      lg: "w-12 h-12",
      xl: "w-14 h-14",
    },
  },
});

export default function Light({ size, color, icon, className,...rest }: LightProps) {
  return (
    <div
      className={lightVariants({
        backgroundColor: color,
        iconColor: color,
        size,
        className,
      })}
      {...rest}
    >
      <IconSelector icon={icon} className={"text-inherit"} />
    </div>
  );
}
