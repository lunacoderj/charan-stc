import React from 'react';
import { MapPin, Info } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { areas } from '../../data/areas';
import { SectionWrapper } from '../common/SectionWrapper';
import { Card } from '../common/Card';
import styles from './CoverageSection.module.css';

export function CoverageSection() {
  const { t } = useLanguage();

  return (
    <SectionWrapper id="coverage" isDark className={styles.section}>
      <div className="reveal-item">
        <h2 className={styles.title}>{t('coverage', 'title')}</h2>
        <p className={styles.subtitle}>Serving the entire Visakhapatnam region with rapid response fleets.</p>
      </div>

      <div className={styles.grid}>
        {areas.map((area, index) => (
          <div 
            key={area.id} 
            className={`${styles.card} reveal-item`}
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            <div className={styles.cardGlow} style={{ background: area.color }}></div>
            <div className={styles.cardHeader}>
              <div className={styles.iconWrapper} style={{ color: area.color }}>
                <MapPin size={28} />
              </div>
              <div className={styles.headerText}>
                <h3 className={styles.areaName}>{area.name}</h3>
                <p className={styles.areaDesc}>{area.desc}</p>
              </div>
            </div>
            
            <div className={styles.highlightBadge} style={{ color: area.color, borderColor: area.color }}>
              {area.highlight}
            </div>

            <ul className={styles.localityList}>
              {area.localities.map(loc => (
                <li key={loc} className={styles.locality}>{loc}</li>
              ))}
            </ul>
            
            <div className={styles.eta}>
              <span className={styles.etaLabel}>Est. Arrival Time</span>
              <span className={styles.etaValue}>{area.arrivalWindow}</span>
            </div>
          </div>
        ))}
      </div>

      <div className={`${styles.disclaimer} reveal-item`}>
        <Info size={16} />
        <p>{t('coverage', 'disclaimer')}</p>
      </div>
    </SectionWrapper>
  );
}
