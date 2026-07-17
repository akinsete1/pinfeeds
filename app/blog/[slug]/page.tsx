import { client } from '@/sanity/lib/client';
import { urlForImage } from '@/sanity/lib/image';
import { PortableText } from '@portabletext/react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import styles from './blogDetail.module.css';
import { fallbackBlog } from '@/data/blog';

interface Props {
  params: Promise<{ slug: string }>;
}

export const revalidate = 60;

export default async function BlogDetailPage({ params }: Props) {
  const resolvedParams = await params;
  
  // Try to find in Sanity first
  let post: any = await client.fetch(`*[_type == "blog" && slug.current == $slug][0]`, { slug: resolvedParams.slug });
  
  // If not in Sanity, check fallback
  if (!post) {
    notFound();
  }

  const imageUrl = post.image ? urlForImage(post.image)?.url() : post.imageUrl;
  
  // Format date if it's from Sanity
  const displayDate = post.date ? new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' }) : '';

  return (
    <article className="page-wrapper">
      {/* Header */}
      <header className={styles.header}>
        <div className={`container ${styles.headerContainer}`}>
          <div className={styles.category}>{post.category}</div>
          <h1 className={styles.title}>{post.title}</h1>
          
          <div className={styles.meta}>
            <span>👤 {post.author}</span>
            <span>·</span>
            <span>⏱ {post.readTime}</span>
            <span>·</span>
            <span>{displayDate || post.date}</span>
          </div>

          <div className={styles.coverImageWrapper}>
            {imageUrl ? (
              <Image src={imageUrl} alt={post.title} fill style={{ objectFit: 'cover' }} priority />
            ) : (
              <div className={styles.coverImagePlaceholder}>
                 <svg viewBox="0 0 600 400" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:'100%', height:'100%'}}>
                    <rect width="600" height="400" fill="url(#detailGrad)"/>
                    <circle cx="300" cy="200" r="80" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.08)" strokeWidth="40"/>
                    <text x="300" y="215" fill="rgba(255,255,255,0.4)" fontSize="60" textAnchor="middle" fontFamily="sans-serif">
                      {post.category === 'AI & Technology' ? '🤖' : post.category === 'UX/UI Design' ? '🎨' : '💻'}
                    </text>
                    <defs>
                      <linearGradient id="detailGrad" x1="0" y1="0" x2="600" y2="400" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#1a1f35"/>
                        <stop offset="1" stopColor="#0d1020"/>
                      </linearGradient>
                    </defs>
                  </svg>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Content */}
      <section className={styles.contentSection}>
        <div className={`container ${styles.contentContainer}`}>
          <div className={styles.portableText}>
            {post.content && (
              <PortableText value={post.content} />
            )}
          </div>
          
          <div style={{ marginTop: '80px', textAlign: 'center' }}>
            <Link href="/blog" className="btn btn-outline">
              ← Back to Blog
            </Link>
          </div>
        </div>
      </section>
    </article>
  );
}

// Ensure dynamic routes are statically generated
export async function generateStaticParams() {
  const posts = await client.fetch<any[]>(`*[_type == "blog"]{ "slug": slug.current }`);
  
  const sanityParams = posts.map((post) => ({
    slug: post.slug,
  }));
  
  return sanityParams;
}
