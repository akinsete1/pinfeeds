import type { Metadata } from 'next';
import Link from 'next/link';
import styles from './legal.module.css';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'Read the Pinfeeds Digital Agency Limited privacy policy. Learn how we collect, use, and protect your personal information when you visit our website or use our services.',
  alternates: { canonical: 'https://pinfeeds.org/privacy-policy' },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <div className="page-title-bar">
        <div className="container">
          <h1>Privacy Policy</h1>
          <p>How we collect, use, and protect your information</p>
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">›</span>
            <span aria-current="page">Privacy Policy</span>
          </nav>
        </div>
      </div>

      <section className={styles.legal}>
        <div className={`container ${styles.container}`}>
          <span className={styles.lastUpdated}>Last Updated: July 29, 2026</span>

          <div className={styles.section}>
            <h2>1. Introduction</h2>
            <p>
              Pinfeeds Digital Agency Limited (&quot;Pinfeeds,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) is committed to
              protecting and respecting your privacy. This Privacy Policy explains how we collect, use, disclose, and
              safeguard your information when you visit our website{' '}
              <a href="https://pinfeeds.org">pinfeeds.org</a> or engage with our services.
            </p>
            <p>
              By accessing or using our website and services, you agree to the collection and use of information in
              accordance with this policy. If you do not agree with the terms of this policy, please do not access our
              website.
            </p>
          </div>

          <div className={styles.section}>
            <h2>2. Information We Collect</h2>

            <h3>Personal Information</h3>
            <p>We may collect personally identifiable information that you voluntarily provide to us, including but not limited to:</p>
            <ul>
              <li>Full name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Business name and role</li>
              <li>Mailing or billing address</li>
              <li>Project details and requirements shared through our contact forms</li>
            </ul>

            <h3>Automatically Collected Information</h3>
            <p>When you visit our website, we may automatically collect certain information, including:</p>
            <ul>
              <li>IP address and approximate location</li>
              <li>Browser type and version</li>
              <li>Operating system</li>
              <li>Pages visited, time spent, and navigation patterns</li>
              <li>Referring website or source</li>
              <li>Device type (desktop, mobile, tablet)</li>
            </ul>
          </div>

          <div className={styles.section}>
            <h2>3. How We Use Your Information</h2>
            <p>We use the information we collect for the following purposes:</p>
            <ul>
              <li>To provide, operate, and maintain our website and services</li>
              <li>To respond to your inquiries, comments, or questions</li>
              <li>To process and manage project engagements and contracts</li>
              <li>To send you updates, newsletters, and marketing communications (with your consent)</li>
              <li>To improve our website, services, and overall user experience</li>
              <li>To detect, prevent, and address technical issues or security threats</li>
              <li>To comply with legal obligations and enforce our terms</li>
            </ul>
          </div>

          <div className={styles.section}>
            <h2>4. Cookies &amp; Tracking Technologies</h2>
            <p>
              We use cookies and similar tracking technologies to enhance your browsing experience. Cookies are small data
              files placed on your device that help us understand how you interact with our website.
            </p>
            <p>We use the following types of cookies:</p>
            <ul>
              <li><strong>Essential Cookies:</strong> Required for the website to function properly (e.g., session management).</li>
              <li><strong>Analytics Cookies:</strong> Help us understand visitor behavior and improve our site (e.g., Vercel Analytics).</li>
              <li><strong>Functional Cookies:</strong> Remember your preferences and settings for a better experience.</li>
            </ul>
            <p>
              You can control cookie preferences through your browser settings. Disabling certain cookies may limit
              functionality on our website.
            </p>
          </div>

          <div className={styles.section}>
            <h2>5. Third-Party Services</h2>
            <p>We may use third-party services that collect, monitor, and analyze data to improve our service, including:</p>
            <ul>
              <li><strong>Vercel Analytics &amp; Speed Insights</strong> — for performance monitoring</li>
              <li><strong>Tawk.to</strong> — for live chat support</li>
              <li><strong>Sanity CMS</strong> — for content management</li>
            </ul>
            <p>
              These third-party services have their own privacy policies governing their use of your information. We
              encourage you to review their policies.
            </p>
          </div>

          <div className={styles.section}>
            <h2>6. Data Security</h2>
            <p>
              We implement commercially reasonable security measures to protect your personal information from
              unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the
              Internet or method of electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>
          </div>

          <div className={styles.section}>
            <h2>7. Data Retention</h2>
            <p>
              We retain your personal information only for as long as necessary to fulfill the purposes outlined in this
              policy, or as required by law. When your data is no longer needed, we will securely delete or anonymize it.
            </p>
          </div>

          <div className={styles.section}>
            <h2>8. Your Rights</h2>
            <p>Depending on your location, you may have the following rights regarding your personal data:</p>
            <ul>
              <li><strong>Access:</strong> Request a copy of the personal data we hold about you.</li>
              <li><strong>Correction:</strong> Request correction of inaccurate or incomplete data.</li>
              <li><strong>Deletion:</strong> Request deletion of your personal data, subject to legal obligations.</li>
              <li><strong>Objection:</strong> Object to the processing of your personal data for certain purposes.</li>
              <li><strong>Portability:</strong> Request transfer of your data in a structured, machine-readable format.</li>
              <li><strong>Withdraw Consent:</strong> Where processing is based on consent, you may withdraw it at any time.</li>
            </ul>
            <p>
              To exercise any of these rights, please contact us at{' '}
              <a href="mailto:hello@pinfeeds.org">hello@pinfeeds.org</a>.
            </p>
          </div>

          <div className={styles.section}>
            <h2>9. Children&apos;s Privacy</h2>
            <p>
              Our website and services are not directed to individuals under the age of 13. We do not knowingly collect
              personal information from children. If you believe we have inadvertently collected such information, please
              contact us immediately so we can take appropriate action.
            </p>
          </div>

          <div className={styles.section}>
            <h2>10. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Any changes will be posted on this page with an
              updated &quot;Last Updated&quot; date. We encourage you to review this policy periodically to stay informed about how
              we protect your information.
            </p>
          </div>

          <div className={styles.contactBox}>
            <h2>Questions or Concerns?</h2>
            <p>
              If you have any questions about this Privacy Policy or our data practices, please don&apos;t hesitate to
              contact us:
            </p>
            <p>
              📧 Email: <a href="mailto:hello@pinfeeds.org">hello@pinfeeds.org</a>
            </p>
            <p>
              📞 Phone: <a href="tel:+2348066893144">+234 806 689 3144</a>
            </p>
            <p>
              🌐 Website: <a href="https://pinfeeds.org/contact">pinfeeds.org/contact</a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
