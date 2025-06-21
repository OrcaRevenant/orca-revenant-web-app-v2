import AppBar from "@/app/components/app-bar";
import Button from "@/app/components/button";
import Container from "@/app/components/container";
import IconSelector from "@/app/components/icon-selector";
import Logo from "@/app/components/logo";
import Navigation from "@/app/components/nav-bar/navigation";
import { cn } from "@/lib/utils";
import { ACCESS_TOKEN_NAME } from "@/services/storage/storage";
import { cookies } from "next/headers";
import Link from "next/link";
import ControlPanel from "../control-panel";
import NavigationSheet from "../navigation-sheet";
import Feedback from "./feedback-dialog";
import ProfileMenu from "./profile-menu/profile-menu";

export type NavBarProps = {
  className?: string;
};

export default async function NavBar({ className }: NavBarProps) {
  const cookieStore = await cookies();
  const token = cookieStore.get(ACCESS_TOKEN_NAME);

  const isLoggedIn = !!token?.value;

  return (
    <AppBar
      className={cn(
        "bg-bg-primary border-border-secondary border-b-1 h-[var(--navbar-height)]",
        className
      )}
      position="sticky"
    >
      <Container className="h-full" maxWidth="3xl">
        <div className="flex flex-row items-center h-full px-2.5 md:px-0 transition-all duration-300">
          <div className="flex flex-row items-center h-full w-full">
            <Logo />
            <div className="hidden md:flex">
              <Navigation />
            </div>
          </div>
          <div className="flex flex-row items-center gap-2">
            {isLoggedIn && (
              <div className="flex flex-row items-center gap-4">
                <div className="hidden md:flex">
                  <Feedback />
                </div>
                <div>
                  <ControlPanel />
                </div>
              </div>
            )}
            <div className="block md:hidden">
              <NavigationSheet />
            </div>
            {isLoggedIn ? (
              <div className="hidden md:flex">
                <ProfileMenu />
              </div>
            ) : (
              <Link href="/auth/signin">
                <Button variant="primary" size="md">
                  <IconSelector icon="LogIn03" className="size-5" />
                  Login
                </Button>
              </Link>
            )}
          </div>
        </div>
      </Container>
    </AppBar>
  );
}
