import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { getBlogPosts } from '@/data/blog';
import styles from './blog.module.css';

export const metadata: Metadata = {
  title: 'Blog & News — Technology Insights | Pinfeeds Digital Agency',
  description:
    'Read the latest articles on web development, software, digital marketing, UX/UI design, and IT trends from the Pinfeeds Digital Agency expert team.',
  alternates: { canonical: 'https://pinfeeds.org/blog' },
};

const categories = ['All', 'AI & Technology', 'UX/UI Design', 'Web Design', 'Cloud Services', 'Digital Marketing'];

export const revalidate = 60;

export default async function BlogPage() {
  const blogPosts = await getBlogPosts();

  return (
    <>
      <div className="page-title-bar">
        <div className="container">
          <h1>Blog & Latest News</h1>
          <p>Insights, tips, and updates from the Pinfeeds team</p>
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span>›</span>
            <span aria-current="page">Blog</span>
          </nav>
        </div>
      </div>

      <section className={`section ${styles.blog}`}>
        <div className="container">
          <div className={styles.layout}>
            {/* Posts */}
            <div className={styles.posts}>
              <div className={styles.grid}>
                {blogPosts.map((post, i) => (
                  <article key={post.id} className={`${styles.card} ${i === 0 ? styles.featured : ''}`}>
                    <div className={styles.imageWrapper}>
                      {post.imageUrl ? (
                        <Image src={post.imageUrl} alt={post.title} fill style={{ objectFit: 'cover' }} />
                      ) : (
                        <div className={styles.image} aria-hidden="true">
                          <svg viewBox="0 0 600 380" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="600" height="380" fill={`url(#blg${i})`}/>
                            <circle cx="300" cy="190" r="100" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.07)" strokeWidth="40"/>
                            <text x="300" y="205" fill="rgba(255,255,255,0.5)" fontSize="70" textAnchor="middle" fontFamily="sans-serif">
                              {post.category === 'AI & Technology' ? '🤖' : post.category === 'UX/UI Design' ? '🎨' : post.category === 'Cloud Services' ? '☁️' : post.category === 'Digital Marketing' ? '📈' : '💻'}
                            </text>
                            <defs>
                              <linearGradient id={`blg${i}`} x1="0" y1="0" x2="600" y2="380" gradientUnits="userSpaceOnUse">
                                <stop stopColor={['#1a1f35','#1a2520','#1a2030','#201a30','#1a2520','#201520'][i % 6]}/>
                                <stop offset="1" stopColor="#0d1020"/>
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

                    <div className={styles.content}>
                      <div className={styles.meta}>
                        <span>👤 {post.author}</span>
                        <span>·</span>
                        <span>⏱ {post.readTime}</span>
                        <span>·</span>
                        <span>{post.date}</span>
                      </div>
                      <h2 className={styles.title}>
                        <Link href={post.href}>{post.title}</Link>
                      </h2>
                      <p className={styles.excerpt}>{post.excerpt}</p>
                      <Link href={post.href} className={styles.readMore}>
                        Read More →
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <aside className={styles.sidebar} aria-label="Blog sidebar">
              {/* Categories */}
              <div className={styles.widget}>
                <h3 className={styles.widgetTitle}>Categories</h3>
                <ul className={styles.categoryList}>
                  {categories.map((cat) => (
                    <li key={cat}>
                      <button className={styles.catBtn}>{cat}</button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Recent Posts */}
              <div className={styles.widget}>
                <h3 className={styles.widgetTitle}>Recent Posts</h3>
                {blogPosts.slice(0, 4).map((post) => (
                  <Link key={post.id} href={post.href} className={styles.recentPost}>
                    <div className={styles.recentDot} aria-hidden="true" />
                    <div>
                      <p className={styles.recentTitle}>{post.title}</p>
                      <span className={styles.recentDate}>{post.date}</span>
                    </div>
                  </Link>
                ))}
              </div>

              {/* CTA Widget */}
              <div className={styles.ctaWidget}>
                <h3>Ready to Work With Us?</h3>
                <p>Let's discuss your next digital project.</p>
                <Link href="/contact" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                  Contact Us
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
