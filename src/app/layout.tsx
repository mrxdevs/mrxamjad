import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageAnimator from "../components/PageAnimator";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Amjad Ali - Software Engineer",
  description: "Passionate Mobile Developer/Software Developer creating intuitive, beautiful, and high-performing digital experiences. Specializing in Flutter, React Native, and modern web technologies.",
};

export const viewport = {
  themeColor: '#a855f7',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="min-h-screen bg-gradient-to-b from-[#0b0c10] to-[#14121f] text-zinc-200">
          <Navbar />
          <main className="relative mx-auto max-w-6xl px-6 sm:px-8">
            <PageAnimator>{children}</PageAnimator>
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
