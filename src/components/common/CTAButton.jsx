import React from 'react';
import styles from './CTAButton.module.css';

export function CTAButton({ 
  variant = 'primary', 
  children, 
  onClick, 
  href, 
  className = '', 
  type = 'button',
  disabled = false,
  ...props 
}) {
  const btnClass = `${styles.button} ${styles[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={btnClass} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button 
      type={type} 
      className={btnClass} 
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}
