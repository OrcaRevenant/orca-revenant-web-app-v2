import Decorative from "@/app/components/decorative";
import ForgetPassword from "./components/forget-password";

export default function ResetPasswordPage() {
  return (
    <>
      <style scoped>{`
        body {
          background-color: var(--bg-primary)!important;
        }
      `}</style>
      <main className="w-full justify-center items-center flex relative">
        <Decorative
          className="absolute top-0 left-1/2 -translate-y-1/2 -translate-x-1/2"
          size="lg"
        />
        <ForgetPassword />
      </main>
    </>
  );
}
