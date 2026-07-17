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
  title: 'Pinfeeds Digital Agency Limited — Premier IT Solutions in Nigeria',
  description:
    'Pinfeeds Digital Agency Limited is a top-rated IT company offering website development, software development, mobile app development, digital marketing, UX/UI design, and cloud services. 8+ years of excellence.',
  alternates: {
    canonical: 'https://pinfeeds.org',
  },
};
import { getPortfolioItems } from '@/data/portfolio';
import { getHomePageData } from '@/data/pages';

export const revalidate = 60;

export default async function HomePage() {
  const portfolioItems = await getPortfolioItems();
  const pageData = await getHomePageData();

  return (
    <>
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
