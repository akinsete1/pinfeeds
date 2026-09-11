import type { Metadata } from 'next';
import Link from 'next/link';
import AcademyClientView from '@/components/academy/AcademyClientView';
import { COURSES } from '@/data/courses';
import styles from './academy.module.css';

export const metadata: Metadata = {
  title: 'IT Academy & Tech Training Courses in Lagos — Pinfeeds Digital Agency',
  description:
    'Enroll in practical IT courses at Pinfeeds Academy: Full-Stack Web Development, Mobile App Development, UI/UX Design, Data Science & AI, Cloud & DevOps, and Cybersecurity. Mentor-led, project-based training with verified certifications.',
  alternates: {
    canonical: 'https://pinfeeds.org/academy',
  },
  keywords: [
    'IT courses Lagos',
    'coding bootcamp Nigeria',
    'web development training Lagos',
    'learn React and Next.js Nigeria',
    'mobile app development course',
    'UI UX design school Lagos',
    'data science course Nigeria',
    'cybersecurity training Lagos',
    'cloud computing DevOps course',
    'IT academy Lagos Nigeria',
  ],
  openGraph: {
    title: 'Pinfeeds Academy — Master High-Demand IT & Tech Skills',
    description:
      'Hands-on, mentor-led IT training designed to take you from beginner to job-ready tech professional. Explore courses and apply online.',
    url: 'https://pinfeeds.org/academy',
    siteName: 'Pinfeeds Digital Agency Limited',
    images: [
      {
        url: 'https://pinfeeds.org/og-image.png',
        width: 1731,
        height: 909,
        alt: 'Pinfeeds Academy — Practical IT Training',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pinfeeds Academy — In-Demand IT Training & Certification',
    description: 'Learn Web Dev, Mobile Apps, UI/UX, AI, and Cloud from industry experts.',
    images: ['https://pinfeeds.org/og-image.png'],
  },
};

export default function AcademyPage() {
  const courseSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: COURSES.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: {
        '@type': 'Course',
        name: c.title,
        description: c.subtitle,
        provider: {
          '@type': 'Organization',
          name: 'Pinfeeds Digital Agency Limited',
          sameAs: 'https://pinfeeds.org',
        },
        timeRequired: c.duration,
        educationalCredentialAwarded: c.certification,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
      />

      {/* Hero Section */}
      <section className={styles.hero} aria-labelledby="academy-hero-title">
        <div className={styles.heroGlow1} />
        <div className={styles.heroGlow2} />
        <div className={styles.heroGrid} />

        <div className="container">
          <div className={styles.heroContent}>
            <div className={styles.heroBadge}>
              <span className={styles.heroPulse} aria-hidden="true" />
              <span>Admissions Open &bull; 2026 Cohorts</span>
            </div>

            <h1 id="academy-hero-title" className={styles.heroTitle}>
              Launch &amp; Advance Your Tech Career at{' '}
              <span className={styles.heroGradientText}>Pinfeeds Academy</span>
            </h1>

            <p className={styles.heroSubtitle}>
              Intensive, project-driven IT training engineered for the real world. Learn from active senior software engineers, build production-grade applications, and graduate with a verified job-ready portfolio.
            </p>

            <div className={styles.heroActions}>
              <a href="#courses-catalog" className="btn btn-primary btn-lg" id="academy-browse-btn">
                Browse Courses
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                  <path d="M4 10h12M12 6l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a href="#academy-apply-section" className="btn btn-outline-white btn-lg" id="academy-apply-btn">
                Apply for Admission
              </a>
            </div>

            {/* Quick Trust Bar */}
            <div className={styles.highlightsBar}>
              <div className={styles.highlightItem}>
                <span className={styles.highlightValue}>100%</span>
                <span className={styles.highlightLabel}>Practical Projects</span>
              </div>
              <div className={styles.highlightItem}>
                <span className={styles.highlightValue}>1-on-1</span>
                <span className={styles.highlightLabel}>Mentor Guidance</span>
              </div>
              <div className={styles.highlightItem}>
                <span className={styles.highlightValue}>8+</span>
                <span className={styles.highlightLabel}>Specialized Tracks</span>
              </div>
              <div className={styles.highlightItem}>
                <span className={styles.highlightValue}>98%</span>
                <span className={styles.highlightLabel}>Student Satisfaction</span>
              </div>
            </div>

            {/* Breadcrumbs */}
            <nav className="breadcrumb" aria-label="Breadcrumb" style={{ marginTop: '32px' }}>
              <Link href="/">Home</Link>
              <span>›</span>
              <span aria-current="page">Academy &amp; Courses</span>
            </nav>
          </div>
        </div>
      </section>

      {/* Interactive Catalog, Filter, Modal & Form View */}
      <AcademyClientView />
    </>
  );
}
