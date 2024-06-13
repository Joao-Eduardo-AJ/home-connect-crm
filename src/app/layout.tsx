import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Aside } from "./_components/aside";
import { Header } from "./_components/header";

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
        className={`${inter.variable} ${spaceGrotesk.variable} overflow-hidden bg-background-light dark:bg-background-dark`}
      >
        <Header />
        {children}
        <Aside />
      </body>
    </html>
  );
}
