import { PropsWithChildren, useMemo } from "react";
import LoadingPlaceholder, {
  LoadingPlaceholderProps,
} from "../loading-placeholder/loading-placeholder";
import Empty from "../empty";

export type PlaceholderWithNothingToShowProps<T> = {
  data: T;
  loading?: boolean;
} & PropsWithChildren<LoadingPlaceholderProps>;

export default function PlaceholderWithNothingToShow<T>({
  data,
  children,
  ...rest
}: PlaceholderWithNothingToShowProps<T>) {
  const hasData = useMemo(() => {
    const isArray = Array.isArray(data);

    if (isArray) return !!data.length;
    return !!data;
  }, [data]);

  return (
    <LoadingPlaceholder {...rest}>
      {hasData && children}
      {!hasData && <Empty icon="Activity" />}
    </LoadingPlaceholder>
  );
}
