import * as React from "react";

import { cn } from "@/lib/utils";
import Typography from "../typography";

export default function HelperText({
  className,
  children,
  ...props
}: React.ComponentProps<typeof Typography>) {
  return (
    <Typography
      variant="small"
      color={"tertiary"}
      className={cn(className)}
      {...props}
    >
      {children}
    </Typography>
  );
}
