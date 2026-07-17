import { client } from '@/sanity/lib/client';
import { urlForImage } from '@/sanity/lib/image';

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  image?: any;
  imageUrl?: string;
  href: string;
}

export const fallbackBlog: BlogPost[] = [
  {
    id: 'ai-web-design',
    title: 'How Artificial Intelligence is Reshaping Web Design in 2026',
    slug: 'ai-web-design',
    excerpt: 'Explore the latest AI-driven tools that are revolutionizing how designers create user interfaces and streamline the development workflow.',
    category: 'AI & Technology',
    author: 'Sarah Jenkins',
    date: 'Oct 12, 2026',
    readTime: '5 min read',
    href: '/blog',
  },
  {
    id: 'core-web-vitals',
    title: 'Mastering Core Web Vitals: A Guide for Enterprise Sites',
    slug: 'core-web-vitals',
    excerpt: 'An in-depth look at optimizing LCP, FID, and CLS scores to improve both user experience and search engine rankings.',
    category: 'Web Design',
    author: 'David Chen',
    date: 'Oct 05, 2026',
    readTime: '8 min read',
    href: '/blog',
  },
  {
    id: 'future-of-saas',
    title: 'The Future of SaaS: Micro-Frontends and Composable Architecture',
    slug: 'future-of-saas',
    excerpt: 'Why monolithic architectures are becoming obsolete, and how moving to composable systems can future-proof your software.',
    category: 'Software',
    author: 'Marcus Wright',
    date: 'Sep 28, 2026',
    readTime: '6 min read',
    href: '/blog',
  },
  {
    id: 'ux-psychology',
    title: 'The Psychology Behind High-Converting Landing Pages',
    slug: 'ux-psychology',
    excerpt: 'Understand the cognitive biases and design principles that compel users to take action on your website.',
    category: 'UX/UI Design',
    author: 'Elena Rodriguez',
    date: 'Sep 21, 2026',
    readTime: '7 min read',
    href: '/blog',
  },
  {
    id: 'cloud-security-2026',
    title: 'Top 5 Cloud Security Best Practices Every CTO Should Know',
    slug: 'cloud-security-2026',
    excerpt: 'Protect your digital assets with these essential cloud infrastructure strategies that combat modern cyber threats.',
    category: 'Cloud Services',
    author: 'Alex Thompson',
    date: 'Sep 15, 2026',
    readTime: '4 min read',
    href: '/blog',
  },
  {
    id: 'omnichannel-marketing',
    title: 'Building a Unified Omnichannel Marketing Strategy',
    slug: 'omnichannel-marketing',
    excerpt: 'Learn how to create a seamless customer journey across social media, email, and your core digital platforms.',
    category: 'Digital Marketing',
    author: 'Jessica Lee',
    date: 'Sep 08, 2026',
    readTime: '5 min read',
    href: '/blog',
  },
];

export async function getBlogPosts(): Promise<BlogPost[]> {
  try {
    const posts = await client.fetch<any[]>(`
      *[_type == "blog"] | order(date desc) {
        "id": _id, title, "slug": slug.current, excerpt, category, author, date, readTime, image
      }
    `);
    const parsedPosts = (posts || []).map(post => ({
      ...post,
      date: new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' }),
      href: `/blog/${post.slug}`,
      imageUrl: post.image ? urlForImage(post.image)?.url() : undefined
    }));

    // Sort all posts by date descending so new blogs come first
    parsedPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    
    return parsedPosts;
  } catch (error) {
    console.error('Error fetching blog posts from Sanity:', error);
    return [];
  }
}
