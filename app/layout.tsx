import "./globals.css";
import React from "react";
import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Scrolltotop from "@/components/Scrolltotop";


export const metadata: Metadata = {
  title: "Travel",
  description: "Travel UI/UX App For Camping",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="relative overflow-hidden">{children}</main>
        <Scrolltotop />
        <Footer />
        </body>
    </html>
  );
}
