import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";
import "./globals.css";
import {Navbar} from "@/app/components/nav";

export const metadata: Metadata = {
  title: "Adrian Czesnowski | imadrian.dev",
  description: "Adrian Czesnowski - Frontend Developer working with React & ReactNative on a daily basis.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body className="antialiased max-w-2xl mb-16 flex flex-col md:flex-row mx-4 mt-8 lg:mx-auto">
        <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
}
