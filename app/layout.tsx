import type { Metadata } from "next";
import "./globals.css";
import {Noto_Serif, Newsreader, Cormorant_Garamond} from "next/font/google";

const notoSerif = Noto_Serif({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-noto-serif",
  display: "swap"
})

const newsReader = Newsreader({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-newsreader",
  display: "swap"
})

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-cormorant",
  display: "swap"
})

export const metadata: Metadata = {
  title: "My restaurant",
  description: "Restaurant website template",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${notoSerif.variable} ${newsReader.variable} ${cormorantGaramond.variable}`} >
      <body>
        {children}
      </body>
    </html>
  );
}
