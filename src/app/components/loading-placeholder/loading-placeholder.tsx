import { Fragment, PropsWithChildren, ReactNode, useMemo } from "react";

export type LoadingPlaceholderProps = {
  placeholder: ReactNode;
  noOfPlaceholders?: number;
  loading?: boolean;
};

export default function LoadingPlaceholder({
  placeholder,
  children,
  loading,
  noOfPlaceholders = 1,
}: PropsWithChildren<LoadingPlaceholderProps>) {
  const iterations = useMemo(
    () => [...Array(noOfPlaceholders).keys()],
    [noOfPlaceholders]
  );

  if (loading) {
    return iterations.map((_, index) => {
      return <Fragment key={index}>{placeholder}</Fragment>;
    });
  }

  return children;
}
