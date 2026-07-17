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
    "digital agency Nigeria",
    "global IT company",
    "AI services worldwide",
    "AI development company",
    "website development",
    "software development",
    "mobile app development",
    "digital marketing",
    "tech agency Nigeria and Worldwide",
    "Pinfeeds",
    "IT company Nigeria",
    "web development Lagos",
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
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Pinfeeds Digital Agency Limited",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pinfeeds Digital Agency — Premium IT Solutions",
    description:
      "Premier software, website & mobile app development company with 8+ years experience.",
    images: ["/og-image.jpg"],
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
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Pinfeeds Digital Agency Limited",
              url: "https://pinfeeds.org",
              logo: "https://pinfeeds.org/logo.png",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+2348066893144",
                contactType: "customer service",
                areaServed: "NG",
                availableLanguage: "English",
              },
              address: {
                "@type": "PostalAddress",
                addressCountry: "NG",
              },
              sameAs: [],
              description:
                "Premier IT company offering website development, software development, mobile app development, digital marketing, and cloud services.",
              foundingDate: "2016",
              numberOfEmployees: "10-50",
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "IT & Digital Services",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Website Development"
                    }
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Software Development"
                    }
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Mobile App Development"
                    }
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Digital Marketing"
                    }
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Cloud Services"
                    }
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "AI & Machine Learning"
                    }
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "IT Consulting"
                    }
                  }
                ]
              }
            }),
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
