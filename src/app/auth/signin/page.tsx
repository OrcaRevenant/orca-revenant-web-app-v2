import Typography from "@/app/components/typography";
import AuthLayout from "../components/auth-layout";
import Decorative from "@/app/components/decorative";
import SigninForm from "./components/signin-form";

export default function SigninPage() {
  return (
    <AuthLayout image={"/assets/images/signin.webp"}>
      <SigninForm />
      <div className="flex absolute bottom-0 left-0 flex-row w-full p-8">
        <Typography variant="small" color="tertiary">
          © Orca 2077
        </Typography>
      </div>

      <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 overflow-hidden pointer-events-none">
        <Decorative type="dots" mask="radialDown" size="lg" />
      </div>
    </AuthLayout>
  );
}
