import { HTMLAttributes } from "react";
import IconSelector from "../icon-selector";
import { cva, VariantProps } from "class-variance-authority";

export const aiAvatarVariants = cva(
  "relative flex items-center justify-center rounded-full bg-black border border-utility-gray-blue-600 p-2 overflow-hidden",
  {
    variants: {
      size: {
        sm: "size-10 **:data-[slot='ai-avatar-icon']:size-5",
        md: "size-14 **:data-[slot='ai-avatar-icon']:size-7",
        lg: "size-16 **:data-[slot='ai-avatar-icon']:size-9",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
);

export type AiAvatarProps = {} & HTMLAttributes<HTMLElement> &
  VariantProps<typeof aiAvatarVariants>;

export default function AiAvatar({ className, size }: AiAvatarProps) {
  return (
    <div className={aiAvatarVariants({ size, className })}>
      <IconSelector
        data-slot={"ai-avatar-icon"}
        icon="Stars01"
        className="absolute text-utility-gray-blue-700 z-10"
      />
      <video
        src="/assets/videos/stella.webm"
        autoPlay
        muted
        loop
        className="absolute w-32 h-32 object-cover rounded-full z-0"
      />
    </div>
  );
}
