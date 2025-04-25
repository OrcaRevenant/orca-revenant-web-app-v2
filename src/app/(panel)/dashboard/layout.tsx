import Footer from "@/app/components/footer";
import NavBar from "@/app/components/nav-bar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Orca | Dashboard",
  description: "Orca crypto tracking platform",
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  );
}
