import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import PosClient from './PosClient';
import styles from './pos.module.css';

export const metadata: Metadata = {
  title: 'Pinfeeds POS — Smart Point-of-Sale Business Solution Software',
  description:
    'Pinfeeds POS is a cloud-based point-of-sale business solution for Nigerian businesses. Manage sales, inventory, staff, and multi-branch operations from any device. Real-time analytics, offline mode, and 24/7 support.',
  alternates: {
    canonical: 'https://pinfeeds.org/pos',
  },
  keywords: [
    'POS software Nigeria',
    'point of sale software Lagos',
    'POS system for retail',
    'POS for restaurants Nigeria',
    'inventory management software',
    'sales tracking software',
    'Pinfeeds POS',
    'cloud POS Nigeria',
    'best POS system Lagos',
    'POS for pharmacies',
    'multi-branch POS',
    'business management software Nigeria',
  ],
  openGraph: {
    title: 'Pinfeeds POS — The Smartest POS Built for Nigerian Businesses',
    description:
      'Manage sales, inventory, staff and multiple branches from one powerful dashboard. Works offline. Setup in 48 hours. Try Pinfeeds POS today.',
    url: 'https://pinfeeds.org/pos',
    siteName: 'Pinfeeds Digital Agency Limited',
    images: [
      {
        url: 'https://pinfeeds.org/og-image.png',
        width: 1731,
        height: 909,
        alt: 'Pinfeeds POS — Smart Business Solution Software',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pinfeeds POS — Smart POS for Nigerian Businesses',
    description:
      'Cloud-based POS with real-time inventory, multi-payment support, and offline mode. Built for retail, restaurants, pharmacies & more.',
    images: ['https://pinfeeds.org/og-image.png'],
  },
};

export default function PosPage() {
  const posSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Pinfeeds POS Business Solution',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web, Android, iOS',
    description:
      'Cloud-based point-of-sale and business management software for Nigerian businesses. Features include sales processing, inventory management, staff management, multi-branch support, real-time analytics, and offline mode.',
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      seller: {
        '@type': 'Organization',
        name: 'Pinfeeds Digital Agency Limited',
        url: 'https://pinfeeds.org',
      },
    },
    provider: {
      '@type': 'Organization',
      name: 'Pinfeeds Digital Agency Limited',
      url: 'https://pinfeeds.org',
      telephone: '+2348066893144',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Lagos',
        addressRegion: 'Lagos State',
        addressCountry: 'NG',
      },
    },
    featureList: [
      'Sales & Invoicing',
      'Real-Time Inventory Management',
      'Revenue & Expense Analytics',
      'Staff & Branch Management',
      'Multi-Payment Integration',
      'Offline Mode',
      'Cloud Backups',
      'Smart Notifications',
    ],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Do I need special hardware to use Pinfeeds POS?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No. Pinfeeds POS is cloud-based and works on any device — smartphone, tablet, laptop, or desktop. You can optionally connect receipt printers, barcode scanners, or cash drawers.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I manage multiple branches from one account?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Pinfeeds POS supports unlimited branches under a single dashboard with consolidated reports, stock transfers, and staff assignments.',
        },
      },
      {
        '@type': 'Question',
        name: 'What happens if my internet goes down?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Pinfeeds POS has a robust offline mode. Sales continue processing and sync automatically when connectivity is restored.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is my business data safe?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. We use 256-bit encryption, daily cloud backups, and role-based access controls with 99.9% uptime.',
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([posSchema, faqSchema]) }}
      />

      {/* Hero Section */}
      <section className={styles.hero} aria-labelledby="pos-hero-title">
        <div className={styles.heroGlow1} />
        <div className={styles.heroGlow2} />
        <div className={styles.heroGlow3} />
        <div className={styles.heroGrid} />

        <div className="container">
          <div className={styles.heroContent}>
            <div className={styles.heroBadge}>
              <span className={styles.heroPulse} aria-hidden="true" />
              <span>New Product &bull; Now Available</span>
            </div>

            <h1 id="pos-hero-title" className={styles.heroTitle}>
              Run Your Entire Business From{' '}
              <span className={styles.heroGradientText}>One Powerful Dashboard</span>
            </h1>

            <p className={styles.heroSubtitle}>
              Pinfeeds POS is the all-in-one business solution software that handles your sales, inventory, staff, and multi-branch operations — so you can stop juggling spreadsheets and start growing revenue.
            </p>

            <div className={styles.heroActions}>
              <a href="#pos-inquiry" className="btn btn-primary btn-lg" id="pos-hero-inquiry-btn">
                Get Started Free
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                  <path d="M4 10h12M12 6l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a href="#pos-features" className="btn btn-outline-white btn-lg" id="pos-hero-features-btn">
                Explore Features
              </a>
            </div>

            {/* Hero Dashboard Preview */}
            <div className={styles.heroImageWrapper}>
              <div className={styles.heroImageCard}>
                <Image
                  src="/images/pos/pos-dashboard.jpg"
                  alt="Pinfeeds POS Command Center Dashboard showing sales and inventory"
                  width={1100}
                  height={620}
                  priority
                  className={styles.heroImg}
                />
              </div>
            </div>

            {/* Trust Bar */}
            <div className={styles.highlightsBar}>
              <div className={styles.highlightItem}>
                <span className={styles.highlightValue}>500+</span>
                <span className={styles.highlightLabel}>Active Businesses</span>
              </div>
              <div className={styles.highlightItem}>
                <span className={styles.highlightValue}>₦2B+</span>
                <span className={styles.highlightLabel}>Transactions Processed</span>
              </div>
              <div className={styles.highlightItem}>
                <span className={styles.highlightValue}>99.9%</span>
                <span className={styles.highlightLabel}>Uptime Guarantee</span>
              </div>
              <div className={styles.highlightItem}>
                <span className={styles.highlightValue}>24/7</span>
                <span className={styles.highlightLabel}>Dedicated Support</span>
              </div>
            </div>

            {/* Breadcrumbs */}
            <nav className="breadcrumb" aria-label="Breadcrumb" style={{ marginTop: '32px' }}>
              <Link href="/">Home</Link>
              <span>›</span>
              <span aria-current="page">Pinfeeds POS</span>
            </nav>
          </div>
        </div>
      </section>

      {/* Interactive Client Sections */}
      <PosClient />
    </>
  );
}
