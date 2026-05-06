import type { Metadata } from "next";
import { Inter, Cinzel } from "next/font/google";
import "./globals.css";
import { AnimatePresence, MotionConfig } from "framer-motion";
import Navbar from '@/components/Navbar';

const cinzel = Cinzel({ 
  subsets: ["latin"],
  variable: "--font-cinzel",
  weight: ["400", "600", "700"]
});

export const metadata: Metadata = {
  title: {
    default:
      "Sri Sammaka Sarakka Jyothisyalayam | Astrology & Consultation Booking",
    template: "%s | Sri Sammaka Sarakka Jyothisyalayam",
  },
  description:
    "35+ years of experience. Love, marriage, family, Black Magic remedies, and general astrology. Book online or offline consultations in Telugu, English, or Hindi.",
  openGraph: {
    title: "Sri Sammaka Sarakka Jyothisyalayam",
    description:
      "Trusted astrology consultations with 35+ years of experience. Book your slot online.",
    type: "website",
    locale: "en_IN",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cinzel.variable}>
      <body className="font-serif">
        <MotionConfig reducedMotion="user">
        <Navbar />
        <AnimatePresence mode="wait">
            <div className="container mx-auto py-8 md:py-12 lg:py-16 min-h-screen pt-0">
              {children}
            </div>
          </AnimatePresence>
        </MotionConfig>

      </body>
    </html>
  );
}

