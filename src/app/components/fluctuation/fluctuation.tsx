import Badge, { BadgeProps } from "../badge";
import IconSelector from "../icon-selector";
import Percentage from "../percentage";

export type FluctuationProps = {
  fluctuation?: number | string;
  disableIcon?: boolean;
} & BadgeProps;

export default function Fluctuation({
  fluctuation = 0,
  disableIcon = false,
  ...rest
}: FluctuationProps) {
  const isPositive = +fluctuation > 0;
  const isZero = +fluctuation === 0;

  const getColor = () => {
    if (isZero) return "gray";
    return isPositive ? "success" : "error";
  };

  return (
    <Badge size={"sm"} color={getColor()} {...rest}>
      {!isZero && !disableIcon && (
        <IconSelector
          icon={
            isZero ? "FlexAlignTop" : isPositive ? "TrendUp01" : "TrendDown01"
          }
        />
      )}
      <Percentage
        disableSign={!disableIcon}
        variant={"inherit"}
        percentage={fluctuation}
      />
    </Badge>
  );
}
