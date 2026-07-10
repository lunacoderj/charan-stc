import React, { useEffect } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { services } from '../data/services';
import { CTAButton } from '../components/common/CTAButton';
import { PhoneCall, MessageCircle, ArrowLeft } from 'lucide-react';
import { buildWhatsAppLink, buildCallLink } from '../utils/whatsapp';
import styles from './ServiceDetailsPage.module.css';

export function ServiceDetailsPage() {
  const { id } = useParams();
  
  // Find the specific service by ID
  const service = services.find(s => s.id === id);

  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!service) {
    return <Navigate to="/" replace />;
  }

  const handleWhatsApp = () => {
    const url = buildWhatsAppLink('service', { service: service.title });
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleCall = () => {
    window.location.href = buildCallLink();
  };

  return (
    <div className={styles.page}>
      {/* Hero Section of Service */}
      <div className={styles.hero}>
        <div className={`container ${styles.heroContainer}`}>
          <div className={styles.heroContent}>
            <Link to="/" className={styles.backLink}>
              <ArrowLeft size={20} /> Back to Home
            </Link>
            <div className={styles.iconWrapper}>
              <service.icon size={48} strokeWidth={1.5} />
            </div>
            <h1 className={styles.title}>{service.title}</h1>
            <p className={styles.subtitle}>{service.description}</p>
          </div>
          
          <div className={styles.heroImageWrapper}>
            <img src={service.image} alt={service.title} className={styles.heroImage} />
            <div className={styles.imageGlow}></div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className={`container ${styles.contentContainer}`}>
        <div className={styles.mainColumn}>
          <section className={styles.section}>
            <h2>About this Service</h2>
            <p className={styles.details}>{service.details}</p>
          </section>

          <section className={styles.section}>
            <h2>Our Step-by-Step Process</h2>
            <div className={styles.processList}>
              {service.process.map((step) => (
                <div key={step.step} className={styles.processStep}>
                  <div className={styles.stepNumber}>{step.step}</div>
                  <div className={styles.stepContent}>
                    <h3>{step.title}</h3>
                    <p>{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Sidebar / Sticky Action Panel */}
        <div className={styles.sidebar}>
          <div className={`glass ${styles.actionCard}`}>
            <h3>Book this service now</h3>
            <p>Our team is ready to deploy immediately to your location in Visakhapatnam.</p>
            <div className={styles.actions}>
              <CTAButton 
                variant="call" 
                icon={PhoneCall} 
                onClick={handleCall}
                className={styles.btn}
              >
                Call Us Now
              </CTAButton>
              <CTAButton 
                variant="whatsapp" 
                icon={MessageCircle} 
                onClick={handleWhatsApp}
                className={styles.btn}
              >
                WhatsApp Us
              </CTAButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
