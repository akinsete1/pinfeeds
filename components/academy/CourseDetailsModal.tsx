'use client';

import { useEffect } from 'react';
import type { Course } from '@/data/courses';
import styles from './CourseDetailsModal.module.css';

interface CourseDetailsModalProps {
  course: Course | null;
  isOpen: boolean;
  onClose: () => void;
  onApply: (courseId: string) => void;
}

export default function CourseDetailsModal({
  course,
  isOpen,
  onClose,
  onApply,
}: CourseDetailsModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !course) return null;

  return (
    <div
      className={styles.backdrop}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-course-title"
    >
      <div className={styles.modal}>
        {/* Modal Header */}
        <div className={styles.header}>
          <button
            className={styles.closeBtn}
            onClick={onClose}
            aria-label="Close course details"
          >
            ✕
          </button>

          <div className={styles.metaRow}>
            <span className={styles.categoryBadge}>{course.category}</span>
            <span className={styles.badgeHighlight}>{course.badge}</span>
          </div>

          <h2 id="modal-course-title" className={styles.title}>
            {course.icon} {course.title}
          </h2>
          <p className={styles.subtitle}>{course.subtitle}</p>

          <div className={styles.quickSpecs}>
            <div className={styles.specItem}>
              <div className={styles.specLabel}>Duration</div>
              <div className={styles.specValue}>{course.duration}</div>
            </div>
            <div className={styles.specItem}>
              <div className={styles.specLabel}>Skill Level</div>
              <div className={styles.specValue}>{course.level}</div>
            </div>
            <div className={styles.specItem}>
              <div className={styles.specLabel}>Format</div>
              <div className={styles.specValue}>{course.mode}</div>
            </div>
            <div className={styles.specItem}>
              <div className={styles.specLabel}>Schedule</div>
              <div className={styles.specValue}>{course.schedule}</div>
            </div>
          </div>
        </div>

        {/* Modal Body */}
        <div className={styles.body}>
          {/* Detailed Overview */}
          <div className={styles.sectionBlock}>
            <h3 className={styles.sectionHeading}>
              <span className={styles.sectionHeadingIcon}>📖</span>
              Course Overview
            </h3>
            <p className={styles.overviewText}>{course.overview}</p>
          </div>

          {/* Syllabus Breakdown */}
          <div className={styles.sectionBlock}>
            <h3 className={styles.sectionHeading}>
              <span className={styles.sectionHeadingIcon}>📚</span>
              Curriculum &amp; Module Breakdown
            </h3>
            <div className={styles.modulesGrid}>
              {course.modules.map((m) => (
                <div key={m.number} className={styles.moduleCard}>
                  <div className={styles.moduleHeader}>
                    <div className={styles.moduleTitleRow}>
                      <span className={styles.moduleNum}>Module {m.number}</span>
                      <h4 className={styles.moduleTitle}>{m.title}</h4>
                    </div>
                    <span className={styles.moduleDuration}>{m.duration}</span>
                  </div>
                  <p className={styles.moduleDesc}>{m.description}</p>
                  <ul className={styles.topicList}>
                    {m.topics.map((topic, i) => (
                      <li key={i} className={styles.topicItem}>
                        <span className={styles.topicDot} aria-hidden="true">▸</span>
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Tools & Technologies */}
          <div className={styles.sectionBlock}>
            <h3 className={styles.sectionHeading}>
              <span className={styles.sectionHeadingIcon}>⚡</span>
              Tools &amp; Technologies You Will Master
            </h3>
            <div className={styles.pillGroup}>
              {course.tools.map((tool) => (
                <span key={tool} className={styles.toolPill}>
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Core Skills Acquired */}
          <div className={styles.sectionBlock}>
            <h3 className={styles.sectionHeading}>
              <span className={styles.sectionHeadingIcon}>🎯</span>
              Core Competencies Acquired
            </h3>
            <div className={styles.pillGroup}>
              {course.skills.map((skill) => (
                <span key={skill} className={styles.skillPill}>
                  ✓ {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Capstone Project */}
          <div className={styles.sectionBlock}>
            <h3 className={styles.sectionHeading}>
              <span className={styles.sectionHeadingIcon}>🏆</span>
              Real-World Capstone Project
            </h3>
            <div className={styles.capstoneCard}>
              <h4 className={styles.capstoneTitle}>{course.capstoneProject.title}</h4>
              <p className={styles.capstoneDesc}>{course.capstoneProject.description}</p>
            </div>
          </div>

          {/* Target Career Roles */}
          <div className={styles.sectionBlock}>
            <h3 className={styles.sectionHeading}>
              <span className={styles.sectionHeadingIcon}>💼</span>
              Career Roles You Can Apply For
            </h3>
            <div className={styles.pillGroup}>
              {course.careerRoles.map((role) => (
                <span key={role} className={styles.rolePill}>
                  {role}
                </span>
              ))}
            </div>
          </div>

          {/* Prerequisites & Certification */}
          <div className={styles.sectionBlock}>
            <h3 className={styles.sectionHeading}>
              <span className={styles.sectionHeadingIcon}>🎓</span>
              Certification &amp; Prerequisites
            </h3>
            <div style={{ display: 'grid', gap: '12px' }}>
              <p className={styles.overviewText}>
                <strong>Prerequisites:</strong> {course.prerequisites}
              </p>
              <p className={styles.overviewText}>
                <strong>Certificate:</strong> {course.certification}
              </p>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className={styles.footer}>
          <div className={styles.tuitionBox}>
            <span className={styles.tuitionAmount}>{course.tuition}</span>
            <span className={styles.tuitionNote}>{course.tuitionInstallment}</span>
          </div>

          <div className={styles.footerActions}>
            <button
              type="button"
              className={styles.cancelBtn}
              onClick={onClose}
            >
              Close
            </button>
            <button
              type="button"
              className={styles.applyBtn}
              onClick={() => {
                onClose();
                onApply(course.id);
              }}
            >
              Apply for This Course
              <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path d="M4 10h12M12 6l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
