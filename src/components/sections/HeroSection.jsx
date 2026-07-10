import React, { useState } from 'react';
import { Phone, MessageSquare, MapPin } from 'lucide-react';
import { BUSINESS } from '../../config/business';
import { buildWhatsAppLink } from '../../utils/whatsapp';
import { useLanguage } from '../../context/LanguageContext';
import { CTAButton } from '../common/CTAButton';
import { Card } from '../common/Card';
import styles from './HeroSection.module.css';
import { areas } from '../../data/areas';
import { services } from '../../data/services';

export function HeroSection() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({ area: '', service: '' });

  const handleQuickBook = (e) => {
    e.preventDefault();
    const link = buildWhatsAppLink('quick_book', formData);
    window.open(link, '_blank');
  };

  return (
    <section className={styles.hero}>
      <div className={styles.background}>
        <img 
          src="/images/gallary/hero_background.png" 
          alt="Charan Septic Cleaning Background" 
          className={styles.bgImage}
        />
        <div className={styles.overlay}></div>
      </div>

      <div className={`container ${styles.container}`}>
        
        {/* Main Content */}
        <div className={styles.content}>
          <div className={styles.badges}>
            <span className={styles.badge}>{t('hero', 'since')}</span>
            <span className={styles.badge}>{t('hero', 'res_com')}</span>
          </div>
          
          <h1 className={styles.title}>
            {t('hero', 'headline')}
          </h1>
          
          <p className={styles.subtitle}>
            {t('hero', 'subline')}
          </p>
          
          <div className={styles.actions}>
            <CTAButton 
              variant="primary" 
              href={`tel:${BUSINESS.phone}`}
              className={styles.mainAction}
            >
              <Phone size={20} />
              {t('hero', 'call')} {BUSINESS.phone}
            </CTAButton>
            
            <CTAButton 
              variant="whatsapp" 
              href={buildWhatsAppLink('general')}
              target="_blank"
              className={styles.secondaryAction}
            >
              <MessageSquare size={20} />
              {t('hero', 'whatsapp')}
            </CTAButton>
          </div>
          
          <div className={styles.trustArea}>
            <MapPin size={18} className={styles.trustIcon} />
            <span>{t('hero', 'vizag')}</span>
          </div>
        </div>

        {/* Quick Booking Form Card */}
        <div className={styles.formWrapper}>
          <Card className={styles.quickFormCard}>
            <h3 className={styles.formTitle}>{t('hero', 'quick_form_title')}</h3>
            
            <form onSubmit={handleQuickBook} className={styles.form}>
              <div className={styles.inputGroup}>
                <label htmlFor="hero-area" className="visually-hidden">Area</label>
                <select 
                  id="hero-area"
                  value={formData.area}
                  onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                  required
                  className={styles.select}
                >
                  <option value="" disabled>{t('hero', 'quick_form_area')}</option>
                  {areas.map(zone => (
                    <optgroup key={zone.id} label={zone.name}>
                      {zone.localities.map(loc => (
                        <option key={loc} value={loc}>{loc}</option>
                      ))}
                    </optgroup>
                  ))}
                </select>
              </div>

              <div className={styles.inputGroup}>
                <label htmlFor="hero-service" className="visually-hidden">Service</label>
                <select 
                  id="hero-service"
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  required
                  className={styles.select}
                >
                  <option value="" disabled>{t('hero', 'quick_form_service')}</option>
                  {services.map(s => (
                    <option key={s.id} value={s.id}>{s.title}</option>
                  ))}
                </select>
              </div>

              <CTAButton 
                type="submit" 
                variant="whatsapp" 
                className={styles.submitBtn}
              >
                {t('hero', 'quick_form_submit')}
              </CTAButton>
            </form>
          </Card>
        </div>

      </div>
    </section>
  );
}
