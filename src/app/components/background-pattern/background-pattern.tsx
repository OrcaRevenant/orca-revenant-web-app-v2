import { cn } from "@/lib/utils";
import Image from "next/image";
import { backgroundMaskConfig, backgroundPatternConfig } from "./constant";

type BackgroundPatternProps = {
  breakpoint: "desktop" | "mobile";
  pattern: "dots";
  size: "sm" | "md";
  mask: "redialCenter" | "redialDown" | "redialUp" | "linearUp" | "linearDown";
  imageClassName?: React.HTMLAttributes<HTMLImageElement>["className"];
} & React.HTMLAttributes<HTMLDivElement>;

export default function BackgroundPattern({
  breakpoint,
  pattern,
  size,
  mask,
  className,
  imageClassName,
}: BackgroundPatternProps) {
  const patternConfig = backgroundPatternConfig[pattern];

  return (
    <div className={cn("absolute w-full h-full z-0", className)}>
      <Image
        className={cn(
          "absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2",
          imageClassName
        )}
        style={{
          maskImage: backgroundMaskConfig[mask],
        }}
        src={patternConfig[breakpoint][size].src}
        width={patternConfig[breakpoint][size].width}
        height={patternConfig[breakpoint][size].height}
        alt={patternConfig[breakpoint][size].alt}
      />
    </div>
  );
}
