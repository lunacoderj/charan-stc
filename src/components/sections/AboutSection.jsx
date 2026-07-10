import React from 'react';
import { CheckCircle2, Clock, Shield, Star, PhoneCall, Search, Droplets, ThumbsUp } from 'lucide-react';
import { SectionWrapper } from '../common/SectionWrapper';
import styles from './AboutSection.module.css';
import { useLanguage } from '../../context/LanguageContext';

export function AboutSection() {
  const { t } = useLanguage();

  const processSteps = [
    { icon: <PhoneCall size={24} />, title: 'Call Us', desc: 'Book your service' },
    { icon: <Search size={24} />, title: 'Inspection', desc: 'Thorough check' },
    { icon: <Droplets size={24} />, title: 'Cleaning', desc: 'Deep extraction' },
    { icon: <CheckCircle2 size={24} />, title: 'Final Check', desc: 'Quality assurance' },
    { icon: <ThumbsUp size={24} />, title: 'Safe & Clean', desc: 'Ready to use' },
  ];

  const valuePillars = [
    { icon: <Shield size={20} />, title: 'Safe Work', color: '#10b981' },
    { icon: <Clock size={20} />, title: 'On Time Service', color: '#3b82f6' },
    { icon: <Star size={20} />, title: 'Expert Team', color: '#f59e0b' },
    { icon: <CheckCircle2 size={20} />, title: '100% Satisfaction', color: '#8b5cf6' },
  ];

  const handleTimeUpdate = (e) => {
    if (e.target.currentTime >= 8) {
      e.target.currentTime = 0;
    }
  };

  return (
    <div className={styles.aboutPageWrapper}>
      <div className={styles.videoHero}>
        <video 
          src="/images/gallary/use_this_image_and_generate_in.mp4" 
          className={styles.fullscreenVideo}
          autoPlay
          muted
          playsInline
          onTimeUpdate={handleTimeUpdate}
        />
        <div className={styles.videoOverlay}>
          <div className={styles.discountBadge}>
            <span className={styles.discountNum}>10%</span>
            <span className={styles.discountText}>OFF ON ALL<br/>SERVICES</span>
          </div>
        </div>
      </div>

      <SectionWrapper id="about" isDark={false} className={styles.section}>
      <div className={styles.container}>
        
        {/* Left Side: Visuals & Image */}
        <div className={`reveal-item ${styles.visualSide}`}>
          <div className={styles.tagline}>Clean Tank • Healthy Home</div>
          <h2 className={styles.title}>Professional Septic Tank Cleaning Services</h2>
          <p className={styles.subtitle}>
            Keep your septic tank clean & safe for your family. We serve all over Visakhapatnam and surrounding areas, providing top-tier, reliable solutions.
          </p>
          
          <div className={styles.pillarsGrid}>
            {valuePillars.map((pillar, idx) => (
              <div key={idx} className={styles.pillarCard} style={{ '--pillar-color': pillar.color }}>
                <div className={styles.pillarIcon}>{pillar.icon}</div>
                <span className={styles.pillarTitle}>{pillar.title}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Text & Process */}
        <div className={`reveal-item ${styles.textSide}`}>
          
          <div className={styles.urgentBox}>
            <span className={styles.urgentText}>Need Urgent Service? We Are Ready To Help!</span>
            <span className={styles.urgentSub}>Book today & get professional service at the best price!</span>
          </div>

          <div className={styles.detailedInfo}>
            <h3 className={styles.detailTitle}>Comprehensive Waste Management Solutions</h3>
            <p className={styles.detailText}>
              Regular septic tank pumping is crucial for preventing costly backups and environmental contamination. Our state-of-the-art vacuum trucks are equipped to handle both residential systems and high-capacity commercial grease traps. We ensure 100% compliance with local environmental regulations for safe waste disposal.
            </p>
            <p className={styles.detailText}>
              Whether you're dealing with slow drains, foul odors, or just need routine maintenance, our licensed and insured professionals provide rapid, odorless, and thorough cleaning with zero damage to your property.
            </p>
          </div>

          <div className={styles.processSection}>
            <h3 className={styles.processTitle}>Our 5-Step Process</h3>
            <div className={styles.processTimeline}>
              {processSteps.map((step, idx) => (
                <div key={idx} className={styles.processStep}>
                  <div className={styles.stepIconWrapper}>
                    {step.icon}
                    <div className={styles.stepNumber}>{idx + 1}</div>
                  </div>
                  <div className={styles.stepInfo}>
                    <h4>{step.title}</h4>
                    <p>{step.desc}</p>
                  </div>
                  {idx < processSteps.length - 1 && <div className={styles.stepConnector}></div>}
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
      </SectionWrapper>
    </div>
  );
}
