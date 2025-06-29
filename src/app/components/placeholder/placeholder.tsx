import LoadingPlaceholder, {
  LoadingPlaceholderProps,
} from "../loading-placeholder";
import { PropsWithChildren } from "react";
import NothingToShowPlaceholder, {
  NothingToShowPlaceholderProps,
} from "../nothing-to-show-placeholder";
import { cn } from "@/lib/utils";

export type PlaceholderProps<T> = {
  NothingToShowPlaceholderProps?: Omit<
    NothingToShowPlaceholderProps<T>,
    "data"
  >;
  data: T;
} & LoadingPlaceholderProps;

export default function Placeholder<T>({
  data,
  children,
  NothingToShowPlaceholderProps,
  placeholder,
  loading,
  noOfPlaceholders,
}: PropsWithChildren<PlaceholderProps<T>>) {
  return (
    <LoadingPlaceholder
      placeholder={placeholder}
      loading={loading}
      noOfPlaceholders={noOfPlaceholders}
    >
      <NothingToShowPlaceholder
        className={cn(
          "h-full w-full overflow-hidden z-10",
          NothingToShowPlaceholderProps?.className
        )}
        data={data}
        {...NothingToShowPlaceholderProps!}
      >
        {children}
      </NothingToShowPlaceholder>
    </LoadingPlaceholder>
  );
}
