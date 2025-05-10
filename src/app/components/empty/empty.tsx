import { SupportedIcons } from "@/icons";
import FeaturedIcon from "../featured-icon";
import Typography from "../typography";
import Decorative, { DecorativeProps } from "../decorative";
import { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";
export type EmptyProps = {
  icon: SupportedIcons;
  title?: string;
  description?: string;
  decorativeSize?: DecorativeProps["size"];
} & HTMLAttributes<HTMLDivElement>;

export default function Empty({
  icon,
  title,
  description,
  decorativeSize = "md",
  className,
  ...rest
}: EmptyProps) {
  return (
    <div className={cn("gap-5 flex flex-col items-center justify-center relative", className)} {...rest}>
      <Decorative
        data-slot="empty-decorative"
        size={decorativeSize}
        className="absolute top-1/2 right-1/2 -translate-y-1/2 translate-x-1/2"
      />
      <FeaturedIcon
        data-slot="empty-featured-icon"
        color="gray"
        variant="modern"
        icon={icon}
        size="lg"
      />
      <div className="space-y-2">
        <Typography variant="xLarge" className="text-center" weight="semibold">
          {title}
        </Typography>
        <Typography variant="medium" color="tertiary" className="text-center">
          {description}
        </Typography>
      </div>
    </div>
  );
}
