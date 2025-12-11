import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageAnimator from "../components/PageAnimator";
import { Analytics } from '@vercel/analytics/next';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Amjad Ali - Flutter, iOS & Android Developer | Mobile App Development",
    template: "%s | Amjad Ali"
  },
  description: "Expert Flutter, iOS, and Android developer in Chennai. Specializing in cross-platform mobile app development, React Native, and web development. 25+ projects delivered. Hire for your next mobile app project.",
  keywords: [
    "Flutter developer",
    "iOS developer",
    "Android developer",
    "React Native developer",
    "Mobile app development",
    "Chennai mobile app developer",
    "Freelance Flutter developer",
    "Cross-platform app development",
    "Kotlin developer",
    "Swift developer",
    "Mobile application developer Chennai",
    "Hire Flutter developer",
    "App development services",
    "Firebase integration",
    "Mobile UI/UX developer"
  ],
  authors: [{ name: "Amjad Ali", url: "https://mrxamjad.com" }],
  creator: "Amjad Ali",
  publisher: "Amjad Ali",
  metadataBase: new URL("https://mrxamjad.com"),
  alternates: {
    canonical: "https://mrxamjad.com"
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mrxamjad.com",
    title: "Amjad Ali - Flutter, iOS & Android Developer | Mobile App Development",
    description: "Expert Flutter, iOS, and Android developer in Chennai. Specializing in cross-platform mobile app development, React Native, and web development. 25+ projects delivered.",
    siteName: "Amjad Ali Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Amjad Ali - Mobile App Developer"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Amjad Ali - Flutter, iOS & Android Developer",
    description: "Expert mobile app developer specializing in Flutter, iOS, Android, and React Native. 25+ projects delivered in Chennai.",
    creator: "@MrxAmjad",
    images: ["/og-image.jpg"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  },
  verification: {
    google: "your-google-verification-code", // User should replace with actual code
  }
};

export const viewport = {
  themeColor: '#a855f7',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Amjad Ali",
    "url": "https://mrxamjad.com",
    "image": "https://mrxamjad.com/profile-image.png",
    "sameAs": [
      "https://github.com/mrxdevs",
      "https://www.linkedin.com/in/mrxamjad",
      "https://instagram.com/mrxamjad",
      "https://x.com/MrxAmjad",
      "https://medium.com/@mrxamjad"
    ],
    "jobTitle": "Mobile Application Developer",
    "worksFor": {
      "@type": "Organization",
      "name": "DIGIWELLIE TECHNOLOGY"
    },
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "Aarupadai Veedu Institute of Technology"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Chennai",
      "addressRegion": "Tamil Nadu",
      "addressCountry": "IN"
    },
    "email": "mrxamjad@gmail.com",
    "telephone": "+917260004480",
    "knowsAbout": [
      "Flutter Development",
      "iOS Development",
      "Android Development",
      "React Native",
      "Mobile App Development",
      "Cross-platform Development",
      "Kotlin",
      "Swift",
      "Firebase",
      "UI/UX Design"
    ]
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden`}>
        <div className="min-h-screen bg-gradient-to-b from-[#0b0c10] to-[#14121f] text-zinc-200 w-full overflow-x-hidden">
          <Navbar />
          <main className="relative mx-auto max-w-6xl px-4 sm:px-6 md:px-8 w-full">
            <PageAnimator>{children}</PageAnimator>
          </main>
          <Footer />
        </div>
        <Analytics />
      </body>
    </html>
  );
}
