import { cn } from "@/lib/utils";
import FeaturedIcon from "../../featured-icon";
import { SupportedIcons } from "@/icons/icons";
import Decorative from "../../decorative";

export type DialogHeaderProps = {
  icon?: SupportedIcons;
  decorative?: boolean;
} & React.ComponentProps<"div">;

export default function DialogHeader({
  className,
  icon,
  decorative = true,
  children,
  ...props
}: DialogHeaderProps) {
  return (
    <div
      data-slot="dialog-header"
      className={cn("p-6 pb-5", className)}
      {...props}
    >
      <div className="space-y-4">
        {icon && (
          <div className="flex items-center w-fit relative justify-center">
            <FeaturedIcon variant="modern" icon={icon} />
            {decorative && (
              <Decorative
                size="sm"
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              />
            )}
          </div>
        )}
        <div className="space-y-2">{children}</div>
      </div>
    </div>
  );
}
