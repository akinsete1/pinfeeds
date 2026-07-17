import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { PortableText } from '@portabletext/react';
import { getPortfolioItems, getPortfolioItemById } from '@/data/portfolio';
import styles from './portfolio-detail.module.css';

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  const items = await getPortfolioItems();
  return items.map((item) => ({
    id: item.id,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const item = await getPortfolioItemById(resolvedParams.id);
  if (!item) return { title: 'Project Not Found' };

  return {
    title: `${item.title} — Portfolio | Pinfeeds Digital Agency`,
    description: item.description,
  };
}

export default async function PortfolioDetailPage({ params }: Props) {
  const resolvedParams = await params;
  const item = await getPortfolioItemById(resolvedParams.id);

  if (!item) {
    notFound();
  }

  return (
    <article>
      {/* Hero Section */}
      <header className={styles.hero}>
        <div className="container">
          <div className={styles.heroContent}>
            <span className={styles.category}>{item.categoryLabel}</span>
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.desc}>{item.description}</p>
          </div>
        </div>
      </header>

      <div className="container">
        {/* Meta Info */}
        <div className={styles.metaGrid}>
          <div className={styles.metaItem}>
            <h3>Client / Project</h3>
            <p>{item.title}</p>
          </div>
          <div className={styles.metaItem}>
            <h3>Year</h3>
            <p>{item.year}</p>
          </div>
          <div className={styles.metaItem}>
            <h3>Technologies</h3>
            <div className={styles.techList}>
              {item.tech?.map((t) => (
                <span key={t} className={styles.techTag}>{t}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className={styles.contentWrapper}>
          {item.imageUrl && (
            <div className={styles.imageShowcase}>
              <Image 
                src={item.imageUrl} 
                alt={item.title} 
                fill 
                sizes="(max-width: 1200px) 100vw, 1200px" 
                priority
              />
            </div>
          )}

          <div className={styles.richText}>
            {item.detailedContent ? (
              <PortableText value={item.detailedContent} />
            ) : (
              <p>{item.description}</p>
            )}
          </div>

          <div className={styles.actions}>
            <Link href="/portfolio" className="btn btn-outline">
              ← Back to Portfolio
            </Link>
            <Link href="/contact" className="btn btn-primary">
              Start a Project Like This
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
