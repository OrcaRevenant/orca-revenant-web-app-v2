"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Button from "../button";
import IconButton from "../icon-button";
import IconSelector from "../icon-selector";
import Logo from "../logo";
import { navigation } from "../nav-bar/constant/config";
import Sheet, {
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../sheet";
import Typography from "../typography";

export default function NavigationSheet() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <IconButton variant="tertiaryGray">
          <IconSelector icon="Menu01" className="size-5" />
        </IconButton>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>
            <Logo />
          </SheetTitle>
        </SheetHeader>
        <div className="mt-6 flex flex-col gap-4 px-5">
          {Object.values(navigation).map((item) => (
            <div key={item.id} className="flex flex-col gap-2">
              <Typography variant="small" color="secondary">
                {item.name}
              </Typography>
              <div className="flex flex-col gap-2">
                {item.item.map((link) => (
                  <Link
                    key={link.id}
                    href={link.disabled || link.comingSoon ? "#" : link.href}
                    onClick={() => setOpen(false)}
                  >
                    <Button
                      variant={"tertiaryGray"}
                      size="md"
                      className="flex items-center justify-between w-full"
                      disabled={link.disabled || link.comingSoon}
                    >
                      <div className="flex flex-row items-center justify-between w-full">
                        <div className="flex flex-row items-center gap-1.5">
                          {link.icon && (
                            <IconSelector
                              icon={link.icon}
                              className="size-4.5"
                            />
                          )}
                          {link.name}
                        </div>
                        {pathname === link.href && (
                          <IconSelector
                            icon="Check"
                            className="text-utility-brand-500 ml-auto"
                          />
                        )}
                      </div>
                      {link.comingSoon && (
                        <Typography variant="xSmall" color="disabled">
                          Coming Soon
                        </Typography>
                      )}
                    </Button>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
}
