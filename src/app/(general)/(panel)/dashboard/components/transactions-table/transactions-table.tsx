"use client";

import { Transaction, useTransactions } from "@/api";
import Button from "@/app/components/button";
import DataTable from "@/app/components/data-table/data-table";
import IconSelector from "@/app/components/icon-selector";
import PaperWithTitle from "@/app/components/paper-with-title";
import { ColumnDef } from "@tanstack/react-table";
import Link from "next/link";
import { useState } from "react";
import TransactionAsset from "./transaction-asset";
import TransactionConnection from "./transaction-connection";
import TransactionDate from "./transaction-date";
import TransactionType from "./transaction-type";

export type TransactionsTableProps = {
  preview?: boolean;
};

export default function TransactionsTable({ preview }: TransactionsTableProps) {
  const [page] = useState(1);
  const [limit] = useState(10);
  const { data: transactions, isPending } = useTransactions({
    limit,
    page,
  });

  const columns: ColumnDef<Transaction>[] = [
    {
      id: "type",
      header: "Type",
      cell: ({ row }) => <TransactionType type={row.original.type} />,
    },
    {
      id: "date",
      header: "Date",
      cell: ({ row }) => <TransactionDate date={row.original.createdAt} />,
    },
    {
      id: "value",
      header: "Value",
      meta: {
        width: "50%",
      },
      cell: ({ row }) => (
        <TransactionAsset
          assetShortName={row.original.asset.shortName}
          assetName={row.original.asset.name}
          amount={row.original.amount}
        />
      ),
    },
    {
      id: "exchange",
      header: "Exchange",
      meta: {
        width: "50%",
      },
      cell: ({ row }) => (
        <TransactionConnection
          connectionName={row.original.portfolio.connection}
        />
      ),
    },
  ];

  return (
    <PaperWithTitle
      title="Transactions"
      disablePadding
      action={
        preview && (
          <Link href={"/transactions"}>
            <Button variant={"primary"}>
              See More
              <IconSelector icon="ArrowRight" />
            </Button>
          </Link>
        )
      }
    >
      <DataTable<Transaction>
        columns={columns}
        data={transactions?.data || []}
        isLoading={isPending}
        loadingRows={3}
        emptyTitle="It’s like a desert"
        emptyDescription="We couldn't find any transaction in your portfolio"
      />
    </PaperWithTitle>
  );
}
