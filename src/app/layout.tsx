import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  display: "swap",
  style: "normal",
  subsets: ["latin"],
  variable: "--font-inter"
});

const spaceGrotesk = Space_Grotesk({
  display: "swap",
  style: "normal",
  subsets: ["latin"],
  variable: "--font-space-grotesk"
});

export const metadata: Metadata = {
  title: "Home Connect",
  description:
    "O acelerador de vendas ideal para empresas do ramo imobiliário.",
  openGraph: {
    title: "Home Connect",
    description:
      "O acelerador de vendas ideal para empresas do ramo imobiliário.",
    url: "",
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} bg-background-light dark:bg-background-dark`}
      >
        {children}
      </body>
    </html>
  );
}
