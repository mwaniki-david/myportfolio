import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StarsCanvas from "@/Components/Starfield";
const inter = Inter({ subsets: ["latin"] });
import Navbar from "@/Components/Navbar";
import Starfield from "@/Components/Starfield";

export const metadata: Metadata = {
  title: "Personal Portfolio",
  description: "my Personal Portfolio ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className='!scroll-smooth'>
      <body className={inter.className}>
      <Navbar/>
      <Starfield/>
        {children}</body>
    </html>
  );
}
