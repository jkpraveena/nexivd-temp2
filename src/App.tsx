/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Certifications from './components/Certifications';
import Team from './components/Team';
import Services from './components/Services';
import Timeline from './components/Timeline';
import WhyChoose from './components/WhyChoose';
import Industries from './components/Industries';
import Academic from './components/Academic';
import News from './components/News';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ConsultationModal from './components/ConsultationModal';
import InternshipModal from './components/InternshipModal';
import InquiryDatabaseModal from './components/InquiryDatabaseModal';

export default function App() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string | undefined>(undefined);
  const [isInternshipOpen, setIsInternshipOpen] = useState(false);
  const [isDatabaseOpen, setIsDatabaseOpen] = useState(false);

  const handleOpenConsultation = (serviceName?: string) => {
    setSelectedService(serviceName);
    setIsConsultationOpen(true);
  };

  // Hidden admin shortcut (Ctrl+Shift+D or Alt+D) or URL hash #admin-db so database is not shown for normal users
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey && e.shiftKey && e.key.toLowerCase() === 'd') || 
          (e.metaKey && e.shiftKey && e.key.toLowerCase() === 'd') ||
          (e.altKey && e.key.toLowerCase() === 'd')) {
        e.preventDefault();
        setIsDatabaseOpen(prev => !prev);
      }
    };

    const handleHash = () => {
      if (window.location.hash === '#admin-db') {
        setIsDatabaseOpen(true);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('hashchange', handleHash);
    if (window.location.hash === '#admin-db') {
      setIsDatabaseOpen(true);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('hashchange', handleHash);
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-slate-50 text-slate-900 selection:bg-accent/30 selection:text-primary">
      <Navbar 
        onOpenConsultation={() => handleOpenConsultation()} 
      />
      
      <main>
        <Hero onOpenConsultation={() => handleOpenConsultation()} />
        <About />
        <Certifications />
        <Team />
        <Services onOpenConsultation={handleOpenConsultation} />
        <Timeline onOpenConsultation={() => handleOpenConsultation()} />
        <WhyChoose />
        <Industries />
        <Academic onOpenInternship={() => setIsInternshipOpen(true)} />
        <News />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>

      <Footer 
        onOpenConsultation={() => handleOpenConsultation()} 
        onOpenDatabase={() => setIsDatabaseOpen(true)}
      />

      {/* Global Modals */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
        initialService={selectedService}
      />

      <InternshipModal
        isOpen={isInternshipOpen}
        onClose={() => setIsInternshipOpen(false)}
      />

      <InquiryDatabaseModal
        isOpen={isDatabaseOpen}
        onClose={() => setIsDatabaseOpen(false)}
      />
    </div>
  );
}
