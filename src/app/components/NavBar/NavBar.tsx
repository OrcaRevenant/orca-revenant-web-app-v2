import { cn } from "@/lib/utils";
import Logo from "../Logo";
import AppBar from "../ui/app-bar";
import { Button } from "../ui/button";
import { Container } from "../ui/container";
import IconSelector from "../ui/icon-selector";
import Navigation from "./Navigation";

export const NAVBAR_HEIGHT = 72;

export type NavBarProps = {
  className?: string;
};

export default function NavBar({ className }: NavBarProps) {
  return (
    <AppBar
      className={cn(
        "bg-bg-primary border-border-secondary border-b-1",
        `h-[${NAVBAR_HEIGHT}px]`,
        className
      )}
      position="sticky"
    >
      <Container className="h-full" maxWidth="3xl">
        <div className="flex flex-row items-center h-full">
          <div className="flex flex-row items-center h-full w-full">
            <Logo />
            <Navigation />
          </div>
          <div className="flex flex-row items-center gap-4">
            <Button variant="secondaryGray" size="md">
              <IconSelector icon="Announcement01" />
              Feedback
            </Button>
            <Button variant="primary" size="md">
              <IconSelector icon="LogIn03" />
              Login
            </Button>
          </div>
        </div>
      </Container>
    </AppBar>
  );
}
