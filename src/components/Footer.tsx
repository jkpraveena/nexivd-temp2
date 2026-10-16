import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';
import Logo from './Logo';

interface FooterProps {
  onOpenDatabase?: () => void;
  onOpenConsultation?: () => void;
}

export default function Footer({ onOpenDatabase, onOpenConsultation }: FooterProps) {
  return (
    <footer className="bg-primary pt-20 pb-12 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <Logo size="md" className="w-14 h-14" />
              <div className="flex flex-col">
                <span className="text-2xl sm:text-3xl font-display font-black tracking-tight text-white leading-none">NexIVD</span>
                <span className="text-[12px] uppercase tracking-widest font-bold text-accent mt-1.5 leading-none">Laboratories</span>
              </div>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed mb-6">
              Science with Excellence, Service with Innovation. End-to-end turnkey solutions for IVD manufacturing, analytical validation, and regulatory compliance.
            </p>
            <div className="flex gap-3">
              <a href="#" className="p-2.5 rounded-xl bg-white/5 hover:bg-accent hover:text-primary transition-all"><Linkedin className="w-4 h-4" /></a>
              <a href="#" className="p-2.5 rounded-xl bg-white/5 hover:bg-accent hover:text-primary transition-all"><Twitter className="w-4 h-4" /></a>
              <a href="#" className="p-2.5 rounded-xl bg-white/5 hover:bg-accent hover:text-primary transition-all"><Facebook className="w-4 h-4" /></a>
            </div>
          </div>

          <div>
            <h4 className="font-display font-bold text-lg mb-6 text-accent">Quick Navigation</h4>
            <ul className="space-y-3">
              {[
                { name: 'Home', href: '#' },
                { name: 'About NexIVD', href: '#about' },
                { name: 'Certifications', href: '#certifications' },
                { name: 'Leadership & Team', href: '#team' },
                { name: 'Laboratory Capabilities', href: '#services' },
                { name: 'Manufacturing Roadmap', href: '#consultancy' },
                { name: 'Research Publications', href: '#research' },
                { name: 'Internships & Academics', href: '#academics' },
                { name: 'Contact & Inquiries', href: '#contact' },
              ].map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-slate-300 hover:text-accent transition-colors text-xs sm:text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-lg mb-6 text-accent">Laboratory Capabilities</h4>
            <ul className="space-y-3">
              {[
                'Laboratory & Preclinical Support',
                'IVD Devices Verification & Validation',
                'Data Management & Biostatistics',
                'Medical Writing & Scientific Affairs',
                'IVD Regulatory Affairs',
                'Technology & Support Services'
              ].map((service) => (
                <li key={service}>
                  <a href="#services" className="text-slate-300 hover:text-accent transition-colors text-xs sm:text-sm">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-lg mb-6 text-accent">Connect with Us</h4>
            <div className="space-y-4">
              <div className="flex gap-3">
                <MapPin className="w-5 h-5 text-accent shrink-0 mt-1" />
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  <strong>NexIVD Laboratories Pvt. Ltd.</strong><br />
                  Plot No. 54, Pillar No: A1507,<br />
                  Andhra Bank Colony, Moosarambagh,<br />
                  Hyderabad, Telangana, India – 500036
                </p>
              </div>
              
              <div className="flex gap-3 items-center">
                <Phone className="w-4 h-4 text-accent shrink-0" />
                <a href="tel:+919848218585" className="text-slate-300 hover:text-accent text-sm">
                  +91-9848218585
                </a>
              </div>

              <div className="flex gap-3 items-start">
                <Mail className="w-4 h-4 text-accent shrink-0 mt-1" />
                <div className="text-xs sm:text-sm space-y-1">
                  <a href="mailto:info@nexivdlabs.com" className="block text-slate-300 hover:text-accent font-medium">
                    info@nexivdlabs.com
                  </a>
                  <a href="mailto:nexivdlabs@gmail.com" className="block text-slate-400 hover:text-accent text-xs">
                    nexivdlabs@gmail.com
                  </a>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={onOpenConsultation}
                  className="px-4 py-2 rounded-xl bg-accent text-primary font-bold text-xs hover:bg-white transition-colors"
                >
                  Book Consultation
                </button>
              </div>
            </div>
          </div>

        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-400">
          <p 
            onClick={onOpenDatabase}
            className="cursor-pointer select-none hover:text-slate-300 transition-colors"
            title="NexIVD Laboratories Portal"
          >
            © 2026 NexIVD Laboratories Pvt. Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span>ISO 13485:2016 Compliant</span>
            <span>CDSCO Recognized</span>
            <span>GLP/GCP Laboratory</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
