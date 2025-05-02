import Typography from "@/app/components/typography";

export default function TransactionConnection() {
  return (
    <div className="flex flex-row items-center gap-3">
      <div className="size-10 bg-bg-success-solid rounded-md"></div>
      <Typography variant="small" weight="medium">
        Binance
      </Typography>
    </div>
  );
}
