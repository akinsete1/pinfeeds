import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import TawkToChat from "@/components/layout/TawkToChat";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
});

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-heading",
});

export const revalidate = 60;

export const metadata: Metadata = {
  metadataBase: new URL("https://pinfeeds.org"),
  title: {
    default: "Pinfeeds Digital Agency Limited — Website, Software, AI & Mobile App Development",
    template: "%s | Pinfeeds Digital Agency",
  },
  description:
    "Pinfeeds Digital Agency Limited is a premier global IT company offering AI Services, website development, software development, mobile app development, digital marketing, UX/UI design, and cloud services.",
  keywords: [
    "website design",
    "website design company Lagos",
    "website design Nigeria",
    "app development",
    "app development company Nigeria",
    "mobile app development Lagos",
    "IT support",
    "IT support Nigeria",
    "IT support Lagos",
    "digital agency Nigeria",
    "global IT company",
    "AI services worldwide",
    "AI development company",
    "website development",
    "software development",
    "digital marketing",
    "tech agency Nigeria",
    "Pinfeeds",
    "IT company Nigeria",
    "web development Lagos",
    "IT consulting Lagos",
  ],
  authors: [{ name: "Pinfeeds Digital Agency Limited", url: "https://pinfeeds.org" }],
  creator: "Pinfeeds Digital Agency Limited",
  publisher: "Pinfeeds Digital Agency Limited",
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "https://pinfeeds.org",
    siteName: "Pinfeeds Digital Agency Limited",
    title: "Pinfeeds Digital Agency — Premium IT Solutions",
    description:
      "Premier software, website & mobile app development company with 8+ years experience. Trusted by businesses across Nigeria and beyond.",
    images: [
      {
        url: "https://pinfeeds.org/og-image.png",
        width: 1731,
        height: 909,
        alt: "Pinfeeds Digital Agency Limited — Smart Solutions. Real Results.",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pinfeeds Digital Agency — Premium IT Solutions",
    description:
      "Premier software, website & mobile app development company with 8+ years experience.",
    images: ["https://pinfeeds.org/og-image.png"],
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
  alternates: {
    canonical: "https://pinfeeds.org",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <head>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": ["Organization", "LocalBusiness"],
                name: "Pinfeeds Digital Agency Limited",
                url: "https://pinfeeds.org",
                logo: "https://pinfeeds.org/logo.png",
                image: "https://pinfeeds.org/og-image.jpg",
                telephone: "+2348066893144",
                email: "hello@pinfeeds.org",
                contactPoint: {
                  "@type": "ContactPoint",
                  telephone: "+2348066893144",
                  contactType: "customer service",
                  areaServed: ["NG", "GB", "US"],
                  availableLanguage: "English",
                },
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "Lagos",
                  addressRegion: "Lagos State",
                  addressCountry: "NG",
                },
                geo: {
                  "@type": "GeoCoordinates",
                  latitude: 6.5244,
                  longitude: 3.3792,
                },
                openingHoursSpecification: {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
                  opens: "00:00",
                  closes: "23:59",
                },
                sameAs: [
                  "https://www.facebook.com/pinfeeds",
                  "https://x.com/pinfeedsdigital",
                  "https://www.instagram.com/pinfeeds/",
                  "https://www.linkedin.com/in/akinsete-adedeji-93284ab3/",
                ],
                description:
                  "Premier IT company in Lagos, Nigeria offering website design, app development, IT support, software development, digital marketing, and cloud services.",
                foundingDate: "2016",
                priceRange: "$$",
                hasOfferCatalog: {
                  "@type": "OfferCatalog",
                  name: "IT & Digital Services",
                  itemListElement: [
                    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Website Design", url: "https://pinfeeds.org/services/web-development" } },
                    { "@type": "Offer", itemOffered: { "@type": "Service", name: "App Development", url: "https://pinfeeds.org/services/mobile-app-development" } },
                    { "@type": "Offer", itemOffered: { "@type": "Service", name: "IT Support", url: "https://pinfeeds.org/services/it-support" } },
                    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Software Development", url: "https://pinfeeds.org/services/software-development" } },
                    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Digital Marketing", url: "https://pinfeeds.org/services/digital-marketing" } },
                    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Cloud Services", url: "https://pinfeeds.org/services/cloud-services" } },
                    { "@type": "Offer", itemOffered: { "@type": "Service", name: "AI & Machine Learning", url: "https://pinfeeds.org/services/ai-services" } },
                    { "@type": "Offer", itemOffered: { "@type": "Service", name: "IT Consulting", url: "https://pinfeeds.org/services/consulting" } },
                  ],
                },
              },
              {
                "@context": "https://schema.org",
                "@type": "WebSite",
                name: "Pinfeeds Digital Agency Limited",
                url: "https://pinfeeds.org",
                potentialAction: {
                  "@type": "SearchAction",
                  target: "https://pinfeeds.org/search?q={search_term_string}",
                  "query-input": "required name=search_term_string",
                },
              },
            ]),
          }}
        />
      </head>
      <body>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <Analytics />
        <SpeedInsights />
        <TawkToChat />
      </body>
    </html>
  );
}
