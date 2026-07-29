import type { Metadata } from 'next';
import Link from 'next/link';
import styles from './legal.module.css';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description:
    'Review the terms and conditions governing the use of Pinfeeds Digital Agency Limited website and services. Understand your rights and obligations.',
  alternates: { canonical: 'https://pinfeeds.org/terms-of-service' },
};

export default function TermsOfServicePage() {
  return (
    <>
      <div className="page-title-bar">
        <div className="container">
          <h1>Terms of Service</h1>
          <p>The rules and guidelines governing the use of our services</p>
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">›</span>
            <span aria-current="page">Terms of Service</span>
          </nav>
        </div>
      </div>

      <section className={styles.legal}>
        <div className={`container ${styles.container}`}>
          <span className={styles.lastUpdated}>Last Updated: July 29, 2026</span>

          <div className={styles.section}>
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing and using the website <a href="https://pinfeeds.org">pinfeeds.org</a> and any services
              provided by Pinfeeds Digital Agency Limited (&quot;Pinfeeds,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), you agree to be bound by
              these Terms of Service. If you do not agree with any part of these terms, you must not use our website or
              services.
            </p>
          </div>

          <div className={styles.section}>
            <h2>2. Our Services</h2>
            <p>Pinfeeds Digital Agency Limited provides digital and IT solutions, including but not limited to:</p>
            <ul>
              <li>Website design and development</li>
              <li>Software development</li>
              <li>Mobile app development</li>
              <li>Digital marketing</li>
              <li>UX/UI design</li>
              <li>Cloud services and infrastructure</li>
              <li>AI &amp; machine learning solutions</li>
              <li>IT consulting and support</li>
              <li>Graphic design</li>
            </ul>
            <p>
              The scope, deliverables, timeline, and pricing of any project engagement will be defined in a separate
              agreement or proposal between Pinfeeds and the client.
            </p>
          </div>

          <div className={styles.section}>
            <h2>3. User Responsibilities</h2>
            <p>When using our website and services, you agree to:</p>
            <ul>
              <li>Provide accurate and complete information when contacting us or submitting forms</li>
              <li>Use our website and services only for lawful purposes</li>
              <li>Not attempt to interfere with, disrupt, or compromise the security of our website</li>
              <li>Not reproduce, duplicate, or exploit any part of our website without written permission</li>
              <li>Not use automated systems or bots to access our website in a manner that exceeds reasonable use</li>
            </ul>
          </div>

          <div className={styles.section}>
            <h2>4. Intellectual Property</h2>
            <p>
              All content on this website — including but not limited to text, graphics, logos, images, software, and
              design — is the property of Pinfeeds Digital Agency Limited or its content suppliers and is protected by
              applicable intellectual property laws.
            </p>
            <p>
              You may not reproduce, distribute, modify, or create derivative works from any content on this website
              without our prior written consent.
            </p>

            <h3>Client Project Deliverables</h3>
            <p>
              Upon full payment of all agreed fees, intellectual property rights for project deliverables will transfer
              to the client as outlined in the individual project agreement. Until full payment is received, Pinfeeds
              retains all rights to the work produced.
            </p>
          </div>

          <div className={styles.section}>
            <h2>5. Project Engagements</h2>

            <h3>Proposals &amp; Agreements</h3>
            <p>
              All project work is governed by a separate proposal or service agreement. These terms supplement — but do
              not replace — the terms of any specific project agreement.
            </p>

            <h3>Payment Terms</h3>
            <ul>
              <li>Payment schedules and methods will be specified in individual project agreements</li>
              <li>Late payments may incur additional fees or result in suspension of services</li>
              <li>All prices are quoted in the currency specified in the project proposal</li>
            </ul>

            <h3>Revisions &amp; Changes</h3>
            <p>
              The number of revisions included in a project will be stated in the project agreement. Additional
              revisions or scope changes beyond the agreed scope may incur extra charges.
            </p>
          </div>

          <div className={styles.section}>
            <h2>6. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, Pinfeeds Digital Agency Limited shall not be liable for any
              indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of
              profits, data, goodwill, or business opportunity, arising out of or in connection with your use of our
              website or services.
            </p>
            <p>
              Our total liability for any claim arising from or related to our services shall not exceed the total
              amount paid by you to Pinfeeds for the specific service giving rise to the claim.
            </p>
          </div>

          <div className={styles.section}>
            <h2>7. Warranties &amp; Disclaimers</h2>
            <p>
              Our website and services are provided on an &quot;as is&quot; and &quot;as available&quot; basis. We make no warranties,
              expressed or implied, regarding:
            </p>
            <ul>
              <li>The accuracy, completeness, or reliability of any content on our website</li>
              <li>Uninterrupted or error-free operation of our website</li>
              <li>Specific results or outcomes from the use of our services</li>
              <li>The absence of viruses or other harmful components</li>
            </ul>
            <p>
              While we strive to deliver high-quality work, the success of digital products depends on many factors
              beyond our control, including market conditions, user behavior, and third-party platforms.
            </p>
          </div>

          <div className={styles.section}>
            <h2>8. Termination</h2>
            <p>
              We reserve the right to suspend or terminate your access to our website at any time, without prior notice,
              for conduct that we believe violates these Terms of Service or is harmful to other users, us, or third
              parties.
            </p>
            <p>
              Termination of project engagements will be governed by the terms specified in the relevant project
              agreement.
            </p>
          </div>

          <div className={styles.section}>
            <h2>9. Third-Party Links</h2>
            <p>
              Our website may contain links to third-party websites or services that are not owned or controlled by
              Pinfeeds. We are not responsible for the content, privacy policies, or practices of any third-party
              websites. You access such links at your own risk.
            </p>
          </div>

          <div className={styles.section}>
            <h2>10. Governing Law</h2>
            <p>
              These Terms of Service shall be governed by and construed in accordance with the laws of the Federal
              Republic of Nigeria. Any disputes arising from these terms shall be subject to the exclusive jurisdiction
              of the courts located in Lagos State, Nigeria.
            </p>
          </div>

          <div className={styles.section}>
            <h2>11. Changes to These Terms</h2>
            <p>
              We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately
              upon posting on this page. Your continued use of our website after any changes constitutes acceptance of
              the updated terms. We encourage you to review this page periodically.
            </p>
          </div>

          <div className={styles.contactBox}>
            <h2>Questions About These Terms?</h2>
            <p>
              If you have any questions or concerns about these Terms of Service, please contact us:
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
