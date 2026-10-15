import type { Metadata } from "next";
import { Parkinsans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// const bricolageGrotesque = Bricolage_Grotesque({
//   variable: "--font-bricolage",
//   subsets: ["latin"],
//   weight: ["400", "500", "600", "700"],
// });

const parkinsans = Parkinsans({
  variable: "--font-parkinsans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "EnTech",
  description:
    "A web platform that tells the EnTech story of what we are building, presents the Gas Leakage Detector and the Gas Meter, and converts interested visitors into early-access demo requests before the hardware is production-ready",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${parkinsans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[url('/hero-mobile.jpg')] bg-[length:100%_auto] bg-top bg-no-repeat md:bg-[url('/hero-desktop.jpg')]">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
