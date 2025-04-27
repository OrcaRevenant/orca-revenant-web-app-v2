import { appConfig } from "@/config";
import type { Metadata } from "next";
import "./globals.css";

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
    <html lang={appConfig.language} className="dark h-full w-full">
      <body
        className={`${appConfig.typography.fontFamily.variable} font-sans h-full w-full`}
      >
        {children}
      </body>
    </html>
  );
}
