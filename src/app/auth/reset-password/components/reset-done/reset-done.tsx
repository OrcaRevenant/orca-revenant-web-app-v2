import Button from "@/app/components/button";
import Container from "@/app/components/container";
import FeaturedIcon from "@/app/components/featured-icon";
import Typography from "@/app/components/typography";
import Link from "next/link";
import BackToLogin from "../back-to-login";

export default function ResetDone() {
  return (
    <Container className="relative max-w-[360px]">
      <div className="pt-24 flex flex-col gap-8 w-full">
        <div className="flex flex-col gap-6 w-full items-center">
          <FeaturedIcon icon="CheckCircle" variant="modern" size="xl" />
          <div className="flex flex-col gap-3 items-center">
            <Typography variant={"displayXSmall"} weight={"semibold"}>
              Password reset
            </Typography>
            <div className="flex flex-col items-center">
              <Typography variant={"medium"} color={"tertiary"}>
                Your password has been successfully reset.
              </Typography>
              <Typography variant={"medium"} color={"tertiary"}>
                Click below to log in magically.
              </Typography>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full">
          <Link href={"/auth/signin"}>
            <Button className="w-full">Continue</Button>
          </Link>
        </div>
        <div className="flex justify-center">
          <BackToLogin />
        </div>
      </div>
    </Container>
  );
}
