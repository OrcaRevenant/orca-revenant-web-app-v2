import { PropsWithChildren, useMemo } from "react";
import Empty from "../empty";
import { EmptyProps } from "../empty/empty";

export type NothingToShowPlaceholderProps<T> = {
  data: T;
} & EmptyProps;

export default function NothingToShowPlaceholder<T>({
  data,
  children,
  ...rest
}: PropsWithChildren<NothingToShowPlaceholderProps<T>>) {
  const hasData = useMemo(() => {
    const isArray = Array.isArray(data);

    if (isArray) return !!data.length;
    return !!data;
  }, [data]);

  if (!hasData) return <Empty {...rest} />;
  return children;
}
