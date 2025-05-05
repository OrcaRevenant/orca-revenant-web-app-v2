import Footer from "@/app/components/footer";
import NavBar from "@/app/components/nav-bar";
import { Metadata } from "next";

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
    <div className="flex flex-col h-full w-full">
      <NavBar />
      {children}
      <Footer />
    </div>
  );
}
