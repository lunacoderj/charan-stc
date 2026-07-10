import React from 'react';
import styles from './SectionWrapper.module.css';

export function SectionWrapper({ 
  id, 
  children, 
  className = '', 
  isDark = false,
  containerClass = ''
}) {
  return (
    <section 
      id={id} 
      className={`${styles.section} ${isDark ? 'section-dark' : ''} ${className}`}
    >
      <div className={`container ${containerClass}`}>
        {children}
      </div>
    </section>
  );
}
