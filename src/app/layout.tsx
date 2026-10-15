import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Instrument_Sans, Noto_Sans_Tifinagh } from "next/font/google";
import "./globals.css";

const serif = Cormorant_Garamond({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-serif", display: "swap" });
const sans = Instrument_Sans({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const tifinagh = Noto_Sans_Tifinagh({ subsets: ["tifinagh"], weight: "400", variable: "--font-tifinagh", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://tunisia-beyond-the-frame.vercel.app"),
  title: "Tunisia — Beyond the Frame | A Cultural Journey",
  description: "Explore Tunisia through its history, architecture, traditions, people and landscapes. An interactive cultural experience by The Architects at GCD4F 2026.",
  keywords: ["Tunisia", "culture", "Carthage", "Kairouan", "Tunisian heritage", "GCD4F 2026"],
  openGraph: { title: "Tunisia — Beyond the Frame", description: "One country. A thousand stories.", type: "website", images: [{ url: "/poster/tunisia-poster.jpg", width: 1200, height: 1600 }] },
  robots: { index: true, follow: true }
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#102f43" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className={`${serif.variable} ${sans.variable} ${tifinagh.variable}`}><body>{children}</body></html>;
}
