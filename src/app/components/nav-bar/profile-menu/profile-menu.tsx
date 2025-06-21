"use client";

import {
  ACCESS_TOKEN_NAME,
  REFRESH_TOKEN_NAME,
} from "@/services/storage/storage";
import Cookies from "js-cookie";
import IconSelector from "../../icon-selector/icon-selector";

import DropdownMenu, {
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../../dropdown-menu";
import IconButton from "../../icon-button";

export default function ProfileMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <IconButton
          className="bg-bg-tertiary rounded-full"
          variant="tertiaryGray"
        >
          <IconSelector icon="User01" className="size-5" />
        </IconButton>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end">
        <DropdownMenuItem
          onClick={() => {
            Cookies.remove(ACCESS_TOKEN_NAME);
            Cookies.remove(REFRESH_TOKEN_NAME);

            // Force a hard refresh to update the server-side rendered content
            window.location.reload();
          }}
          className="text-text-error-primary"
        >
          Log out
          <IconSelector icon="LogOut01" className="size-5 ml-auto" />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
