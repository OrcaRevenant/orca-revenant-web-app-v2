"use client";

import Avatar, { AvatarFallback, AvatarImage } from "@/app/components/avatar";
import Button from "@/app/components/button";
import Fluctuation from "@/app/components/fluctuation";
import IconSelector from "@/app/components/icon-selector";
import PaperWithTitle from "@/app/components/paper-with-title";
import Typography from "@/app/components/typography";
import { DataTable } from "@/app/components/data-table/data-table";
import { ColumnDef } from "@tanstack/react-table";
import { Asset, useAssets } from "@/api";
import Skeleton from "@/app/components/skeleton";
import Amount from "@/app/components/amount";
import QuotedAmount from "@/app/components/quoted-amount";

export default function AssetsTable() {
  const { data: assets, isPending } = useAssets();
  
  console.log(assets);

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
          <Avatar className="size-10">
            <AvatarImage src={row.original.logo} alt={row.original.name} />
            <AvatarFallback>{row.original.shortName}</AvatarFallback>
          </Avatar>

          <div>
            <Typography variant="small" weight="medium">
              {row.original.name}
            </Typography>
            <Typography variant="small" color="tertiary">
              {row.original.shortName}
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
      cell: () => <Fluctuation />,
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
        variant="bordered"
        size="default"
        loadingRows={3}
        sticky
      />
    </PaperWithTitle>
  );
}
