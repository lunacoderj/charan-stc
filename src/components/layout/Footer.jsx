import React from 'react';
import { Phone, MapPin, Clock } from 'lucide-react';
import { BUSINESS } from '../../config/business';
import { useLanguage } from '../../context/LanguageContext';
import styles from './Footer.module.css';

export function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.gridOverlay}></div>
      
      <div className={`container ${styles.container}`}>
        
        <div className={styles.ctaWrapper}>
          <h2 className={styles.ctaTitle}>Ready for Professional Service?</h2>
          <p className={styles.ctaSubtitle}>Experience the fastest and most reliable septic cleaning in Visakhapatnam.</p>
          <div className={styles.ctaLine}></div>
        </div>
        
        <div className={styles.contentGrid}>
          <div className={styles.brand}>
          <img src="/logo.png" alt="Charan Septic Cleaning" width="200" height="60" className={styles.logo} />
          <p className={styles.description}>
            Professional, reliable, and fast septic tank cleaning services across Visakhapatnam. Available for both residential and commercial properties.
          </p>
          </div>

          <div className={styles.linksCard}>
            <h3 className={styles.title}>Quick Links</h3>
            <div className={styles.linksGrid}>
              <a href="/" className={styles.footerLink}>Home</a>
              <a href="/about" className={styles.footerLink}>About</a>
              <a href="/#services" className={styles.footerLink}>Services</a>
              <a href="/#coverage" className={styles.footerLink}>Coverage Areas</a>
              <a href="/#experiences" className={styles.footerLink}>Reviews</a>
              <a href="/#gallery" className={styles.footerLink}>Gallery</a>
              <a href="/#faq" className={styles.footerLink}>FAQ</a>
            </div>
          </div>

        <div className={styles.contactCard}>
          <h3 className={styles.title}>Contact Us</h3>
          
          <a href={`tel:${BUSINESS.phone}`} className={styles.contactItem}>
            <Phone size={20} className={styles.icon} />
            <div>
              <span className={styles.label}>Call Us</span>
              <span className={styles.value}>{BUSINESS.phone}</span>
            </div>
          </a>
          
          <div className={styles.contactItem}>
            <MapPin size={20} className={styles.icon} />
            <div>
              <span className={styles.label}>Service Area</span>
              <span className={styles.value}>{BUSINESS.serviceCity}</span>
            </div>
          </div>
          
          <div className={styles.contactItem}>
            <Clock size={20} className={styles.icon} />
            <div>
              <span className={styles.label}>Hours</span>
              <span className={styles.value}>Mon - Sun, 24/7 Available for Emergencies</span>
            </div>
          </div>
          </div>
        </div>
      </div>
      
      <div className={styles.bottom}>
        <div className="container">
          <p>&copy; {currentYear} Charan Septic Cleaning. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
