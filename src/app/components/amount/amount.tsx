import { cn } from "@/lib/utils";
import { TypographyProps } from "../typography";
import Typography from "../typography";
import { numberFormat } from "./utils";

export type AmountProps = {
  amount?: number | string;
  maxPrecision?: number;
  minPrecision?: number;
  prefix?: string;
  suffix?: string;
  disabledSuffix?: boolean;
  disabledPrefix?: boolean;
} & TypographyProps<"p">;

export default function Amount({
  amount = 0,
  maxPrecision = 8,
  minPrecision = 2,
  disabledSuffix = false,
  disabledPrefix = false,
  prefix,
  suffix,
  className,
  ...rest
}: AmountProps) {
  const invalidAmount = amount === undefined || amount === null;

  return (
    <Typography className={cn("whitespace-nowrap", className)} {...rest}>
      {!invalidAmount && prefix && !disabledPrefix && (
        <Typography variant="inherit" color="inherit" as={`span`}>
          {prefix}
        </Typography>
      )}

      {invalidAmount
        ? `-`
        : numberFormat(amount, {
            maximumFractionDigits: maxPrecision,
            roundingMode: `trunc`,
            minimumFractionDigits:
              minPrecision > maxPrecision ? maxPrecision : minPrecision,
          })}

      {!invalidAmount && suffix && !disabledSuffix && (
        <Typography variant="inherit" color="inherit" as={`span`}>
          {suffix}
        </Typography>
      )}
    </Typography>
  );
}
