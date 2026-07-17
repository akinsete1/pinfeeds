import Link from 'next/link';
import { getServices } from '@/data/services';
import styles from './ServicesSection.module.css';

export default async function ServicesSection() {
  const services = await getServices();
  return (
    <section className={`section section-grey ${styles.services}`} id="services" aria-labelledby="services-heading">
      <div className="container">
        <div className="section-heading">
          <span className="section-tag">Our Services</span>
          <h2 className="section-title" id="services-heading">
            We run all kinds of services in form of{' '}
            <span>Information & Technologies</span>
          </h2>
          <p className="section-desc">
            From web design to cloud infrastructure, our comprehensive suite of IT services covers
            everything your business needs to thrive in the digital era.
          </p>
        </div>

        <div className={styles.grid}>
          {services.map((service, i) => (
            <article
              key={service.id}
              className={styles.card}
              style={{ '--accent': service.color, '--delay': `${i * 0.07}s` } as React.CSSProperties}
            >
              <div className={styles.cardTop}>
                <div className={styles.iconBox} aria-hidden="true">
                  <span className={styles.icon}>{service.icon}</span>
                </div>
                <div className={styles.cardNumber} aria-hidden="true">
                  {String(i + 1).padStart(2, '0')}
                </div>
              </div>

              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p className={styles.cardDesc}>{service.description}</p>

              <ul className={styles.features} aria-label={`${service.title} features`}>
                {service.features.map((f) => (
                  <li key={f} className={styles.feature}>
                    <span className={styles.featureDot} aria-hidden="true" />
                    {f}
                  </li>
                ))}
              </ul>

              <Link href={`/services/${service.id}`} className={styles.readMore} aria-label={`Learn more about ${service.title}`}>
                Learn More
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>

              {/* Hover glow */}
              <div className={styles.glow} aria-hidden="true" />
            </article>
          ))}
        </div>

        <div className={styles.footer}>
          <p>Don't hesitate, contact us for better help and services.</p>
          <Link href="/services" className="btn btn-primary" id="services-view-all">
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
}
