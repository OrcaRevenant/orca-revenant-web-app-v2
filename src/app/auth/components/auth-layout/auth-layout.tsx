import Image from "next/image";

type AuthLayoutProps = {
  children: React.ReactNode;
  image: string;
};

export default function AuthLayout({
  children,
  image,
}: Readonly<AuthLayoutProps>) {
  return (
    <div className="w-full h-screen bg-bg-primary">
      <div className="flex flex-row h-full">
        <div className="relative w-full xl:w-[55%] flex flex-col justify-center items-center p-4 h-full">
          <div className="flex flex-col justify-center items-center gap-8 max-w-[360px] w-full h-full">
            {children}
          </div>
        </div>

        <div className="hidden z-10 xl:flex w-[45%] right-0 h-screen bg-bg-primary fixed rounded-l-[80px] overflow-hidden">
          <Image src={image} objectFit="cover" fill alt="abstract image" />
        </div>
      </div>
    </div>
  );
}
