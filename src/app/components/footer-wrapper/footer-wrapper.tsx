"use client";

import { usePathname } from "next/navigation";
import Footer from "../footer";

const excludedPaths = ["/stella"];

export default function FooterWrapper() {
  const pathname = usePathname();

  if (excludedPaths.includes(pathname)) {
    return null;
  }

  return <Footer />;
}
