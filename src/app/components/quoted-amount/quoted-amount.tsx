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
    config: { quoteCurrency },
  } = useControlPanel();

  return (
    <Amount
      {...rest}
      maxPrecision={quoteCurrency.percision}
      prefix={
        quoteCurrency.options?.align === `right`
          ? ``
          : addSpace(quoteCurrency.symbol, `end`, quoteCurrency.options?.space)
      }
      suffix={
        quoteCurrency.options?.align === `right`
          ? addSpace(quoteCurrency.symbol, `start`, quoteCurrency.options?.space)
          : ``
      }
    />
  );
}
