import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { personalInfo } from "@/data/personalInfo";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: `${personalInfo.name} - ${personalInfo.title}`,
    template: `%s | ${personalInfo.name}`,
  },
  description: personalInfo.about,
  keywords: [
    "full stack developer",
    "software engineer",
    "react",
    "next.js",
    "typescript",
    "node.js",
    "web development",
  ],
  authors: [{ name: personalInfo.name, url: personalInfo.social.website }],
  creator: personalInfo.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: personalInfo.social.website,
    siteName: personalInfo.name,
    title: `${personalInfo.name} - ${personalInfo.title}`,
    description: personalInfo.about,
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: `${personalInfo.name} - ${personalInfo.title}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${personalInfo.name} - ${personalInfo.title}`,
    description: personalInfo.about,
    images: ["/images/og-image.jpg"],
    creator: "@alexjohnson_dev",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body className={`${inter.variable} font-sans antialiased modern-bg`}>
        {/* Modern Background Elements */}
        <div className="fixed inset-0 -z-10">
          {/* Geometric pattern overlay */}
          <div className="absolute inset-0 geometric-pattern opacity-40" />
          
          {/* Green Aurora glow effects */}
          <div className="pulse-glow absolute top-20 left-20 w-96 h-96 bg-emerald-500/20" />
          <div className="pulse-glow absolute bottom-32 right-20 w-80 h-80 bg-green-500/15" style={{ animationDelay: '3s' }} />
          <div className="pulse-glow absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-teal-500/10" style={{ animationDelay: '6s' }} />
          
          {/* Subtle green accent lines */}
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent" />
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-green-500/30 to-transparent" />
        </div>

        <div className="relative flex min-h-screen flex-col">
          <Navigation />
          <main className="flex-1 relative z-10">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
