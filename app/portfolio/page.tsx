import type { Metadata } from 'next';
import Link from 'next/link';
import { getPortfolioItems } from '@/data/portfolio';
import PortfolioClient from './PortfolioClient';

export const metadata: Metadata = {
  title: 'Our Portfolio — Pinfeeds Digital Agency',
  description: 'Explore our recent projects across web, software, and design',
  alternates: { canonical: 'https://pinfeeds.org/portfolio' },
};

export default async function PortfolioPage() {
  const portfolioItems = await getPortfolioItems();

  return (
    <>
      <div className="page-title-bar">
        <div className="container">
          <h1>Our Portfolio</h1>
          <p>Explore our recent projects across web, software, and design</p>
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span>›</span>
            <span aria-current="page">Portfolio</span>
          </nav>
        </div>
      </div>

      <PortfolioClient initialItems={portfolioItems} />
    </>
  );
}
