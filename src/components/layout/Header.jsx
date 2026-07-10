import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { BUSINESS } from '../../config/business';
import { CTAButton } from '../common/CTAButton';
import { services } from '../../data/services';
import styles from './Header.module.css';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const { t, lang, toggleLang, isTeluguEnabled } = useLanguage();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);



  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
    setIsServicesOpen(false);
  };

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.navContainer}>
        
        {/* Logo */}
        <Link to="/" className={styles.logo} onClick={handleNavClick}>
          <img src="/logo.png" alt="Charan Septic Cleaning" width="160" height="48" />
        </Link>

        {/* Desktop Nav */}
        <nav className={styles.desktopNav}>
          <Link to="/" className={styles.navLink}>{t('nav', 'home')}</Link>
          <Link to="/about" className={styles.navLink}>{t('nav', 'about')}</Link>

          <div 
            className={styles.dropdownContainer}
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
          >
            <button className={styles.navLink}>
              {t('nav', 'services')} <ChevronDown size={16} />
            </button>
            {isServicesOpen && (
              <div className={styles.dropdownMenu}>
                {services.map((s) => (
                  <Link key={s.id} to={`/services/${s.id}`} className={styles.dropdownItem} onClick={() => setIsServicesOpen(false)}>
                    {s.title}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link to="/#coverage" className={styles.navLink}>{t('nav', 'coverage')}</Link>
          <Link to="/#experiences" className={styles.navLink}>{t('nav', 'reviews')}</Link>
          <Link to="/#gallery" className={styles.navLink}>{t('nav', 'gallery')}</Link>
          <Link to="/#faq" className={styles.navLink}>{t('nav', 'faq')}</Link>
        </nav>

        {/* Desktop Actions */}
        <div className={styles.desktopActions}>
          {isTeluguEnabled && (
            <button className={styles.langToggle} onClick={toggleLang}>
              {lang === 'en' ? 'తెలుగు' : 'English'}
            </button>
          )}
          
          <CTAButton 
            variant="call" 
            href={`tel:${BUSINESS.phone}`}
            className={styles.callBtn}
          >
            <Phone size={18} />
            {BUSINESS.phone}
          </CTAButton>
        </div>

        {/* Mobile Toggle */}
        <button 
          className={styles.mobileToggle}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.open : ''}`}>
        <nav className={styles.mobileNav}>
          <Link to="/" className={styles.mobileNavLink} onClick={handleNavClick}>{t('nav', 'home')}</Link>
          <Link to="/about" className={styles.mobileNavLink} onClick={handleNavClick}>{t('nav', 'about')}</Link>
          <Link to="/#services" className={styles.mobileNavLink} onClick={handleNavClick}>
            {t('nav', 'services')}
          </Link>
          <Link to="/#coverage" className={styles.mobileNavLink} onClick={handleNavClick}>{t('nav', 'coverage')}</Link>
          <Link to="/#experiences" className={styles.mobileNavLink} onClick={handleNavClick}>{t('nav', 'reviews')}</Link>
          <Link to="/#gallery" className={styles.mobileNavLink} onClick={handleNavClick}>{t('nav', 'gallery')}</Link>
          <Link to="/#faq" className={styles.mobileNavLink} onClick={handleNavClick}>{t('nav', 'faq')}</Link>
          
          {isTeluguEnabled && (
            <button className={styles.mobileLangToggle} onClick={() => {
              toggleLang();
              handleNavClick();
            }}>
              Switch to {lang === 'en' ? 'తెలుగు' : 'English'}
            </button>
          )}

          <div className={styles.mobileActionContainer}>
            <CTAButton 
              variant="primary" 
              href={`tel:${BUSINESS.phone}`}
              className={styles.mobileCallBtn}
            >
              <Phone size={20} />
              Call {BUSINESS.phone}
            </CTAButton>
          </div>
        </nav>
      </div>
    </header>
  );
}
