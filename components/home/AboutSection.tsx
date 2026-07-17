import Link from 'next/link';
import styles from './AboutSection.module.css';

const capabilities = [
  'Website Development',
  'Software Development',
  'Mobile App Development',
  'Digital Marketing',
  'Graphic Design',
  'Web & Email Hosting',
  'UX/UI Design',
  'Consulting Services',
  'AI & Machine Learning',
  'IT Consultation',
];

const highlights = [
  { value: '8+', label: 'Years Experience' },
  { value: '150+', label: 'Projects Done' },
  { value: '50+', label: 'Happy Clients' },
];

export default function AboutSection({ summary }: { summary?: string }) {
  const defaultSummary = `Welcome to Pinfeeds Digital Agency Limited, where innovation meets excellence in the digital realm. As a premier software and website development company, we are dedicated to empowering businesses with cutting-edge digital solutions tailored to their unique needs.

With a relentless commitment to quality, creativity, and customer satisfaction, we strive to exceed expectations and deliver unparalleled results.`;

  const activeSummary = summary || defaultSummary;

  return (
    <section className={`section ${styles.about}`} id="about" aria-labelledby="about-heading">
      <div className="container">
        <div className={styles.grid}>
          {/* Image Side */}
          <div className={styles.imageSide}>
            <div className={styles.imageWrapper}>
              <div className={styles.imageBg} aria-hidden="true" />
              <div className={styles.imageCard}>
                <div className={styles.imageInner}>
                  <div className={styles.imagePlaceholder}>
                    {/* Team / office illustration */}
                    <svg viewBox="0 0 500 400" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <rect width="500" height="400" rx="16" fill="url(#imgGrad)" />
                      {/* Monitor */}
                      <rect x="140" y="100" width="220" height="140" rx="8" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.2)" strokeWidth="2"/>
                      <rect x="150" y="110" width="200" height="120" rx="4" fill="rgba(0,0,0,0.3)"/>
                      {/* Code lines */}
                      <rect x="165" y="130" width="80" height="6" rx="3" fill="#0095eb" opacity="0.9"/>
                      <rect x="165" y="145" width="120" height="6" rx="3" fill="rgba(255,255,255,0.4)"/>
                      <rect x="165" y="160" width="100" height="6" rx="3" fill="rgba(255,255,255,0.4)"/>
                      {/* Base */}
                      <path d="M220 240 h60 l10 30 h-80 z" fill="rgba(255,255,255,0.2)"/>
                      <rect x="190" y="270" width="120" height="10" rx="5" fill="rgba(255,255,255,0.4)"/>
                      
                      {/* UI Elements / Floating Cards */}
                      <rect x="60" y="180" width="100" height="120" rx="12" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.1)"/>
                      <circle cx="110" cy="220" r="20" fill="#7c3aed" opacity="0.8"/>
                      <rect x="80" y="260" width="60" height="4" rx="2" fill="rgba(255,255,255,0.4)"/>
                      
                      <rect x="340" y="80" width="110" height="140" rx="12" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.1)"/>
                      <rect x="360" y="100" width="70" height="30" rx="4" fill="#059669" opacity="0.8"/>
                      <rect x="360" y="145" width="40" height="40" rx="20" fill="rgba(255,255,255,0.2)"/>
                      <rect x="360" y="195" width="50" height="4" rx="2" fill="rgba(255,255,255,0.3)"/>

                      <defs>
                        <linearGradient id="imgGrad" x1="0" y1="0" x2="500" y2="400" gradientUnits="userSpaceOnUse">
                          <stop offset="0%" stopColor="#0f172a" />
                          <stop offset="100%" stopColor="#1e293b" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                </div>
              </div>

              {/* Highlight Badges */}
              {highlights.map((h, i) => (
                <div key={h.label} className={styles.highlightChip} style={{ '--delay': `${i * 0.15}s` } as React.CSSProperties}>
                  <span className={styles.chipValue}>{h.value}</span>
                  <span className={styles.chipLabel}>{h.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Text Side */}
          <div className={styles.textSide}>
            <div className="section-heading left">
              <span className="section-tag">About Us</span>
              <h2 className="section-title" id="about-heading">
                We are an IT Solutions company<br />
                with 8 years of <cite>experience</cite>
              </h2>
            </div>

            {activeSummary.split('\n\n').map((para, idx) => (
              <p key={idx} className={styles.intro}>{para}</p>
            ))}

            <div className={styles.capabilities}>
              {capabilities.map((cap) => (
                <div key={cap} className={styles.capItem}>
                  <span className={styles.capIcon} aria-hidden="true">✓</span>
                  <span>{cap}</span>
                </div>
              ))}
            </div>

            <div className={styles.cta}>
              <Link href="/about" className="btn btn-primary" id="about-learn-more">
                Learn More About Us
              </Link>
              <div className={styles.phone}>
                <span className={styles.phoneIcon}>📞</span>
                <div>
                  <span className={styles.phoneLabel}>Call to ask any question</span>
                  <a href="tel:+2348066893144" className={styles.phoneNumber}>+234 806 689 3144</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
