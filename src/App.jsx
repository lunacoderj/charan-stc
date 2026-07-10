import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import { useScrollReveal } from './hooks/useScrollReveal';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { FloatingContact } from './components/layout/FloatingContact';
import { HomePage } from './pages/HomePage';
import { ServiceDetailsPage } from './pages/ServiceDetailsPage';
import { AboutPage } from './pages/AboutPage';

function AppContent() {
  useScrollReveal();

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services/:id" element={<ServiceDetailsPage />} />
      </Routes>
      <Footer />
      <FloatingContact />
    </>
  );
}

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;
