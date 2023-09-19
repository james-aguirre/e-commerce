import Footer from "@/components/Footer";
import "./globals.css";
import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import Navbar from "@/components/Navbar";
import getProducts from "@/api/getProducts";

const font = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shop",
  description: "E-commerce shop",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  console.log(getProducts());
  return (
    <html lang="en">
      <body className={font.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
