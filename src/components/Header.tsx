import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Zap, Award, Sun, Moon } from 'lucide-react';
import { PERSONAL_INFO } from '../data';

interface HeaderProps {
  activeSection: string;
  theme: 'dark' | 'light';
  toggleTheme: () => void;
}

export default function Header({ activeSection, theme, toggleTheme }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Services', href: '#services' },
    { label: 'Experience', href: '#experience' },
    { label: 'Previous Work', href: '#projects' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id.replace('#', ''));
    if (element) {
      const offset = 80; // height of fixed header
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header
      id="portfolio-header"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-850 shadow-md py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Brand */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-2 group cursor-pointer animate-fade-in"
          >
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-indigo-600 shadow-lg shadow-indigo-500/20 group-hover:scale-105 transition-transform duration-300">
              <Zap className="w-5 h-5 text-white animate-pulse" />
              <div className="absolute -inset-0.5 bg-cyan-500 rounded-xl blur opacity-30 group-hover:opacity-75 transition duration-500"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold font-sans tracking-tight text-slate-800 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors duration-200">
                {PERSONAL_INFO.logoText}
              </span>
              <span className="text-[10px] font-mono tracking-wider text-cyan-600 dark:text-cyan-500 uppercase leading-none font-semibold">
                AI Automation Specialist
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-100/90 dark:bg-slate-950/60 p-1 rounded-full border border-slate-200 dark:border-slate-800/80">
            {navItems.map((item) => {
              const cleanedId = item.href.replace('#', '');
              const isActive = activeSection === cleanedId;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.href);
                  }}
                  className={`px-4 py-2 text-sm rounded-full transition-all duration-200 ${
                    isActive
                      ? 'bg-white dark:bg-slate-900 text-cyan-600 dark:text-cyan-400 shadow-sm border border-slate-200/50 dark:border-cyan-500/30 font-medium'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border border-transparent'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Right actions (Theme + CTAs + Mobile menu) */}
          <div className="flex items-center gap-3">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-xl border transition-all duration-200 flex items-center justify-center bg-slate-100 hover:bg-slate-200/80 dark:bg-slate-900/60 dark:hover:bg-slate-800 border-slate-250 dark:border-slate-800 text-slate-600 hover:text-slate-950 dark:text-cyan-400 dark:hover:text-cyan-300 hover:scale-105 active:scale-95 shadow-sm cursor-pointer"
              aria-label="Toggle light/dark mode"
              title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-500 dark:text-amber-400 animate-pulse" />
              ) : (
                <Moon className="w-4 h-4 text-indigo-600" />
              )}
            </button>

            {/* Desktop Call To Action Buttons */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href={PERSONAL_INFO.upwork}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 px-4 py-2 text-xs font-medium bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg shadow-md hover:shadow-emerald-500/20 active:scale-98 transition-all duration-200 border border-emerald-500/30"
              >
                Hire on Upwork
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
              <div className="flex items-center gap-1 text-[11px] font-mono text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-ping"></span>
                Available
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="flex md:hidden items-center">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-colors"
                aria-label="Toggle navigation menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white/95 dark:bg-slate-950/95 border-b border-slate-200 dark:border-slate-800 backdrop-blur-lg transition-transform duration-300">
          <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
            {navItems.map((item) => {
              const cleanedId = item.href.replace('#', '');
              const isActive = activeSection === cleanedId;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.href);
                  }}
                  className={`block px-4 py-3 rounded-md text-base font-medium transition-colors ${
                    isActive
                      ? 'bg-slate-100 dark:bg-slate-900 text-cyan-600 dark:text-cyan-400 border-l-4 border-cyan-500'
                      : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-900 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
            <div className="pt-4 border-t border-slate-200 dark:border-slate-800 px-4 flex flex-col gap-3">
              <a
                href={PERSONAL_INFO.upwork}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-1.5 px-4 py-3 text-sm font-medium bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg transition-colors"
              >
                Hire on Upwork
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.onlineJobsPh}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-1.5 px-4 py-3 text-sm font-medium bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-white rounded-lg transition-colors border border-slate-200 dark:border-slate-700"
              >
                OnlineJobs.ph Profile
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
