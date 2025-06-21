import PageHeader from "../components/page-header";
import TransactionsTable from "../dashboard/components/transactions-table";

export default function TransactionsPage() {
  return (
    <div className="space-y-5">
      <PageHeader
        title="Transactions"
        description="View all your transactions here."
      />
      <TransactionsTable />
    </div>
  );
}
