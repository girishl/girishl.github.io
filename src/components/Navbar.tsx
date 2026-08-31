import React, { useState, useEffect } from 'react';
import { personalInfo } from '../data/portfolioData';
import { Sparkles, BookOpen, Code2, GraduationCap, Users, Mail, Phone, Menu, X } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about', icon: Sparkles },
    { name: 'Research', href: '#research', icon: BookOpen },
    { name: 'Projects', href: '#repositories', icon: Code2 },
    { name: 'Teaching', href: '#teaching', icon: GraduationCap },
    { name: 'Experience', href: '#experience', icon: Users },
    { name: 'Contact', href: '#contact', icon: Mail },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-950/90 backdrop-blur-2xl border-b border-slate-800/90 py-3.5 shadow-2xl shadow-cyan-950/25'
          : 'bg-transparent py-5 sm:py-6'
      }`}
    >
      <div className="w-full max-w-[1700px] mx-auto px-4 sm:px-8 lg:px-12 flex items-center justify-between">
        {/* Brand / Logo */}
        <a
          href="#top"
          id="nav-logo"
          className="flex items-center gap-3.5 group cursor-pointer"
        >
          <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-cyan-500 via-blue-500 to-indigo-600 p-[2px] shadow-lg shadow-cyan-500/25 group-hover:scale-105 transition-transform duration-300 overflow-hidden shrink-0">
            <img
              src="https://shrideviengineering.org/wp-content/uploads/2025/04/66200630952.png"
              alt="Dr. Girish L"
              className="w-full h-full object-cover rounded-full"
              referrerPolicy="no-referrer"
            />
          </div>
          <div>
            <div className="flex items-center gap-2 font-bold text-lg text-white font-display group-hover:text-cyan-400 transition-colors">
              <span>Dr. Girish L</span>
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            </div>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-2 bg-slate-900/80 backdrop-blur-xl border border-slate-800/90 px-4 py-2 rounded-full shadow-lg shadow-slate-950/30">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                id={`nav-link-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-300 border border-cyan-500/50 shadow-md shadow-cyan-500/10'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/80'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-cyan-400' : 'text-slate-400'}`} />
                <span>{link.name}</span>
              </a>
            );
          })}
        </nav>

        {/* Action Button: Get in Touch / Phone */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="tel:+918970429399"
            id="nav-cta-phone-btn"
            className="flex items-center gap-2.5 px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-sm transition-all duration-200 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.02] cursor-pointer"
            title="Call +91 8970429399"
          >
            <Phone className="w-4 h-4 fill-slate-950/20" />
            <span>+91 8970429399</span>
          </a>
        </div>

        {/* Mobile menu trigger */}
        <button
          id="mobile-menu-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 hover:text-white cursor-pointer"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-950/95 backdrop-blur-2xl border-b border-slate-800/80 px-4 pt-3 pb-5 space-y-2 mt-3 animate-in fade-in slide-in-from-top-2 duration-200 shadow-2xl">
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-3 px-4 py-3 rounded-xl text-base font-semibold text-slate-200 hover:text-white hover:bg-slate-900/80 border border-transparent hover:border-slate-800 transition"
              >
                <Icon className="w-4 h-4 text-cyan-400" />
                <span>{link.name}</span>
              </a>
            );
          })}
          <div className="pt-2 border-t border-slate-800/80">
            <a
              href="tel:+918970429399"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2.5 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold text-sm shadow-lg shadow-cyan-500/25"
            >
              <Phone className="w-4 h-4" />
              <span>Call: +91 8970429399</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
