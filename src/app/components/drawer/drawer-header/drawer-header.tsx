import { cn } from "@/lib/utils";
import Decorative, { DecorativeProps } from "../../decorative";
import { DialogDescription, DialogTitle } from "../../dialog";
import FeaturedIcon, { FeaturedIconProps } from "../../featured-icon";
import { SheetHeader } from "../../sheet";

export type DrawerHeaderProps = {
  title?: string;
  description?: string;
  align?: "left" | "center" | "horizontal";
  featuredIcon?: FeaturedIconProps;
  decorativeProps?: DecorativeProps;
  divider?: boolean;
  buttonPadding?: boolean;
} & React.ComponentProps<typeof SheetHeader>;

export default function DrawerHeader({
  title,
  description,
  featuredIcon,
  align = "left",
  decorativeProps,
  divider = false,
  buttonPadding = true,
  ...props
}: DrawerHeaderProps) {
  return (
    <SheetHeader
      className={cn(divider && "border-b border-border-secondary")}
      {...props}
    >
      <div
        className={cn(
          "flex flex-col gap-4 p-6",
          align === "horizontal" && "flex-row",
          !buttonPadding ? "pb-0" : "pb-5"
        )}
      >
        <div
          className={cn(
            "flex w-full h-fit",
            align === "center" && "justify-center",
            align === "horizontal" && "justify-start w-fit"
          )}
        >
          {featuredIcon?.icon && <FeaturedIcon {...featuredIcon} />}
          {decorativeProps && (
            <Decorative
              className="-z-10"
              imageProps={{
                className: cn(
                  "top-12 left-12",
                  align === "center" && "left-1/2 top-12"
                ),
              }}
              {...decorativeProps}
            />
          )}
        </div>
        <div
          className={cn(
            "flex flex-col gap-1",
            align === "center" && "items-center"
          )}
        >
          {title && (
            <DialogTitle
              className={cn("z-20", align === "center" && "text-center")}
            >
              {title}
            </DialogTitle>
          )}
          {description && (
            <DialogDescription
              className={cn("z-20", align === "center" && "text-center")}
            >
              {description}
            </DialogDescription>
          )}
        </div>
      </div>
    </SheetHeader>
  );
}
