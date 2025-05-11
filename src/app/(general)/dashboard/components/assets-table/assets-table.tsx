"use client";

import Button from "@/app/components/button";
import Fluctuation from "@/app/components/fluctuation";
import IconSelector from "@/app/components/icon-selector";
import PaperWithTitle from "@/app/components/paper-with-title";
import Typography from "@/app/components/typography";
import DataTable from "@/app/components/data-table/data-table";
import { ColumnDef } from "@tanstack/react-table";
import { Asset, useAssets } from "@/api";
import Skeleton from "@/app/components/skeleton";
import Amount from "@/app/components/amount";
import QuotedAmount from "@/app/components/quoted-amount";
import AssetLogo from "@/app/components/asset-logo";

export default function AssetsTable() {
  const { data: assets, isPending } = useAssets();

  const columns: ColumnDef<Asset>[] = [
    {
      id: "index",
      header: "#",
      meta: {
        align: "center",
        width: "0",
        skeleton: <Skeleton className="h-4 w-4" />,
      },
      cell: ({ row }) => (
        <Typography variant="small" color="tertiary">
          {row.index + 1}
        </Typography>
      ),
    },
    {
      id: "name",
      header: "Name",
      cell: ({ row }) => (
        <div className="flex items-center space-x-3">
          <AssetLogo shortName={row.original.shortName} />

          <div>
            <Typography variant="small" weight="medium">
              {row.original.name}
            </Typography>
            <Typography variant="small" color="tertiary">
              {row.original.shortName.toUpperCase()}
            </Typography>
          </div>
        </div>
      ),
    },
    {
      id: "price",
      header: "Value",
      cell: ({ row }) => (
        <div>
          <Amount
            amount={row.original.amount}
            variant="small"
            weight="medium"
          />
          <QuotedAmount
            amount={row.original.value}
            variant="small"
            color="tertiary"
          />
        </div>
      ),
    },
    {
      id: "change",
      header: "24 Change",
      meta: {
        align: "right",
        width: "75%",
        skeleton: <Skeleton className="h-4 w-15" />,
      },
      cell: ({ row }) => (
        <Fluctuation fluctuation={row.original.change.percentage} />
      ),
    },
  ];

  return (
    <PaperWithTitle
      title="Assets"
      disablePadding
      action={
        <Button variant={"primary"}>
          See More
          <IconSelector icon="ArrowRight" />
        </Button>
      }
    >
      <DataTable<Asset>
        columns={columns}
        isLoading={isPending}
        data={assets || []}
        emptyTitle="It’s like a desert"
        emptyDescription="We couldn't find any asset in your portfolio"
        loadingRows={3}
      />
    </PaperWithTitle>
  );
}
