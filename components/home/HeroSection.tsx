'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import styles from './HeroSection.module.css';



export default function HeroSection({ phrases }: { phrases: string[] }) {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [countersVisible, setCountersVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Fallback to hardcoded if empty
  const activePhrases = phrases?.length > 0 ? phrases : ['IT Solutions'];

  // Typewriter effect
  useEffect(() => {
    const phrase = activePhrases[phraseIndex % activePhrases.length];
    let timer: NodeJS.Timeout;

    if (!isDeleting) {
      if (displayText.length < phrase.length) {
        timer = setTimeout(() => setDisplayText(phrase.slice(0, displayText.length + 1)), 80);
      } else {
        timer = setTimeout(() => setIsDeleting(true), 2000);
      }
    } else {
      if (displayText.length > 0) {
        timer = setTimeout(() => setDisplayText(displayText.slice(0, -1)), 45);
      } else {
        setIsDeleting(false);
        setPhraseIndex((prev) => (prev + 1) % activePhrases.length);
      }
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, phraseIndex]);

  // Counter animation trigger
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setCountersVisible(true); },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const stats = [
    { value: 150, suffix: '+', label: 'Projects Delivered' },
    { value: 8, suffix: '+', label: 'Years Experience' },
    { value: 98, suffix: '%', label: 'Client Satisfaction' },
    { value: 50, suffix: '+', label: 'Happy Clients' },
  ];

  return (
    <section className={styles.hero} ref={sectionRef} aria-label="Hero section">
      {/* Background Elements */}
      <div className={styles.bg}>
        <div className={styles.bgGlow1} />
        <div className={styles.bgGlow2} />
        <div className={styles.bgGrid} />
      </div>

      {/* Floating Code Elements */}
      <div className={styles.floatingElements} aria-hidden="true">
        {[
          { label: '</>', top: '20%', left: '5%', delay: '0s' },
          { label: '{ }', top: '60%', left: '2%', delay: '1s' },
          { label: '#', top: '30%', right: '4%', delay: '0.5s' },
          { label: '[]', top: '70%', right: '6%', delay: '1.5s' },
          { label: '( )', top: '80%', left: '12%', delay: '2s' },
          { label: '=>', top: '15%', right: '15%', delay: '0.7s' },
        ].map((el, i) => (
          <div
            key={i}
            className={styles.floatingEl}
            style={{
              top: el.top,
              left: (el as any).left,
              right: (el as any).right,
              animationDelay: el.delay,
            }}
          >
            {el.label}
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="container">
        <div className={styles.content}>
          <div className={styles.tag} aria-label="Company tagline">
            <span className={styles.tagDot} />
            Pinfeeds Digital Agency Limited
          </div>

          <h1 className={styles.headline}>
            Premium{' '}
            <span className={styles.typed} aria-live="polite">
              {displayText}
              <span className={styles.cursor} aria-hidden="true">|</span>
            </span>
            <br />
            <span className={styles.subHeadline}>for Your Business</span>
          </h1>

          <p className={styles.description}>
            We are a premier IT solutions company with 8+ years of experience empowering
            businesses with cutting-edge digital solutions. Trusted by 50+ clients across Africa and beyond.
          </p>

          <div className={styles.actions}>
            <Link href="/contact" className="btn btn-primary btn-lg" id="hero-cta-primary">
              Start Your Project
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path d="M4 10h12M12 6l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
            <Link href="/portfolio" className="btn btn-outline-white btn-lg" id="hero-cta-secondary">
              View Our Work
            </Link>
          </div>

          {/* Trusted Strip */}
          <div className={styles.trusted}>
            <div className={styles.trustedAvatars} aria-hidden="true">
              {['#0095eb', '#7c3aed', '#059669', '#dc2626', '#d97706'].map((color, i) => (
                <div key={i} className={styles.avatar} style={{ background: color, zIndex: 5 - i }} />
              ))}
            </div>
            <span className={styles.trustedText}>
              Trusted by <strong>50+ businesses</strong> across Nigeria & Africa
            </span>
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className={styles.statsBar}>
        <div className="container">
          <div className={styles.statsGrid}>
            {stats.map((stat, i) => (
              <div key={stat.label} className={styles.stat}>
                <div className={styles.statValue}>
                  {countersVisible ? (
                    <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                  ) : (
                    <span>0{stat.suffix}</span>
                  )}
                </div>
                <div className={styles.statLabel}>{stat.label}</div>
                {i < stats.length - 1 && <div className={styles.statDivider} />}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function AnimatedCounter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const step = target / (duration / 16);
    let current = 0;

    const timer = setInterval(() => {
      current = Math.min(current + step, target);
      setCount(Math.floor(current));
      if (current >= target) clearInterval(timer);
    }, 16);

    return () => clearInterval(timer);
  }, [target]);

  return <span>{count}{suffix}</span>;
}
