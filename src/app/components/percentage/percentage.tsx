import { cn } from "@/lib/utils";
import Amount, { AmountProps } from "../amount";

export type PercentageProps = {
  percentage?: number | string;
  disableColorEffect?: boolean;
  disableSign?: boolean;
} & Omit<AmountProps, `amount`>;

export default function Percentage({
  percentage = 0,
  disableColorEffect,
  disableSign,
  ...rest
}: PercentageProps) {
  const colorEffect =
    +percentage > 0 ? `text-text-success-primary` : `text-text-error-primary`;

  const isZero = +percentage === 0;

  return (
    <Amount
      amount={disableSign ? Math.abs(+percentage) : percentage}
      suffix="%"
      maxPrecision={2}
      className={cn(
        !disableColorEffect ? colorEffect : `unset`,
        isZero && `text-text-tertiary`
      )}
      {...rest}
    />
  );
}
