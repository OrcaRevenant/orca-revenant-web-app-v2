import { cn } from "@/lib/utils";
import Link from "next/link";
import Logo from "@/app/components/logo";
import AppBar from "@/app/components/app-bar";
import Button from "@/app/components/button";
import Container from "@/app/components/container";
import IconSelector from "@/app/components/icon-selector";
import Navigation from "@/app/components/nav-bar/navigation";

export const NAVBAR_HEIGHT = 72;

export type NavBarProps = {
  className?: string;
};

export default function NavBar({ className }: NavBarProps) {
  return (
    <AppBar
      style={{ height: `${NAVBAR_HEIGHT}px` }}
      className={cn(
        "bg-bg-primary border-border-secondary border-b-1",
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
            <Link href="/auth/signin">
              <Button variant="primary" size="md">
                <IconSelector icon="LogIn03" />
                Login
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </AppBar>
  );
}
