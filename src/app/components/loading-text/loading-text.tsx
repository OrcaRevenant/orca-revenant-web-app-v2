import { cn } from "@/lib/utils";
import Typography, { TypographyProps } from "../typography";

type LoadingTextProps = TypographyProps;

export default function LoadingText({
  children = "Loading",
  className,
  ...props
}: LoadingTextProps) {
  return (
    <Typography
      as="div"
      className={cn("inline-flex items-center", className)}
      {...props}
    >
      {children}
      <span className="ml-1 inline-flex">
        <span className="animate-[caret-blink_1s_infinite_0ms]">.</span>
        <span className="animate-[caret-blink_1s_infinite_200ms]">.</span>
        <span className="animate-[caret-blink_1s_infinite_400ms]">.</span>
      </span>
    </Typography>
  );
}
