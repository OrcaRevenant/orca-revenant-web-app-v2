"use client";

import { useControlPanel } from "@/providers/control-provider";
import Amount, { AmountProps } from "../amount";

export type QuotedAmountProps = AmountProps;

function addSpace(
  text: string,
  position: "start" | "end",
  shouldAddSpace?: boolean
): string {
  if (!shouldAddSpace) return text;
  return position === "start" ? ` ${text}` : `${text} `;
}

export default function QuotedAmount({ ...rest }: QuotedAmountProps) {
  const {
    config: { baseCurrency },
  } = useControlPanel();

  return (
    <Amount
      {...rest}
      maxPrecision={baseCurrency.percision}
      prefix={
        baseCurrency.options?.align === `right`
          ? ``
          : addSpace(baseCurrency.symbol, `end`, baseCurrency.options?.space)
      }
      suffix={
        baseCurrency.options?.align === `right`
          ? addSpace(baseCurrency.symbol, `start`, baseCurrency.options?.space)
          : ``
      }
    />
  );
}
