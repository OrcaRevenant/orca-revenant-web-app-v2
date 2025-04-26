import BackgroundPattern from "@/app/components/background-pattern";
import ResetDone from "./components/ResetDone";

export default function ResetPasswordPage() {
  return (
    <main className="relative w-screen h-[100dvh] bg-bg-primary">
      <BackgroundPattern
        breakpoint="desktop"
        mask="redialDown"
        pattern="dots"
        size="md"
        imageClassName="top-0 translate-y-0"
      />
      <ResetDone />
    </main>
  );
}
