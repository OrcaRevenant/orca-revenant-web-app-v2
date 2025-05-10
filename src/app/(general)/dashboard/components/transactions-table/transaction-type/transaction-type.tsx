import { TransactionType as TransactionTypeEnum } from "@/api";
import FeaturedIcon from "@/app/components/featured-icon";
import Typography from "@/app/components/typography";
import toPascalCase from "@/app/utils/to-pascal-case";

type TransactionTypeProps = {
  type: TransactionTypeEnum;
};

export default function TransactionType({ type }: TransactionTypeProps) {
  const isIn = type === "buy" || type === "deposit";

  return (
    <div className="flex flex-row items-center gap-3">
      <FeaturedIcon
        icon={isIn ? "ArrowDown" : "ArrowUp"}
        color={isIn ? "success" : "error"}
        variant="dark"
      />
      <Typography variant="small" weight="medium">
        {toPascalCase(type)}
      </Typography>
    </div>
  );
}
