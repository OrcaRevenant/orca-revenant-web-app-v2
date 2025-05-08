import { appConfig } from "@/config";
import type { Metadata } from "next";
import "./globals.css";
import GeneralProviders from "@/providers/general-provider/general-provider";

export const metadata: Metadata = {
  title: appConfig.name,
  description: appConfig.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang={appConfig.locale.defaultLocale}
      className={`${appConfig.theme.default} h-full w-full`}
    >
      <body
        className={`${appConfig.typography.fontFamily.variable} font-sans h-full w-full`}
      >
        <GeneralProviders>{children}</GeneralProviders>
      </body>
    </html>
  );
}
