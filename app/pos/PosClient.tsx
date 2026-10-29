'use client';

import { useState, FormEvent } from 'react';
import styles from './pos.module.css';

type FormState = 'idle' | 'sending' | 'success' | 'error';

/* ───────────────────── Static Data ───────────────────── */

const FEATURES = [
  {
    icon: '🧾',
    title: 'Smart Sales & Invoicing',
    description: 'Process sales instantly — cash, card, bank transfer, or mobile money. Generate professional digital receipts and invoices in one tap.',
    color: 'rgba(0, 149, 235, 0.1)',
    border: 'rgba(0, 149, 235, 0.2)',
  },
  {
    icon: '📦',
    title: 'Real-Time Inventory Management',
    description: 'Track stock levels automatically across all branches. Receive low-stock alerts, manage suppliers, and eliminate manual counting errors.',
    color: 'rgba(139, 92, 246, 0.1)',
    border: 'rgba(139, 92, 246, 0.2)',
  },
  {
    icon: '📊',
    title: 'Revenue & Expense Analytics',
    description: 'Visualise daily, weekly, and monthly performance with smart dashboards. Know exactly which products drive profit and where money is leaking.',
    color: 'rgba(16, 185, 129, 0.1)',
    border: 'rgba(16, 185, 129, 0.2)',
  },
  {
    icon: '👥',
    title: 'Staff & Branch Management',
    description: 'Create roles and permissions for cashiers, managers, and admins. Monitor staff activity, shifts, and branch performance from one screen.',
    color: 'rgba(245, 158, 11, 0.1)',
    border: 'rgba(245, 158, 11, 0.2)',
  },
  {
    icon: '💳',
    title: 'Multi-Payment Integration',
    description: 'Accept payments through bank transfers, USSD, cards, and all major wallets. Automatic reconciliation means zero manual tallying at day-end.',
    color: 'rgba(236, 72, 153, 0.1)',
    border: 'rgba(236, 72, 153, 0.2)',
  },
  {
    icon: '🔐',
    title: 'Enterprise-Grade Security',
    description: 'End-to-end encryption, role-based access control, and automatic cloud backups protect your business data around the clock — even offline.',
    color: 'rgba(6, 182, 212, 0.1)',
    border: 'rgba(6, 182, 212, 0.2)',
  },
  {
    icon: '📱',
    title: 'Mobile-First Design',
    description: 'Run your business from your phone, tablet, or desktop. Pinfeeds POS works seamlessly on all devices — even on low-bandwidth connections.',
    color: 'rgba(99, 102, 241, 0.1)',
    border: 'rgba(99, 102, 241, 0.2)',
  },
  {
    icon: '🔔',
    title: 'Smart Notifications & Alerts',
    description: 'Get instant push alerts for low stock, high-value sales, staff clock-ins, and daily revenue summaries — so nothing slips through the cracks.',
    color: 'rgba(234, 88, 12, 0.1)',
    border: 'rgba(234, 88, 12, 0.2)',
  },
  {
    icon: '🧩',
    title: 'Seamless Integrations',
    description: 'Connect effortlessly with accounting tools, e-commerce platforms, and delivery services to build a fully unified business ecosystem.',
    color: 'rgba(22, 163, 74, 0.1)',
    border: 'rgba(22, 163, 74, 0.2)',
  },
];

const INDUSTRIES = [
  { icon: '🛒', title: 'Retail Stores', desc: 'Supermarkets, mini-marts, fashion boutiques, and general merchandise shops.' },
  { icon: '🍽️', title: 'Restaurants & Bars', desc: 'Fast food, lounges, cafés, and fine-dining establishments with table management.' },
  { icon: '💊', title: 'Pharmacies', desc: 'Drug stores and medical supply shops with expiry tracking and compliance tools.' },
  { icon: '💇', title: 'Salons & Spas', desc: 'Barbing salons, beauty studios, and wellness centres with appointment booking.' },
  { icon: '🏨', title: 'Hotels & Hospitality', desc: 'Guest houses, lodges, and event centres needing room billing and service tracking.' },
  { icon: '🔧', title: 'Auto & Hardware', desc: 'Mechanic workshops, spare-part dealers, and hardware stores with serial tracking.' },
  { icon: '🏪', title: 'Wholesale & Distribution', desc: 'Distributors and bulk sellers tracking large orders, credit terms, and deliveries.' },
  { icon: '📚', title: 'Bookshops & Stationery', desc: 'Bookstores, copy centres, and stationery supply outlets.' },
];

const STEPS = [
  { num: '01', title: 'Submit an Inquiry', desc: 'Fill out the quick form below with your business details. Our team reviews every inquiry within 24 hours.' },
  { num: '02', title: 'Free Consultation', desc: 'A product specialist will call you for a personalised walkthrough and tailor the POS setup to your exact business needs.' },
  { num: '03', title: 'Setup & Onboarding', desc: 'We configure your account, import your products, train your staff, and get you live — usually within 48 hours.' },
  { num: '04', title: 'Grow Your Business', desc: 'Start selling, tracking, and scaling. Our dedicated support team is available 24/7 via chat, phone, and email.' },
];

const TESTIMONIALS = [
  {
    quote: 'Pinfeeds POS completely transformed how we manage our three pharmacy branches. Real-time stock tracking alone saves us ₦200K monthly in waste.',
    name: 'Dr. Adunni Okafor',
    role: 'MedPlus Pharmacy, Lagos',
    avatar: 'AO',
    bg: 'linear-gradient(135deg, #0095eb, #0066cc)',
  },
  {
    quote: 'The multi-payment feature is a game-changer. My customers pay however they want — transfer, POS, cash — and everything reconciles automatically.',
    name: 'Chinedu Obi',
    role: 'FreshMart Supermarket, Abuja',
    avatar: 'CO',
    bg: 'linear-gradient(135deg, #8b5cf6, #6366f1)',
  },
  {
    quote: 'Before Pinfeeds POS, I was using exercise books to track sales. Now I see real-time profit reports on my phone. I wish I found this sooner.',
    name: 'Funke Adeyemi',
    role: 'Funke\'s Kitchen, Ibadan',
    avatar: 'FA',
    bg: 'linear-gradient(135deg, #10b981, #059669)',
  },
];

const FAQS = [
  {
    q: 'Do I need special hardware to use Pinfeeds POS?',
    a: 'No. Pinfeeds POS is a cloud-based software that works on any device — smartphone, tablet, laptop, or desktop. You can optionally connect a receipt printer, barcode scanner, or cash drawer, but they are not required to get started.',
  },
  {
    q: 'Can I manage multiple branches from one account?',
    a: 'Absolutely. Pinfeeds POS supports unlimited branches under a single dashboard. You can view consolidated reports, transfer stock between locations, and assign staff to specific branches — all in real time.',
  },
  {
    q: 'What happens if my internet goes down?',
    a: 'Pinfeeds POS has a robust offline mode. You can continue processing sales, and all transactions automatically sync to the cloud the moment connectivity is restored. You never lose a single sale.',
  },
  {
    q: 'Is my business data safe?',
    a: 'Yes. We use bank-level 256-bit encryption, daily automated cloud backups, and role-based access controls. Your data is stored in ISO-27001 certified data centres with 99.9% uptime.',
  },
  {
    q: 'How long does setup take?',
    a: 'Most businesses are fully operational within 24 – 48 hours. Our onboarding team handles account configuration, product import, staff training, and go-live support at no extra charge.',
  },
  {
    q: 'Do you offer customer support?',
    a: 'Yes — 24/7 via live chat, WhatsApp, phone, and email. Every subscriber also gets a dedicated account manager who understands your business and can help optimise your workflow.',
  },
];

/* ───────────────────── Component ───────────────────── */

export default function PosClient() {
  const [formState, setFormState] = useState<FormState>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    business: '',
    businessType: '',
    branches: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setFormState('sending');
    setErrorMsg('');

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY || '',
          subject: `[Pinfeeds POS Inquiry] ${form.business} — ${form.name}`,
          from_name: form.name,
          name: form.name,
          email: form.email,
          phone: form.phone,
          business_name: form.business,
          business_type: form.businessType,
          number_of_branches: form.branches,
          message: form.message,
        }),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.message || 'Something went wrong.');
      }

      setFormState('success');
      setForm({ name: '', email: '', phone: '', business: '', businessType: '', branches: '', message: '' });
    } catch (err: unknown) {
      console.error('POS inquiry error:', err);
      setErrorMsg(err instanceof Error ? err.message : 'Failed to send inquiry. Please try again.');
      setFormState('error');
    }
  };

  return (
    <>
      {/* ─── Features Section ─── */}
      <section className={styles.featuresSection} id="pos-features">
        <div className="container">
          <div className="section-heading">
            <span className="section-tag">Powerful Features</span>
            <h2 className="section-title">
              Everything You Need to <span>Run Your Business</span>
            </h2>
            <p className="section-desc">
              From lightning-fast sales processing to deep analytics, Pinfeeds POS packs enterprise-grade tools into an interface so simple your staff can learn it in minutes.
            </p>
          </div>

          <div className={styles.featuresGrid}>
            {FEATURES.map((f) => (
              <div key={f.title} className={styles.featureCard}>
                <div
                  className={styles.featureIconBox}
                  style={{ background: f.color, border: `1px solid ${f.border}` }}
                >
                  {f.icon}
                </div>
                <h3>{f.title}</h3>
                <p>{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── What Is Pinfeeds POS ─── */}
      <section className={styles.whatIsSection}>
        <div className="container">
          <div className={styles.whatIsGrid}>
            <div className={styles.whatIsContent}>
              <span className="section-tag">Why Pinfeeds POS</span>
              <h2>
                The <span>Smartest POS</span> Built for Nigerian Businesses
              </h2>
              <p>
                Pinfeeds POS is more than a point-of-sale terminal — it&apos;s a complete business operating system. We designed it from the ground up for the unique challenges African businesses face: unreliable internet, multi-payment ecosystems, and the need for real-time visibility across multiple locations.
              </p>
              <p>
                Whether you run a single kiosk or a chain of 50 stores, Pinfeeds POS scales with you — giving you the same powerful tools that multinational retailers use, at a fraction of the cost.
              </p>
              <div className={styles.whatIsChecks}>
                {[
                  'Works offline — never lose a sale',
                  'Setup in under 48 hours, zero downtime',
                  'Bank-level 256-bit data encryption',
                  'Unlimited products, staff & transactions',
                  '24/7 dedicated support via chat & phone',
                ].map((item) => (
                  <div key={item} className={styles.whatIsCheck}>
                    <span className={styles.whatIsCheckIcon}>✓</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual Mockup */}
            <div className={styles.whatIsVisual}>
              <div className={styles.mockupFloatBadge}>
                <span className={styles.floatIcon}>📈</span>
                <span>Revenue up 34%</span>
              </div>
              <div className={styles.mockupWrapper}>
                <div className={styles.mockupDots}>
                  <span /> <span /> <span />
                </div>
                <div className={styles.mockupScreen}>
                  <div className={styles.mockupRow}>
                    <div className={`${styles.mockupBar} ${styles.mockupBarWide}`} />
                    <div className={`${styles.mockupBar} ${styles.mockupBarMed}`} />
                    <div className={`${styles.mockupBar} ${styles.mockupBarSm}`} />
                  </div>
                  <div className={styles.mockupChart}>
                    <div className={styles.mockupChartBar} />
                    <div className={styles.mockupChartBar} />
                    <div className={styles.mockupChartBar} />
                    <div className={styles.mockupChartBar} />
                    <div className={styles.mockupChartBar} />
                    <div className={styles.mockupChartBar} />
                  </div>
                  <div className={styles.mockupStats}>
                    <div className={styles.mockupStat}>
                      <span className={styles.mockupStatValue}>₦2.4M</span>
                      <span className={styles.mockupStatLabel}>Today&apos;s Sales</span>
                    </div>
                    <div className={styles.mockupStat}>
                      <span className={styles.mockupStatValue}>1,247</span>
                      <span className={styles.mockupStatLabel}>Items Sold</span>
                    </div>
                    <div className={styles.mockupStat}>
                      <span className={styles.mockupStatValue}>98.2%</span>
                      <span className={styles.mockupStatLabel}>Stock Level</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.mockupFloatBadge}>
                <span className={styles.floatIcon}>🔔</span>
                <span>Low stock alert sent</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Industries Section ─── */}
      <section className={styles.industriesSection}>
        <div className="container">
          <div className="section-heading" data-theme="dark">
            <span className="section-tag">Built for Every Business</span>
            <h2 className="section-title">
              Industries That <span>Thrive</span> With Pinfeeds POS
            </h2>
            <p className="section-desc">
              From corner shops to multi-branch chains, Pinfeeds POS adapts to the way you work — not the other way around.
            </p>
          </div>

          <div className={styles.industriesGrid}>
            {INDUSTRIES.map((ind) => (
              <div key={ind.title} className={styles.industryCard}>
                <span className={styles.industryIcon}>{ind.icon}</span>
                <h3>{ind.title}</h3>
                <p>{ind.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── How It Works ─── */}
      <section className={styles.howItWorksSection}>
        <div className="container">
          <div className="section-heading">
            <span className="section-tag">Getting Started</span>
            <h2 className="section-title">
              Go Live in <span>4 Simple Steps</span>
            </h2>
            <p className="section-desc">
              We handle the heavy lifting so you can focus on what matters — running your business.
            </p>
          </div>

          <div className={styles.stepsGrid}>
            {STEPS.map((step) => (
              <div key={step.num} className={styles.stepCard}>
                <div className={styles.stepNumber}>{step.num}</div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Testimonials ─── */}
      <section className={styles.testimonialsSection}>
        <div className="container">
          <div className="section-heading">
            <span className="section-tag">Success Stories</span>
            <h2 className="section-title">
              Trusted by <span>Business Owners</span> Across Nigeria
            </h2>
            <p className="section-desc">
              Hear from real business owners who transformed their operations with Pinfeeds POS.
            </p>
          </div>

          <div className={styles.testimonialsGrid}>
            {TESTIMONIALS.map((t) => (
              <div key={t.name} className={styles.testimonialCard}>
                <div className={styles.testimonialStars}>
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
                <div className={styles.testimonialQuote}>&ldquo;</div>
                <blockquote>{t.quote}</blockquote>
                <div className={styles.testimonialAuthor}>
                  <div className={styles.testimonialAvatar} style={{ background: t.bg }}>
                    {t.avatar}
                  </div>
                  <div>
                    <div className={styles.testimonialName}>{t.name}</div>
                    <div className={styles.testimonialRole}>{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className={styles.faqSection} id="pos-faq">
        <div className="container">
          <div className="section-heading">
            <span className="section-tag">FAQ</span>
            <h2 className="section-title">
              Frequently Asked <span>Questions</span>
            </h2>
            <p className="section-desc">
              Everything you need to know before getting started with Pinfeeds POS.
            </p>
          </div>

          <div className={styles.faqGrid}>
            {FAQS.map((faq, i) => (
              <div
                key={i}
                className={`${styles.faqItem} ${openFaq === i ? styles.faqItemOpen : ''}`}
              >
                <button
                  type="button"
                  className={styles.faqQuestion}
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  aria-expanded={openFaq === i}
                  id={`pos-faq-q-${i}`}
                >
                  {faq.q}
                  <svg
                    className={`${styles.faqChevron} ${openFaq === i ? styles.faqChevronOpen : ''}`}
                    viewBox="0 0 20 20"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                {openFaq === i && (
                  <div className={styles.faqAnswer}>{faq.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Inquiry Form ─── */}
      <section className={styles.inquirySection} id="pos-inquiry">
        <div className="container">
          <div className={styles.inquiryGrid}>
            {/* Left Info */}
            <div className={styles.inquiryInfo}>
              <span className="section-tag" style={{ color: '#38bdf8', background: 'rgba(0,149,235,0.15)', borderColor: 'rgba(56,189,248,0.3)' }}>
                Get Started Today
              </span>
              <h2>
                Ready to <span>Transform</span> Your Business?
              </h2>
              <p>
                Submit your inquiry and a Pinfeeds product specialist will reach out within 24 hours with a personalised demo and setup plan — completely free, no obligation.
              </p>

              <div className={styles.inquiryPerks}>
                <div className={styles.inquiryPerk}>
                  <div className={styles.perkIcon}>🎯</div>
                  <div>
                    <span className={styles.perkTitle}>Free Personalised Demo</span>
                    <span className={styles.perkDesc}>See exactly how Pinfeeds POS works for your specific business type.</span>
                  </div>
                </div>
                <div className={styles.inquiryPerk}>
                  <div className={styles.perkIcon}>⚡</div>
                  <div>
                    <span className={styles.perkTitle}>48-Hour Go-Live</span>
                    <span className={styles.perkDesc}>From sign-up to selling — we handle configuration, import & training.</span>
                  </div>
                </div>
                <div className={styles.inquiryPerk}>
                  <div className={styles.perkIcon}>🛡️</div>
                  <div>
                    <span className={styles.perkTitle}>Zero Risk</span>
                    <span className={styles.perkDesc}>No long-term contracts. Cancel anytime. Your data always belongs to you.</span>
                  </div>
                </div>
                <div className={styles.inquiryPerk}>
                  <div className={styles.perkIcon}>📞</div>
                  <div>
                    <span className={styles.perkTitle}>24/7 Dedicated Support</span>
                    <span className={styles.perkDesc}>Live chat, WhatsApp, phone and email — we&apos;re always here for you.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Form */}
            <div className={styles.inquiryFormCard}>
              {formState === 'success' ? (
                <div className={styles.successMsg}>
                  <span style={{ fontSize: '3rem' }}>🎉</span>
                  <h3>Inquiry Submitted Successfully!</h3>
                  <p>
                    Thank you for your interest in Pinfeeds POS. A product specialist will contact you within 24 hours via email and phone to schedule your free demo.
                  </p>
                  <button
                    type="button"
                    className={styles.inquirySubmitBtn}
                    style={{ marginTop: '24px', width: 'auto', padding: '14px 32px' }}
                    onClick={() => setFormState('idle')}
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <>
                  <h3 className={styles.inquiryFormTitle}>POS Inquiry Form</h3>
                  <p className={styles.inquiryFormSubtitle}>Fill in your details and we&apos;ll get back to you within 24 hours.</p>

                  <form onSubmit={handleSubmit} className={styles.inquiryForm}>
                    <div className={styles.formRow}>
                      <div className={styles.inputGroup}>
                        <label htmlFor="pos-name">Full Name *</label>
                        <input type="text" id="pos-name" name="name" required placeholder="John Doe" value={form.name} onChange={handleChange} disabled={formState === 'sending'} />
                      </div>
                      <div className={styles.inputGroup}>
                        <label htmlFor="pos-email">Email Address *</label>
                        <input type="email" id="pos-email" name="email" required placeholder="john@example.com" value={form.email} onChange={handleChange} disabled={formState === 'sending'} />
                      </div>
                    </div>

                    <div className={styles.formRow}>
                      <div className={styles.inputGroup}>
                        <label htmlFor="pos-phone">Phone Number *</label>
                        <input type="tel" id="pos-phone" name="phone" required placeholder="+234 800 000 0000" value={form.phone} onChange={handleChange} disabled={formState === 'sending'} />
                      </div>
                      <div className={styles.inputGroup}>
                        <label htmlFor="pos-business">Business Name *</label>
                        <input type="text" id="pos-business" name="business" required placeholder="My Store Ltd." value={form.business} onChange={handleChange} disabled={formState === 'sending'} />
                      </div>
                    </div>

                    <div className={styles.formRow}>
                      <div className={styles.inputGroup}>
                        <label htmlFor="pos-type">Business Type</label>
                        <select id="pos-type" name="businessType" value={form.businessType} onChange={handleChange} disabled={formState === 'sending'}>
                          <option value="">Select your industry</option>
                          <option value="Retail / Supermarket">Retail / Supermarket</option>
                          <option value="Restaurant / Bar / Café">Restaurant / Bar / Café</option>
                          <option value="Pharmacy">Pharmacy</option>
                          <option value="Salon / Spa">Salon / Spa</option>
                          <option value="Hotel / Hospitality">Hotel / Hospitality</option>
                          <option value="Wholesale / Distribution">Wholesale / Distribution</option>
                          <option value="Auto / Hardware">Auto / Hardware</option>
                          <option value="Fashion / Boutique">Fashion / Boutique</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                      <div className={styles.inputGroup}>
                        <label htmlFor="pos-branches">Number of Branches</label>
                        <select id="pos-branches" name="branches" value={form.branches} onChange={handleChange} disabled={formState === 'sending'}>
                          <option value="">Select</option>
                          <option value="1">1 (Single location)</option>
                          <option value="2-5">2 – 5 branches</option>
                          <option value="6-20">6 – 20 branches</option>
                          <option value="20+">20+ branches</option>
                        </select>
                      </div>
                    </div>

                    <div className={styles.inputGroup}>
                      <label htmlFor="pos-message">Additional Details</label>
                      <textarea id="pos-message" name="message" rows={4} placeholder="Tell us about your business needs, current challenges, or any questions you have..." value={form.message} onChange={handleChange} disabled={formState === 'sending'} />
                    </div>

                    {formState === 'error' && (
                      <div className={styles.errorMsg}>
                        ❌ {errorMsg || 'Failed to send inquiry. Please try again or email us at hello@pinfeeds.org'}
                      </div>
                    )}

                    <button type="submit" className={styles.inquirySubmitBtn} disabled={formState === 'sending'}>
                      {formState === 'sending' ? (
                        <><span className={styles.spinner} /> Submitting...</>
                      ) : (
                        <>
                          Submit Inquiry
                          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                            <path d="M4 10h12M12 6l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </>
                      )}
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Final CTA ─── */}
      <section className={styles.ctaSection}>
        <div className="container">
          <h2>
            Still Have Questions? <span>Let&apos;s Talk.</span>
          </h2>
          <p>
            Our team is standing by to answer any questions, walk you through a live demo, or help you get started today.
          </p>
          <div className={styles.ctaActions}>
            <a href="https://wa.me/2348066893144?text=Hello%20Pinfeeds%2C%20I%27m%20interested%20in%20the%20POS%20software" className="btn btn-primary btn-lg" target="_blank" rel="noopener noreferrer">
              💬 Chat on WhatsApp
            </a>
            <a href="tel:+2348066893144" className="btn btn-outline btn-lg">
              📞 Call Us Now
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
