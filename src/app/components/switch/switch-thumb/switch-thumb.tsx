import { cn } from "@/lib/utils";
import * as SwitchPrimitive from "@radix-ui/react-switch";

export type SwitchThumbProps = React.ComponentProps<
  typeof SwitchPrimitive.Thumb
>;

export default function SwitchThumb({ className, ...props }: SwitchThumbProps) {
  return (
    <SwitchPrimitive.Thumb
      data-slot="switch-thumb"
      className={cn(
        "bg-fg-white shadow-sm pointer-events-none block size-4 rounded-full ring-0 transition-transform data-[state=checked]:translate-x-[calc(105%-0px)] data-[state=unchecked]:translate-x-[calc(10%-0px)]",
        className
      )}
      {...props}
    />
  );
}
