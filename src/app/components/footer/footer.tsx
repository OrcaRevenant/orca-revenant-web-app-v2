import Button from "@/app/components/button";
import Container from "@/app/components/container";
import Logo from "@/app/components/logo";
import Typography from "@/app/components/typography";
import { cn } from "@/lib/utils";

const FOOTER_HEIGHT = 144;

export default function Footer() {
  return (
    <div className="bg-bg-primary">
      <Container maxWidth="3xl">
        <div
          className={cn(
            "flex flex-col md:flex-row items-center justify-between px-4 md:px-8 py-8 md:py-0 gap-6 md:gap-0"
          )}
          style={{ minHeight: `${FOOTER_HEIGHT}px` }}
        >
          <Logo />
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
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
          <Typography color="quaternary" className="text-center md:text-left">
            © 2077 Orca
          </Typography>
        </div>
      </Container>
    </div>
  );
}
