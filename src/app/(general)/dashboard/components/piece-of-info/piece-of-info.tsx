import Paper from "@/app/components/paper";
import Typography from "@/app/components/typography";

export default function PieceOfInfo() {
  return (
    <Paper className="flex flex-row space-x-4">
      <div className="size-10 bg-utility-brand-500 rounded-full"></div>
      <div className="space-y-2">
        <Typography variant="small" weight="semibold" color="tertiary">
          Main Token
        </Typography>
        <Typography variant={"displaySmall"} weight={"semibold"}>
          Solana
        </Typography>
      </div>
    </Paper>
  );
}
