import { AvatarProps } from "@radix-ui/react-avatar";
import Avatar, { AvatarFallback, AvatarImage } from "../avatar";
import { cva, VariantProps } from "class-variance-authority";

const assetVariants = cva("size-10 rounded-md", {
  variants: {
    size: {
      sm: "size-6",
      md: "size-10",
      lg: "size-12",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

export type ConnectionLogoProps = {
  connectionName?: string;
} & AvatarProps &
  VariantProps<typeof assetVariants>;

export default function ConnectionLogo({
  connectionName,
  className,
  size,
  ...rest
}: ConnectionLogoProps) {
  const mappedConnectionName =
    connectionName === "mock" ? "unknown" : connectionName;
  return (
    <Avatar className={assetVariants({ size, className })} {...rest}>
      <AvatarImage
        src={`http://127.0.0.1:54321/storage/v1/object/public/logos/connections/${mappedConnectionName?.toLowerCase()}.svg`}
        alt={connectionName}
      />
      <AvatarFallback>{connectionName}</AvatarFallback>
    </Avatar>
  );
}
