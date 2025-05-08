import { SocialsMap, SupportedSocials } from "@/icons/socials";
import { cn } from "@/lib/utils";
import Image, { ImageProps } from "next/image";

export type SocialIconSelectorProps = {
  icon: SupportedSocials;
  dir?: `rtl` | `ltr`;
  className?: string;
} & React.ComponentProps<"svg">;

export default function SocialIconSelector({
  icon,
  dir = `ltr`,
  className,
  ...rest
}: SocialIconSelectorProps) {
  const selectedIcon = SocialsMap[icon];

  if (!selectedIcon) return null;

  return (
    <div
      className={cn(
        "shrink-0 relative size-5",
        dir === "rtl" && "scale-x-[-1]",
        className
      )}
    >
      <Image fill {...(rest as ImageProps)} src={selectedIcon} alt={icon} />
    </div>
  );
}
