import Button from "@/app/components/button";
import IconSelector from "@/app/components/icon-selector";
import Link from "next/link";
import { HTMLAttributes } from "react";

export type BackToLoginProps = HTMLAttributes<HTMLButtonElement>;

export default function BackToLogin({ ...rest }: BackToLoginProps) {
  return (
    <Link href={"/auth/signin"}>
      <Button variant="linkGray" className="w-fit" {...rest}>
        <IconSelector icon="ArrowLeft" />
        Back to login
      </Button>
    </Link>
  );
}
