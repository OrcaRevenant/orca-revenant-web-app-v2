import IconSelector from "@/app/components/icon-selector";
import Typography from "@/app/components/typography";
import { SupportedIcons } from "@/icons";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import { PropsWithChildren } from "react";

export const hintBoxVariants = cva("flex flex-col", {
  variants: {
    headless: {
      true: "",
      false: "",
    },
  },
  defaultVariants: {
    headless: false,
  },
});

export const hintBoxHeaderVariants = cva(
  "bg-bg-quaternary rounded-t-md border-b border-border-secondary py-2.5 px-4 flex flex-row justify-between items-center gap-2",
  {
    variants: {
      iconPosition: {
        left: "",
        right: "",
      },
    },
    defaultVariants: {
      iconPosition: "right",
    },
  }
);

export const hintBoxContentVariants = cva("px-4 py-2 bg-bg-tertiary", {
  variants: {
    headless: {
      true: "rounded-md",
      false: "rounded-b-md",
    },
  },
  defaultVariants: {
    headless: false,
  },
});

export type HintBoxProps = {
  title?: string;
  icon?: SupportedIcons;
  iconPosition?: "left" | "right";
  iconProps?: React.ComponentProps<typeof IconSelector>;
  headless?: boolean;
} & React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof hintBoxVariants>;

export default function HintBox({
  title,
  icon,
  iconPosition = "right",
  headless = false,
  iconProps,
  children,
  className,
  ...props
}: PropsWithChildren<HintBoxProps>) {
  return (
    <div className={cn(hintBoxVariants({ headless, className }))} {...props}>
      {!headless && (
        <div className={hintBoxHeaderVariants({ iconPosition })}>
          {iconPosition === "left" && icon && (
            <IconSelector icon={icon} {...iconProps} />
          )}
          <Typography variant="small" weight={"semibold"} color={"primary"}>
            {title}
          </Typography>
          {iconPosition === "right" && icon && (
            <IconSelector icon={icon} {...iconProps} />
          )}
        </div>
      )}
      <div className={hintBoxContentVariants({ headless })}>{children}</div>
    </div>
  );
}
