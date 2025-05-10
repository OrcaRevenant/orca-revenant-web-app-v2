"use client";

import Avatar from "../avatar/avatar";
import AvatarFallback from "../avatar/avatar-fallback";
import AssetLogo from "../asset-logo";
import { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";
export type AssetAvatarGroupProps = {
  max?: number;
  assets?: string[];
} & HTMLAttributes<HTMLDivElement>;

export default function AssetAvatarGroup({
  max = 4,
  assets,
  className,
  ...rest
}: AssetAvatarGroupProps) {
  return (
    <div
      className={cn(
        "flex items-center -space-x-2 **:data-[slot=asset-logo]:first:ring-0 *:ring-3 *:ring-bg-primary-hover",
        className
      )}
      {...rest}
    >
      {assets?.slice(0, max).map((asset, index) => (
        <AssetLogo
          data-slot="asset-logo"
          key={index}
          size={"sm"}
          shortName={asset}
        />
      ))}
      {assets && assets.length > max && (
        <Avatar className="size-6 z-10 text-sm font-medium bg-utility-brand-500">
          <AvatarFallback>+{assets?.slice(max).length}</AvatarFallback>
        </Avatar>
      )}
    </div>
  );
}
