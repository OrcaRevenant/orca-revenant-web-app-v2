import Paper from "@/app/components/paper";
import Typography from "@/app/components/typography";

export type PieceOfInfoProps = {
  title: string;
  value: React.ReactNode;
  icon: React.ReactNode;
};

export default function PieceOfInfo({ title, value, icon }: PieceOfInfoProps) {
  return (
    <Paper className="flex flex-row space-x-4">
      {icon}
      <div className="space-y-2">
        <Typography variant="small" weight="semibold" color="tertiary">
          {title}
        </Typography>
        <Typography as="div" variant={"displaySmall"} weight={"semibold"}>
          {value}
        </Typography>
      </div>
    </Paper>
  );
}
