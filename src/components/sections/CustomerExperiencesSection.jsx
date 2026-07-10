import React from 'react';
import { Quote } from 'lucide-react';
import { SectionWrapper } from '../common/SectionWrapper';
import { Card } from '../common/Card';
import { experiences } from '../../data/customerExperiences';
import styles from './CustomerExperiencesSection.module.css';

export function CustomerExperiencesSection() {
  return (
    <SectionWrapper id="experiences" className={styles.section}>
      <div className="reveal-item">
        <h2 className={styles.title}>Real Service Scenarios</h2>
        <p className={styles.subtitle}>
          Here is how we handle typical service requests across Visakhapatnam.
        </p>
      </div>

      <div className={styles.grid}>
        {experiences.map((exp, index) => (
          <Card 
            key={exp.id} 
            className={`${styles.card} reveal-item`}
            style={{ transitionDelay: `${index * 150}ms` }}
          >
            <div className={styles.imageWrapper}>
              <img 
                src={exp.image} 
                alt={exp.category} 
                className={styles.image}
                loading="lazy"
              />
              <div className={styles.categoryBadge}>{exp.category}</div>
            </div>
            
            <div className={styles.content}>
              <Quote className={styles.quoteIcon} size={32} />
              <p className={styles.message}>"{exp.message}"</p>
              
              <div className={styles.contextInfo}>
                <span className={styles.contextLabel}>{exp.context}</span>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}
