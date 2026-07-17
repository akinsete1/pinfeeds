import type { Metadata } from 'next';
import HeroSection from '@/components/home/HeroSection';
import InfoBar from '@/components/home/InfoBar';
import AboutSection from '@/components/home/AboutSection';
import ServicesSection from '@/components/home/ServicesSection';
import ProcessSection from '@/components/home/ProcessSection';
import PortfolioSection from '@/components/home/PortfolioSection';
import BlogSection from '@/components/home/BlogSection';
import FaqSection from '@/components/home/FaqSection';
import CtaSection from '@/components/home/CtaSection';

export const metadata: Metadata = {
  title: 'Website Design, App Development & IT Support — Pinfeeds Digital Agency Lagos',
  description:
    'Pinfeeds Digital Agency Limited is a top-rated website design, app development, and IT support company in Lagos, Nigeria. We build stunning websites, powerful mobile apps, and provide reliable IT support. 8+ years of excellence, 150+ projects delivered.',
  alternates: {
    canonical: 'https://pinfeeds.org',
  },
  openGraph: {
    title: 'Website Design, App Development & IT Support — Pinfeeds Digital Agency Lagos',
    description: 'Top-rated website design, app development & IT support company in Lagos, Nigeria. 8+ years · 150+ projects · 24/7 support.',
    url: 'https://pinfeeds.org',
  },
};
import { getPortfolioItems } from '@/data/portfolio';
import { getHomePageData } from '@/data/pages';

export const revalidate = 60;

const faqSchemaFallback = [
  { question: 'Do you build custom websites and web applications from scratch?', answer: 'Yes, we specialize in custom website design and web application development. We build tailored, high-performance, and responsive web solutions that perfectly align with your brand identity and business logic.' },
  { question: 'Can you develop mobile apps for both iOS and Android?', answer: 'Absolutely! Our app development team builds native and cross-platform mobile applications that provide seamless, engaging user experiences across all iOS and Android devices.' },
  { question: 'What IT support services do you offer?', answer: 'We provide comprehensive IT support services including helpdesk support, network setup and maintenance, software troubleshooting, cybersecurity, and IT infrastructure management — available 24/7.' },
  { question: 'What kind of custom software and AI solutions do you provide?', answer: 'We develop scalable enterprise software, CRM systems, and bespoke platforms. Our AI & Machine Learning services can integrate intelligent automation and predictive analytics directly into your business processes.' },
  { question: 'Do you offer Cloud hosting and IT Consultation?', answer: 'Yes, we provide secure cloud services for hosting and scaling your applications, as well as professional IT consultation to help you make informed technological decisions and optimize your IT infrastructure.' },
];

export default async function HomePage() {
  const portfolioItems = await getPortfolioItems();
  const pageData = await getHomePageData();
  const faqs = pageData.faqs && pageData.faqs.length > 0 ? pageData.faqs : faqSchemaFallback;

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <HeroSection phrases={pageData.heroPhrases} />
      <InfoBar />
      <AboutSection summary={pageData.aboutSummary} />
      <ServicesSection />
      <ProcessSection steps={pageData.processSteps} />
      <PortfolioSection initialItems={portfolioItems} />
      <BlogSection />
      <FaqSection faqs={pageData.faqs} />
      <CtaSection title={pageData.ctaTitle} subtitle={pageData.ctaSubtitle} />
    </>
  );
}
