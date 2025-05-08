import Button from "@/app/components/button";
import Checkbox from "@/app/components/checkbox";
import Input from "@/app/components/input";
import Logo from "@/app/components/logo";
import SocialButton from "@/app/components/social-button";
import Typography from "@/app/components/typography";
import Link from "next/link";
import AuthLayout from "../components/auth-layout";
import Decorative from "@/app/components/decorative";
import FormLabel from "@/app/components/form-label";
import Label from "@/app/components/label";

export default function SigninPage() {
  return (
    <AuthLayout image={"/assets/images/signin.jpg"}>
      <div className="flex flex-col h-full justify-center items-center gap-8 z-10 w-full">
        <div className="flex flex-col items-center gap-6 w-full">
          <Logo disableTextLogo />
          <div className="flex flex-col items-center gap-3 w-full">
            <Typography variant="displayMedium" weight="semibold">
              Welcome back
            </Typography>
            <Typography color="tertiary">
              Welcome back! Please enter your details.
            </Typography>
          </div>
        </div>
        <div className="flex flex-col gap-6 w-full">
          <div className="flex flex-col gap-5 w-full">
            <FormLabel>
              <Label>Email</Label>
              <Input placeholder="Enter your email" className="w-full" />
            </FormLabel>

            <FormLabel>
              <Label>Password</Label>
              <Input placeholder="········" className="w-full" />
            </FormLabel>
          </div>
          <div className="flex flex-row items-center justify-between w-full">
            <FormLabel orientation="horizontal">
              <Checkbox />
              <Label>Remember for 30 days</Label>
            </FormLabel>
            <Link passHref href="/auth/reset-password">
              <Button variant="linkColor">Forgot password</Button>
            </Link>
          </div>
          <div className="flex flex-col gap-4 w-full">
            <Button variant="primary">Sign in</Button>
            <SocialButton icon="Google" label="Sign in with Google" />
          </div>
        </div>
        <div className="flex flex-row items-center gap-1">
          <Typography variant="small" color="tertiary">
            Don&apos;t have an account?
          </Typography>
          <Link href="/auth/signup">
            <Button variant="linkColor">Sign up</Button>
          </Link>
        </div>
      </div>

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
