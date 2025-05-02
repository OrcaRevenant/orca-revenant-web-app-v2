import Badge, { BadgeProps } from "../badge";
import IconSelector from "../icon-selector";
import Typography from "../typography";

export type FluctuationProps = BadgeProps;

export default function Fluctuation({ ...rest }: FluctuationProps) {
  return (
    <Badge size={"sm"} color="success" {...rest}>
      <IconSelector icon="TrendUp01" />
      <Typography variant={"inherit"} color={"success"}>
        + 12%
      </Typography>
    </Badge>
  );
}
