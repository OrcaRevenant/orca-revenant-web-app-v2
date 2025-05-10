import ConnectionLogo from "@/app/components/connection-logo";
import Typography from "@/app/components/typography";
import toPascalCase from "@/utils/to-pascal-case";

export type TransactionConnectionProps = {
  connectionName: string;
};

export default function TransactionConnection({
  connectionName,
}: TransactionConnectionProps) {
  return (
    <div className="flex flex-row w-fit items-center gap-3">
      <ConnectionLogo connectionName={connectionName} />
      <Typography variant="small" weight="medium">
        {toPascalCase(connectionName)}
      </Typography>
    </div>
  );
}
