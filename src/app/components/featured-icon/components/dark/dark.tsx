import IconSelector from "@/app/components/icon-selector";
import { SupportedIcons } from "@/icons";
import { cva } from "class-variance-authority";
import { HTMLAttributes } from "react";
import { FeaturedIconColor, FeaturedIconSize } from "../../types";

type DarkProps = HTMLAttributes<HTMLDivElement> & {
  color: FeaturedIconColor;
  size: FeaturedIconSize;
  icon: SupportedIcons;
};

const darkVariants = cva(
  "flex items-center justify-center skeuemorphic-gradient-border shadow-xs-skeuomorphic",
  {
    variants: {
      backgroundColor: {
        brand: "bg-bg-brand-solid",
        gray: "bg-bg-secondary-solid",
        success: "bg-bg-success-solid",
        warning: "bg-bg-warning-solid",
        error: "bg-bg-error-solid",
      },
      iconColor: {
        brand: "text-featured-icon-dark-fg-brand",
        gray: "text-featured-icon-dark-fg-gray",
        success: "text-featured-icon-dark-fg-success",
        warning: "text-featured-icon-dark-fg-warning",
        error: "text-featured-icon-dark-fg-error",
      },
      size: {
        sm: "w-8 h-8 rounded-sm",
        md: "w-10 h-10 rounded-md",
        lg: "w-12 h-12 rounded-lg",
        xl: "w-14 h-14 rounded-xl",
      },
    },
  }
);

export default function Dark({
  color,
  size,
  icon,
  className,
  ...rest
}: DarkProps) {
  return (
    <div
      className={darkVariants({
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
