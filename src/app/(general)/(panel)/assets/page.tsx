import PageHeader from "../components/page-header";
import AssetsTable from "../dashboard/components/assets-table";

export default function AssetsPage() {
  return (
    <div className="space-y-5">
      <PageHeader title="Assets" description="View all your assets here." />
      <AssetsTable />
    </div>
  );
}
