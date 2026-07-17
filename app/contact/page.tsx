import type { Metadata } from 'next';
import Link from 'next/link';
import styles from './contact.module.css';
import ContactClient from './ContactClient';
import { getContactPageData } from '@/data/pages';

export const metadata: Metadata = {
  title: 'Contact Us — Pinfeeds Digital Agency Limited',
  description: 'Get in touch with Pinfeeds Digital Agency for your next big project.',
  alternates: { canonical: 'https://pinfeeds.org/contact' },
};

export default async function ContactPage() {
  const pageData = await getContactPageData();

  return (
    <>
      <div className="page-title-bar">
        <div className="container">
          <h1>{pageData.pageTitle}</h1>
          <p>{pageData.pageSubtitle}</p>
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span>›</span>
            <span aria-current="page">Contact</span>
          </nav>
        </div>
      </div>

      <section className={`section ${styles.contact}`}>
        <div className="container">
          <div className={styles.grid}>
            {/* Contact Info */}
            <div className={styles.info}>
              <div className="section-heading left" style={{ marginBottom: '32px' }}>
                <span className="section-tag">Get in Touch</span>
                <h2 className="section-title" style={{ fontSize: '2rem' }}>
                  Ready to Start Your <span>Project?</span>
                </h2>
              </div>
              <p className={styles.infoDesc}>
                {pageData.pageSubtitle}
              </p>

              <div className={styles.infoCards}>
                {pageData.contactInfo.map((item) => (
                  <div key={item.label} className={styles.infoCard}>
                    <span className={styles.infoIcon}>{item.icon}</span>
                    <div>
                      <span className={styles.infoLabel}>{item.label}</span>
                      {item.href ? (
                        <a href={item.href} className={styles.infoValue}>{item.value}</a>
                      ) : (
                        <span className={styles.infoValue}>{item.value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Decorative Element */}
              <div className={styles.decorativeBox} aria-hidden="true">
                <div className={styles.decoGlow} />
                <div className={styles.decoPattern} />
              </div>
            </div>

            {/* Contact Form */}
            <ContactClient />
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className={styles.mapSection}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.266854129759!2d3.3323067!3d6.6121517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b93df26e85055%3A0x6b149bdf5c1bdf7!2s22%20Bankole%20Fagbohun%20St%2C%20Ogba%2C%20Lagos%20101233%2C%20Lagos%2C%20Nigeria!5e0!3m2!1sen!2sng!4v1714652288000!5m2!1sen!2sng"
          width="100%"
          height="100%"
          style={{ border: 0, minHeight: '400px' }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Office Location Map"
        ></iframe>
      </section>
    </>
  );
}
