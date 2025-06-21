import Typography from "@/app/components/typography";
import dayjs from "dayjs";

export type TransactionDateProps = {
  date: string;
};

export default function TransactionDate({ date }: TransactionDateProps) {
  return (
    <div>
      <Typography variant="small" color="primary">
        {dayjs(date).format("DD.MM.YYYY")}
      </Typography>
      <Typography variant="small" color="tertiary">
        {dayjs(date).format("HH:mm")}
      </Typography>
    </div>
  );
}
