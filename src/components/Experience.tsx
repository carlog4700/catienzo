import React, { useState } from 'react';
import { Briefcase, Building2, Calendar, MapPin, Sparkles, Server, ArrowUpRight } from 'lucide-react';
import { EXPERIENCES } from '../data';

export default function Experience() {
  const [filterType, setFilterType] = useState<'all' | 'freelance' | 'corporate'>('all');

  const filteredExperiences = EXPERIENCES.filter((exp) => {
    if (filterType === 'all') return true;
    return exp.type === filterType;
  });

  return (
    <section
      id="experience"
      className="py-24 bg-slate-100 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-950 relative overflow-hidden transition-colors duration-300"
    >
      {/* Decorative backing shadows */}
      <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="text-left max-w-2xl">
            <div className="flex items-center gap-1.5 text-xs font-mono text-indigo-600 dark:text-indigo-400 uppercase tracking-widest font-semibold mb-3">
              <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
              Career Profile
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4 transition-colors">
              Professional Work History
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-sans transition-colors">
              Blending advanced AI prompt engineering and modern SaaS workflow architecture with 8+ years of enterprise NOC systems troubleshooting, operational support, and infrastructure consultancies.
            </p>
          </div>

          {/* Filtering Tabs */}
          <div className="flex bg-slate-200/60 dark:bg-slate-950 p-1 rounded-lg border border-slate-250 dark:border-slate-800 transition-colors">
            {(['all', 'freelance', 'corporate'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setFilterType(tab)}
                className={`px-4 py-2 text-xs font-mono font-medium rounded-md transition-all duration-200 capitalize cursor-pointer ${
                  filterType === tab
                    ? 'bg-white dark:bg-slate-800 text-cyan-600 dark:text-cyan-400 shadow-sm border border-slate-200 dark:border-slate-705'
                    : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 border border-transparent'
                }`}
              >
                {tab === 'all'
                  ? 'All Experience'
                  : tab === 'freelance'
                  ? 'AI Automation'
                  : 'Enterprise IT'}
              </button>
            ))}
          </div>
        </div>

        {/* Modern 3-Column Timeline and Panel Cards Layout */}
        <div className="relative max-w-6xl mx-auto text-left mt-8">
          
          {/* Horizontal connecting line for desktop headers */}
          <div className="hidden md:block absolute top-[11px] left-[15%] right-[15%] h-[2px] bg-gradient-to-r from-indigo-500/10 via-indigo-500/40 to-indigo-505/10 pointer-events-none z-0"></div>

          {/* Centered dots aligned with columns on desktop */}
          <div className="hidden md:grid grid-cols-3 gap-8 mb-8 relative z-10 pointer-events-none">
            {filteredExperiences.map((exp) => (
              <div key={`dot-${exp.id}`} className="flex justify-center">
                <div className="relative flex items-center justify-center">
                  <div className="absolute w-5 h-5 bg-indigo-500/20 rounded-full blur-sm animate-pulse"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-indigo-500 ring-4 ring-slate-100 dark:ring-slate-900 border border-white dark:border-slate-800 shadow-md"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10 items-stretch">
            {filteredExperiences.map((exp) => {
              const isFreelance = exp.type === 'freelance';

              return (
                <div
                  key={exp.id}
                  className="flex flex-col h-full group"
                >
                  <div className="flex-1 bg-white dark:bg-slate-950/60 hover:bg-slate-50 dark:hover:bg-slate-950/90 hover:border-indigo-500/35 dark:hover:border-indigo-500/35 transition-all duration-300 border border-slate-200 dark:border-slate-850 p-6 sm:p-8 rounded-2xl shadow-lg dark:shadow-2xl relative overflow-hidden flex flex-col">
                    
                    {/* Visual Card Accent Top Glow Bar */}
                    <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-indigo-500 via-cyan-500 to-indigo-500 opacity-70"></div>

                    {/* Work Period metadata (centered) */}
                    <div className="text-center mt-3 mb-2">
                      <span className="text-indigo-600 dark:text-indigo-400 font-mono text-xs font-bold tracking-widest uppercase">
                        {exp.period}
                      </span>
                    </div>

                    {/* Role / Job Title (centered) */}
                    <h3 className="text-center text-lg sm:text-xl font-extrabold tracking-tight text-slate-800 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors mb-2 leading-snug">
                      {exp.role}
                    </h3>

                    {/* Company and Location details (centered) */}
                    <p className="text-center text-xs sm:text-sm font-semibold text-slate-600 dark:text-slate-400 font-mono flex items-center justify-center gap-1.5 mb-6">
                      <span className="text-slate-705 dark:text-slate-300">{exp.company}</span>
                      {exp.location && (
                        <>
                          <span className="text-slate-400 dark:text-slate-500">•</span>
                          <span className="text-slate-500 dark:text-slate-450 font-normal">{exp.location.split(',')[0]}</span>
                        </>
                      )}
                    </p>

                    {/* Bullet Accomplishments Checklist (left aligned) */}
                    <ul className="space-y-4 flex-1">
                      {exp.highlights.map((bullet, bidx) => (
                        <li key={bidx} className="flex gap-2.5 items-start text-xs sm:text-sm text-slate-650 dark:text-slate-300">
                          <span className="text-indigo-500 dark:text-indigo-400 font-bold select-none mt-0.5 flex-shrink-0">→</span>
                          <span className="font-sans leading-relaxed text-slate-600 dark:text-slate-300 transition-colors">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Call to Work button */}
        <div className="mt-16 text-center select-none">
          <p className="text-xs font-mono text-slate-500 dark:text-slate-400 mb-2">
            Looking for a skilled automation consultant?
          </p>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              const contactElement = document.getElementById('contact');
              if (contactElement) {
                const offset = 80;
                const bodyRect = document.body.getBoundingClientRect().top;
                const elementRect = contactElement.getBoundingClientRect().top;
                const elementPosition = elementRect - bodyRect;
                const offsetPosition = elementPosition - offset;
                window.scrollTo({
                  top: offsetPosition,
                  behavior: 'smooth'
                });
              }
            }}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-300 transition-colors cursor-pointer"
          >
            Request custom solutions for your team
            <Briefcase className="w-4 h-4 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
}
