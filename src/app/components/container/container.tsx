import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import { HTMLAttributes, forwardRef } from "react";

export const containerVariants = cva("w-full mx-auto", {
  variants: {
    maxWidth: {
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
    },
    fixed: {
      true: "",
      false: "",
    },
  },
  defaultVariants: {
    maxWidth: "lg",
    fixed: false,
  },
});

interface ContainerProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof containerVariants> {}

const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, maxWidth, fixed, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(containerVariants({ maxWidth, fixed, className }))}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Container.displayName = "Container";

export default Container;
