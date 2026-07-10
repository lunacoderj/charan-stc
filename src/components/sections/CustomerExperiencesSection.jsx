import React from 'react';
import { Quote, Star } from 'lucide-react';
import { SectionWrapper } from '../common/SectionWrapper';
import { Card } from '../common/Card';
import { experiences } from '../../data/customerExperiences';
import styles from './CustomerExperiencesSection.module.css';

export function CustomerExperiencesSection() {
  return (
    <SectionWrapper id="experiences" className={styles.section}>
      <div className="reveal-item">
        <h2 className={styles.title}>What Our Customers Say</h2>
        <p className={styles.subtitle}>
          Read genuine reviews from satisfied customers across Visakhapatnam.
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
              
              <div className={styles.rating}>
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={16} 
                    className={i < exp.rating ? styles.starFilled : styles.starEmpty} 
                    fill={i < exp.rating ? "currentColor" : "none"}
                  />
                ))}
              </div>

              <p className={styles.message}>"{exp.message}"</p>
              
              <div className={styles.authorInfo}>
                <div className={styles.authorName}>{exp.name}</div>
                <div className={styles.contextInfo}>
                  <span className={styles.contextLabel}>{exp.context}</span>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}
