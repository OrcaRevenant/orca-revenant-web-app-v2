import { cn } from "@/lib/utils";
import Amount, { AmountProps } from "../amount";

export type PercentageProps = {
  percentage?: number | string;
  disableColorEffect?: boolean;
} & Omit<AmountProps, `amount`>;

export default function Percentage({
  percentage = 0,
  disableColorEffect,
  ...rest
}: PercentageProps) {
  const colorEffect =
    +percentage > 0 ? `text-text-success-primary` : `text-text-error-primary`;

  return (
    <Amount
      amount={percentage}
      suffix="%"
      className={cn(!disableColorEffect ? colorEffect : `unset`)}
      {...rest}
    />
  );
}
