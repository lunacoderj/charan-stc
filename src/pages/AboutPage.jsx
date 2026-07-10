import React, { useEffect } from 'react';
import { AboutSection } from '../components/sections/AboutSection';
import { useScrollReveal } from '../hooks/useScrollReveal';

export function AboutPage() {
  useScrollReveal();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main style={{ paddingTop: '80px', minHeight: '100vh', backgroundColor: 'var(--color-bg-base)' }}>
      <AboutSection />
    </main>
  );
}
