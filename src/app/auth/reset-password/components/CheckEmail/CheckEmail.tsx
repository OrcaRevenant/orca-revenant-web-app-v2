"use client";
import Button from "@/app/components/button";
import Container from "@/app/components/container";
import FeaturedIcon from "@/app/components/featured-icon";
import Typography from "@/app/components/typography";
import BackToLogin from "../BackToLogin";

export default function CheckEmail() {
  return (
    <Container className="relative max-w-[360px]">
      <div className="pt-24 flex flex-col gap-8 w-full">
        <div className="flex flex-col gap-6 w-full items-center">
          <FeaturedIcon icon="Mail01" variant="modern" size="xl" />
          <div className="flex flex-col gap-3 items-center">
            <Typography variant={"displayXSmall"} weight={"semibold"}>
              Check your email
            </Typography>
            <div className="flex flex-col items-center">
              <Typography variant={"medium"} color={"tertiary"}>
                We sent a password reset link to
              </Typography>
              <Typography variant={"medium"} color={"tertiary"}>
                olivia@untitledui.com
              </Typography>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full">
          <Button onClick={() => (window.location.href = "mailto:")}>
            Open email app
          </Button>
        </div>
        <div className="flex flex-row w-full justify-center items-center gap-1">
          <Typography variant={`small`} color={`tertiary`}>
            Didn’t receive the email?
          </Typography>
          <Button variant={"linkGray"}>Click to resend</Button>
        </div>
        <div className="flex justify-center">
          <BackToLogin />
        </div>
      </div>
    </Container>
  );
}
