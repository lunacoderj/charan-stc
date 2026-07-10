import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { HeroSection } from '../components/sections/HeroSection';
import { HomeAboutSection } from '../components/sections/HomeAboutSection';
import { ServicesSection } from '../components/sections/ServicesSection';
import { CoverageSection } from '../components/sections/CoverageSection';
import { CustomerExperiencesSection } from '../components/sections/CustomerExperiencesSection';
import { GallerySection } from '../components/sections/GallerySection';
import { FaqSection } from '../components/sections/FaqSection';

export function HomePage() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        setTimeout(() => element.scrollIntoView({ behavior: 'smooth' }), 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <main>
      <HeroSection />
      <HomeAboutSection />
      <ServicesSection />
      <CoverageSection />
      <CustomerExperiencesSection />
      <GallerySection />
      <FaqSection />
    </main>
  );
}
