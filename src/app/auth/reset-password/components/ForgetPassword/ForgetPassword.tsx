import Button from "@/app/components/button";
import Container from "@/app/components/container";
import FeaturedIcon from "@/app/components/featured-icon";
import Input from "@/app/components/input";
import Typography from "@/app/components/typography";
import BackToLogin from "../BackToLogin";

export default function ForgetPassword() {
  return (
    <Container className="relative max-w-[360px]">
      <div className="pt-24 flex flex-col gap-8 w-full">
        <div className="flex flex-col gap-6 w-full items-center">
          <FeaturedIcon icon="Key01" variant="modern" size="xl" />
          <div className="flex flex-col gap-3 items-center">
            <Typography variant={"displayXSmall"} weight={"semibold"}>
              Forgot password?
            </Typography>
            <Typography variant={"medium"} color={"tertiary"}>
              No worries, we’ll send you reset instructions.
            </Typography>
          </div>
        </div>
        <div className="flex flex-col gap-6 w-full">
          <Input label="Email" placeholder="Email address" fullWidth />
          <Button>Reset password</Button>
        </div>
        <div className="flex justify-center">
          <BackToLogin />
        </div>
      </div>
    </Container>
  );
}
