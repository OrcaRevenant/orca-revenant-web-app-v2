import { cn } from "@/lib/utils";
import safeForwardRef from "@/utils/safe-forward-ref";
import { cva, type VariantProps } from "class-variance-authority";
import { PropsWithoutRef } from "react";

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
      inherit: "text-inherit",
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
      inherit: "text-inherit",
    },
    weight: {
      normal: "font-normal",
      medium: "font-medium",
      semibold: "font-semibold",
      bold: "font-bold",
      inherit: "font-inherit",
    },
    truncate: {
      true: "truncate",
    },
  },
  defaultVariants: {
    variant: "medium",
    color: "primary",
    weight: "normal",
    truncate: false,
  },
});

type AsProp<E extends React.ElementType> = {
  as?: E;
};

type PropsToOmit<E extends React.ElementType, P> = keyof (AsProp<E> & P);

export type PolymorphicComponentProps<
  E extends React.ElementType,
  Props = object
> = React.PropsWithChildren<Props & AsProp<E>> &
  Omit<React.ComponentPropsWithoutRef<E>, PropsToOmit<E, Props>>;

export type PolymorphicRef<E extends React.ElementType> =
  React.ComponentPropsWithRef<E>["ref"];

export type PolymorphicComponentPropsWithRef<
  E extends React.ElementType,
  Props = object
> = PolymorphicComponentProps<E, Props> & { ref?: PolymorphicRef<E> };

export type TypographyProps<E extends React.ElementType = React.ElementType> =
  PolymorphicComponentPropsWithRef<E, VariantProps<typeof typographyVariants>>;

type TypographyComponent = <E extends React.ElementType = `p`>(
  props: TypographyProps<E>
) => React.ReactNode;

const Typography: TypographyComponent = safeForwardRef(
  "Typography",
  <E extends React.ElementType = "p">(
    {
      as,
      variant,
      color = "primary",
      weight,
      truncate,
      className,
      children,
      ...props
    }: PropsWithoutRef<TypographyProps<E>>,
    ref: PolymorphicRef<E>
  ) => {
    const Element = as || "p";

    return (
      <Element
        ref={ref}
        className={cn(
          typographyVariants({
            variant,
            color,
            weight,
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

export default Typography;
