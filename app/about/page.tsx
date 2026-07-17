import type { Metadata } from 'next';
import Link from 'next/link';
import styles from './about.module.css';
import CtaSection from '@/components/home/CtaSection';

export const metadata: Metadata = {
  title: 'About Us — Pinfeeds Digital Agency Limited',
  description:
    'Learn about Pinfeeds Digital Agency Limited — an IT solutions company with 8+ years of experience delivering premium website development, software, and digital marketing services in Nigeria.',
  alternates: { canonical: 'https://pinfeeds.org/about' },
};

import { getAboutPageData } from '@/data/pages';

export default async function AboutPage() {
  const pageData = await getAboutPageData();

  return (
    <>
      {/* Page Title */}
      <div className="page-title-bar">
        <div className="container">
          <h1>{pageData.pageTitle}</h1>
          <p>{pageData.pageSubtitle}</p>
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">›</span>
            <span aria-current="page">About Us</span>
          </nav>
        </div>
      </div>

      {/* Mission */}
      <section className={`section ${styles.mission}`}>
        <div className="container">
          <div className={styles.missionGrid}>
            <div>
              <div className="section-heading left">
                <span className="section-tag">Our Story</span>
                <h2 className="section-title">
                  Where Innovation Meets <span>Digital Excellence</span>
                </h2>
              </div>
              <p style={{ marginBottom: '16px', lineHeight: '1.85' }}>
                Welcome to Pinfeeds Digital Agency Limited — where innovation meets excellence in the digital realm. Since our founding in 2016, we have been dedicated to empowering businesses with cutting-edge digital solutions tailored to their unique needs.
              </p>
              <p style={{ marginBottom: '16px', lineHeight: '1.85' }}>
                As a premier software and website development company based in Nigeria, we combine technical expertise with creative excellence to deliver solutions that not only look stunning but also perform exceptionally well in the real world.
              </p>
              <p style={{ lineHeight: '1.85' }}>
                With a relentless commitment to quality, creativity, and customer satisfaction, we strive to exceed expectations and deliver unparalleled results for every client, every time.
              </p>
            </div>
            <div className={styles.statsGrid}>
              {[
                { value: '8+', label: 'Years of Experience', icon: '📅' },
                { value: '150+', label: 'Projects Delivered', icon: '🚀' },
                { value: '50+', label: 'Happy Clients', icon: '😊' },
                { value: '98%', label: 'Client Satisfaction', icon: '⭐' },
                { value: '24/7', label: 'Support Available', icon: '🕐' },
                { value: '8', label: 'Core Services', icon: '💼' },
              ].map((stat) => (
                <div key={stat.label} className={styles.statCard}>
                  <div className={styles.statIcon}>{stat.icon}</div>
                  <div className={styles.statValue}>{stat.value}</div>
                  <div className={styles.statLabel}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className={`section section-grey ${styles.values}`}>
        <div className="container">
          <div className="section-heading">
            <span className="section-tag">Our Values</span>
            <h2 className="section-title">What <span>Drives Us</span></h2>
            <p className="section-desc">These core principles guide everything we do — from how we build our team to how we serve our clients.</p>
          </div>
          <div className={styles.valuesGrid}>
            {pageData.values.map((v) => (
              <div key={v.title} className={styles.valueCard}>
                <span className={styles.valueIcon}>{v.icon}</span>
                <h3 className={styles.valueTitle}>{v.title}</h3>
                <p className={styles.valueDesc}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className={`section ${styles.timeline}`}>
        <div className="container">
          <div className="section-heading">
            <span className="section-tag">Our Journey</span>
            <h2 className="section-title">A <span>Milestones</span> Timeline</h2>
          </div>
          <div className={styles.timelineList}>
            {pageData.milestones.map((m, i) => (
              <div key={m.year} className={`${styles.timelineItem} ${i % 2 === 0 ? styles.left : styles.right}`}>
                <div className={styles.timelineCard}>
                  <span className={styles.timelineYear}>{m.year}</span>
                  <h3 className={styles.timelineTitle}>{m.title}</h3>
                  <p className={styles.timelineDesc}>{m.desc}</p>
                </div>
                <div className={styles.timelineDot} aria-hidden="true" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className={`section section-grey ${styles.team}`}>
        <div className="container">
          <div className="section-heading">
            <span className="section-tag">Our Team</span>
            <h2 className="section-title">Meet the <span>Experts</span></h2>
            <p className="section-desc">A dedicated team of passionate professionals committed to your digital success.</p>
          </div>
          <div className={styles.teamGrid}>
            {pageData.team.map((member) => (
              <div key={member.name} className={styles.teamCard}>
                <div className={styles.teamAvatar} style={{ background: `${member.color}22` }}>
                  <span className={styles.teamIcon}>{member.icon}</span>
                </div>
                <h3 className={styles.teamName}>{member.name}</h3>
                <span className={styles.teamRole}>{member.role}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
