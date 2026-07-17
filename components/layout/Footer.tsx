'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Footer.module.css';

const services = [
  'Website Development',
  'Software Development',
  'Mobile App Development',
  'Digital Marketing',
  'UX/UI Design',
  'Cloud Services',
  'Graphic Design',
  'Consulting Services',
];

const quickLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/services', label: 'Our Services' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact Us' },
];

export default function Footer() {
  const pathname = usePathname();
  const year = new Date().getFullYear();

  if (pathname.startsWith('/studio')) return null;

  return (
    <footer className={styles.footer} id="site-footer">
      {/* Main Footer */}
      <div className={styles.main}>
        <div className="container">
          <div className={styles.grid}>
            {/* Brand Column */}
            <div className={styles.brand}>
              <Link href="/" className={styles.logo} aria-label="Pinfeeds home">
                <div className={styles.logoIcon}>
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <rect width="32" height="32" rx="8" fill="url(#footerGrad)" />
                    <path d="M8 10h8a6 6 0 010 12H8V10z" fill="white" fillOpacity="0.9" />
                    <circle cx="22" cy="22" r="4" fill="white" fillOpacity="0.5" />
                    <defs>
                      <linearGradient id="footerGrad" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#0095eb" />
                        <stop offset="1" stopColor="#0066cc" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <div>
                  <div className={styles.logoMain}>Pinfeeds</div>
                  <div className={styles.logoSub}>Digital Agency</div>
                </div>
              </Link>
              <p className={styles.brandDesc}>
                Welcome to Pinfeeds Digital Agency Limited — where innovation meets excellence in the digital realm. We empower businesses with cutting-edge digital solutions tailored to their unique needs.
              </p>
              <div className={styles.contact}>
                <a href="tel:+2348066893144" className={styles.contactItem}>
                  <span className={styles.contactIcon}>📞</span>
                  <span>+234 806 689 3144</span>
                </a>
                <a href="mailto:hello@pinfeeds.org" className={styles.contactItem}>
                  <span className={styles.contactIcon}>✉️</span>
                  <span>hello@pinfeeds.org</span>
                </a>
              </div>
              <div className={styles.social}>
                {[
                  { href: '#', label: 'Facebook', icon: 'f' },
                  { href: '#', label: 'Twitter', icon: '𝕏' },
                  { href: '#', label: 'LinkedIn', icon: 'in' },
                  { href: '#', label: 'Instagram', icon: '◎' },
                ].map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    className={styles.socialLink}
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className={styles.col}>
              <h3 className={styles.colTitle}>Quick Links</h3>
              <ul className={styles.linkList}>
                {quickLinks.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className={styles.footerLink}>
                      <span className={styles.arrow}>›</span>
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className={styles.col}>
              <h3 className={styles.colTitle}>Our Services</h3>
              <ul className={styles.linkList}>
                {services.map((s) => (
                  <li key={s}>
                    <Link href="/services" className={styles.footerLink}>
                      <span className={styles.arrow}>›</span>
                      {s}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div className={styles.col}>
              <h3 className={styles.colTitle}>Stay Updated</h3>
              <p className={styles.newsletterDesc}>
                Subscribe to our newsletter for the latest insights on digital technology and industry trends.
              </p>
              <form className={styles.newsletter} onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  placeholder="Your email address"
                  className={styles.newsletterInput}
                  aria-label="Email address for newsletter"
                />
                <button type="submit" className={styles.newsletterBtn} aria-label="Subscribe">
                  Subscribe
                </button>
              </form>
              <div className={styles.badge}>
                <span>🏆</span>
                <span>8+ Years of Excellence</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className={styles.bottom}>
        <div className="container">
          <div className={styles.bottomInner}>
            <p className={styles.copyright}>
              © {year} Pinfeeds Digital Agency Limited. All rights reserved.
            </p>
            <div className={styles.bottomLinks}>
              <Link href="/contact" className={styles.bottomLink}>Privacy Policy</Link>
              <span className={styles.dot}>·</span>
              <Link href="/contact" className={styles.bottomLink}>Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
