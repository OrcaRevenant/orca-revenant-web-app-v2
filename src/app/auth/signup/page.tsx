import Logo from "@/app/components/logo";
import Button from "@/app/components/button";
import IconSelector from "@/app/components/icon-selector";
import Input from "@/app/components/input";
import SocialButton from "@/app/components/social-button";
import Typography from "@/app/components/typography";
import Link from "next/link";
import AuthLayout from "../components/auth-layout";
import FormLabel from "@/app/components/form-label";
import Label from "@/app/components/label";
import HelperText from "@/app/components/helper-text";

export default function SignupPage() {
  return (
    <AuthLayout image={"/assets/images/signup.webp"}>
      <div className="absolute top-0 left-0 p-8">
        <Logo />
      </div>
      <div className="flex flex-col justify-center items-center gap-8 w-full h-full">
        <div className="flex flex-col items-center gap-6 w-full">
          <div className="flex flex-col gap-3 w-full">
            <Typography variant="displayMedium" weight="semibold">
              Sign up
            </Typography>
            <Typography color="tertiary">
              Start your tracking journey for free.
            </Typography>
          </div>
        </div>
        <div className="flex flex-col gap-6 w-full">
          <div className="flex flex-col gap-5 w-full">
            <FormLabel>
              <Label>Name</Label>
              <Input
                type="text"
                placeholder="Enter your name"
                className="w-full"
              />
            </FormLabel>
            <FormLabel>
              <Label>Email</Label>
              <Input
                type="email"
                placeholder="Enter your email"
                className="w-full"
              />
              <HelperText>Please enter a valid email address.</HelperText>
            </FormLabel>
            <FormLabel>
              <Label>Password</Label>
              <Input type="password" placeholder="Create a password" />
              <HelperText>Must be at least 8 characters.</HelperText>
            </FormLabel>
          </div>
          <div className="flex flex-col gap-4 w-full">
            <Button variant="primary">Get started</Button>
            <SocialButton icon="Google" label="Sign in with Google" />
          </div>
        </div>
        <div className="flex flex-row items-center gap-1">
          <Typography variant="small" color="tertiary">
            Already have an account?
          </Typography>
          <Link href="/auth/signin">
            <Button variant="linkColor">Sign in</Button>
          </Link>
        </div>
      </div>
      <div className="flex absolute bottom-0 left-0 flex-row justify-between w-full p-8">
        <Typography variant="small" color="tertiary">
          © Orca 2077
        </Typography>
        <Typography
          variant="small"
          color="tertiary"
          className="flex flex-row items-center gap-2"
        >
          <IconSelector icon="Mail01" className="size-4" />
          info@orca.com
        </Typography>
      </div>
    </AuthLayout>
  );
}
