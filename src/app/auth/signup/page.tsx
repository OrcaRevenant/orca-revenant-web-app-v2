import Logo from "@/app/components/logo";
import Button from "@/app/components/button";
import Container from "@/app/components/container";
import IconSelector from "@/app/components/icon-selector";
import Input from "@/app/components/input";
import SocialButton from "@/app/components/social-button";
import Typography from "@/app/components/typography";
import Image from "next/image";
import Link from "next/link";

export default function SignupPage() {
  return (
    <Container maxWidth="5xl" className="bg-bg-primary">
      <div className="flex flex-row w-screen h-screen">
        <div className="relative flex flex-col justify-center items-center w-full h-full">
          <div className="flex flex-row w-full p-8">
            <Logo />
          </div>
          <div className="flex flex-col justify-center items-center z-10 gap-8 w-[360px] h-full">
            <div className="flex flex-col justify-center items-center gap-8 w-full h-full">
              <div className="flex flex-col items-center gap-6 w-full">
                <div className="flex flex-col  gap-3 w-full">
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
                  <Input
                    type="text"
                    label="Email"
                    placeholder="Enter your email"
                    fullWidth
                  />
                  <Input
                    type="email"
                    label="Email"
                    placeholder="Enter your email"
                    fullWidth
                  />
                  <Input
                    type="password"
                    label="Password"
                    placeholder="Create a password"
                    helperText="Must be at least 8 characters."
                    fullWidth
                  />
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
                  <Button variant="linkColor">log in</Button>
                </Link>
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-between w-full p-8">
            <Typography variant="small" color="tertiary">
              © Orca 2077
            </Typography>
            <Typography
              variant="small"
              color="tertiary"
              className="flex flex-row items-center gap-2"
            >
              <IconSelector icon="Mail01" size={16} />
              info@orca.com
            </Typography>
          </div>
        </div>
        <Image
          src={"/assets/images/signup.png"}
          width={720}
          height={960}
          alt="abstract image"
        />
      </div>
    </Container>
  );
}
