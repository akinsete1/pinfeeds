'use client';

import { useState } from 'react';
import styles from './FaqSection.module.css';

interface FaqItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

function FaqItem({ question, answer, isOpen, onToggle }: FaqItemProps) {
  return (
    <div className={`${styles.item} ${isOpen ? styles.open : ''}`}>
      <button 
        className={styles.questionBtn} 
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span>{question}</span>
        <div className={styles.icon} aria-hidden="true" />
      </button>
      <div className={`${styles.answerWrapper} ${isOpen ? styles.open : ''}`}>
        <div className={styles.answerInner}>
          <p>{answer}</p>
        </div>
      </div>
    </div>
  );
}

interface FaqSectionProps {
  faqs?: { question: string; answer: string }[];
}

export default function FaqSection({ faqs }: FaqSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  if (!faqs || faqs.length === 0) return null;

  return (
    <section className={`section ${styles.faq}`}>
      <div className="container">
        <div className={styles.heading}>
          <span className={styles.tag}>FAQs</span>
          <h2 className={styles.title}>
            Frequently Asked <span>Questions</span>
          </h2>
          <p className={styles.desc}>
            Everything you need to know about our services and how we work.
          </p>
        </div>

        <div className={styles.accordion}>
          {faqs.map((faq, index) => (
            <FaqItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
