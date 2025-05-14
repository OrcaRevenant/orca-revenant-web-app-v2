"use client";
import Image from "next/image";

import { useRouter } from "next/navigation";
import Button from "./components/button";
import IconSelector from "./components/icon-selector";
import Typography from "./components/typography";

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="flex flex-row h-screen w-screen bg-bg-primary">
      <div className="w-full flex flex-col items-center justify-center">
        <div className="flex flex-col justify-center items-center w-full h-full gap-12 max-w-2xl">
          <div className="flex flex-col justify-center space-y-6 ">
            <Typography variant="displayXLarge" weight={"semibold"}>
              Page not found
            </Typography>
            <Typography variant="xLarge" color={"tertiary"}>
              Sorry, the page you are looking for doesn&apos;t exist or has been
              moved. Here are some helpful links:
            </Typography>
          </div>
          <div className="flex flex-row gap-3 self-start">
            <Button size="xl" variant="secondaryGray">
              <IconSelector
                icon="ArrowLeft"
                className="size-5"
                onClick={() => router.back()}
              />
              Go Back
            </Button>
            <Button
              size="xl"
              variant="primary"
              onClick={() => router.push("/")}
            >
              Take me home
            </Button>
          </div>
        </div>
      </div>
      <Image
        className="w-full hidden lg:block"
        src="/assets/images/not-found.webp"
        alt="Not Found"
        width={720}
        height={960}
      />
    </div>
  );
}
