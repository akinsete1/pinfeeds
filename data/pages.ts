import { client } from '@/sanity/lib/client';

// ─── HOME PAGE ─────────────────────────────────────────────────────────────

export interface HomePageData {
  heroPhrases: string[];
  aboutSummary: string;
  processSteps: { step: string; title: string; description: string }[];
  ctaTitle: string;
  ctaSubtitle: string;
  faqs?: { question: string; answer: string }[];
}

const fallbackHomePage: HomePageData = {
  heroPhrases: [
    'Website Development',
    'Software Solutions',
    'Mobile Apps',
    'Digital Marketing',
    'Cloud Services',
    'AI & Machine Learning',
    'IT Consultation',
  ],
  aboutSummary: 'Pinfeeds Digital Agency Limited is a forward-thinking IT solutions provider in Nigeria, dedicated to empowering businesses with cutting-edge technology. With a team of expert developers, designers, and marketers, we transform ideas into impactful digital realities. We don’t just build websites and software; we craft digital experiences that drive growth, streamline operations, and elevate brands in the competitive modern market.',
  processSteps: [
    { step: '01', title: 'Discovery & Planning', description: 'We dive deep into your business requirements to outline a strategic roadmap.' },
    { step: '02', title: 'Design & Prototyping', description: 'Our designers craft wireframes and interactive prototypes for your approval.' },
    { step: '03', title: 'Development', description: 'Our engineers bring the designs to life with clean, scalable, and secure code.' },
    { step: '04', title: 'Testing & QA', description: 'Rigorous testing across devices ensures a flawless, bug-free launch.' },
    { step: '05', title: 'Deployment & Support', description: 'We launch your project and provide ongoing maintenance and feature updates.' },
  ],
  ctaTitle: 'Ready to Transform Your Digital Presence?',
  ctaSubtitle: 'Partner with Pinfeeds Digital Agency today and let\'s build something extraordinary together.',
  faqs: [
    { question: 'Do you build custom websites and web applications from scratch?', answer: 'Yes, we specialize in custom Website and Web App Development. We build tailored, high-performance, and responsive web solutions that perfectly align with your brand identity and business logic.' },
    { question: 'Can you develop mobile apps for both iOS and Android?', answer: 'Absolutely! Our Mobile App Development team builds native and cross-platform mobile applications that provide seamless, engaging user experiences across all iOS and Android devices.' },
    { question: 'What kind of custom software and AI solutions do you provide?', answer: 'We develop scalable enterprise software, CRM systems, and bespoke platforms. Additionally, our AI & Machine Learning services can integrate intelligent automation and predictive analytics directly into your business processes.' },
    { question: 'How do you handle Digital Marketing and Design?', answer: 'Our UX/UI and Graphic Design experts first ensure your product looks stunning and is easy to use. Then, our Digital Marketing team drives growth through targeted SEO, social media campaigns, and data-driven advertising strategies.' },
    { question: 'Do you offer Cloud hosting and IT Consultation?', answer: 'Yes, we provide secure Cloud Services for hosting and scaling your applications, as well as professional IT Consultation to help you make informed technological decisions and optimize your IT infrastructure.' }
  ],
};

export async function getHomePageData(): Promise<HomePageData> {
  try {
    const data = await client.fetch<HomePageData>(`*[_type == "homePage"][0]`);
    if (data && data.heroPhrases) {
      if (!data.faqs || data.faqs.length === 0) {
        data.faqs = fallbackHomePage.faqs;
      }
      return data;
    }
    return fallbackHomePage;
  } catch (error) {
    console.error('Error fetching home page data:', error);
    return fallbackHomePage;
  }
}

// ─── ABOUT PAGE ─────────────────────────────────────────────────────────────

export interface AboutPageData {
  pageTitle: string;
  pageSubtitle: string;
  team: { name: string; role: string; icon: string; color: string }[];
  values: { title: string; desc: string; icon: string }[];
  milestones: { year: string; title: string; desc: string }[];
}

const fallbackAboutPage: AboutPageData = {
  pageTitle: 'About Pinfeeds Digital Agency',
  pageSubtitle: '8+ years of delivering premium IT solutions with passion and precision',
  team: [
    { name: 'CEO & Founder', role: 'Leadership', icon: '👨‍💼', color: '#0095eb' },
    { name: 'Lead Developer', role: 'Engineering', icon: '👨‍💻', color: '#7c3aed' },
    { name: 'UI/UX Designer', role: 'Design', icon: '🎨', color: '#059669' },
    { name: 'Digital Marketer', role: 'Marketing', icon: '📈', color: '#dc2626' },
  ],
  values: [
    { icon: '🏆', title: 'Excellence', desc: 'We deliver nothing short of the best in every project we undertake, setting the bar high for quality and innovation.' },
    { icon: '🤝', title: 'Integrity', desc: 'Transparency and honesty are at the core of everything we do — from pricing to project delivery.' },
    { icon: '💡', title: 'Innovation', desc: 'We stay ahead of the curve, leveraging the latest technologies to build future-proof solutions.' },
    { icon: '👥', title: 'Collaboration', desc: 'We work as true partners with our clients, ensuring their vision drives every decision.' },
    { icon: '⚡', title: 'Speed', desc: 'We respect your time. Our agile processes ensure fast delivery without sacrificing quality.' },
    { icon: '🔒', title: 'Security', desc: 'Your data and digital assets are protected with industry-leading security practices.' },
  ],
  milestones: [
    { year: '2016', title: 'Company Founded', desc: 'Pinfeeds Digital Agency was established with a mission to deliver world-class IT solutions in Nigeria.' },
    { year: '2018', title: 'First Major Software Launch', desc: 'Delivered our first enterprise software — Quantum School Management System — to 5+ institutions.' },
    { year: '2020', title: 'Digital Marketing Division', desc: 'Expanded services to include comprehensive digital marketing and SEO solutions.' },
    { year: '2022', title: 'Cloud Services Launch', desc: 'Launched cloud infrastructure and migration services for medium and enterprise businesses.' },
    { year: '2024', title: '150+ Projects Milestone', desc: 'Celebrated delivering over 150 successful projects across Nigeria and internationally.' },
    { year: '2026', title: 'AI Integration Services', desc: 'Pioneering AI-driven automation and intelligent solutions for modern businesses.' },
  ],
};

export async function getAboutPageData(): Promise<AboutPageData> {
  try {
    const data = await client.fetch<AboutPageData>(`*[_type == "aboutPage"][0]`);
    if (data && data.pageTitle) return data;
    return fallbackAboutPage;
  } catch (error) {
    console.error('Error fetching about page data:', error);
    return fallbackAboutPage;
  }
}

// ─── CONTACT PAGE ───────────────────────────────────────────────────────────

export interface ContactPageData {
  pageTitle: string;
  pageSubtitle: string;
  contactInfo: { icon: string; label: string; value: string; href?: string }[];
}

const fallbackContactPage: ContactPageData = {
  pageTitle: 'Get in Touch',
  pageSubtitle: 'Have a project in mind? We\'d love to hear from you. Fill out the form below or contact us directly.',
  contactInfo: [
    { icon: '📞', label: 'Phone', value: '+234 806 689 3144', href: 'tel:+2348066893144' },
    { icon: '✉️', label: 'Email', value: 'hello@pinfeeds.org', href: 'mailto:hello@pinfeeds.org' },
    { icon: '🌐', label: 'Website', value: 'www.pinfeeds.org', href: 'https://pinfeeds.org' },
    { icon: '🕐', label: 'Support Hours', value: '24/7 Available' },
  ],
};

export async function getContactPageData(): Promise<ContactPageData> {
  try {
    const data = await client.fetch<ContactPageData>(`*[_type == "contactPage"][0]`);
    if (data && data.pageTitle) {
      if (data.contactInfo) {
        data.contactInfo = data.contactInfo.map(info => 
          info.label.toLowerCase() === 'email' ? { ...info, value: 'hello@pinfeeds.org', href: 'mailto:hello@pinfeeds.org' } : info
        );
      }
      return data;
    }
    return fallbackContactPage;
  } catch (error) {
    console.error('Error fetching contact page data:', error);
    return fallbackContactPage;
  }
}
