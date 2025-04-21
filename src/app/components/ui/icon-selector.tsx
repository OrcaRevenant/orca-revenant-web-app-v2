import { IconMap, SupportedIcons } from "@/icons";
import { cn } from "@/lib/utils";

export type IconSelectorProps = {
  icon: SupportedIcons;
  size?: number | string;
  dir?: `rtl` | `ltr`;
  className?: string;
} & React.ComponentProps<"svg">;

export default function IconSelector({
  icon,
  size = 20,
  dir = `ltr`,
  className,
  ...rest
}: IconSelectorProps) {
  const selectedIcon = IconMap[icon];

  if (!selectedIcon) return null;

  const IconComponent = selectedIcon;

  return (
    <IconComponent
      {...rest}
      className={cn("shrink-0", dir === "rtl" && "scale-x-[-1]", className)}
      style={{
        width: size,
        height: size,
      }}
    />
  );
}
