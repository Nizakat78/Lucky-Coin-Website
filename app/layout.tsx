import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AnimatedBackground from "./components/AnimatedBackground";
import "./styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lucky Coin (LKC) - Premium Meme Coin on Solana",
  description: "Experience the next generation of meme coins with Lucky Coin. Built on Solana with cutting-edge technology.",
  keywords: "Lucky Coin, LKC, Solana, meme coin, crypto, Web3",
  icons: {
    icon: '/favicon.svg',
    apple: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen`}>
        {/* Three.js Animated Background - Single Instance */}
        <div className="fixed inset-0 z-0 overflow-hidden">
          <AnimatedBackground />
        </div>
        
        {/* Content */}
        <div className="relative z-10">
          <Header />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
