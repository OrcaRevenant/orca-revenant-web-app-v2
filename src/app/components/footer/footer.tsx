import { cn } from "@/lib/utils";
import Logo from "@/app/components/logo";
import { Button } from "@/app/components/button";
import { Container } from "@/app/components/container";
import Typography from "@/app/components/typography";

const FOOTER_HEIGHT = 144;

export default function Footer() {
  return (
    <div className="bg-bg-primary">
      <Container maxWidth="3xl">
        <div
          className={cn("flex flex-row items-center justify-between px-8")}
          style={{ height: `${FOOTER_HEIGHT}px` }}
        >
          <Logo />
          <div className="flex flex-row items-center gap-8">
            <Button variant="linkGray" size="md">
              Overview
            </Button>
            <Button variant="linkGray" size="md">
              Features
            </Button>
            <Button variant="linkGray" size="md">
              Pricing
            </Button>
            <Button variant="linkGray" size="md">
              Career
            </Button>
            <Button variant="linkGray" size="md">
              Help
            </Button>
            <Button variant="linkGray" size="md">
              Privacy
            </Button>
          </div>
          <Typography color="quaternary">© 2077 Orca</Typography>
        </div>
      </Container>
    </div>
  );
}
