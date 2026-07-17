import type { Metadata } from 'next';
import Link from 'next/link';
import { getServices } from '@/data/services';
import CtaSection from '@/components/home/CtaSection';
import styles from './services.module.css';

export const metadata: Metadata = {
  title: 'Our Services — Pinfeeds Digital Agency',
  description:
    'Comprehensive IT solutions including web development, mobile apps, digital marketing, and UI/UX design from the top IT agency in Nigeria.',
  alternates: { canonical: 'https://pinfeeds.org/services' },
};

export default async function ServicesPage() {
  const services = await getServices();
  return (
    <>
      <div className="page-title-bar">
        <div className="container">
          <h1>Our Services</h1>
          <p>Comprehensive IT solutions tailored to your business needs</p>
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span>›</span>
            <span aria-current="page">Services</span>
          </nav>
        </div>
      </div>

      <section className={`section ${styles.services}`}>
        <div className="container">
          <div className="section-heading">
            <span className="section-tag">What We Do</span>
            <h2 className="section-title">
              We run all kinds of services in form of{' '}
              <span>Information & Technologies</span>
            </h2>
            <p className="section-desc">
              From concept to deployment, we cover every aspect of your digital journey with
              precision, creativity, and technical excellence.
            </p>
          </div>

          <div className={styles.grid}>
            {services.map((service, i) => (
              <article
                key={service.id}
                className={styles.card}
                style={{ '--accent': service.color } as React.CSSProperties}
                id={service.id}
              >
                <div className={styles.cardHeader}>
                  <div className={styles.iconBox}>
                    <span className={styles.icon}>{service.icon}</span>
                  </div>
                  <span className={styles.number}>{String(i + 1).padStart(2, '0')}</span>
                </div>
                <h3 className={styles.title}>{service.title}</h3>
                <p className={styles.desc}>{service.description}</p>
                <ul className={styles.features}>
                  {service.features.map((f) => (
                    <li key={f}>
                      <span className={styles.check}>✓</span> {f}
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className={styles.cta} aria-label={`Get a quote for ${service.title}`}>
                  Get a Quote
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className={`section section-grey ${styles.why}`}>
        <div className="container">
          <div className="section-heading">
            <span className="section-tag">Why Pinfeeds</span>
            <h2 className="section-title">We deal with the aspects of <span>Professional IT Services</span></h2>
          </div>
          <div className={styles.whyGrid}>
            {[
              { icon: '🎯', title: 'Product Designs', desc: 'Our firm is expert at creating efficient user interfaces that make user interaction lively and intuitive.' },
              { icon: '📊', title: 'Big Data & Analytics', desc: 'Statistical analysis to help your organization gain insights from large information datasets.' },
              { icon: '💾', title: 'Maintain App Data', desc: 'We create the optimal platform to develop and run digital applications for clients.' },
              { icon: '🔄', title: 'Agile Delivery', desc: 'We use agile methodologies to ensure flexible, iterative development and rapid delivery.' },
            ].map((item) => (
              <div key={item.title} className={styles.whyCard}>
                <span className={styles.whyIcon}>{item.icon}</span>
                <h3 className={styles.whyTitle}>{item.title}</h3>
                <p className={styles.whyDesc}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
