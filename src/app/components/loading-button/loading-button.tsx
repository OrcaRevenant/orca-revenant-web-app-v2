import * as React from "react";
import Button, { ButtonProps } from "../button/button";
import { Loading01 } from "@untitled-ui/icons-react";

export type LoadingButtonProps = { loading?: boolean } & ButtonProps;

export default function LoadingButton({
  children,
  loading,
  ...props
}: LoadingButtonProps) {
  return (
    <Button disabled={loading} data-slot="loading-button" {...props}>
      {loading && <Loading01 className="animate-spin" />}
      {children}
    </Button>
  );
}
