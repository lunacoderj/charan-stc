import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { SectionWrapper } from '../common/SectionWrapper';
import styles from './HomeAboutSection.module.css';

export function HomeAboutSection() {
  return (
    <SectionWrapper id="home-about" isDark={false} className={styles.section}>
      <div className={styles.container}>
        <div className={`reveal-item ${styles.imageSide}`}>
          <div className={styles.imageCard}>
            <img 
              src="/images/gallary/promo.png" 
              alt="Charan Septic Cleaning Promo" 
              className={styles.promoImage}
            />
            <div className={styles.experienceBadge}>
              <span className={styles.years}>5+</span>
              <span className={styles.text}>Years of<br/>Trust</span>
            </div>
          </div>
        </div>

        <div className={`reveal-item ${styles.contentSide}`}>
          <h2 className={styles.title}>Visakhapatnam's Most Trusted Septic Cleaning Experts</h2>
          <p className={styles.description}>
            We provide fast, reliable, and professional septic tank cleaning services for residential and commercial properties. Our expert team ensures your property remains clean, safe, and environmentally compliant.
          </p>
          
          <ul className={styles.features}>
            <li><CheckCircle2 className={styles.icon} size={20} /> Advanced Vacuum Tech</li>
            <li><CheckCircle2 className={styles.icon} size={20} /> Odorless & Clean Process</li>
            <li><CheckCircle2 className={styles.icon} size={20} /> 100% Satisfaction Guarantee</li>
          </ul>

          <Link to="/about" className={styles.learnMoreBtn}>
            Discover Our Story <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </SectionWrapper>
  );
}
