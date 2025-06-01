import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import Paper, { PaperProps } from "../paper";
import Typography from "../typography";

const paperWithTitleVariants = cva("flex flex-col", {
  variants: {
    compact: {
      true: "space-y-2",
      false: "space-y-8",
    },
    color: {
      default: "[&_[data-slot=title]]:text-primary",
      tertiary: "[&_[data-slot=title]]:text-text-tertiary",
    },
  },
  defaultVariants: {
    compact: false,
    color: "default",
  },
});

export type PaperWithTitleProps = {
  title: string;
  action?: React.ReactNode;
} & Omit<PaperProps, "color"> &
  VariantProps<typeof paperWithTitleVariants>;

export default function PaperWithTitle({
  title,
  action,
  children,
  className,
  disablePadding,
  compact,
  color,
  ...props
}: PaperWithTitleProps) {
  return (
    <Paper
      data-slot="paper-with-title"
      className={cn(paperWithTitleVariants({ compact, color, className }))}
      disablePadding={disablePadding}
      {...props}
    >
      <div className={cn("p-5 pb-3", !disablePadding && "p-0")}>
        <div className="flex flex-row items-center justify-between">
          <Typography
            data-slot="paper-with-title-title"
            weight={compact ? "medium" : "semibold"}
            variant={compact ? "small" : "large"}
          >
            {title}
          </Typography>
          {action}
        </div>
      </div>

      <div className="flex-1 flex flex-col">{children}</div>
    </Paper>
  );
}
