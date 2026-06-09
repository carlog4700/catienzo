import React, { useState } from 'react';
import { Cpu, GitFork, Webhook, Server, ChevronRight, Check, Sparkles } from 'lucide-react';
import { SERVICES } from '../data';

export default function Services() {
  const [selectedServiceId, setSelectedServiceId] = useState<string | null>(SERVICES[0].id);

  // Map iconName from string to React Element
  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'Cpu':
        return <Cpu className="w-6 h-6 text-cyan-400" />;
      case 'GitFork':
        return <GitFork className="w-6 h-6 text-purple-400" />;
      case 'Webhook':
        return <Webhook className="w-6 h-6 text-blue-400" />;
      case 'Server':
        return <Server className="w-6 h-6 text-indigo-400" />;
      default:
        return <Sparkles className="w-6 h-6 text-gray-400" />;
    }
  };

  return (
    <section
      id="services"
      className="py-24 bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-900 relative transition-colors duration-300"
    >
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-slate-100/40 dark:from-slate-900/40 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-left max-w-3xl mb-16">
          <div className="flex items-center gap-1.5 text-xs font-mono text-cyan-600 dark:text-cyan-400 uppercase tracking-widest font-semibold mb-3">
            <span className="w-2 h-2 rounded-full bg-cyan-500"></span>
            Technical Expertise
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4 transition-colors">
            Professional Automation & Infrastructure Services
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 font-sans leading-relaxed transition-colors">
            I build stable, highly-available automatic systems. Unlike builders who only write basic web hooks, my enterprise infrastructure background means your automations are designed for extreme load, absolute data security, and long-term health.
          </p>
        </div>

        {/* Dynamic Display Layout: Columns on desktop, stacking with detailed accordion */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Service Cards Left Selection Column */}
          <div className="col-span-1 lg:col-span-5 space-y-4">
            {SERVICES.map((service) => {
              const isSelected = selectedServiceId === service.id;
              return (
                <button
                  key={service.id}
                  onClick={() => setSelectedServiceId(service.id)}
                  className={`w-full text-left p-5 rounded-xl border transition-all duration-300 text-slate-600 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white cursor-pointer ${
                    isSelected
                      ? 'bg-white dark:bg-slate-900 border-cyan-500/50 shadow-md dark:shadow-none scale-[1.01]'
                      : 'bg-slate-50 dark:bg-slate-900/30 border-slate-20 border-slate-200 dark:border-slate-850 hover:bg-slate-100/80 dark:hover:bg-slate-900 hover:border-slate-300 dark:hover:border-slate-800'
                  }`}
                >
                  <div className="flex gap-4 items-center">
                    <div className={`p-3 rounded-xl border flex items-center justify-center transition-colors ${
                      isSelected
                        ? 'bg-cyan-500/10 border-cyan-500/20'
                        : 'bg-white dark:bg-slate-950 border-slate-205 dark:border-slate-800'
                    }`}>
                      {renderIcon(service.iconName)}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-sm font-semibold tracking-tight text-slate-800 dark:text-white mb-1 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400 transition-colors line-clamp-1">
                        {service.description}
                      </p>
                    </div>
                    <ChevronRight className={`w-4 h-4 text-slate-400 transition-transform ${
                      isSelected ? 'translate-x-1 text-cyan-600 dark:text-cyan-400 rotate-90 lg:rotate-0' : ''
                    }`} />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Interactive Core Details Card Pane on Key-index Select */}
          <div className="col-span-1 lg:col-span-7">
            {SERVICES.map((service) => {
              if (service.id !== selectedServiceId) return null;
              return (
                <div
                  key={service.id}
                   className="bg-slate-50/90 dark:bg-slate-900/55 backdrop-blur-md rounded-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 space-y-6 text-left shadow-lg dark:shadow-2xl relative overflow-hidden transition-colors"
                >
                  {/* Subtle decorative glow */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-full blur-3xl"></div>

                  <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800/80 pb-5 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="p-3 bg-cyan-500/15 border border-cyan-500/25 rounded-xl">
                        {renderIcon(service.iconName)}
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold tracking-tight text-slate-900 dark:text-white transition-colors">
                        {service.title}
                      </h3>
                    </div>
                    <span className="text-xs font-mono font-medium text-cyan-600 dark:text-cyan-400 bg-cyan-500/10 px-2.5 py-1 rounded-full border border-cyan-500/20">
                      Standard SLA Ready
                    </span>
                  </div>

                  {/* Primary Narrative */}
                  <div className="space-y-2">
                    <h4 className="text-xs font-mono text-slate-500 dark:text-slate-440 uppercase tracking-wider">
                      Executive Summary
                    </h4>
                    <p className="text-sm text-slate-650 dark:text-slate-305 leading-relaxed font-sans transition-colors">
                      {service.description}
                    </p>
                  </div>

                  {/* Operational Tools Tech Badges */}
                  <div className="space-y-3">
                    <h4 className="text-[11px] font-mono text-slate-500 dark:text-slate-440 uppercase tracking-wider">
                      Core tech Stack & APIs
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {service.tools.map((tool) => (
                        <span
                          key={tool}
                          className="px-2.5 py-1 text-xs font-mono bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-850 text-slate-705 dark:text-slate-200 rounded shadow-xs"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Measured Benefits bullets */}
                  <div className="space-y-3 pt-2">
                    <h4 className="text-[11px] font-mono text-slate-500 dark:text-slate-440 uppercase tracking-wider">
                      Target Deliverables & Operational Value
                    </h4>
                    <ul className="space-y-2.5">
                      {service.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex gap-3 text-sm text-slate-650 dark:text-slate-300">
                          <div className="flex-shrink-0 w-5 h-5 rounded bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mt-0.5">
                            <Check className="w-3 h-3 text-emerald-500 dark:text-emerald-400 font-extrabold" />
                          </div>
                          <span className="font-sans text-slate-700 dark:text-slate-300 transition-colors">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
