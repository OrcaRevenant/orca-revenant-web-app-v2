/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

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

export default function TradingLineChart({ data, options }: TradingLineChartProps) {
  const chartContainerRef = useRef<HTMLElement>(null);

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
        vertLine: { visible: false },
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
      crosshairMarkerRadius: 8,
      lineWidth: 2,
      ...options?.line,
    });

    series.setData(data as LineData[]);

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      chart.remove();
    };
  }, [data]);

  return (
    <div className="w-full h-full relative" ref={chartContainerRef as any} />
  );
}
