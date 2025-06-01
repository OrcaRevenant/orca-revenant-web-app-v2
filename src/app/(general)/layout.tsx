import NavBar from "@/app/components/nav-bar";
import { Metadata } from "next";
import FooterWrapper from "../components/footer-wrapper/footer-wrapper";
import Toaster from "../components/sonner";

export const metadata: Metadata = {
  title: "Orca | Home",
  description: "Orca crypto tracking platform",
};

export default function LandingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <style scoped>{`html {
        scrollbar-width: none;
        scrollbar-color: var(--fg-tertiary) var(--bg-secondary);
      }`}</style>

      <NavBar />
      {children}
      <FooterWrapper />
      <Toaster />
    </>
  );
}
