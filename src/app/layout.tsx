import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Newsreader, Fustat } from "next/font/google";
const newsreader = Newsreader({ subsets: ["latin"] });
const fustat = Fustat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ZK Email",
  description:
    "ZK Email lets you make privacy-preserving proofs of your existing emails. You can prove you own an email at some domain, prove attendance at a real-world event, or confirm transactions on chain.",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/favicon-dark.svg",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/favicon-light.svg",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${newsreader.className} ${fustat.className} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
