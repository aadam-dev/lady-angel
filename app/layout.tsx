import type { Metadata } from "next";
import { Inter, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { MainNav } from "@/components/layout/main-nav";
import { Footer } from "@/components/layout/footer";
import { SITE_GOOGLE_MAPS_URL } from "@/lib/site";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const displaySerif = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://ladyangelnetwork.com",
  ),
  title: {
    default: "Lady Angel Network",
    template: "%s | Lady Angel Network",
  },
  description:
    "Lady Angel Network (LAN) is a women-led angel investor network supporting execution-ready startups in Ghana through capital, mentorship, and structured deal selection.",
  keywords: [
    "Lady Angel Network",
    "women angel investors",
    "angel investor network Ghana",
    "startup funding Ghana",
    "pre-seed investment Ghana",
    "women-led businesses",
    "impact investing",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_GH",
    url: "/",
    siteName: "Lady Angel Network",
    title: "Lady Angel Network",
    description:
      "A women-led angel investor network supporting execution-ready startups in Ghana with capital, mentorship, and disciplined deal selection.",
    images: [
      {
        url: "/network-platform-evolution.jpg",
        width: 1024,
        height: 768,
        alt: "Lady Angel Network event",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lady Angel Network",
    description:
      "Women-led angel investor network supporting execution-ready startups in Ghana.",
    images: ["/network-platform-evolution.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Lady Angel Network",
    alternateName: "LAN",
    url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://ladyangelnetwork.com",
    logo: "/logo.svg",
    email: "info@ladyangelnetwork.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "24 Justice E N P Sowah Lane",
      addressLocality: "East Legon",
      addressRegion: "Greater Accra",
      addressCountry: "GH",
    },
    hasMap: SITE_GOOGLE_MAPS_URL,
    sameAs: [],
  };

  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${geistMono.variable} ${displaySerif.variable} font-sans bg-background text-foreground antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <ThemeProvider>
          <div className="flex min-h-screen flex-col bg-background">
            <MainNav />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
