import { notFound } from 'next/navigation';
import { getServiceById, getServices } from '@/data/services';
import { PortableText } from '@portabletext/react';
import Link from 'next/link';
import CtaSection from '@/components/home/CtaSection';
import styles from './service.module.css';

export async function generateStaticParams() {
  const services = await getServices();
  return services.map((service) => ({
    id: service.id,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const service = await getServiceById(resolvedParams.id);
  if (!service) return { title: 'Service Not Found' };
  return {
    title: `${service.title} in Lagos, Nigeria — Pinfeeds Digital Agency`,
    description: `${service.description} Serving Lagos and all of Nigeria with 8+ years of experience.`,
    alternates: { canonical: `https://pinfeeds.org/services/${resolvedParams.id}` },
    keywords: [
      service.title,
      `${service.title} Lagos`,
      `${service.title} Nigeria`,
      'Pinfeeds Digital Agency',
    ],
  };
}

export default async function ServicePage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const service = await getServiceById(resolvedParams.id);
  
  if (!service) {
    notFound();
  }

  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    description: service.description,
    url: `https://pinfeeds.org/services/${service.id}`,
    provider: {
      '@type': 'LocalBusiness',
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
    areaServed: [
      { '@type': 'Country', name: 'Nigeria' },
      { '@type': 'City', name: 'Lagos' },
    ],
    serviceType: service.title,
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: `${service.title} Services`,
      itemListElement: service.features.map((f) => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: f },
      })),
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <div className="page-title-bar" style={{ borderBottomColor: service.color }}>
        <div className="container">
          <div className={styles.titleWrapper}>
            <span className={styles.icon} style={{ background: `${service.color}22`, color: service.color }}>
              {service.icon}
            </span>
            <div>
              <h1>{service.title}</h1>
              <nav className="breadcrumb" aria-label="Breadcrumb">
                <Link href="/">Home</Link>
                <span>›</span>
                <Link href="/#services">Services</Link>
                <span>›</span>
                <span aria-current="page">{service.title}</span>
              </nav>
            </div>
          </div>
        </div>
      </div>

      <section className={`section ${styles.content}`}>
        <div className="container">
          <div className={styles.grid}>
            <div className={styles.main}>
              <div className="section-heading left">
                <span className="section-tag" style={{ color: service.color, background: `${service.color}11`, borderColor: `${service.color}33` }}>
                  Overview
                </span>
                <h2 className="section-title">
                  What we do in <span>{service.title}</span>
                </h2>
              </div>
              
              <p className={styles.intro}>{service.description}</p>
              
              {service.detailedContent ? (
                <div className={styles.portableText}>
                  <PortableText value={service.detailedContent} />
                </div>
              ) : (
                <div className={styles.placeholderText}>
                  <p>Our {service.title} service is designed to help you achieve your business goals through innovative and scalable solutions. We work closely with our clients to ensure maximum impact and efficiency.</p>
                  <p>Contact us today to get a customized strategy tailored specifically to your needs.</p>
                </div>
              )}
            </div>

            <aside className={styles.sidebar}>
              <div className={styles.sidebarCard}>
                <h3 className={styles.sidebarTitle}>Key Features</h3>
                <ul className={styles.featureList}>
                  {service.features.map(f => (
                    <li key={f}>
                      <span className={styles.check} style={{ color: service.color }}>✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              <div className={styles.sidebarCard} style={{ background: 'var(--gradient-primary)', color: 'white', border: 'none' }}>
                <h3 className={styles.sidebarTitle} style={{ color: 'white' }}>Need Help?</h3>
                <p style={{ color: 'rgba(255,255,255,0.9)', marginBottom: '20px', fontSize: '0.95rem' }}>
                  Speak to our experts to get started on your next project.
                </p>
                <Link href="/contact" className="btn" style={{ background: 'white', color: 'var(--primary)', width: '100%', justifyContent: 'center' }}>
                  Contact Us
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
