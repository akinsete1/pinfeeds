'use client';

import { useState, FormEvent } from 'react';
import styles from './contact.module.css';

type FormState = 'idle' | 'sending' | 'success' | 'error';

export default function ContactClient() {
  const [formState, setFormState] = useState<FormState>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [form, setForm] = useState({ name: '', email: '', subject: '', service: '', message: '' });

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
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY || '',
          name: form.name,
          email: form.email,
          subject: form.subject,
          service: form.service,
          message: form.message,
        }),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.message || 'Something went wrong.');
      }

      setFormState('success');
      setForm({ name: '', email: '', subject: '', service: '', message: '' });
    } catch (err: unknown) {
      console.error('Contact form error:', err);
      setErrorMsg(err instanceof Error ? err.message : 'Failed to send message. Please try again.');
      setFormState('error');
    }
  };

  return (
    <div className={styles.formWrapper}>
      <div className={styles.formCard}>
        <h3 className={styles.formTitle}>Send a Message</h3>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formRow}>
            <div className={styles.inputWrapper}>
              <label htmlFor="name">Full Name</label>
              <input type="text" id="name" name="name" required placeholder="John Doe" value={form.name} onChange={handleChange} disabled={formState === 'sending'} />
            </div>
            <div className={styles.inputWrapper}>
              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" name="email" required placeholder="john@example.com" value={form.email} onChange={handleChange} disabled={formState === 'sending'} />
            </div>
          </div>

          <div className={styles.formRow}>
            <div className={styles.inputWrapper}>
              <label htmlFor="subject">Subject</label>
              <input type="text" id="subject" name="subject" required placeholder="Project Inquiry" value={form.subject} onChange={handleChange} disabled={formState === 'sending'} />
            </div>
            <div className={styles.inputWrapper}>
              <label htmlFor="service">Service Needed</label>
              <select id="service" name="service" value={form.service} onChange={handleChange} disabled={formState === 'sending'}>
                <option value="">Select a service</option>
                <option value="Website Development">Website Development</option>
                <option value="Software Development">Software Development</option>
                <option value="Mobile App Development">Mobile App Development</option>
                <option value="Digital Marketing">Digital Marketing</option>
                <option value="AI & Machine Learning">AI &amp; Machine Learning</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>

          <div className={styles.inputWrapper}>
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" required rows={5} placeholder="Tell us about your project..." value={form.message} onChange={handleChange} disabled={formState === 'sending'} />
          </div>

          <button type="submit" className={`btn btn-primary ${styles.submitBtn}`} disabled={formState === 'sending'}>
            {formState === 'sending' ? (
              <><span className={styles.spinner} /> Sending...</>
            ) : (
              'Send Message'
            )}
          </button>

          {formState === 'success' && (
            <div className={styles.successMsg}>
              ✅ Message sent successfully! We&apos;ll get back to you soon.
            </div>
          )}
          {formState === 'error' && (
            <div className={styles.errorMsg}>
              ❌ {errorMsg || 'Failed to send message. Please try again or email us directly.'}
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
