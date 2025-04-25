import BackgroundPattern from "@/app/components/background-pattern";
import Logo from "@/app/components/logo";
import { Button } from "@/app/components/button";
import { Checkbox } from "@/app/components/checkbox";
import { Container } from "@/app/components/container";
import { Input } from "@/app/components/input";
import { SocialButton } from "@/app/components/social-button";
import Typography from "@/app/components/typography";
import Image from "next/image";
import Link from "next/link";

export default function SigninPage() {
  return (
    <Container maxWidth="5xl" className="bg-bg-primary">
      <div className="flex flex-row w-screen h-screen">
        <div className="relative flex flex-col justify-center items-center w-full h-full">
          <div className="flex flex-col justify-center items-center z-10 gap-8 w-[360px] h-full">
            <div className="flex flex-col justify-center items-center gap-8 w-full h-full">
              <div className="flex flex-col items-center gap-6 w-full">
                <Logo textLogo={false} />
                <div className="flex flex-col items-center gap-3 w-full">
                  <Typography variant="DisplayMedium" weight="semibold">
                    Welcome back
                  </Typography>
                  <Typography color="tertiary">
                    Welcome back! Please enter your details.
                  </Typography>
                </div>
              </div>
              <div className="flex flex-col gap-6 w-full">
                <div className="flex flex-col gap-5 w-full">
                  <Input
                    label="Email"
                    placeholder="Enter your email"
                    fullWidth
                  />
                  <Input label="Password" placeholder="········" fullWidth />
                </div>
                <div className="flex flex-row items-center justify-between w-full">
                  <Checkbox label="Remember for 30 days" />
                  <Button variant="linkColor">Forgot password</Button>
                </div>
                <div className="flex flex-col gap-4 w-full">
                  <Button variant="primary">Sign in</Button>
                  <SocialButton icon="Google" label="Sign in with Google" />
                </div>
              </div>
              <div className="flex flex-row items-center gap-1">
                <Typography variant="Small" color="tertiary">
                  Don’t have an account?
                </Typography>
                <Link href="/auth/signup">
                  <Button variant="linkColor">Sign up</Button>
                </Link>
              </div>
            </div>
          </div>
          <div className="flex flex-row w-full p-8">
            <Typography variant="Small" color="tertiary">
              © Orca 2077
            </Typography>
          </div>
          <BackgroundPattern
            breakpoint="desktop"
            pattern="dots"
            size="md"
            mask="redialDown"
          />
        </div>
        <Image
          src={"/assets/images/signin.png"}
          width={720}
          height={960}
          alt="abstract image"
        />
      </div>
    </Container>
  );
}
