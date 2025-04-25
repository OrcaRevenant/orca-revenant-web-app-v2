import { cn } from "@/lib/utils";
import { ElementType, forwardRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";

export type TypographyVariant =
  | "Display2XLarge"
  | "DisplayXLarge"
  | "DisplayLarge"
  | "DisplayMedium"
  | "DisplaySmall"
  | "DisplayXSmall"
  | "XLarge"
  | "Large"
  | "Medium"
  | "Small"
  | "XSmall";

export type TypographyColor =
  | "primary"
  | "secondary"
  | "tertiary"
  | "quaternary"
  | "brand"
  | "error"
  | "warning"
  | "success"
  | "white"
  | "disabled";

export type TypographyWeight = "normal" | "medium" | "semibold" | "bold";

export type TypographyAlign = "left" | "center" | "right" | "justify";

const variantElements: Record<TypographyVariant, ElementType> = {
  Display2XLarge: "h1",
  DisplayXLarge: "h2",
  DisplayLarge: "h3",
  DisplayMedium: "h4",
  DisplaySmall: "h5",
  DisplayXSmall: "h6",
  XLarge: "p",
  Large: "p",
  Medium: "p",
  Small: "p",
  XSmall: "p",
};

export const typographyVariants = cva("", {
  variants: {
    variant: {
      display2XLarge: "display-2xl",
      displayXLarge: "display-xl",
      displayLarge: "display-lg",
      displayMedium: "display-md",
      displaySmall: "display-sm",
      displayXSmall: "display-xs",
      xLarge: "xl",
      large: "lg",
      medium: "md",
      small: "sm",
      xSmall: "xs",
    },
    color: {
      primary: "text-text-primary",
      secondary: "text-text-secondary",
      tertiary: "text-text-tertiary",
      quaternary: "text-text-quaternary",
      brand: "text-text-brand-primary",
      error: "text-text-error-primary",
      warning: "text-text-warning-primary",
      success: "text-text-success-primary",
      white: "text-text-white",
      disabled: "text-text-disabled",
    },
    weight: {
      normal: "font-normal",
      medium: "font-medium",
      semibold: "font-semibold",
      bold: "font-bold",
    },
    align: {
      left: "text-left",
      center: "text-center",
      right: "text-right",
      justify: "text-justify",
    },
    truncate: {
      true: "truncate",
    },
  },
  defaultVariants: {
    variant: "medium",
    color: "primary",
    weight: "normal",
    align: "left",
    truncate: false,
  },
});

export interface TypographyProps
  extends VariantProps<typeof typographyVariants>,
    Omit<React.HTMLAttributes<HTMLElement>, "color"> {
  children: React.ReactNode;
}

const Typography = forwardRef<HTMLElement, TypographyProps>(
  (
    {
      variant = "medium",
      color = "primary",
      weight = "normal",
      align = "left",
      truncate = false,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const Element = variantElements[variant as TypographyVariant];

    return (
      <Element
        ref={ref}
        className={cn(
          typographyVariants({
            variant,
            color,
            weight,
            align,
            truncate,
            className,
          })
        )}
        {...props}
      >
        {children}
      </Element>
    );
  }
);

Typography.displayName = "Typography";

export default Typography;
