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
      cell: () => (
        <div className="flex items-center space-x-3">
          <Avatar className="size-10">
            <AvatarImage
              src={
                "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgdmlld0JveD0iMCAwIDUwIDUwIj48Y2lyY2xlIGN4PSIyNSIgY3k9IjI1IiByPSIyNSIgZmlsbD0iI2Y3OTMxYSIvPjxwYXRoIGQ9Ik0zMS42NDQsMTguNTMxYy40OTEtMy4yNzUtMi01LjAzNi01LjQxNC02LjIxMWwxLjEwNi00LjQzNy0yLjctLjY3Mi0xLjA3OCw0LjMyYy0uNzA5LS4xNzgtMS40MzctLjM0NC0yLjE2NC0uNTA5TDIyLjQ4LDYuNjczLDE5Ljc4LDZsLTEuMTA2LDQuNDM2Yy0uNTg4LS4xMzQtMS4xNjYtLjI2Ni0xLjcyNS0uNDA2bDAtLjAxNC0zLjcyNS0uOTMtLjcxOSwyLjg4NHMyLC40NTksMS45NjMuNDg4YTEuNDM3LDEuNDM3LDAsMCwxLDEuMjU4LDEuNTcyTDE0LjQ3LDE5LjA4NGEyLjQsMi40LDAsMCwxLC4yODEuMDg5bC0uMjg2LS4wN0wxMi43LDI2LjE4NGEuOTg1Ljk4NSwwLDAsMS0xLjIzOS42NDFjLjAyOC4wMzktMS45NjItLjQ4OS0xLjk2Mi0uNDg5TDguMTU3LDI5LjQyN2wzLjUxNi44NzdjLjY1My4xNjQsMS4yOTQuMzM2LDEuOTIzLjVsLTEuMTE3LDQuNDg3LDIuNy42NzIsMS4xMDYtNC40MzdjLjczNy4yLDEuNDUzLjM4MywyLjE1My41NThsLTEuMSw0LjQxOSwyLjcuNjcyLDEuMTE3LTQuNDc4YzQuNjA2Ljg3Miw4LjA2OS41Miw5LjUyNy0zLjY0NSwxLjE3NS0zLjM1My0uMDU4LTUuMjg5LTIuNDgxLTYuNTVhNC4zMDUsNC4zMDUsMCwwLDAsMy40NDgtMy45NjZabS02LjE3Miw4LjY1M2MtLjgzMywzLjM1NS02LjQ4MSwxLjU0MS04LjMxMiwxLjA4NmwxLjQ4NC01Ljk0NUMyMC40NzYsMjIuNzgzLDI2LjM0NiwyMy42ODgsMjUuNDczLDI3LjE4NFptLjgzNi04LjdjLS43NjEsMy4wNTItNS40NjEsMS41LTYuOTg0LDEuMTJsMS4zNDQtNS4zOTFjMS41MjMuMzgsNi40MzQsMS4wODcsNS42NDEsNC4yN1oiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQuNTg4IDMuMzc1KSIgZmlsbD0iI2ZmZiIvPjwvc3ZnPgo="
              }
              alt="btc"
            />
            <AvatarFallback>BTC</AvatarFallback>
          </Avatar>

          <div>
            <Typography variant="small" weight="medium">
              Bitcoin
            </Typography>
            <Typography variant="small" color="tertiary">
              BTC
            </Typography>
          </div>
        </div>
      ),
    },
    {
      id: "price",
      header: "Value",
      cell: () => (
        <div>
          <Typography variant="small" weight="medium">
            0.0202
          </Typography>
          <Typography variant="small" color="tertiary">
            $ 20,046.00
          </Typography>
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
