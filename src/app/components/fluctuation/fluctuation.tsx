import Badge, { BadgeProps } from "../badge";
import IconSelector from "../icon-selector";
import Percentage from "../percentage";

export type FluctuationProps = {
  fluctuation?: number | string;
} & BadgeProps;

export default function Fluctuation({
  fluctuation = 0,
  ...rest
}: FluctuationProps) {
  const isPositive = +fluctuation > 0;
  return (
    <Badge size={"sm"} color={isPositive ? "success" : "error"} {...rest}>
      <IconSelector icon={isPositive ? "TrendUp01" : "TrendDown01"} />
      <Percentage variant={"inherit"} percentage={fluctuation} />
    </Badge>
  );
}
