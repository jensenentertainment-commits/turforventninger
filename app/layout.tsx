import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { SITE } from "./lib/site";

const geist = Geist({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: SITE.displayName,
  description: SITE.description,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="no">
      <body className={geist.className}>
        {children}
      </body>
    </html>
  );
}
