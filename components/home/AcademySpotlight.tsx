import Link from 'next/link';
import { COURSES } from '@/data/courses';
import styles from './AcademySpotlight.module.css';

export default function AcademySpotlight() {
  const featuredCourses = COURSES.slice(0, 3);

  return (
    <section className={styles.section} id="academy-spotlight" aria-labelledby="academy-spotlight-heading">
      <div className={styles.glow} aria-hidden="true" />
      <div className={styles.glow2} aria-hidden="true" />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="section-heading">
          <span className="section-tag" style={{ background: 'rgba(0, 212, 255, 0.1)', color: 'var(--accent)', borderColor: 'rgba(0, 212, 255, 0.3)' }}>
            Pinfeeds IT Academy
          </span>
          <h2 className="section-title" id="academy-spotlight-heading" style={{ color: 'var(--white)' }}>
            Launch Your High-Income Tech Career with{' '}
            <span style={{ background: 'linear-gradient(135deg, #00d4ff 0%, #38bdf8 50%, #818cf8 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Practical Training
            </span>
          </h2>
          <p className="section-desc" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
            We bridge the gap between classroom theory and real-world tech industry demands. Learn Full-Stack Engineering, UI/UX, AI, and Cloud from active engineers at Pinfeeds.
          </p>
        </div>

        {/* Featured 3 courses */}
        <div className={styles.grid}>
          {featuredCourses.map((course) => (
            <div key={course.id} className={styles.card}>
              <div className={styles.cardTop}>
                <span className={styles.categoryTag}>{course.category}</span>
                <span className={styles.durationPill}>⏱️ {course.duration}</span>
              </div>

              <h3 className={styles.cardTitle}>
                {course.icon} {course.title}
              </h3>
              <p className={styles.cardDesc}>{course.subtitle}</p>

              <div className={styles.skillsList}>
                {course.tools.slice(0, 4).map((tool) => (
                  <span key={tool} className={styles.skillPill}>
                    {tool}
                  </span>
                ))}
              </div>

              <div className={styles.cardBottom}>
                <span className={styles.tuition}>{course.tuition}</span>
                <Link href={`/academy#course-${course.id}`} className={styles.learnMoreLink}>
                  View Details &amp; Apply
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Action Banner */}
        <div className={styles.banner}>
          <div className={styles.bannerText}>
            <h3>Ready to become a certified tech professional?</h3>
            <p>
              Flexible weekday and weekend cohorts available. 100% practical curriculum, capstone portfolio defense, and personalized mentorship.
            </p>
          </div>
          <div className={styles.bannerActions}>
            <Link href="/academy" className="btn btn-primary btn-lg" id="academy-spotlight-explore">
              Explore All Courses
              <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path d="M4 10h12M12 6l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
            <Link href="/academy#academy-apply-section" className="btn btn-outline-white btn-lg" id="academy-spotlight-apply">
              Apply for Admission
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
