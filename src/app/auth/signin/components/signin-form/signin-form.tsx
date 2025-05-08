"use client";

import { useLogin } from "@/api";
import Button from "@/app/components/button";
import FormLabel from "@/app/components/form-label";
import Input from "@/app/components/input";
import Logo from "@/app/components/logo";
import SocialButton from "@/app/components/social-button";
import Typography from "@/app/components/typography";
import { ACCESS_TOKEN_NAME, REFRESH_TOKEN_NAME } from "@/services/storage/storage";
import { Checkbox } from "@radix-ui/react-checkbox";
import { Label } from "@radix-ui/react-label";
import Link from "next/link";
import { useForm } from "react-hook-form";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

type SigninFormData = {
  email: string;
  password: string;
};

export default function SigninForm() {
  const router = useRouter();

  const form = useForm<SigninFormData>({
    defaultValues: {
      email: `adam@orca.com`,
      password: `123456`,
    },
  });

  const { mutate: login, isPending } = useLogin();

  const onSubmit = (data: SigninFormData) => {
    login(
      { payload: data },
      {
        onSuccess(response) {
          const accessToken = response.session.access_token;
          const refreshToken = response.session.refresh_token;

          Cookies.set(ACCESS_TOKEN_NAME, accessToken, {
            expires: 7,
            path: "/",
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
          });

          Cookies.set(REFRESH_TOKEN_NAME, refreshToken, {
            expires: 30,
            path: "/",
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
          });

          router.replace("/dashboard");
        },
      }
    );
  };

  return (
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
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-6 w-full"
      >
        <div className="flex flex-col gap-5 w-full">
          <FormLabel>
            <Label>Email</Label>
            <Input
              placeholder="Enter your email"
              className="w-full"
              {...form.register(`email`)}
            />
          </FormLabel>

          <FormLabel>
            <Label>Password</Label>
            <Input
              placeholder="········"
              className="w-full"
              {...form.register(`password`)}
            />
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
          <Button type="submit" disabled={isPending} variant="primary">
            Sign in
          </Button>
          <SocialButton disabled icon="Google" label="Sign in with Google" />
        </div>
      </form>
      <div className="flex flex-row items-center gap-1">
        <Typography variant="small" color="tertiary">
          Don&apos;t have an account?
        </Typography>
        <Link href="/auth/signup">
          <Button variant="linkColor">Sign up</Button>
        </Link>
      </div>
    </div>
  );
}
