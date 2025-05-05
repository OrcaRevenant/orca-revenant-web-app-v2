import { cva, VariantProps } from "class-variance-authority";
import { HTMLAttributes } from "react";

const paperVariants = cva(
  "bg-bg-primary w-full p-5 rounded-xl border border-border-secondary shadow-xs",
  {
    variants: {
      color: {
        primary: "bg-bg-primary",
        secondary: "bg-bg-secondary",
      },
      disablePadding: {
        true: "p-0",
      },
    },
    defaultVariants: {
      color: "primary",
      disablePadding: false,
    },
  }
);

export type PaperProps = VariantProps<typeof paperVariants> &
  HTMLAttributes<HTMLDivElement>;

export default function Paper({
  children,
  className,
  color,
  disablePadding,
  ...props
}: PaperProps) {
  return (
    <div
      className={paperVariants({
        color,
        disablePadding,
        className,
      })}
      {...props}
    >
      {children}
    </div>
  );
}
