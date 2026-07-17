import Link from 'next/link';
import Image from 'next/image';
import { getBlogPosts } from '@/data/blog';
import styles from './BlogSection.module.css';

export default async function BlogSection() {
  const blogPosts = await getBlogPosts();
  const posts = blogPosts.slice(0, 3);

  return (
    <section className={`section section-grey ${styles.blog}`} id="blog" aria-labelledby="blog-heading">
      <div className="container">
        <div className="section-heading">
          <span className="section-tag">Our Blog</span>
          <h2 className="section-title" id="blog-heading">
            Check Out Our <span>Latest News</span>
          </h2>
          <p className="section-desc">
            Stay informed with insights on technology trends, digital marketing strategies, and IT best practices from our expert team.
          </p>
        </div>

        <div className={styles.grid}>
          {posts.map((post, i) => (
            <article key={post.id} className={`${styles.card} ${i === 0 ? styles.featured : ''}`}>
              {/* Image */}
              <div className={styles.imageWrapper}>
                {post.imageUrl ? (
                  <Image src={post.imageUrl} alt={post.title} fill style={{ objectFit: 'cover' }} />
                ) : (
                  <div className={styles.imagePlaceholder} aria-hidden="true">
                    <svg viewBox="0 0 600 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="600" height="400" fill={`url(#blogGrad${i})`}/>
                      <circle cx="300" cy="200" r="80" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.08)" strokeWidth="40"/>
                      <text x="300" y="215" fill="rgba(255,255,255,0.4)" fontSize="60" textAnchor="middle" fontFamily="sans-serif">
                        {post.category === 'AI & Technology' ? '🤖' : post.category === 'UX/UI Design' ? '🎨' : '💻'}
                      </text>
                      <defs>
                        <linearGradient id={`blogGrad${i}`} x1="0" y1="0" x2="600" y2="400" gradientUnits="userSpaceOnUse">
                          <stop stopColor={i === 0 ? '#1a1f35' : i === 1 ? '#1a2520' : '#1a2030'}/>
                          <stop offset="1" stopColor={i === 0 ? '#0d1020' : i === 1 ? '#0d1a15' : '#0d1525'}/>
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                )}
                <Link href={post.href} className={styles.imageLink} aria-label={`Read ${post.title}`} />
                <span className={styles.categoryBadge}>{post.category}</span>
                <div className={styles.dateBadge}>
                  <span className={styles.dateDay}>{post.date.split(' ')[1].replace(',', '')}</span>
                  <span className={styles.dateMonth}>{post.date.split(' ')[0].slice(0, 3)}</span>
                </div>
              </div>

              {/* Content */}
              <div className={styles.content}>
                <div className={styles.meta}>
                  <span className={styles.metaItem}>👤 {post.author}</span>
                  <span className={styles.metaDot} aria-hidden="true">·</span>
                  <span className={styles.metaItem}>⏱ {post.readTime}</span>
                </div>
                <h3 className={styles.title}>
                  <Link href={post.href}>{post.title}</Link>
                </h3>
                <p className={styles.excerpt}>{post.excerpt}</p>
                <Link href={post.href} className={styles.readMore} aria-label={`Read more about ${post.title}`}>
                  Read More
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '48px' }}>
          <Link href="/blog" className="btn btn-primary" id="blog-view-all">
            View All Articles
          </Link>
        </div>
      </div>
    </section>
  );
}
