'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './PosSpotlight.module.css';

interface ShowcaseSlide {
  id: string;
  tag: string;
  title: string;
  caption: string;
  image: string;
  alt: string;
  badgeValue: string;
  badgeLabel: string;
  features: string[];
}

const SHOWCASE_SLIDES: ShowcaseSlide[] = [
  {
    id: 'dashboard',
    tag: 'Executive Dashboard',
    title: 'Command Center & Live Sales Analytics',
    caption: 'Visualise gross revenue, profit margins, top-moving items, and cashier shifts in real time. Make data-driven decisions that grow your bottom line.',
    image: '/images/pos/pos-dashboard.jpg',
    alt: 'Pinfeeds POS Executive Dashboard showing real-time sales and revenue charts',
    badgeValue: '₦1,854,320',
    badgeLabel: "Today's Gross Sales (+12.4%)",
    features: ['Live Hourly Sales Graphs', 'Cashier Shift Performance', 'Automated Daily P&L Reports'],
  },
  {
    id: 'terminal',
    tag: 'Counter Register',
    title: 'Ultra-Fast Touch Checkout & Multi-Payment',
    caption: 'Process customer transactions in seconds with quick product search, barcode scanning, custom discounts, and automated digital receipts.',
    image: '/images/pos/pos-terminal.jpg',
    alt: 'Pinfeeds POS Counter Register on modern tablet showing instant checkout',
    badgeValue: '< 3 Sec',
    badgeLabel: 'Average Checkout Speed',
    features: ['Card, Transfer & USSD Ready', 'Barcode & Receipt Printer Support', 'Instant Split-Bill Option'],
  },
  {
    id: 'mobile',
    tag: 'Mobile Store Manager',
    title: 'Monitor Your Store From Anywhere on Your Phone',
    caption: 'Whether you are travelling or relaxing at home, check branch inventory, receive push alerts for high-value sales, and detect stock theft instantly.',
    image: '/images/pos/pos-mobile.jpg',
    alt: 'Pinfeeds POS Mobile App showing live store monitoring and inventory alerts',
    badgeValue: '24/7 Sync',
    badgeLabel: 'Cloud & Offline Resilience',
    features: ['Push Alerts for Low Stock', 'Multi-Branch Comparison', 'Zero Manual Book-keeping'],
  },
];

const VALUE_PROPS = [
  {
    icon: '⚡',
    title: '100% Offline Resilience',
    desc: 'Power outage or no network? Keep selling without pause. All transactions automatically sync when reconnecting.',
  },
  {
    icon: '📦',
    title: 'Smart Stock & Expiry Control',
    desc: 'Never run out of bestsellers or sell expired goods. Automated low-stock alerts notify you before shelves run empty.',
  },
  {
    icon: '🏢',
    title: 'Multi-Branch Management',
    desc: 'Manage 1, 5, or 50 branches from one central login. Transfer stock between stores with full audit trails.',
  },
  {
    icon: '🛡️',
    title: 'Theft & Loss Prevention',
    desc: 'Granular cashier permissions, voided-sale logs, and cash drawer reconciliations safeguard every single Naira.',
  },
];

export default function PosSpotlight() {
  const [activeTab, setActiveTab] = useState(0);
  const activeSlide = SHOWCASE_SLIDES[activeTab];

  return (
    <section className={styles.section} id="pos-showcase" aria-labelledby="pos-showcase-title">
      {/* Background Ambience */}
      <div className={styles.glowTop} aria-hidden="true" />
      <div className={styles.glowBottom} aria-hidden="true" />
      <div className={styles.gridPattern} aria-hidden="true" />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        {/* Section Heading with Captivating Caption */}
        <div className="section-heading" style={{ marginBottom: '40px' }}>
          <div className={styles.pillBadge}>
            <span className={styles.livePulse} aria-hidden="true" />
            <span>✨ NEW PRODUCT RELEASE &bull; BUSINESS SOLUTION SOFTWARE</span>
          </div>

          <h2 className="section-title" id="pos-showcase-title" style={{ color: 'var(--white)', marginTop: '16px' }}>
            Empower Your Business With{' '}
            <span className={styles.gradientHeading}>
              Pinfeeds Smart POS
            </span>
          </h2>

          <p className="section-desc" style={{ color: 'rgba(255, 255, 255, 0.78)', maxWidth: '780px', margin: '0 auto', fontSize: '1.125rem', lineHeight: '1.7' }}>
            Stop losing money to spreadsheet errors, stock discrepancies, and slow checkout queues. 
            <strong> Pinfeeds POS</strong> is the modern, cloud-powered business management platform designed specifically 
            for Nigerian supermarkets, retail boutiques, restaurants, pharmacies, and wholesale distributors.
          </p>
        </div>

        {/* Interactive Device / Screen Switcher Tabs */}
        <div className={styles.tabBar} role="tablist" aria-label="POS Showcase Views">
          {SHOWCASE_SLIDES.map((slide, index) => (
            <button
              key={slide.id}
              onClick={() => setActiveTab(index)}
              className={`${styles.tabBtn} ${activeTab === index ? styles.activeTab : ''}`}
              role="tab"
              aria-selected={activeTab === index}
              aria-controls={`panel-${slide.id}`}
              id={`tab-${slide.id}`}
            >
              <span className={styles.tabDot} aria-hidden="true" />
              <span className={styles.tabLabel}>{slide.tag}</span>
            </button>
          ))}
        </div>

        {/* Main Showcase Showcase Display */}
        <div className={styles.showcaseCard} id={`panel-${activeSlide.id}`} role="tabpanel" aria-labelledby={`tab-${activeSlide.id}`}>
          <div className={styles.showcaseGrid}>
            {/* Left Content / Caption & Highlights */}
            <div className={styles.showcaseContent}>
              <span className={styles.subTag}>{activeSlide.tag}</span>
              <h3 className={styles.slideTitle}>{activeSlide.title}</h3>
              <p className={styles.slideCaption}>{activeSlide.caption}</p>

              {/* Feature Checklist */}
              <div className={styles.featureList}>
                {activeSlide.features.map((feat) => (
                  <div key={feat} className={styles.featureItem}>
                    <div className={styles.checkIcon}>
                      <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                        <path d="M3 8.5L6.5 12L13 4" stroke="#00d4ff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              {/* Trust Callout */}
              <div className={styles.calloutCard}>
                <div className={styles.calloutIcon}>💡</div>
                <div className={styles.calloutText}>
                  <strong>Works with your existing hardware:</strong> Compatible with phones, iPads, Android tablets, laptops, barcode scanners, and thermal receipt printers.
                </div>
              </div>

              {/* Actions */}
              <div className={styles.actionGroup}>
                <Link href="/pos" className="btn btn-primary btn-lg" id="pos-showcase-explore-btn">
                  Explore Pinfeeds POS
                  <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                    <path d="M4 10h12M12 6l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
                <Link href="/pos#pos-inquiry" className="btn btn-outline-white btn-lg" id="pos-showcase-demo-btn">
                  Request Free Demo
                </Link>
              </div>
            </div>

            {/* Right Media / Image Showcase */}
            <div className={styles.showcaseMedia}>
              <div className={styles.mediaContainer}>
                {/* Floating Metric Badge */}
                <div className={styles.floatingMetric}>
                  <div className={styles.metricVal}>{activeSlide.badgeValue}</div>
                  <div className={styles.metricLbl}>{activeSlide.badgeLabel}</div>
                </div>

                {/* Floating Security Badge */}
                <div className={styles.floatingTag}>
                  <span className={styles.tagIcon}>🔒</span>
                  <span>Bank-Grade 256-bit Security</span>
                </div>

                {/* Main Product Image */}
                <div className={styles.imageFrame}>
                  <Image
                    src={activeSlide.image}
                    alt={activeSlide.alt}
                    width={900}
                    height={550}
                    priority={activeTab === 0}
                    className={styles.productImage}
                  />
                  <div className={styles.imageOverlay} />
                </div>
              </div>

              {/* Image Thumbnail Selector */}
              <div className={styles.thumbRow}>
                {SHOWCASE_SLIDES.map((slide, idx) => (
                  <button
                    key={slide.id}
                    onClick={() => setActiveTab(idx)}
                    className={`${styles.thumbBtn} ${activeTab === idx ? styles.activeThumb : ''}`}
                    aria-label={`Switch to ${slide.tag}`}
                  >
                    <div className={styles.thumbImageWrapper}>
                      <Image
                        src={slide.image}
                        alt={slide.alt}
                        width={120}
                        height={75}
                        className={styles.thumbImg}
                      />
                    </div>
                    <span className={styles.thumbCaption}>{slide.tag}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 4 Pillars Grid below the main showcase */}
        <div className={styles.pillarsGrid}>
          {VALUE_PROPS.map((prop, i) => (
            <div key={i} className={styles.pillarCard}>
              <div className={styles.pillarIconBox}>{prop.icon}</div>
              <h4 className={styles.pillarTitle}>{prop.title}</h4>
              <p className={styles.pillarDesc}>{prop.desc}</p>
            </div>
          ))}
        </div>

        {/* Bottom Fast-Action Strip */}
        <div className={styles.bottomBanner}>
          <div className={styles.bannerInfo}>
            <span className={styles.bannerBadge}>Special Launch Offer</span>
            <h3 className={styles.bannerHeading}>Ready to supercharge your business operations?</h3>
            <p className={styles.bannerSub}>Get your complete POS setup running within 48 hours. Free staff onboarding included.</p>
          </div>
          <div className={styles.bannerButtons}>
            <a
              href="https://wa.me/2348066893144?text=Hello%20Pinfeeds,%20I%20am%20interested%20in%20a%20demo%20of%20the%20Pinfeeds%20POS%20Business%20Solution."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              id="pos-showcase-whatsapp-btn"
            >
              <span>💬 Chat on WhatsApp</span>
            </a>
            <Link href="/pos" className="btn btn-outline-white" id="pos-showcase-viewdetails-btn">
              <span>View All POS Features &rarr;</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
