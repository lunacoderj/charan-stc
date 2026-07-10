import React from 'react';
import { Shield, Clock, ThumbsUp } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { services } from '../../data/services';
import { SectionWrapper } from '../common/SectionWrapper';
import { Card } from '../common/Card';
import { CTAButton } from '../common/CTAButton';
import { BUSINESS } from '../../config/business';
import { buildWhatsAppLink } from '../../utils/whatsapp';
import styles from './ServicesSection.module.css';
import { useNavigate } from 'react-router-dom';

export function ServicesSection() {
  const { t } = useLanguage();
  const navigate = useNavigate();

  return (
    <SectionWrapper id="services" className={styles.section}>
      <div className="reveal-item">
        <h2 className={styles.title}>{t('services', 'title')}</h2>
      </div>

      <div className={styles.grid}>
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <Card key={service.id} className={`${styles.card} reveal-item`} style={{ transitionDelay: `${index * 100}ms` }}>
              <div className={styles.imageWrapper}>
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className={styles.image}
                  loading="lazy"
                />
              </div>
              <div className={styles.iconWrapper}>
                <Icon size={24} />
              </div>
              
              <div className={styles.content}>
                <h3 className={styles.serviceTitle}>{service.title}</h3>
                <p className={styles.serviceDesc}>{service.description}</p>
                
                <div className={styles.actions}>
                  <CTAButton 
                    variant="outline" 
                    onClick={() => navigate(`/services/${service.id}`)}
                    className={styles.actionBtn}
                  >
                    Learn More
                  </CTAButton>
                  <CTAButton 
                    variant="whatsapp" 
                    href={buildWhatsAppLink('service', { service: service.title })}
                    target="_blank"
                    className={styles.actionBtn}
                  >
                    WhatsApp
                  </CTAButton>
                </div>
              </div>
            </Card>
          );
        })}
      </div>

      {/* Trust Indicators */}
      <div className={`${styles.trustIndicators} reveal-item`}>
        <div className={styles.trustItem}>
          <Shield className={styles.trustIcon} />
          <span>Professional Service</span>
        </div>
        <div className={styles.trustItem}>
          <Clock className={styles.trustIcon} />
          <span>Fast Response</span>
        </div>
        <div className={styles.trustItem}>
          <ThumbsUp className={styles.trustIcon} />
          <span>Satisfaction Assured</span>
        </div>
      </div>
    </SectionWrapper>
  );
}
