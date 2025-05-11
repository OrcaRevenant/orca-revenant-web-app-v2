"use client";

import { REFRESH_TOKEN_NAME } from "@/services/storage/storage";
import { ACCESS_TOKEN_NAME } from "@/services/storage/storage";
import Button from "../../button/button";
import IconSelector from "../../icon-selector/icon-selector";
import Cookies from "js-cookie";

export default function ProfileMenu() {
  return (
    <Button
      onClick={() => {
        Cookies.remove(ACCESS_TOKEN_NAME);
        Cookies.remove(REFRESH_TOKEN_NAME);
        // Force a hard refresh to update the server-side rendered content
        window.location.reload();
      }}
      variant="primary"
      size="md"
    >
      <IconSelector icon="LogOut01" className="size-5" />
      Logout
    </Button>
  );
}
