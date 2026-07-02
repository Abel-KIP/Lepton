import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import StickyBar from "@/components/StickyBar";
import FloatingButtons from "@/components/FloatingButtons";
import ScrollProgress from "@/components/ScrollProgress";
import CursorGlow from "@/components/CursorGlow";
import ExitPopup from "@/components/ExitPopup";
import LoadingScreen from "@/components/LoadingScreen";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://leptontech.co.ke"),
  title: "Lepton Technologies | CCTV & Security Systems Nairobi Kenya",
  description:
    "Premium CCTV installation, alarm systems, and door access control in Nairobi, Kenya. Professional security solutions for homes and businesses.",
  keywords:
    "CCTV Installation Nairobi, Security Systems Nairobi, Alarm Solutions Kenya, Door Access Control Kenya, CCTV Cameras Nairobi, Biometric Access Control Kenya",
  openGraph: {
    title: "Lepton Technologies | Advanced Security Solutions Nairobi",
    description:
      "Professional CCTV, Alarm and Door Access Control Systems in Nairobi, Kenya.",
    type: "website",
    locale: "en_KE",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body>
        <LoadingScreen />
        <ScrollProgress />
        <link rel="icon" href="/logo" />
        <CursorGlow />
        <Navbar />
        {children}

        <StickyBar />
        <FloatingButtons />
        <ExitPopup />
      </body>
    </html>
  );
}
