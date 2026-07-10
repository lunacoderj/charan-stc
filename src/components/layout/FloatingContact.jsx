import React, { useState, useEffect } from 'react';
import { Phone, MessageSquare } from 'lucide-react';
import { BUSINESS } from '../../config/business';
import { buildWhatsAppLink } from '../../utils/whatsapp';
import { useLanguage } from '../../context/LanguageContext';
import styles from './FloatingContact.module.css';

export function FloatingContact() {
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      // Show after hero section (roughly 500px)
      setIsVisible(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const whatsappLink = buildWhatsAppLink('general');

  return (
    <div className={`${styles.floatingBar} ${isVisible ? styles.visible : ''}`}>
      <a href={`tel:${BUSINESS.phone}`} className={styles.callBtn}>
        <Phone size={20} />
        <span>{t('common', 'call')}</span>
      </a>
      <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className={styles.whatsappBtn}>
        <MessageSquare size={20} />
        <span>{t('common', 'whatsapp')}</span>
      </a>
    </div>
  );
}
