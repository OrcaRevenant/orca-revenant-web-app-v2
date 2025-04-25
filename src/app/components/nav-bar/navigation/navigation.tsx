import Link from "next/link";
import { Button } from "@/app/components/button";
import IconSelector from "@/app/components/icon-selector";
import NavigationMenu, {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/app/components/navigation-menu";
import Typography from "@/app/components/typography";
import { navigation } from "../constant/config";

export default function Navigation() {
  return (
    <div className="flex flex-row items-center gap-0.5">
      <NavigationMenu>
        <NavigationMenuList>
          {Object.values(navigation).map((item) => (
            <NavigationMenuItem key={item.id}>
              <NavigationMenuTrigger>{item.name}</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="flex flex-col gap-2 w-[248px]">
                  {item.item.map((link) => (
                    <li key={link.id}>
                      <Link
                        href={
                          link.disabled || link.comingSoon ? "#" : link.href
                        }
                      >
                        <Button
                          variant={"tertiaryGray"}
                          size={"md"}
                          className="flex items-center justify-between w-full"
                          disabled={link.disabled || link.comingSoon}
                        >
                          <div className="flex flex-row items-center gap-1.5">
                            {link.icon && (
                              <IconSelector icon={link.icon} size={18} />
                            )}
                            {link.name}
                          </div>
                          {link.comingSoon && (
                            <Typography variant="XSmall" color="disabled">
                              Coming Soon
                            </Typography>
                          )}
                        </Button>
                      </Link>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}
