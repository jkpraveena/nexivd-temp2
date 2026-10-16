import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Phone } from 'lucide-react';
import Logo from './Logo';

interface NavbarProps {
  onOpenConsultation?: () => void;
}

export default function Navbar({ onOpenConsultation }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Team', href: '#team' },
    { name: 'Services', href: '#services' },
    { name: 'Consultancy', href: '#consultancy' },
    { name: 'Research', href: '#research' },
    { name: 'Internships & Academics', href: '#academics' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass py-2 shadow-md' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <Logo size="md" className="w-14 h-14 sm:w-16 sm:h-16 group-hover:scale-105 transition-transform duration-300" />
            <div className="flex flex-col justify-center">
              <span className="text-2xl sm:text-3xl font-display font-black text-primary leading-none tracking-tight">NexIVD</span>
              <span className="text-[11px] sm:text-[12px] uppercase tracking-widest font-bold text-slate-500 leading-none mt-1 sm:mt-1.5">Laboratories</span>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-7">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-xs xl:text-sm font-medium text-slate-700 hover:text-highlight transition-colors"
              >
                {link.name}
              </a>
            ))}
            <button 
              onClick={onOpenConsultation}
              className="bg-primary text-white px-5 py-2.5 rounded-full text-xs xl:text-sm font-semibold hover:bg-highlight transition-all hover:shadow-lg hover:shadow-highlight/20 active:scale-95"
            >
              Book Consultation
            </button>
          </div>

          {/* Mobile Toggle */}
          <div className="lg:hidden flex items-center gap-2">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-primary"
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden glass border-t border-slate-200 overflow-hidden bg-white/95"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-2.5 text-sm font-medium text-slate-700 hover:text-highlight hover:bg-slate-50 rounded-lg transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 px-3 flex flex-col gap-3">
                <button 
                  onClick={() => {
                    setMobileMenuOpen(false);
                    if (onOpenConsultation) onOpenConsultation();
                  }}
                  className="w-full bg-primary text-white text-center py-3 rounded-xl font-bold text-sm"
                >
                  Book Consultation
                </button>
                <div className="flex items-center gap-4 text-slate-500 text-xs justify-center pt-1">
                  <a href="tel:+919848218585" className="flex items-center gap-1 font-semibold text-primary">
                    <Phone className="w-3.5 h-3.5 text-highlight" /> +91-9848218585
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
