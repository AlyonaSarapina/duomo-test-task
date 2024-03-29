import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/header";
import { lora } from "./fonts";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={lora.className}>
        <div className="px-4 py-6">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
