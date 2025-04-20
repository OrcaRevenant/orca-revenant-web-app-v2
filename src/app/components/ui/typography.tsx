import { cn } from "@/lib/utils";
import { ElementType, PropsWithChildren } from "react";

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
  | "brand"
  | "error"
  | "warning"
  | "success"
  | "white"
  | "disabled";

export type TypographyWeight = "normal" | "medium" | "semibold" | "bold";

export type TypographyAlign = "left" | "center" | "right" | "justify";

export type TypographyProps = PropsWithChildren<{
  variant: TypographyVariant;
  color?: TypographyColor;
  weight?: TypographyWeight;
  align?: TypographyAlign;
  truncate?: boolean;
  className?: string;
}>;

const variantStyles: Record<TypographyVariant, string> = {
  Display2XLarge: "display-2xl",
  DisplayXLarge: "display-xl",
  DisplayLarge: "display-lg",
  DisplayMedium: "display-md",
  DisplaySmall: "display-sm",
  DisplayXSmall: "display-xs",
  XLarge: "xl",
  Large: "lg",
  Medium: "md",
  Small: "sm",
  XSmall: "xs",
};

const colorStyles: Record<TypographyColor, string> = {
  primary: "text-text-primary",
  secondary: "text-text-secondary",
  tertiary: "text-text-tertiary",
  brand: "text-text-brand-primary",
  error: "text-text-error-primary",
  warning: "text-text-warning-primary",
  success: "text-text-success-primary",
  white: "text-text-white",
  disabled: "text-text-disabled",
};

const weightStyles: Record<TypographyWeight, string> = {
  normal: "font-normal",
  medium: "font-medium",
  semibold: "font-semibold",
  bold: "font-bold",
};

const alignStyles: Record<TypographyAlign, string> = {
  left: "text-left",
  center: "text-center",
  right: "text-right",
  justify: "text-justify",
};

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

export default function Typography({
  variant,
  color = "primary",
  weight = "normal",
  align = "left",
  truncate = false,
  children,
  className,
}: TypographyProps) {
  const Element = variantElements[variant];
  const baseStyles = variantStyles[variant];
  const colorStyle = colorStyles[color];
  const weightStyle = weightStyles[weight];
  const alignStyle = alignStyles[align];

  return (
    <Element
      className={cn(
        baseStyles,
        colorStyle,
        weightStyle,
        alignStyle,
        truncate && "truncate",
        className
      )}
    >
      {children}
    </Element>
  );
}
