import Button from "@/app/components/button";
import Container from "@/app/components/container";
import FeaturedIcon from "@/app/components/featured-icon";
import IconSelector from "@/app/components/icon-selector";
import Input from "@/app/components/input";
import Typography from "@/app/components/typography";
import BackToLogin from "../BackToLogin";

export default function SetNewPassword() {
  return (
    <Container className="relative max-w-[360px]">
      <div className="pt-24 flex flex-col gap-8 w-full">
        <div className="flex flex-col gap-6 w-full items-center">
          <FeaturedIcon icon="Lock01" variant="modern" size="xl" />
          <div className="flex flex-col gap-3 items-center">
            <Typography variant={"displayXSmall"} weight={"semibold"}>
              Set new password
            </Typography>
            <Typography variant={"medium"} color={"tertiary"}>
              No worries, we’ll send you reset instructions.
            </Typography>
          </div>
        </div>
        <div className="flex flex-col gap-5 w-full">
          <Input label="New password" placeholder="·········" fullWidth />
          <Input label="Confirm password" placeholder="·········" fullWidth />
          <div className="flex flex-col gap-3">
            <div className="flex flex-row gap-2">
              <IconSelector
                icon="CheckCircle"
                className="text-fg-disabled-subtle"
              />
              <Typography variant={"small"} color={"tertiary"}>
                Must be at least 8 characters
              </Typography>
            </div>
            <div className="flex flex-row gap-2">
              <IconSelector
                icon="CheckCircle"
                className="text-fg-disabled-subtle"
              />
              <Typography variant={"small"} color={"tertiary"}>
                Must contain one special character
              </Typography>
            </div>
          </div>
        </div>
        <Button>Reset password</Button>
        <div className="flex justify-center">
          <BackToLogin />
        </div>
      </div>
    </Container>
  );
}
