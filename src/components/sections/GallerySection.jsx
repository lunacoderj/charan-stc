import React, { useState } from 'react';
import { SectionWrapper } from '../common/SectionWrapper';
import { galleryItems } from '../../data/gallery';
import styles from './GallerySection.module.css';

export function GallerySection() {
  return (
    <SectionWrapper id="gallery" className={styles.section}>
      <div className="reveal-item">
        <h2 className={styles.title}>Our Work Gallery</h2>
        <p className={styles.subtitle}>
          Real footage and photos of our equipment and team in action across Visakhapatnam.
        </p>
      </div>

      {galleryItems.length > 0 ? (
        <div className={styles.masonryGrid}>
          {galleryItems.map((item, index) => (
            <div 
              key={item.id} 
              className={`${styles.galleryItem} reveal-item ${item.type === 'video' ? styles.videoItem : ''}`}
              style={{ transitionDelay: `${(index % 4) * 100}ms` }}
            >
              {item.type === 'video' ? (
                <video 
                  src={item.src} 
                  className={styles.media}
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              ) : (
                <img 
                  src={item.src} 
                  alt={item.title} 
                  loading="lazy"
                  className={styles.media}
                />
              )}
              <div className={styles.overlay}>
                <span className={styles.itemTitle}>{item.title}</span>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className={`${styles.emptyState} reveal-item`}>
          <p>Gallery media will be uploaded soon.</p>
        </div>
      )}
    </SectionWrapper>
  );
}
