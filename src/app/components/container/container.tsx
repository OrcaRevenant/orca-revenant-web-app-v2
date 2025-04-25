import { cn } from "@/lib/utils";
import { HTMLAttributes, forwardRef } from "react";

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  maxWidth?:
    | "xxs"
    | "xs"
    | "sm"
    | "md"
    | "lg"
    | "xl"
    | "2xl"
    | "3xl"
    | "4xl"
    | "5xl"
    | "6xl"
    | false;
  fixed?: boolean;
}

const maxWidthClasses = {
  xxs: "max-w-[320px]",
  xs: "max-w-[384px]",
  sm: "max-w-[480px]",
  md: "max-w-[560px]",
  lg: "max-w-[640px]",
  xl: "max-w-[768px]",
  "2xl": "max-w-[1024px]",
  "3xl": "max-w-[1280px]",
  "4xl": "max-w-[1440px]",
  "5xl": "max-w-[1600px]",
  "6xl": "max-w-[1920px]",
  false: "max-w-none",
};

export const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, maxWidth = "lg", children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "w-full mx-auto",
          maxWidth !== false && maxWidthClasses[maxWidth],
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Container.displayName = "Container"; 