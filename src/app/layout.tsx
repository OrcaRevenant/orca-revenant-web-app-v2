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
    <html lang={appConfig.language} className="dark overflow-x-hidden">
      <body className={`${appConfig.typography.fontFamily.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
