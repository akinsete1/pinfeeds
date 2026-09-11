'use client';

import { useState } from 'react';
import { COURSES, Course } from '@/data/courses';
import CourseDetailsModal from '@/components/academy/CourseDetailsModal';
import AcademyApplicationForm from '@/components/academy/AcademyApplicationForm';
import styles from '@/app/academy/academy.module.css';

const CATEGORIES = [
  { label: 'All Courses', slug: 'all' },
  { label: 'Software Engineering', slug: 'software-engineering' },
  { label: 'Design & UX', slug: 'design-ux' },
  { label: 'Data & AI', slug: 'data-ai' },
  { label: 'Cloud & Security', slug: 'cloud-security' },
  { label: 'IT & Growth', slug: 'it-growth' },
];

const FAQS = [
  {
    q: 'Do I need prior coding or technical experience to enroll?',
    a: 'No prior experience is necessary for our beginner tracks such as Full-Stack Web Development, UI/UX Design, or IT Support. Our curriculum is specifically structured to start with foundational concepts before progressing into advanced production engineering. Intermediate tracks note their prerequisites clearly.',
  },
  {
    q: 'Can I pay the tuition in installments?',
    a: 'Yes, absolutely! We offer flexible installment plans (2 to 3 split installments across the duration of the program) to ensure financial accessibility for all prospective students. Detailed breakdown is provided in your enrollment package.',
  },
  {
    q: 'Are classes held online or in person?',
    a: 'We offer both! You can choose between 100% Live Virtual Classroom sessions (with live screen-sharing, coding labs, and mentor hours) or Hybrid Learning at our Lagos Tech Hub in Ogba, Lagos.',
  },
  {
    q: 'Will I receive a recognized certificate upon completion?',
    a: 'Yes! Upon successful defense of your real-world capstone project and completion of all course labs, you will receive an official Pinfeeds Academy Certificate of Professional Competence and a verified digital credential for your LinkedIn and CV.',
  },
  {
    q: 'Does Pinfeeds Academy assist with jobs or internships?',
    a: 'Yes. Every student receives comprehensive career coaching, resume and GitHub/Figma portfolio reviews, mock technical interview sessions, and top performers are recommended for in-house agency internships or matched with partner technology companies in Nigeria and abroad.',
  },
  {
    q: 'What are the hardware and laptop requirements?',
    a: 'You will need a functional laptop (Windows, Mac, or Linux) with at least 8GB RAM (16GB recommended for Mobile Dev / Data Science) and a reliable internet connection for live sessions and collaborative repository access.',
  },
];

export default function AcademyClientView() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedCourseForModal, setSelectedCourseForModal] = useState<Course | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [preselectedCourseId, setPreselectedCourseId] = useState<string>(COURSES[0]?.id || '');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const filteredCourses =
    activeCategory === 'all'
      ? COURSES
      : COURSES.filter((c) => c.categorySlug === activeCategory);

  const handleOpenModal = (course: Course) => {
    setSelectedCourseForModal(course);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleApplyClick = (courseId: string) => {
    setPreselectedCourseId(courseId);
    // Smooth scroll down to the application form
    const formElement = document.getElementById('academy-apply-section');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const toggleFaq = (idx: number) => {
    setOpenFaqIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <>
      {/* Category Filter Bar */}
      <section className={styles.filterSection} id="courses-catalog">
        <div className="container">
          <div className={styles.filterScroll} role="tablist" aria-label="Course categories">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.slug}
                role="tab"
                aria-selected={activeCategory === cat.slug}
                className={`${styles.filterBtn} ${activeCategory === cat.slug ? styles.filterBtnActive : ''}`}
                onClick={() => setActiveCategory(cat.slug)}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Catalog Grid */}
      <section className={styles.catalogSection}>
        <div className="container">
          <div className="section-heading">
            <span className="section-tag">Industry-Aligned Curriculums</span>
            <h2 className="section-title">
              Explore Our <span>Professional IT Courses</span>
            </h2>
            <p className="section-desc">
              Each course is designed with hands-on projects, real-world case studies, and personalized mentor feedback to ensure you build in-demand industry competencies.
            </p>
          </div>

          <div className={styles.courseGrid}>
            {filteredCourses.map((course) => (
              <article key={course.id} className={styles.courseCard} id={`course-${course.id}`}>
                <div className={styles.cardGlowTop} />

                <div className={styles.cardHeader}>
                  <div className={styles.cardBadges}>
                    <span className={styles.categoryTag}>{course.category}</span>
                    <span className={styles.popularBadge}>{course.badge}</span>
                  </div>
                  <span className={styles.durationPill}>⏱️ {course.duration}</span>
                </div>

                <h3 className={styles.cardTitle}>
                  <span>{course.icon}</span> {course.title}
                </h3>
                <p className={styles.cardSubtitle}>{course.subtitle}</p>

                <div className={styles.cardSpecs}>
                  <div className={styles.cardSpec}>
                    <strong>Format</strong>
                    <span>{course.mode}</span>
                  </div>
                  <div className={styles.cardSpec}>
                    <strong>Level</strong>
                    <span>{course.level}</span>
                  </div>
                </div>

                {/* Modules preview */}
                <span className={styles.masterLabel}>What You Will Master:</span>
                <ul className={styles.modulesList}>
                  {course.modules.slice(0, 3).map((m) => (
                    <li key={m.number} className={styles.moduleItem}>
                      <span className={styles.moduleDot}>▸</span>
                      <span><strong>Module {m.number}:</strong> {m.title}</span>
                    </li>
                  ))}
                  {course.modules.length > 3 && (
                    <li className={styles.moduleItem} style={{ color: 'var(--primary-light)', fontSize: '0.8125rem' }}>
                      + {course.modules.length - 3} more modules &amp; Capstone Project
                    </li>
                  )}
                </ul>

                {/* Tools */}
                <div className={styles.toolsRow}>
                  {course.tools.slice(0, 5).map((tool) => (
                    <span key={tool} className={styles.toolTag}>
                      {tool}
                    </span>
                  ))}
                  {course.tools.length > 5 && (
                    <span className={styles.toolTag} style={{ color: 'var(--primary-light)' }}>
                      +{course.tools.length - 5}
                    </span>
                  )}
                </div>

                <div className={styles.cardFooter}>
                  <div>
                    <span className={styles.cardTuition}>{course.tuition}</span>
                    <span className={styles.cardTuitionNote}>{course.tuitionInstallment}</span>
                  </div>

                  <div className={styles.cardActions}>
                    <button
                      type="button"
                      className={styles.readSyllabusBtn}
                      onClick={() => handleOpenModal(course)}
                      aria-label={`Read full syllabus for ${course.title}`}
                    >
                      Read Full Syllabus
                    </button>
                    <button
                      type="button"
                      className={styles.applyNowBtn}
                      onClick={() => handleApplyClick(course.id)}
                      aria-label={`Apply for ${course.title}`}
                    >
                      Apply Now
                      <span aria-hidden="true">→</span>
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Pinfeeds Academy */}
      <section className={styles.whySection}>
        <div className="container">
          <div className="section-heading">
            <span className="section-tag">The Pinfeeds Advantage</span>
            <h2 className="section-title">
              Why Learn Tech at <span>Pinfeeds Academy?</span>
            </h2>
            <p className="section-desc">
              We are an active software and digital agency with 8+ years building enterprise solutions. You don&apos;t just learn theory; you train with production-level standards.
            </p>
          </div>

          <div className={styles.featuresGrid}>
            <div className={styles.featureCard}>
              <div className={styles.featureIconBox}>🚀</div>
              <h3 className={styles.featureTitle}>100% Practical Labs</h3>
              <p className={styles.featureDesc}>
                Learn by building actual software applications, websites, and design systems from Day 1 rather than passive video lectures.
              </p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureIconBox}>👨‍🏫</div>
              <h3 className={styles.featureTitle}>Senior Industry Mentors</h3>
              <p className={styles.featureDesc}>
                Receive weekly 1-on-1 code reviews, design critiques, and architecture advice directly from experienced senior software engineers.
              </p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureIconBox}>💼</div>
              <h3 className={styles.featureTitle}>Verified Portfolio</h3>
              <p className={styles.featureDesc}>
                Graduate with 3+ live production-grade projects deployed to GitHub and live servers, giving you tangible proof of competence for employers.
              </p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureIconBox}>🤝</div>
              <h3 className={styles.featureTitle}>Internship &amp; Job Prep</h3>
              <p className={styles.featureDesc}>
                Top students are evaluated for paid agency internships at Pinfeeds or connected directly with partner hiring managers across Africa and remote hubs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section className={styles.roadmapSection}>
        <div className="container">
          <div className="section-heading">
            <span className="section-tag">Learning Journey</span>
            <h2 className="section-title">
              Your 4-Step Path to a <span>High-Income Tech Career</span>
            </h2>
          </div>

          <div className={styles.roadmapGrid}>
            <div className={styles.roadmapStep}>
              <div className={styles.stepNumber}>01</div>
              <h3 className={styles.stepTitle}>Enroll &amp; Onboarding</h3>
              <p className={styles.stepDesc}>
                Select your track, complete registration, configure your developer workstation, and join your cohort community channel on Discord &amp; WhatsApp.
              </p>
            </div>

            <div className={styles.roadmapStep}>
              <div className={styles.stepNumber}>02</div>
              <h3 className={styles.stepTitle}>Interactive Masterclasses</h3>
              <p className={styles.stepDesc}>
                Attend live instructor-led coding sessions, complete weekly homework challenges, and collaborate with peers in sprint-based team assignments.
              </p>
            </div>

            <div className={styles.roadmapStep}>
              <div className={styles.stepNumber}>03</div>
              <h3 className={styles.stepTitle}>Capstone Defense</h3>
              <p className={styles.stepDesc}>
                Architect and build an original capstone project from scratch. Defend your code and architecture in a simulated professional tech review.
              </p>
            </div>

            <div className={styles.roadmapStep}>
              <div className={styles.stepNumber}>04</div>
              <h3 className={styles.stepTitle}>Graduation &amp; Placement</h3>
              <p className={styles.stepDesc}>
                Receive your certified credential, complete mock technical interviews, optimize your CV/LinkedIn, and access exclusive internship opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Online Application Section */}
      <section className={styles.applicationSection}>
        <div className="container">
          <div className="section-heading">
            <span className="section-tag">Fast-Track Registration</span>
            <h2 className="section-title">
              Ready to Begin? <span>Apply Online Today</span>
            </h2>
            <p className="section-desc">
              Seats are limited per cohort to guarantee personalized mentor attention. Submit your application below to secure your spot.
            </p>
          </div>

          <div style={{ maxWidth: '820px', margin: '0 auto' }}>
            <AcademyApplicationForm preselectedCourseId={preselectedCourseId} />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className={styles.faqSection}>
        <div className="container">
          <div className="section-heading">
            <span className="section-tag">Got Questions?</span>
            <h2 className="section-title">
              Frequently Asked <span>Questions</span>
            </h2>
          </div>

          <div className={styles.faqGrid}>
            {FAQS.map((faq, idx) => (
              <div key={faq.q} className={styles.faqItem}>
                <button
                  type="button"
                  className={styles.faqQuestion}
                  onClick={() => toggleFaq(idx)}
                  aria-expanded={openFaqIndex === idx}
                >
                  <span>{faq.q}</span>
                  <span
                    className={`${styles.faqArrow} ${openFaqIndex === idx ? styles.faqArrowOpen : ''}`}
                    aria-hidden="true"
                  >
                    ▾
                  </span>
                </button>
                {openFaqIndex === idx && (
                  <div className={styles.faqAnswer}>
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Course Details Modal */}
      <CourseDetailsModal
        course={selectedCourseForModal}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onApply={(courseId) => handleApplyClick(courseId)}
      />
    </>
  );
}
