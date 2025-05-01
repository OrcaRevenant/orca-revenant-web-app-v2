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
    <>
      <style scoped>{`
        body {
          background-color: var(--bg-primary)!important;
        }
      `}</style>
      <div className="w-full h-full">
        <div className="flex flex-row h-full">
          <div className="relative w-full xl:w-[60%] flex flex-col justify-center items-center p-4 h-full">
            <div className="flex w-full flex-col h-full justify-center items-center gap-8 mx-auto max-w-[360px]">
              {children}
            </div>
          </div>

          <div className="hidden z-10 xl:flex w-[40%] right-0 h-screen bg-bg-primary fixed rounded-l-[80px] overflow-hidden">
            <Image src={image} objectFit="cover" fill alt="abstract image" />
          </div>
        </div>
      </div>
    </>
  );
}
