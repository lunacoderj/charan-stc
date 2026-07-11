import React, { useState } from 'react';
import { Send, MapPin, Phone, Clock } from 'lucide-react';
import { BUSINESS } from '../../config/business';
import { buildWhatsAppLink } from '../../utils/whatsapp';
import { areas } from '../../data/areas';
import { services } from '../../data/services';
import styles from './ContactFormSection.module.css';

export function ContactFormSection() {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    location: '',
    landmark: '',
    service: '',
    query: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const link = buildWhatsAppLink('detailedBooking', {
      name: formData.name,
      mobile: formData.mobile,
      service: formData.service,
      area: formData.location,
      landmark: formData.landmark,
      details: formData.query
    });
    window.open(link, '_blank');
  };

  return (
    <section className={styles.contactSection}>
      <div className={`container ${styles.container}`}>
        <div className={styles.contentWrapper}>
          
          <div className={styles.infoPanel}>
            <div className={styles.infoBackground}></div>
            <div className={styles.infoContent}>
              <h2 className={styles.infoTitle}>Get in Touch</h2>
              <p className={styles.infoSubtitle}>We're ready to solve your drainage problems immediately. Reach out now.</p>
              
              <div className={styles.contactDetails}>
                <div className={styles.detailItem}>
                  <div className={styles.iconWrapper}><Phone size={24} /></div>
                  <div className={styles.detailText}>
                    <h4>Call Us Directly</h4>
                    <p>{BUSINESS.phone}</p>
                  </div>
                </div>
                <div className={styles.detailItem}>
                  <div className={styles.iconWrapper}><MapPin size={24} /></div>
                  <div className={styles.detailText}>
                    <h4>Service Area</h4>
                    <p>{BUSINESS.city}</p>
                  </div>
                </div>
                <div className={styles.detailItem}>
                  <div className={styles.iconWrapper}><Clock size={24} /></div>
                  <div className={styles.detailText}>
                    <h4>Working Hours</h4>
                    <p>24/7 Emergency Service</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.formPanel}>
            <form onSubmit={handleSubmit} className={styles.form}>
              <h3 className={styles.formTitle}>Request Service via WhatsApp</h3>
              
              <div className={styles.formGrid}>
                <div className={styles.inputGroup}>
                  <input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder=" " className={styles.input} />
                  <label className={styles.label}>Your Name</label>
                </div>
                
                <div className={styles.inputGroup}>
                  <input type="tel" name="mobile" value={formData.mobile} onChange={handleChange} required placeholder=" " className={styles.input} />
                  <label className={styles.label}>Mobile Number</label>
                </div>
                
                <div className={styles.selectGroup}>
                  <select name="location" value={formData.location} onChange={handleChange} required className={styles.select}>
                    <option value="" disabled hidden>Select Location</option>
                    {areas.map(zone => (
                      <optgroup key={zone.id} label={zone.name}>
                        {zone.localities.map(loc => (
                          <option key={loc} value={loc}>{loc}</option>
                        ))}
                      </optgroup>
                    ))}
                  </select>
                </div>

                <div className={styles.selectGroup}>
                  <select name="service" value={formData.service} onChange={handleChange} required className={styles.select}>
                    <option value="" disabled hidden>Select Service</option>
                    {services.map(s => (
                      <option key={s.id} value={s.title}>{s.title}</option>
                    ))}
                  </select>
                </div>

                <div className={`${styles.inputGroup} ${styles.fullWidth}`}>
                  <input type="text" name="landmark" value={formData.landmark} onChange={handleChange} placeholder=" " className={styles.input} />
                  <label className={styles.label}>Nearest Landmark</label>
                </div>

                <div className={`${styles.inputGroup} ${styles.fullWidth}`}>
                  <textarea name="query" value={formData.query} onChange={handleChange} required placeholder=" " className={styles.textarea} rows="4"></textarea>
                  <label className={styles.label}>Describe your issue</label>
                </div>
              </div>

              <button type="submit" className={styles.submitBtn}>
                <Send size={20} />
                <span>Send to WhatsApp</span>
              </button>
            </form>
          </div>
          
        </div>
      </div>
    </section>
  );
}
