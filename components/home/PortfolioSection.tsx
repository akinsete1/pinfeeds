'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { portfolioCategories, type PortfolioItem } from '@/data/portfolio';
import styles from './PortfolioSection.module.css';

export default function PortfolioSection({ initialItems }: { initialItems: PortfolioItem[] }) {
  const [activeFilter, setActiveFilter] = useState('all');

  const filtered = activeFilter === 'all'
    ? initialItems
    : initialItems.filter((item) => item.category.includes(activeFilter));

  const techColors: Record<string, string> = {
    'Laravel': '#ff2d20', 'Vue.js': '#42b883', 'React': '#61dafb',
    'Node.js': '#68a063', 'TypeScript': '#3178c6', 'Next.js': '#000',
    'MySQL': '#00758f', 'PostgreSQL': '#336791', 'MongoDB': '#47a248',
    'AWS': '#ff9900', 'Python': '#3572a5', 'FastAPI': '#009688',
  };

  return (
    <section className={`section ${styles.portfolio}`} id="portfolio" aria-labelledby="portfolio-heading">
      {/* Header */}
      <div className={styles.header}>
        <div className="container">
          <div className={styles.headerInner}>
            <div>
              <span className="section-tag">Our Portfolio</span>
              <h2 className="section-title" id="portfolio-heading" style={{ marginBottom: 0 }}>
                Explore Recent <span>Projects</span>
              </h2>
            </div>
            <Link href="/portfolio" className="btn btn-outline" id="portfolio-view-all">
              View All Projects
            </Link>
          </div>

          {/* Filters */}
          <div className={styles.filters} role="tablist" aria-label="Portfolio filter">
            {portfolioCategories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setActiveFilter(cat.value)}
                className={`${styles.filterBtn} ${activeFilter === cat.value ? styles.active : ''}`}
                role="tab"
                aria-selected={activeFilter === cat.value}
                id={`filter-${cat.value}`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="container">
        <div className={styles.grid}>
          {filtered.map((item) => (
            <article key={item.id} className={styles.card}>
              {/* Image placeholder */}
              <div className={styles.imageWrapper}>
                <div className={styles.imagePlaceholder}>
                  {item.imageUrl ? (
                    <Image 
                      src={item.imageUrl} 
                      alt={item.title} 
                      fill 
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" 
                      style={{ objectFit: 'cover' }} 
                    />
                  ) : (
                    <svg viewBox="0 0 400 280" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <rect width="400" height="280" fill="url(#pfGrad)" />
                      <rect x="40" y="40" width="320" height="200" rx="8" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.1)" strokeWidth="1.5"/>
                      <circle cx="80" cy="80" r="20" fill="rgba(0,149,235,0.3)"/>
                      <rect x="110" y="68" width="120" height="10" rx="5" fill="rgba(255,255,255,0.4)"/>
                      <rect x="110" y="84" width="80" height="8" rx="4" fill="rgba(255,255,255,0.2)"/>
                      <rect x="60" y="120" width="280" height="8" rx="4" fill="rgba(255,255,255,0.12)"/>
                      <rect x="60" y="136" width="200" height="8" rx="4" fill="rgba(255,255,255,0.08)"/>
                      <rect x="60" y="152" width="240" height="8" rx="4" fill="rgba(255,255,255,0.06)"/>
                      <rect x="60" y="180" width="100" height="32" rx="6" fill="rgba(0,149,235,0.4)"/>
                      <defs>
                        <linearGradient id="pfGrad" x1="0" y1="0" x2="400" y2="280" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#1a2033"/>
                          <stop offset="1" stopColor="#0d1520"/>
                        </linearGradient>
                      </defs>
                    </svg>
                  )}
                </div>
                <div className={styles.overlay}>
                  <Link href={`/portfolio/${item.id}`} className={styles.overlayBtn} aria-label={`View ${item.title}`}>
                    View Project →
                  </Link>
                </div>
              </div>

              {/* Content */}
              <div className={styles.content}>
                <span className={styles.category}>{item.categoryLabel}</span>
                <h3 className={styles.title}>
                  <Link href={`/portfolio/${item.id}`}>{item.title}</Link>
                </h3>
                <p className={styles.desc}>{item.description}</p>
                <div className={styles.tech}>
                  {item.tech.slice(0, 3).map((t) => (
                    <span
                      key={t}
                      className={styles.techTag}
                      style={{ background: `${techColors[t] || '#0095eb'}22`, color: techColors[t] || '#0095eb' }}
                    >
                      {t}
                    </span>
                  ))}
                  {item.tech.length > 3 && (
                    <span className={styles.techMore}>+{item.tech.length - 3}</span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
