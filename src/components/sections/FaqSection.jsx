import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { SectionWrapper } from '../common/SectionWrapper';
import { faq } from '../../data/faq';
import styles from './FaqSection.module.css';

export function FaqSection() {
  const [openId, setOpenId] = useState(faq[0]?.id || null);

  const toggleFaq = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <SectionWrapper id="faq" className={styles.section}>
      <div className="reveal-item">
        <h2 className={styles.title}>Frequently Asked Questions</h2>
        <p className={styles.subtitle}>
          Clear answers to common questions about our septic cleaning process.
        </p>
      </div>

      <div className={styles.faqList}>
        {faq.map((item, index) => (
          <div 
            key={item.id} 
            className={`${styles.faqItem} ${openId === item.id ? styles.open : ''} reveal-item`}
            style={{ transitionDelay: `${index * 50}ms` }}
          >
            <button 
              className={styles.questionBtn} 
              onClick={() => toggleFaq(item.id)}
              aria-expanded={openId === item.id}
            >
              <span className={styles.questionText}>{item.question}</span>
              <ChevronDown className={styles.icon} size={20} />
            </button>
            
            <div className={styles.answerWrapper}>
              <div className={styles.answerContent}>
                <p>{item.answer}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
