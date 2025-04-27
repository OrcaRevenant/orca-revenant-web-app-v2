import { cn } from "@/lib/utils";
import Paper, { PaperProps } from "../paper";
import Typography from "../typography";

export type CardProps = {
  title: string;
  action?: React.ReactNode;
} & PaperProps;

export default function Card({
  title,
  action,
  children,
  className,
  disablePadding,
  ...props
}: CardProps) {
  return (
    <Paper
      className={cn("space-y-8", className)}
      disablePadding={disablePadding}
      {...props}
    >
      <div className={cn("p-5 pb-3", !disablePadding && "p-0")}>
        <div className="flex flex-row items-center justify-between">
          <Typography weight={"semibold"} variant={"large"}>
            {title}
          </Typography>
          {action}
        </div>
      </div>
      {children}
    </Paper>
  );
}
