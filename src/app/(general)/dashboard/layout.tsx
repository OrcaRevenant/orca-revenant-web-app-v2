import MainActionButton from "@/app/components/main-action-button";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <MainActionButton />
    </>
  );
}
