import type { MetadataRoute } from 'next';
import { getServices } from '@/data/services';
import { getBlogPosts } from '@/data/blog';
import { getPortfolioItems } from '@/data/portfolio';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://pinfeeds.org';
  const lastModified = new Date();

  // Fetch all dynamic content
  const [services, blogPosts, portfolioItems] = await Promise.all([
    getServices(),
    getBlogPosts(),
    getPortfolioItems(),
  ]);

  // Map services
  const serviceEntries: MetadataRoute.Sitemap = services.map((service) => ({
    url: `${baseUrl}/services/${service.id}`,
    lastModified,
    changeFrequency: 'monthly',
    priority: 0.85,
  }));

  // Map blog posts
  const blogEntries: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified,
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  // Map portfolio items
  const portfolioEntries: MetadataRoute.Sitemap = portfolioItems.map((item) => ({
    url: `${baseUrl}/portfolio/${item.id}`,
    lastModified,
    changeFrequency: 'monthly',
    priority: 0.75,
  }));

  // Static routes
  const staticEntries: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified, changeFrequency: 'daily', priority: 1.0 },
    { url: `${baseUrl}/academy`, lastModified, changeFrequency: 'weekly', priority: 0.95 },
    { url: `${baseUrl}/services`, lastModified, changeFrequency: 'weekly', priority: 0.95 },
    { url: `${baseUrl}/services/web-development`, lastModified, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/services/mobile-app-development`, lastModified, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/services/it-support`, lastModified, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/about`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/portfolio`, lastModified, changeFrequency: 'weekly', priority: 0.85 },
    { url: `${baseUrl}/blog`, lastModified, changeFrequency: 'daily', priority: 0.85 },
    { url: `${baseUrl}/contact`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/privacy-policy`, lastModified, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${baseUrl}/terms-of-service`, lastModified, changeFrequency: 'yearly', priority: 0.3 },
  ];

  return [...staticEntries, ...serviceEntries, ...blogEntries, ...portfolioEntries];
}
