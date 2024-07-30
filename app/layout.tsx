import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./ui/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Turner Bell - Software Engineer",
  description: "Turner Bell is a software engineer based in the United States.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="{inter.className} m-auto w-2/3">
        <NavBar />
        <main className="border rounded-md broider">{children}</main>
      </body>
    </html>
  );
}
