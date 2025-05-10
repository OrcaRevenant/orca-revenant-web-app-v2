"use client";

import Button from "@/app/components/button";
import IconSelector from "@/app/components/icon-selector";
import PaperWithTitle from "@/app/components/paper-with-title";
import TransactionType from "./transaction-type";
import TransactionDate from "./transaction-date";
import TransactionAsset from "./transaction-asset";
import TransactionConnection from "./transaction-connection";
import { Transaction, useTransactions } from "@/api";
import { DataTable } from "@/app/components/data-table/data-table";
import { ColumnDef } from "@tanstack/react-table";

export default function TransactionsTable() {
  const { data: transactions, isPending } = useTransactions({
    limit: 10,
    page: 1,
  });

  const columns: ColumnDef<Transaction>[] = [
    {
      id: "type",
      header: "Type",
      cell: ({ row }) => <TransactionType />,
    },
    {
      id: "date",
      header: "Date",
      cell: ({ row }) => <TransactionDate />,
    },
    {
      id: "value",
      header: "Value",
      cell: ({ row }) => <TransactionAsset />,
    },
    {
      id: "exchange",
      header: "Exchange",
      meta: {
        align: "right",
        width: "75%",
      },
      cell: ({ row }) => <TransactionConnection />,
    },
  ];

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
      <DataTable<Transaction>
        columns={columns}
        data={transactions?.data || []}
        isLoading={isPending}
        loadingRows={3}
      />
    </PaperWithTitle>
  );
}
