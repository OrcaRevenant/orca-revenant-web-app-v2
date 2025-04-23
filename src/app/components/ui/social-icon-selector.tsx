import { SocialsMap, SupportedSocials } from "@/icons/socials";
import { cn } from "@/lib/utils";

export type SocialIconSelectorProps = {
  icon: SupportedSocials;
  size?: number | string;
  dir?: `rtl` | `ltr`;
  className?: string;
} & React.ComponentProps<"svg">;

export default function SocialIconSelector({
  icon,
  size = 20,
  dir = `ltr`,
  className,
  ...rest
}: SocialIconSelectorProps) {
  const selectedIcon = SocialsMap[icon];

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
