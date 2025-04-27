import { cn } from "@/lib/utils";
import Image from "next/image";
import { HTMLAttributes } from "react";
import {
  BackgroundBreakpoint,
  BackgroundMask,
  backgroundMaskConfig,
  backgroundPatternConfig,
  BackgroundPatternVariant,
  BackgroundSize,
} from "./constant";

type BackgroundPatternProps = {
  breakpoint: BackgroundBreakpoint;
  pattern: BackgroundPatternVariant;
  size: BackgroundSize;
  mask: BackgroundMask;
  imageProps?: HTMLAttributes<HTMLImageElement>;
} & HTMLAttributes<HTMLDivElement>;

export default function BackgroundPattern({
  breakpoint = "desktop",
  pattern = "dots",
  size = "md",
  mask = "redialCenter",
  imageProps,
  ...rest
}: BackgroundPatternProps) {
  const patternConfig = backgroundPatternConfig[pattern];

  return (
    <div className={cn("absolute w-full h-full z-0", rest.className)} {...rest}>
      <Image
        {...imageProps}
        className={cn(
          "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
          imageProps?.className
        )}
        style={{
          maskImage: backgroundMaskConfig[mask],
          WebkitMaskImage: backgroundMaskConfig[mask],
        }}
        src={patternConfig[breakpoint][size].src}
        width={patternConfig[breakpoint][size].width}
        height={patternConfig[breakpoint][size].height}
        alt={patternConfig[breakpoint][size].alt}
      />
    </div>
  );
}
