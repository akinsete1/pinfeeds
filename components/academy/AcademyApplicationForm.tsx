'use client';

import { useState, FormEvent } from 'react';
import { COURSES } from '@/data/courses';
import styles from './AcademyApplicationForm.module.css';

interface ApplicationFormProps {
  preselectedCourseId?: string;
}

type SubmissionState = 'idle' | 'submitting' | 'success' | 'error';

interface ReceiptData {
  referenceId: string;
  fullName: string;
  email: string;
  courseTitle: string;
  schedule: string;
  studyMode: string;
}

export default function AcademyApplicationForm({ preselectedCourseId }: ApplicationFormProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    courseId: preselectedCourseId || COURSES[0]?.id || '',
    preferredSchedule: 'Weekday Intensive (Mon - Thu)',
    studyMode: 'Hybrid (Lagos Campus & Live Virtual)',
    experienceLevel: 'Complete Beginner (No prior coding knowledge)',
    statement: '',
  });

  const [state, setState] = useState<SubmissionState>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [receipt, setReceipt] = useState<ReceiptData | null>(null);
  const [prevSelectedId, setPrevSelectedId] = useState(preselectedCourseId);

  // Update courseId if preselectedCourseId changes externally (React recommended pattern)
  if (preselectedCourseId && preselectedCourseId !== prevSelectedId) {
    setPrevSelectedId(preselectedCourseId);
    setFormData((prev) => ({ ...prev, courseId: preselectedCourseId }));
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setState('submitting');
    setErrorMessage('');

    try {
      const selectedCourse = COURSES.find((c) => c.id === formData.courseId);

      const res = await fetch('/api/academy/apply', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullName: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          courseId: formData.courseId,
          courseTitle: selectedCourse?.title || formData.courseId,
          preferredSchedule: formData.preferredSchedule,
          studyMode: formData.studyMode,
          experienceLevel: formData.experienceLevel,
          statement: formData.statement,
        }),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.error || 'Failed to submit your application. Please try again.');
      }

      setReceipt({
        referenceId: data.referenceId || `PIN-ACAD-${Math.floor(100000 + Math.random() * 900000)}`,
        fullName: formData.fullName,
        email: formData.email,
        courseTitle: selectedCourse?.title || formData.courseId,
        schedule: formData.preferredSchedule,
        studyMode: formData.studyMode,
      });

      setState('success');
    } catch (err: unknown) {
      console.error('Academy application error:', err);
      setErrorMessage(
        err instanceof Error
          ? err.message
          : 'Unable to submit application at this time. Please email us directly at hello@pinfeeds.org'
      );
      setState('error');
    }
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      courseId: COURSES[0]?.id || '',
      preferredSchedule: 'Weekday Intensive (Mon - Thu)',
      studyMode: 'Hybrid (Lagos Campus & Live Virtual)',
      experienceLevel: 'Complete Beginner (No prior coding knowledge)',
      statement: '',
    });
    setReceipt(null);
    setState('idle');
  };

  if (state === 'success' && receipt) {
    return (
      <div className={styles.formCard} id="apply-form-success">
        <div className={styles.successCard}>
          <div className={styles.successIcon}>✓</div>
          <h3 className={styles.successTitle}>Application Received Successfully!</h3>
          <p className={styles.successMsg}>
            Thank you, <strong>{receipt.fullName}</strong>. Your application details have been submitted to the Pinfeeds admissions desk at <strong>hello@pinfeeds.org</strong>. An admissions advisor will contact you via email and phone within 24 hours with your enrollment package and cohort schedule.
          </p>

          <div className={styles.applicationReceipt}>
            <div className={styles.receiptRow}>
              <span className={styles.receiptLabel}>Application Ref:</span>
              <span className={styles.receiptVal}>{receipt.referenceId}</span>
            </div>
            <div className={styles.receiptRow}>
              <span className={styles.receiptLabel}>Selected Course:</span>
              <span className={styles.receiptVal}>{receipt.courseTitle}</span>
            </div>
            <div className={styles.receiptRow}>
              <span className={styles.receiptLabel}>Preferred Track:</span>
              <span className={styles.receiptVal}>{receipt.schedule}</span>
            </div>
            <div className={styles.receiptRow}>
              <span className={styles.receiptLabel}>Study Mode:</span>
              <span className={styles.receiptVal}>{receipt.studyMode}</span>
            </div>
            <div className={styles.receiptRow}>
              <span className={styles.receiptLabel}>Student Email:</span>
              <span className={styles.receiptVal}>{receipt.email}</span>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a
              href="https://wa.me/2348066893144?text=Hello%20Pinfeeds%20Academy%2C%20I%20just%20submitted%20my%20application!"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Chat with Admissions on WhatsApp
            </a>
            <button type="button" onClick={handleReset} className={styles.resetBtn}>
              Submit Another Application
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.formCard} id="academy-apply-section">
      <div className={styles.formHeader}>
        <span className={styles.formTag}>Online Registration</span>
        <h3 className={styles.formTitle}>Apply for Pinfeeds Academy</h3>
        <p className={styles.formDesc}>
          Take the first step toward launching or advancing your IT career. Fill in your details below and our admissions team will process your application immediately.
        </p>
      </div>

      <form onSubmit={handleSubmit} className={styles.form}>
        {state === 'error' && (
          <div className={styles.errorBanner} role="alert">
            <span>⚠️</span>
            <span>{errorMessage}</span>
          </div>
        )}

        <div className={styles.row}>
          <div className={styles.field}>
            <label htmlFor="acad-fullname" className={styles.label}>
              Full Name <span className={styles.required}>*</span>
            </label>
            <input
              type="text"
              id="acad-fullname"
              name="fullName"
              required
              placeholder="e.g. Adewale Johnson"
              className={styles.input}
              value={formData.fullName}
              onChange={handleChange}
              disabled={state === 'submitting'}
            />
          </div>

          <div className={styles.field}>
            <label htmlFor="acad-email" className={styles.label}>
              Email Address <span className={styles.required}>*</span>
            </label>
            <input
              type="email"
              id="acad-email"
              name="email"
              required
              placeholder="e.g. adewale@gmail.com"
              className={styles.input}
              value={formData.email}
              onChange={handleChange}
              disabled={state === 'submitting'}
            />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.field}>
            <label htmlFor="acad-phone" className={styles.label}>
              Phone / WhatsApp Number <span className={styles.required}>*</span>
            </label>
            <input
              type="tel"
              id="acad-phone"
              name="phone"
              required
              placeholder="e.g. +234 801 234 5678"
              className={styles.input}
              value={formData.phone}
              onChange={handleChange}
              disabled={state === 'submitting'}
            />
            <span className={styles.hint}>Used for cohort group updates and onboarding call.</span>
          </div>

          <div className={styles.field}>
            <label htmlFor="acad-course" className={styles.label}>
              Select Course <span className={styles.required}>*</span>
            </label>
            <select
              id="acad-course"
              name="courseId"
              required
              className={styles.select}
              value={formData.courseId}
              onChange={handleChange}
              disabled={state === 'submitting'}
            >
              {COURSES.map((course) => (
                <option key={course.id} value={course.id}>
                  {course.title} ({course.duration})
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.field}>
            <label htmlFor="acad-schedule" className={styles.label}>
              Preferred Schedule / Cohort
            </label>
            <select
              id="acad-schedule"
              name="preferredSchedule"
              className={styles.select}
              value={formData.preferredSchedule}
              onChange={handleChange}
              disabled={state === 'submitting'}
            >
              <option value="Weekday Intensive (Mon - Thu)">Weekday Intensive (Mon - Thu)</option>
              <option value="Weekend Cohort (Sat - Sun)">Weekend Cohort (Sat - Sun)</option>
              <option value="Weekday Evening (After-Work)">Weekday Evening (After-Work)</option>
              <option value="Self-Paced with Mentor Sessions">Self-Paced with Mentor Sessions</option>
            </select>
          </div>

          <div className={styles.field}>
            <label htmlFor="acad-mode" className={styles.label}>
              Study Mode
            </label>
            <select
              id="acad-mode"
              name="studyMode"
              className={styles.select}
              value={formData.studyMode}
              onChange={handleChange}
              disabled={state === 'submitting'}
            >
              <option value="Hybrid (Lagos Campus & Live Virtual)">Hybrid (Lagos Campus &amp; Live Virtual)</option>
              <option value="100% Live Online (Virtual Classroom)">100% Live Online (Virtual Classroom)</option>
            </select>
          </div>
        </div>

        <div className={styles.field}>
          <label htmlFor="acad-experience" className={styles.label}>
            Current Experience Level
          </label>
          <select
            id="acad-experience"
            name="experienceLevel"
            className={styles.select}
            value={formData.experienceLevel}
            onChange={handleChange}
            disabled={state === 'submitting'}
          >
            <option value="Complete Beginner (No prior coding knowledge)">Complete Beginner (No prior coding knowledge)</option>
            <option value="Beginner (Self-taught basics / YouTube tutorials)">Beginner (Self-taught basics / YouTube tutorials)</option>
            <option value="Intermediate (Some project experience, looking to advance)">Intermediate (Some project experience, looking to advance)</option>
            <option value="Career Switcher (Transitioning from another professional field)">Career Switcher (Transitioning from another professional field)</option>
          </select>
        </div>

        <div className={styles.field}>
          <label htmlFor="acad-statement" className={styles.label}>
            Statement of Intent / Goals (Optional)
          </label>
          <textarea
            id="acad-statement"
            name="statement"
            placeholder="Tell us a little bit about yourself and what you hope to achieve upon completing this course..."
            className={styles.textarea}
            value={formData.statement}
            onChange={handleChange}
            disabled={state === 'submitting'}
          />
        </div>

        <button
          type="submit"
          className={styles.submitBtn}
          disabled={state === 'submitting'}
          id="academy-submit-application-btn"
        >
          {state === 'submitting' ? (
            <>
              <span className={styles.spinner} />
              Processing Your Application...
            </>
          ) : (
            <>
              Submit Application Online
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path d="M4 10h12M12 6l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </>
          )}
        </button>
      </form>
    </div>
  );
}
