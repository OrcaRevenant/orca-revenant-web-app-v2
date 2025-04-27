import Avatar, { AvatarFallback, AvatarImage } from "@/app/components/avatar";
import Badge from "@/app/components/badge";
import Button from "@/app/components/button";
import Card from "@/app/components/card";
import IconSelector from "@/app/components/icon-selector";
import Table from "@/app/components/table";
import TableBody from "@/app/components/table/table-body";
import TableCell from "@/app/components/table/table-cell";
import TableHead from "@/app/components/table/table-head";
import TableHeader from "@/app/components/table/table-header";
import TableRow from "@/app/components/table/table-row";
import Typography from "@/app/components/typography";

export type AssetsTableProps = {
  assets: {
    name: string;
    price: number;
    change: number;
    marketCap: number;
    volume: number;
  }[];
};
export default function AssetsTable({ assets }: AssetsTableProps) {
  return (
    <Card
      title="Assets"
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
            <TableHead className="w-0">#</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Value</TableHead>
            <TableHead className="w-3/5 text-right">24 Change</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {assets.map((asset, index) => (
            <TableRow key={asset.name}>
              <TableCell color={"tertiary"}>{index + 1}</TableCell>
              <TableCell>
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
              </TableCell>
              <TableCell>
                <div>
                  <Typography variant="small" weight="medium">
                    0.0202
                  </Typography>
                  <Typography variant="small" color="tertiary">
                    $ 20,046.00
                  </Typography>
                </div>
              </TableCell>
              <TableCell align="right">
                <Badge size={"sm"} color="success">
                  <IconSelector icon="TrendUp01" />
                  <Typography variant={"inherit"} color={"success"}>
                    + 12%
                  </Typography>
                </Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
}
