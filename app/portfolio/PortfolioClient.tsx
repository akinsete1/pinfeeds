'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { portfolioCategories, type PortfolioItem } from '@/data/portfolio';
import styles from './portfolio.module.css';

export default function PortfolioClient({ initialItems }: { initialItems: PortfolioItem[] }) {
  const [activeFilter, setActiveFilter] = useState('all');

  const filtered = activeFilter === 'all'
    ? initialItems
    : initialItems.filter((item) => item.category.includes(activeFilter));

  return (
    <section className={`section ${styles.portfolio}`}>
      <div className="container">
        {/* Filters */}
        <div className={styles.filters} role="tablist" aria-label="Portfolio filter">
          {portfolioCategories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setActiveFilter(cat.value)}
              className={`${styles.filterBtn} ${activeFilter === cat.value ? styles.active : ''}`}
              role="tab"
              aria-selected={activeFilter === cat.value}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className={styles.grid}>
          {filtered.map((item) => (
            <article key={item.id} className={styles.card}>
              <div className={styles.imageWrapper}>
                <div className={styles.image}>
                  {item.imageUrl ? (
                    <Image src={item.imageUrl} alt={item.title} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" style={{ objectFit: 'cover' }} />
                  ) : (
                    <svg viewBox="0 0 500 360" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label={item.title}>
                      <rect width="500" height="360" fill="url(#pg)"/>
                      <rect x="40" y="50" width="420" height="260" rx="10" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.1)" strokeWidth="1.5"/>
                      <rect x="60" y="70" width="380" height="30" rx="5" fill="rgba(0,149,235,0.2)"/>
                      <rect x="60" y="115" width="240" height="10" rx="5" fill="rgba(255,255,255,0.25)"/>
                      <rect x="60" y="133" width="320" height="8" rx="4" fill="rgba(255,255,255,0.12)"/>
                      <rect x="60" y="149" width="280" height="8" rx="4" fill="rgba(255,255,255,0.08)"/>
                      <rect x="60" y="180" width="380" height="90" rx="8" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.06)"/>
                      <rect x="80" y="200" width="100" height="8" rx="4" fill="rgba(0,149,235,0.5)"/>
                      <rect x="80" y="216" width="160" height="6" rx="3" fill="rgba(255,255,255,0.15)"/>
                      <rect x="80" y="230" width="130" height="6" rx="3" fill="rgba(255,255,255,0.1)"/>
                      <rect x="60" y="290" width="120" height="36" rx="8" fill="rgba(0,149,235,0.5)"/>
                      <text x="120" y="314" fill="white" fontSize="12" textAnchor="middle" fontFamily="sans-serif" fontWeight="600">View Project</text>
                      <defs>
                        <linearGradient id="pg" x1="0" y1="0" x2="500" y2="360" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#161d2e"/>
                          <stop offset="1" stopColor="#0d1117"/>
                        </linearGradient>
                      </defs>
                    </svg>
                  )}
                </div>
                <div className={styles.overlay}>
                  <Link href={`/portfolio/${item.id}`} className={styles.overlayBtn}>
                    View Project →
                  </Link>
                </div>
              </div>

              <div className={styles.content}>
                <span className={styles.category}>{item.categoryLabel}</span>
                <h3 className={styles.title}>
                  <Link href={`/portfolio/${item.id}`}>{item.title}</Link>
                </h3>
                <p className={styles.desc}>{item.description}</p>
                <div className={styles.footer}>
                  <div className={styles.tech}>
                    {item.tech?.slice(0, 3).map((t) => (
                      <span key={t} className={styles.techTag}>{t}</span>
                    ))}
                  </div>
                  <span className={styles.year}>{item.year}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
