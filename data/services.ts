import { PortableTextBlock } from 'sanity';
import { client } from '@/sanity/lib/client';

export interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
  features: string[];
  color: string;
  detailedContent?: PortableTextBlock[];
}

// Fallback data
export const fallbackServices: Service[] = [
  {
    id: 'web-development',
    icon: '🌐',
    title: 'Website Development',
    description: 'Experience the artistry of web development with Pinfeeds Digital Agency. We craft responsive, fast, and visually stunning websites that convert visitors into customers.',
    features: ['Responsive Design', 'SEO Optimized', 'Custom CMS', 'E-commerce'],
    color: '#0095eb',
  },
  {
    id: 'software-development',
    icon: '⚙️',
    title: 'Software Development',
    description: 'Unlock the power of bespoke software solutions tailored to your specific requirements. From ERP to SaaS platforms, we build systems that scale with your business.',
    features: ['Custom Software', 'API Integration', 'Cloud-native', 'Scalable Architecture'],
    color: '#7c3aed',
  },
  {
    id: 'mobile-app-development',
    icon: '📱',
    title: 'Mobile App Development',
    description: 'Build powerful mobile experiences for iOS and Android. Our apps are intuitive, performant, and designed to delight users from first launch.',
    features: ['iOS & Android', 'React Native', 'Cross-platform', 'Push Notifications'],
    color: '#059669',
  },
  {
    id: 'digital-marketing',
    icon: '📈',
    title: 'Digital Marketing',
    description: 'Maximize your online visibility and reach with our comprehensive digital marketing services. Drive traffic, generate leads, and grow your brand.',
    features: ['SEO & SEM', 'Social Media', 'Content Strategy', 'Analytics'],
    color: '#dc2626',
  },
  {
    id: 'graphic-design',
    icon: '🎨',
    title: 'Graphic Design',
    description: 'Leave a lasting impression with visually stunning graphics that resonate with your target audience. From logos to full brand identity systems.',
    features: ['Brand Identity', 'Logo Design', 'UI Assets', 'Marketing Materials'],
    color: '#d97706',
  },
  {
    id: 'cloud-services',
    icon: '☁️',
    title: 'Cloud Services',
    description: 'We develop, migrate, and manage web applications to ensure they run capably on the cloud. Reliable, secure, and infinitely scalable infrastructure.',
    features: ['AWS / Azure / GCP', 'DevOps & CI/CD', 'Cloud Migration', 'Monitoring'],
    color: '#0891b2',
  },
  {
    id: 'ux-ui-design',
    icon: '✏️',
    title: 'UX/UI Design',
    description: 'Deliver exceptional user experiences with intuitive and visually appealing interface designs. We combine data-driven insights with creative excellence.',
    features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems'],
    color: '#7c3aed',
  },
  {
    id: 'consulting',
    icon: '🤝',
    title: 'Consulting Services',
    description: 'Gain valuable insights and strategic guidance from our experienced consultants. We help you navigate digital transformation with confidence.',
    features: ['IT Strategy', 'Digital Roadmap', 'Tech Audits', 'Team Training'],
    color: '#0095eb',
  },
  {
    id: 'ai-services',
    icon: '🤖',
    title: 'AI & Machine Learning',
    description: 'Empower your business with cutting-edge artificial intelligence. We build predictive models, smart chatbots, and intelligent automation workflows.',
    features: ['Custom Chatbots', 'Predictive Analytics', 'Workflow Automation', 'OpenAI Integration'],
    color: '#10b981',
  },
];

export async function getServices(): Promise<Service[]> {
  try {
    const services = await client.fetch<Service[]>(`
      *[_type == "service"] | order(id asc) {
        id, icon, title, description, features, color, detailedContent
      }
    `);
    
    if (services && services.length > 0) {
      // Merge with fallback to include any missing hardcoded services (like AI and Consulting)
      const merged = [...services];
      for (const fb of fallbackServices) {
        if (!merged.find(s => s.id === fb.id)) {
          merged.push(fb);
        }
      }
      return merged;
    }
    return fallbackServices;
  } catch (error) {
    console.error('Error fetching services from Sanity:', error);
    return fallbackServices;
  }
}

export async function getServiceById(id: string): Promise<Service | null> {
  try {
    const service = await client.fetch<Service | null>(`
      *[_type == "service" && id == "${id}"][0] {
        id, icon, title, description, features, color, detailedContent
      }
    `);

    if (service) return service;
    
    // Fallback search
    return fallbackServices.find((s) => s.id === id) || null;
  } catch (error) {
    console.error('Error fetching service by id:', error);
    return fallbackServices.find((s) => s.id === id) || null;
  }
}
