import { SupportedIcons } from "@/icons";
import FeaturedIcon from "../featured-icon";
import Typography from "../typography";
import Decorative, { DecorativeProps } from "../decorative";
import { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";

const emptyVariants = cva(
  "flex flex-col items-center justify-center relative **:data-[slot=empty-decorative]:animate-pulse",
  {
    variants: {
      size: {
        sm: "gap-2 **:data-[slot=empty-text]:space-y-1",
        md: "gap-5 **:data-[slot=empty-text]:space-y-2",
        lg: "gap-8 **:data-[slot=empty-text]:space-y-4",
      },
    },
  }
);

export type EmptyProps = {
  icon: SupportedIcons;
  title?: ReactNode;
  description?: string;
  decorativeSize?: DecorativeProps["size"];
  size?: "sm" | "md" | "lg";
} & Omit<HTMLAttributes<HTMLDivElement>, "title">;

export default function Empty({
  icon,
  title,
  description,
  decorativeSize = "md",
  className,
  size = "md",
  ...rest
}: EmptyProps) {
  return (
    <div className={cn(emptyVariants({ size }), className)} {...rest}>
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
      <div data-slot="empty-text">
        <Typography
          as="div"
          variant={
            {
              sm: "xSmall" as const,
              md: "xLarge" as const,
              lg: "xLarge" as const,
            }[size]
          }
          className="text-center"
          weight="semibold"
        >
          {title}
        </Typography>
        <Typography
          variant={
            {
              sm: "xSmall" as const,
              md: "medium" as const,
              lg: "xLarge" as const,
            }[size]
          }
          color="tertiary"
          className="text-center"
        >
          {description}
        </Typography>
      </div>
    </div>
  );
}
