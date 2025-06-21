import { Metadata } from "next";
import AiActionButton from "@/app/components/ai-action-button";
import Container from "@/app/components/container";

export const metadata: Metadata = {
  title: "Orca | Home",
  description: "Orca crypto tracking platform",
};

export default function PanelLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <AiActionButton />

      <Container
        className="py-16 w-full min-h-[calc(100vh-var(--navbar-height))] px-2.5 lg:px-0"
        maxWidth="2xl"
      >
        {children}
      </Container>
    </>
  );
}
