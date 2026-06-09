import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Tools from './components/Tools';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import { PERSONAL_INFO } from './data';
import { ArrowUp, Terminal, Code, Heart } from 'lucide-react';

interface Ripple {
  id: number;
  x: number;
  y: number;
}

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [ripples, setRipples] = useState<Ripple[]>([]);
  
  // Theme state defaulting to 'dark' to respect the original twilight feel
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      if (saved === 'dark' || saved === 'light') return saved;
    }
    return 'dark';
  });

  useEffect(() => {
    // Sync class on documentElement for Tailwind support
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    // 1. Detect scroll position for Back-To-Top button and scroll indicator bar
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
      
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }
    };

    // 2. Track intersections of sections to update selected link state in header
    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -60% 0px', // Trigger when section fills focal center of screen
      threshold: 0
    };

    const sectionIds = ['hero', 'services', 'experience', 'projects', 'testimonials', 'contact'];
    
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      sectionIds.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  // Global click event to spawn micro-ripple indicators
  useEffect(() => {
    const handleGlobalClick = (e: MouseEvent) => {
      // Ignore click ripples on form inputs and interactive control inputs if desired, or let it occur everywhere
      const newRipple: Ripple = {
        id: Date.now() + Math.random(),
        x: e.clientX,
        y: e.clientY
      };
      setRipples((prev) => [...prev.slice(-8), newRipple]); // keep maximum 8 ripples in memory for high speed performance
      
      setTimeout(() => {
        setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
      }, 800);
    };

    window.addEventListener('click', handleGlobalClick);
    return () => window.removeEventListener('click', handleGlobalClick);
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className={`${theme} min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 flex flex-col font-sans transition-colors duration-300 antialiased`}>
      {/* Scroll indicator progress bar */}
      <div className="fixed top-0 left-0 w-full h-[3px] bg-transparent z-50 pointer-events-none">
        <div
          className="h-full bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-500 transition-all duration-75"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Interactive click ripple visual layers */}
      <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
        {ripples.map((ripple) => (
          <div
            key={ripple.id}
            style={{ left: ripple.x - 20, top: ripple.y - 20 }}
            className="absolute w-10 h-10 border-2 rounded-full animate-ping-ripple"
          />
        ))}
      </div>

      {/* Header Panel */}
      <Header activeSection={activeSection} theme={theme} toggleTheme={toggleTheme} />

      {/* Main Sections */}
      <main className="flex-1">
        <Hero />
        <Services />
        <Experience />
        <Projects />
        <Tools />
        <Testimonials />
        <Contact />
      </main>

      {/* Professional Core Footer */}
      <footer className="bg-slate-100 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-900 py-12 md:py-16 text-left relative overflow-hidden transition-colors duration-300">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-slate-300 dark:via-slate-800 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start">
            {/* Branding Details col-span-5 */}
            <div className="md:col-span-5 space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-500 to-indigo-600 flex items-center justify-center font-black text-white text-sm select-none">
                  CA
                </div>
                <span className="text-base font-extrabold text-slate-900 dark:text-white font-display">
                  {PERSONAL_INFO.name}
                </span>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 max-w-sm leading-relaxed font-sans">
                Enterprise IT professional combining infrastructural reliability with modern serverless business automations. Specializing in high-capacity n8n, Make, and Zapier agents.
              </p>
              <div className="text-[10px] text-slate-500 dark:text-slate-405 font-mono flex items-center gap-1">
                <Terminal className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-500/60" /> System Location: Pampanga, PH
              </div>
            </div>

            {/* Quick Directory links col-span-3 */}
            <div className="md:col-span-3 space-y-3">
              <h4 className="text-xs font-mono uppercase text-slate-800 dark:text-slate-300 font-bold tracking-wider">
                SaaS Pipelines
              </h4>
              <ul className="space-y-2 text-xs text-slate-650 dark:text-slate-400">
                <li>
                  <a href="#services" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
                    Intelligent AI Agents
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
                    Multi-app Integrations
                  </a>
                </li>
                <li>
                  <a href="#projects" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
                    Case Portfolio blueprints
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
                    Automations Consulting
                  </a>
                </li>
              </ul>
            </div>

            {/* Resume Callout col-span-4 */}
            <div className="md:col-span-4 space-y-4 text-left">
              <h4 className="text-xs font-mono uppercase text-slate-800 dark:text-slate-300 font-bold tracking-wider">
                Direct Collaboration
              </h4>
              <p className="text-xs text-slate-650 dark:text-slate-400 leading-normal font-sans">
                Review skills credentials, active listings, or invite me to contracts directly via Upwork. Ready for immediate deployment.
              </p>
              <div className="flex flex-wrap gap-2.5">
                <a
                  href={PERSONAL_INFO.upwork}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 px-3 py-2 text-[10px] font-mono font-bold bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-850 border border-slate-200 dark:border-slate-800 text-emerald-600 dark:text-emerald-400 rounded shadow-sm transition-all"
                >
                  Contract on Upwork
                </a>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="flex items-center gap-1.5 px-3 py-2 text-[10px] font-mono font-bold bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-850 border border-slate-200 dark:border-slate-800 text-cyan-600 dark:text-cyan-400 rounded shadow-sm transition-all"
                >
                  Email Ingress
                </a>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-slate-500">
            <div>
              &copy; {new Date().getFullYear()} Carlo Atienzo. All rights reserved.
            </div>
            <div className="flex items-center gap-1.5 justify-center">
              Building AI-powered automation solutions for modern businesses.
            </div>
          </div>
        </div>
      </footer>

      {/* Back-To-Top button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 p-3 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/50 dark:hover:border-cyan-500/50 text-cyan-600 dark:text-cyan-400 shadow-xl hover:-translate-y-0.5 transition-all z-40 cursor-pointer"
          aria-label="Scroll back index to topmost frame"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </div>
  );
}

