import { Metadata } from "next";
import Footer from "@/app/components/footer";
import NavBar from "@/app/components/nav-bar";
import StellaActionButton from "../components/stella-action-button";

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
      <Footer />
      <StellaActionButton />
    </>
  );
}
