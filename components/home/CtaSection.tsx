import Link from 'next/link';
import styles from './CtaSection.module.css';

export default function CtaSection({ title, subtitle }: { title?: string, subtitle?: string }) {
  const activeTitle = title || "Let's Build Something Amazing Together";
  const activeSubtitle = subtitle || "Partner with Pinfeeds Digital Agency and transform your vision into a powerful digital reality. Our team of experts is ready to bring your project to life.";

  return (
    <section className={styles.cta} aria-labelledby="cta-heading">
      <div className={styles.bg} aria-hidden="true">
        <div className={styles.glow1} />
        <div className={styles.glow2} />
        <div className={styles.grid} />
      </div>

      <div className="container">
        <div className={styles.content}>
          <div className={styles.text}>
            <span className={styles.tag}>Ready to Start?</span>
            <h2 className={styles.title} id="cta-heading">
              {activeTitle}
            </h2>
            <p className={styles.desc}>
              {activeSubtitle}
            </p>
          </div>

          <div className={styles.actions}>
            <Link href="/contact" className="btn btn-white btn-lg" id="cta-contact">
              Start Your Project
            </Link>
            <Link href="/services" className="btn btn-outline-white btn-lg" id="cta-services">
              Explore Services
            </Link>
          </div>

          {/* Trust badges */}
          <div className={styles.badges}>
            {[
              { icon: '✅', text: 'No Hidden Fees' },
              { icon: '⚡', text: 'Fast Delivery' },
              { icon: '🔒', text: '100% Secure' },
              { icon: '🤝', text: 'Dedicated Support' },
            ].map((badge) => (
              <div key={badge.text} className={styles.badge}>
                <span aria-hidden="true">{badge.icon}</span>
                <span>{badge.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
