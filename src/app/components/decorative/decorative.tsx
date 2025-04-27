import { cn } from "@/lib/utils";
import Image from "next/image";
import { HTMLAttributes } from "react";
import {
  decorativeConfig,
  DecorativeMask,
  decorativeMaskConfig,
  DecorativeSize,
  DecorativeVariant,
} from "./constant";

export type DecorativeProps = {
  size: DecorativeSize;
  variant: DecorativeVariant;
  mask: DecorativeMask;
  imageProps?: HTMLAttributes<HTMLImageElement>;
} & HTMLAttributes<HTMLDivElement>;

export default function Decorative({
  size = "md",
  variant = "dots",
  mask = "redialCenter",
  imageProps,
  ...rest
}: DecorativeProps) {
  return (
    <div className={cn("absolute w-full h-full z-0", rest.className)} {...rest}>
      <Image
        {...imageProps}
        className={cn(
          "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
          imageProps?.className
        )}
        style={{
          maskImage: decorativeMaskConfig[mask],
          WebkitMaskImage: decorativeMaskConfig[mask],
        }}
        src={decorativeConfig[variant][size].src}
        width={decorativeConfig[variant][size].size}
        height={decorativeConfig[variant][size].size}
        alt={decorativeConfig[variant][size].alt}
      />
    </div>
  );
}
