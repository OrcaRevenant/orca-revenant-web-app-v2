import IconSelector from "@/app/components/icon-selector";
import { SupportedIcons } from "@/icons";
import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
import { HTMLAttributes } from "react";
import { FeaturedIconColor, FeaturedIconSize } from "../../types";

type ModernProps = HTMLAttributes<HTMLDivElement> & {
  color: FeaturedIconColor;
  size: FeaturedIconSize;
  icon: SupportedIcons;
};

const modernVariants = cva(
  "flex items-center justify-center bg-bg-primary text-fg-secondary border border-feature-icon-modern-fg-border shadow-xs-skeuomorphic",
  {
    variants: {
      size: {
        sm: "w-8 h-8 rounded-sm",
        md: "w-10 h-10 rounded-md",
        lg: "w-12 h-12 rounded-lg",
        xl: "w-14 h-14 rounded-xl",
      },
    },
  }
);

export default function Modern({ size, icon, ...rest }: ModernProps) {
  return (
    <div className={cn(modernVariants({ size }), rest.className)} {...rest}>
      <IconSelector icon={icon} />
    </div>
  );
}
