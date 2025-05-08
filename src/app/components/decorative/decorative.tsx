"use client";

import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import { HTMLAttributes } from "react";

import Image from "next/image";

const decorativeVariant = cva("relative -z-10", {
  variants: {
    size: {
      sm: "size-[336px]",
      md: "size-[480px]",
      lg: "size-[768px]",
    },
    type: {
      dots: "",
    },
    mask: {
      radialCenter: "bg-mask-radial-center",
      radialDown: "bg-mask-radial-down",
      radialUp: "bg-mask-radial-up",
      linearUp: "bg-mask-linear-up",
      linearDown: "bg-mask-linear-down",
    },
  },
  defaultVariants: {
    size: "md",
    type: "dots",
    mask: "radialCenter",
  },
});

type DecorativeProps = HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof decorativeVariant>;

export default function Decorative({
  size = "md",
  type = "dots",
  mask = "radialCenter",
  className,
  ...rest
}: DecorativeProps) {
  return (
    <div
      className={cn(decorativeVariant({ size, type, mask }), className)}
      {...rest}
    >
      <Image
        src={`/assets/svgs/patterns/${type}-${size}.svg`}
        alt="decorative"
        fill
      />
    </div>
  );
}
