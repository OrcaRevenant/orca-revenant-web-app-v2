/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useControlPanel } from "@/providers/control-provider";
import {
  AreaSeries,
  ColorType,
  createChart,
  CrosshairMode,
  LineData,
  LineSeriesOptions,
  LineStyle,
  LineType,
  TimeChartOptions,
} from "lightweight-charts";
import { useEffect, useRef } from "react";
import { numberFormat } from "../amount/utils";

type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

export type TradingLineChartProps = {
  data: { time: number; value: number }[];
  options?: {
    line?: DeepPartial<LineSeriesOptions>;
    chart?: DeepPartial<TimeChartOptions>;
  };
};

export default function TradingLineChart({
  data,
  options,
}: TradingLineChartProps) {
  const chartContainerRef = useRef<HTMLElement>(null);
  const { config } = useControlPanel();

  const isEmpty = !data.length;

  useEffect(() => {
    if (isEmpty) return;

    const getComputedColor = (cssVar: string) => {
      if (typeof window === "undefined") return "";
      return getComputedStyle(document.documentElement)
        .getPropertyValue(cssVar)
        .trim();
    };

    const handleResize = () => {
      chart.applyOptions({ width: chartContainerRef.current!.clientWidth });
    };

    const chart = createChart(chartContainerRef.current!, {
      layout: {
        attributionLogo: false,
        background: { type: ColorType.Solid, color: `transparent` },
        textColor: getComputedColor("--text-tertiary"),
        fontFamily: getComputedColor("--font-montserrat"),
        fontSize: 12,
      } as any,
      crosshair: {
        mode: CrosshairMode.Magnet,
        horzLine: {
          visible: false,
        },
        vertLine: { visible: false, labelVisible: false },
      },
      grid: {
        horzLines: {
          visible: true,
          style: LineStyle.Solid,
          color: getComputedColor("--border-primary"),
        },
        vertLines: { visible: false },
      },
      rightPriceScale: {
        visible: false,
      },
      timeScale: {
        borderVisible: false,
        timeVisible: true,
      },

      autoSize: true,
      width: chartContainerRef.current!.clientWidth,
      height: chartContainerRef.current!.clientHeight,
      ...options?.chart,
    });

    chart.timeScale().fitContent();

    const series = chart.addSeries(AreaSeries, {
      lastValueVisible: false,
      priceLineVisible: false,
      bottomColor: "transparent",
      topColor: getComputedColor("--utility-brand-500"),
      lineType: LineType.Curved,
      lineColor: getComputedColor("--utility-brand-600"),
      crosshairMarkerBackgroundColor: getComputedColor("--utility-brand-900"),
      crosshairMarkerRadius: 4,
      lineWidth: 2,
      ...options?.line,
    });

    series.setData(data as LineData[]);

    const tooltip = document.createElement("div");
    tooltip.className =
      "absolute z-50 hidden bg-bg-secondary border border-border-secondary rounded-lg px-2.5 py-1.5 text-xs shadow-xl";

    tooltip.style.pointerEvents = "none";
    chartContainerRef.current?.appendChild(tooltip);

    chart.subscribeCrosshairMove((param) => {
      if (
        param.point === undefined ||
        !param.time ||
        param.point.x < 0 ||
        param.point.x > chartContainerRef.current!.clientWidth ||
        param.point.y < 0 ||
        param.point.y > chartContainerRef.current!.clientHeight
      ) {
        tooltip.style.display = "none";
      } else {
        const data = param.seriesData.get(series);
        if (data) {
          const timestamp = Number(param.time) * 1000;
          const date = new Date(timestamp);
          const formattedDate = date.toLocaleDateString();
          const formattedTime = date.toLocaleTimeString();
          const value = (data as any).value;

          const formattedValue = numberFormat(value, {
            minimumFractionDigits: 0,
            maximumFractionDigits: config.baseCurrency.percision,
          });

          const prefix = config.baseCurrency.options?.align === "right" 
            ? "" 
            : config.baseCurrency.symbol + (config.baseCurrency.options?.space ? " " : "");
          
          const suffix = config.baseCurrency.options?.align === "right"
            ? (config.baseCurrency.options?.space ? " " : "") + config.baseCurrency.symbol
            : "";

          tooltip.style.display = "block";
          tooltip.style.left = param.point.x + "px";
          tooltip.style.top = param.point.y + "px";
          tooltip.style.transform = "translate(8px, 8px)";

          tooltip.innerHTML = `
            <div class="grid gap-1.5 text-nowrap">
              <div class="">${prefix}${formattedValue}${suffix}</div>
              <div class="text-text-tertiary">${formattedDate} ${formattedTime}</div>
            </div>
          `;
        }
      }
    });

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      chart.remove();
      tooltip.remove();
    };
  }, [data, config]);

  return (
    <div className="w-full h-full relative" ref={chartContainerRef as any} />
  );
}
