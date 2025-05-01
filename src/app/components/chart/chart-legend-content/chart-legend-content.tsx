"use client";

import * as React from "react";
import * as RechartsPrimitive from "recharts";
import { cn } from "@/lib/utils";
import { useChart } from "../chart";
import { getPayloadConfigFromPayload } from "../utils";
import Typography from "../../typography";

export default function ChartLegendContent({
  className,
  hideIcon = false,
  payload,
  verticalAlign = "bottom",
  nameKey,
}: React.ComponentProps<"div"> &
  Pick<RechartsPrimitive.LegendProps, "payload" | "verticalAlign"> & {
    hideIcon?: boolean;
    nameKey?: string;
  }) {
  const { config } = useChart();

  if (!payload?.length) {
    return null;
  }

  return (
    <div
      className={cn(
        "flex items-center justify-center gap-4 flex-wrap",
        verticalAlign === "top" ? "pb-3" : "pt-4",
        className
      )}
    >
      {payload.map((item) => {
        const key = `${nameKey || item.dataKey || "value"}`;
        const itemConfig = getPayloadConfigFromPayload(config, item, key);

        return (
          <div
            key={item.value}
            className={cn("flex items-center gap-1.5 [&>svg]:h-3 [&>svg]:w-3")}
          >
            {itemConfig?.icon && !hideIcon ? (
              <itemConfig.icon />
            ) : (
              <div className="flex items-center gap-2">
                <div
                  className="size-4 rounded-full shrink-0"
                  style={{
                    backgroundColor: item.color,
                  }}
                />
                <Typography variant="xSmall">{item.value}</Typography>
              </div>
            )}
            {itemConfig?.label}
          </div>
        );
      })}
    </div>
  );
}
