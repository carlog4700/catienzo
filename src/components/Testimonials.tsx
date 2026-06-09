import React from 'react';
import { Quote, MessageSquare, TrendingUp, Sparkles, Star } from 'lucide-react';
import { TESTIMONIALS } from '../data';

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-24 bg-slate-100 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-950 relative overflow-hidden transition-colors duration-300"
    >
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Section Header */}
        <div className="text-left md:text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-600 dark:text-cyan-400 uppercase tracking-widest font-semibold mb-3">
            <span className="w-2 h-2 rounded-full bg-cyan-500"></span>
            Endorsements
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4 transition-colors">
            Trusted by Leaders & Agencies
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-404 font-sans leading-relaxed transition-colors">
            See how operations managers and agency founders leverage custom n8n, Make, and Zapier pipelines to double their operational speed and completely eliminate daily human errors.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {TESTIMONIALS.map((test, idx) => (
            <div
              key={test.name}
              className="bg-white dark:bg-slate-950/60 hover:bg-slate-50 dark:hover:bg-slate-950 hover:border-slate-350 dark:hover:border-slate-800 transition-all duration-300 p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-850 shadow-md dark:shadow-xl flex flex-col justify-between relative group"
            >
              {/* Giant abstract quotation marks */}
              <div className="absolute top-6 right-6 text-slate-100 dark:text-slate-900 group-hover:text-cyan-500/5 transition-colors duration-300">
                <Quote className="w-12 h-12 stroke-[1.5]" />
              </div>

              {/* Main review content */}
              <div className="relative space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  {/* Visual metric badge */}
                  {test.metrics && (
                    <div className="inline-flex items-center gap-1.5 bg-cyan-500/10 px-2.5 py-1 rounded text-xs font-mono font-medium text-cyan-600 dark:text-cyan-400 border border-cyan-500/20">
                      <TrendingUp className="w-3.5 h-3.5" />
                      {test.metrics}
                    </div>
                  )}
                  {/* 5 Stars Rating Row */}
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                </div>

                {/* Plainquote */}
                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 italic leading-relaxed font-sans mt-2 transition-colors">
                  {test.quote}
                </p>
              </div>

              {/* User Bio Footer */}
              <div className="flex items-center gap-3.5 mt-8 border-t border-slate-200 dark:border-slate-900 pt-5 relative transition-colors">
                {/* Clean Letter Avatar Icon */}
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-tr from-cyan-500/20 to-indigo-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-600 dark:text-cyan-400 font-mono font-bold uppercase select-none">
                  {test.name.charAt(0)}
                </div>

                <div className="text-left leading-none">
                  <h4 className="text-xs sm:text-sm font-bold text-slate-850 dark:text-white mb-1 transition-colors">
                    {test.name}
                  </h4>
                  <p className="text-[10px] sm:text-xs font-mono text-slate-550 dark:text-slate-400 transition-colors">
                    {test.role} at <strong className="text-slate-600 dark:text-slate-300 font-medium">{test.company}</strong>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Inline KPI Callout */}
        <div className="mt-16 bg-gradient-to-r from-slate-100 via-slate-50 to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 p-6 rounded-2xl border border-slate-200 dark:border-slate-850/85 flex flex-col md:flex-row items-center justify-between gap-6 transition-colors">
          <div className="flex items-center gap-4 text-left">
            <div className="w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center border border-orange-500/25 text-orange-600 dark:text-orange-400 hidden sm:flex">
                <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs sm:text-sm font-mono text-slate-800 dark:text-white font-bold transition-colors">
                Proven Client Productivity Gains
              </p>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-normal mt-1 max-w-xl transition-colors">
                On average, Carlo&apos;s active integrations save clients 12-20 hours of manual data-entry per week, turning standard tools like Google Sheets or Slack into highly competent workflow automations.
              </p>
            </div>
          </div>
          <span className="text-sm font-bold text-cyan-600 dark:text-cyan-400 font-mono border-b border-cyan-500/30 pb-0.5 whitespace-nowrap uppercase tracking-wider transition-colors">
            ~1000+ Hours Reclaimed
          </span>
        </div>
      </div>
    </section>
  );
}
