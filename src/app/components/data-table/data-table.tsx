"use client";

import { ReactNode } from "react";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import Skeleton from "@/app/components/skeleton";
import { cva, type VariantProps } from "class-variance-authority";
import Table from "@/app/components/table";
import TableBody from "@/app/components/table/table-body";
import TableCell from "@/app/components/table/table-cell";
import TableHead from "@/app/components/table/table-head";
import TableHeader from "@/app/components/table/table-header";
import TableRow from "@/app/components/table/table-row";
import { cn } from "@/lib/utils";

export const dataTableVariants = cva("w-full", {
  variants: {
    variant: {
      default: "",
      bordered: "border border-border-secondary rounded-lg",
    },
    size: {
      default: "",
      compact: "[&_td]:py-2 [&_th]:py-2",
      spacious: "[&_td]:py-4 [&_th]:py-4",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

export const dataTableHeaderVariants = cva("", {
  variants: {
    sticky: {
      true: "sticky top-0 z-10 bg-bg-primary",
      false: "",
    },
  },
  defaultVariants: {
    sticky: false,
  },
});

export const dataTableRowVariants = cva("", {
  variants: {
    hoverable: {
      true: "hover:bg-muted/50 cursor-pointer",
      false: "",
    },
  },
  defaultVariants: {
    hoverable: false,
  },
});

type ColumnMeta = {
  align?: "left" | "center" | "right";
  width?: string | number;
  skeleton?: ReactNode;
};

export type DataTableProps<TData extends object> = {
  columns: ColumnDef<TData>[];
  data: TData[];
  isLoading?: boolean;
  loadingRows?: number;
  onRowClick?: (row: TData) => void;
  className?: string;
} & VariantProps<typeof dataTableVariants> &
  VariantProps<typeof dataTableHeaderVariants> &
  VariantProps<typeof dataTableRowVariants>;

export function DataTable<TData extends object>({
  columns,
  data,
  isLoading = false,
  loadingRows = 5,
  onRowClick,
  variant,
  size,
  sticky,
  className,
}: DataTableProps<TData>) {
  const loadingData = Array.from({ length: loadingRows }).map((_, i) => ({
    id: i,
  })) as TData[];

  const table = useReactTable({
    data: isLoading ? loadingData : data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className={cn(dataTableVariants({ variant, size }), className)}>
      <Table>
        <TableHeader className={dataTableHeaderVariants({ sticky })}>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                const meta = header.column.columnDef.meta as ColumnMeta;
                return (
                  <TableHead
                    key={header.id}
                    style={{
                      width: meta?.width,
                    }}
                    className={cn(
                      meta?.align === "right" && "text-right",
                      meta?.align === "center" && "text-center"
                    )}
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                );
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows.map((row) => (
            <TableRow
              key={row.id}
              onClick={() => onRowClick?.(row.original)}
              className={dataTableRowVariants({ hoverable: !!onRowClick })}
            >
              {row.getVisibleCells().map((cell) => {
                const meta = cell.column.columnDef.meta as ColumnMeta;
                return (
                  <TableCell
                    key={cell.id}
                    className={cn(
                      meta?.align === "right" && "text-right",
                      meta?.align === "center" && "text-center"
                    )}
                  >
                    {isLoading ? (
                      <div
                        className={cn(
                          meta?.align === "right" && "justify-self-end",
                          meta?.align === "center" && "justify-self-center"
                        )}
                      >
                        {meta?.skeleton || <Skeleton className="h-4 w-5" />}
                      </div>
                    ) : (
                      flexRender(cell.column.columnDef.cell, cell.getContext())
                    )}
                  </TableCell>
                );
              })}
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {!isLoading && data.length === 0 && null}
    </div>
  );
}
