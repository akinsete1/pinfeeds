import { client } from '@/sanity/lib/client';
import { urlForImage } from '@/sanity/lib/image';

export interface PortfolioItem {
  id: string;
  title: string;
  category: string[];
  categoryLabel: string;
  description: string;
  image?: any;
  imageUrl?: string;
  year: string;
  tech: string[];
  href: string;
  detailedContent?: any[];
}

export const portfolioCategories = [
  { label: 'All', value: 'all' },
  { label: 'Web Design', value: 'web' },
  { label: 'Software', value: 'software' },
  { label: 'Design', value: 'design' },
];

export const fallbackPortfolio: PortfolioItem[] = [
  {
    id: 'eco-vision',
    title: 'EcoVision SaaS Platform',
    category: ['web', 'software'],
    categoryLabel: 'Software Development',
    description: 'A comprehensive cloud-based dashboard for enterprise carbon footprint tracking. Built with React and Node.js, featuring real-time data visualization and automated compliance reporting.',
    year: '2025',
    tech: ['React', 'Node.js', 'PostgreSQL', 'AWS'],
    href: '/portfolio',
    imageUrl: '/portfolio/ecovision_1783930727912.png',
    detailedContent: [
      {
        _type: 'block',
        style: 'normal',
        children: [
          { _type: 'span', text: 'EcoVision is a state-of-the-art enterprise solution designed to tackle one of the modern world’s most pressing issues: carbon emissions tracking.' }
        ]
      },
      {
        _type: 'block',
        style: 'normal',
        children: [
          { _type: 'span', text: 'Our team engineered a high-performance React dashboard that aggregates supply chain data in real-time, offering executives clear insights into their environmental impact through dynamic data visualizations.' }
        ]
      }
    ]
  },
  {
    id: 'luxe-hotel',
    title: 'Luxe Hotel Group App',
    category: ['software', 'design'],
    categoryLabel: 'Mobile App',
    description: 'A cross-platform mobile application for a luxury hotel chain, offering digital room keys, seamless booking, and personalized concierge services.',
    year: '2024',
    tech: ['React Native', 'Firebase', 'Stripe'],
    href: '/portfolio',
    imageUrl: '/portfolio/luxe_hotel_1783930736794.png',
    detailedContent: [
      {
        _type: 'block',
        style: 'normal',
        children: [
          { _type: 'span', text: 'For the Luxe Hotel Group, the goal was to elevate the guest experience by moving traditional concierge services directly into their pockets.' }
        ]
      },
      {
        _type: 'block',
        style: 'normal',
        children: [
          { _type: 'span', text: 'We designed and developed a cross-platform mobile app featuring secure Bluetooth digital keys, seamless room booking, and a sleek, premium user interface matching the brand’s golden aesthetic.' }
        ]
      }
    ]
  },
  {
    id: 'finance-flow',
    title: 'FinFlow Web Application',
    category: ['web', 'software'],
    categoryLabel: 'Web Application',
    description: 'A secure financial technology portal providing AI-driven investment insights and portfolio management tools for high-net-worth individuals.',
    year: '2025',
    tech: ['Next.js', 'TypeScript', 'GraphQL'],
    href: '/portfolio',
    imageUrl: '/portfolio/finflow_1783930746825.png',
    detailedContent: [
      {
        _type: 'block',
        style: 'normal',
        children: [
          { _type: 'span', text: 'FinFlow represents the next generation of personal wealth management. We built a highly secure, lightning-fast web portal using Next.js and GraphQL.' }
        ]
      },
      {
        _type: 'block',
        style: 'normal',
        children: [
          { _type: 'span', text: 'The platform leverages advanced AI algorithms to generate personalized investment insights, presenting complex financial data through beautiful, intuitive glassmorphism charts.' }
        ]
      }
    ]
  },
  {
    id: 'artisan-bakery',
    title: 'Artisan Bakery E-commerce',
    category: ['web', 'design'],
    categoryLabel: 'E-commerce',
    description: 'A visually rich e-commerce experience for a boutique bakery. Features custom headless CMS architecture for dynamic product management and rapid page loads.',
    year: '2023',
    tech: ['Shopify Plus', 'Next.js', 'Tailwind'],
    href: '/portfolio',
    imageUrl: '/portfolio/artisan_bakery_1783930764603.png',
    detailedContent: [
      {
        _type: 'block',
        style: 'normal',
        children: [
          { _type: 'span', text: 'Artisan Bakery needed an online presence as appetizing as their pastries. We delivered a headless Shopify E-commerce solution coupled with a Next.js frontend.' }
        ]
      },
      {
        _type: 'block',
        style: 'normal',
        children: [
          { _type: 'span', text: 'The result is a lightning-fast, visually rich shopping experience with custom animations that highlight the craftsmanship of their baked goods.' }
        ]
      }
    ]
  },
  {
    id: 'health-sync',
    title: 'HealthSync Patient Portal',
    category: ['software', 'web'],
    categoryLabel: 'Healthcare Tech',
    description: 'HIPAA-compliant patient management system allowing secure messaging, telehealth appointments, and digital prescription tracking.',
    year: '2024',
    tech: ['Vue.js', 'Python', 'Docker'],
    href: '/portfolio',
    imageUrl: '/portfolio/healthsync_1783930775662.png',
    detailedContent: [
      {
        _type: 'block',
        style: 'normal',
        children: [
          { _type: 'span', text: 'Developing software for the healthcare industry requires the highest standards of security. HealthSync is a fully HIPAA-compliant patient management system.' }
        ]
      },
      {
        _type: 'block',
        style: 'normal',
        children: [
          { _type: 'span', text: 'We integrated secure messaging protocols, telehealth video capabilities, and prescription tracking into a calming, highly accessible user interface.' }
        ]
      }
    ]
  },
  {
    id: 'velocity-motors',
    title: 'Velocity Motors Rebranding',
    category: ['design', 'web'],
    categoryLabel: 'Brand Identity',
    description: 'Complete digital rebranding for an automotive startup. Included logo design, brand guidelines, and a high-performance marketing website with 3D car configurator.',
    year: '2025',
    tech: ['Figma', 'Three.js', 'WebGL'],
    href: '/portfolio',
    imageUrl: '/portfolio/velocity_motors_1783930783511.png',
    detailedContent: [
      {
        _type: 'block',
        style: 'normal',
        children: [
          { _type: 'span', text: 'Velocity Motors is pushing the boundaries of electric hypercars. We handled their complete digital presence from the ground up.' }
        ]
      },
      {
        _type: 'block',
        style: 'normal',
        children: [
          { _type: 'span', text: 'The centerpiece of the project is a high-performance marketing website featuring an interactive WebGL 3D car configurator, allowing users to customize their dream car in real-time right in their browser.' }
        ]
      }
    ]
  },
];

export async function getPortfolioItems(): Promise<PortfolioItem[]> {
  try {
    const items = await client.fetch<PortfolioItem[]>(`
      *[_type == "portfolio"] | order(year desc) {
        id, title, category, categoryLabel, description, image, year, tech, href, detailedContent
      }
    `);
    
    if (items && items.length > 0) {
      return items.map(item => {
        const fallbackItem = fallbackPortfolio.find(p => p.id === item.id);
        return {
          ...item,
          imageUrl: item.image ? urlForImage(item.image)?.url() : fallbackItem?.imageUrl,
          detailedContent: item.detailedContent || fallbackItem?.detailedContent,
        };
      });
    }
    return fallbackPortfolio;
  } catch (error) {
    console.error('Error fetching portfolio items from Sanity:', error);
    return fallbackPortfolio;
  }
}

export async function getPortfolioItemById(id: string): Promise<PortfolioItem | null> {
  try {
    const item = await client.fetch<PortfolioItem | null>(`
      *[_type == "portfolio" && id == "${id}"][0] {
        id, title, category, categoryLabel, description, image, year, tech, href, detailedContent
      }
    `);

    if (item) {
      const fallbackItem = fallbackPortfolio.find((p) => p.id === item.id);
      return {
        ...item,
        imageUrl: item.image ? urlForImage(item.image)?.url() : fallbackItem?.imageUrl,
        detailedContent: item.detailedContent || fallbackItem?.detailedContent,
      };
    }
    
    console.log(`Fallback for id: ${id}`);
    const fallback = fallbackPortfolio.find((p) => p.id === id);
    console.log(`Fallback found:`, !!fallback);
    return fallback || null;
  } catch (error) {
    console.error('Error fetching portfolio item by id:', error);
    const fallback = fallbackPortfolio.find((p) => p.id === id);
    return fallback || null;
  }
}
