import { SupportedSocials } from "@/icons/socials";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";
import SocialIconSelector from "../social-icon-selector";
import Typography from "../typography";

export const socialButtonVariants = cva(
  "inline-flex items-center justify-center gap-1 min-w-[112px] whitespace-nowrap transition-all h-[44px] rounded-md px-4 py-2.5 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive font-semibold cursor-pointer bg-bg-primary border-border-primary border text-text-secondary hover:bg-bg-primary-hover hover:text-text-secondary-hover hover:border-button-secondary-border-hover focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-button-primary-bg focus:ring-offset-bg-primary"
);

export default function SocialButton({
  className,
  icon,
  label,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof socialButtonVariants> & {
    icon: SupportedSocials;
    label?: string;
  }) {
  return (
    <button
      data-slot="social-button"
      className={cn(socialButtonVariants({ className }))}
      {...props}
    >
      <SocialIconSelector icon={icon} />
      {label && (
        <Typography variant="medium" weight="medium" color="secondary">
          {label}
        </Typography>
      )}
    </button>
  );
}
