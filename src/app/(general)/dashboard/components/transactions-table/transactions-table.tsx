import Button from "@/app/components/button";
import IconSelector from "@/app/components/icon-selector";
import PaperWithTitle from "@/app/components/paper-with-title";
import Table from "@/app/components/table";
import TableBody from "@/app/components/table/table-body";
import TableCell from "@/app/components/table/table-cell";
import TableHead from "@/app/components/table/table-head";
import TableHeader from "@/app/components/table/table-header";
import TableRow from "@/app/components/table/table-row";
import TransactionType from "./transaction-type";
import TransactionDate from "./transaction-date";
import TransactionAsset from "./transaction-asset";
import TransactionConnection from "./transaction-connection";

export type TransactionsTableProps = {
  transactions: {
    id: string;
    type: string;
    date: string;
    asset: string;
    connection: string;
  }[];
};
export default function TransactionsTable({
  transactions,
}: TransactionsTableProps) {
  return (
    <PaperWithTitle
      title="Transactions"
      disablePadding
      action={
        <Button variant={"primary"}>
          See More
          <IconSelector icon="ArrowRight" />
        </Button>
      }
    >
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-0">Type</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Value</TableHead>
            <TableHead className="w-3/5 text-right">Exchange</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {transactions.map((transaction) => (
            <TableRow key={transaction.id}>
              <TableCell color={"tertiary"}>
                <TransactionType />
              </TableCell>
              <TableCell>
                <TransactionDate />
              </TableCell>
              <TableCell>
                <TransactionAsset />
              </TableCell>
              <TableCell align="right">
                <TransactionConnection />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </PaperWithTitle>
  );
}
