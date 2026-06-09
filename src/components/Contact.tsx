import React, { useState, useEffect } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  ExternalLink,
  Copy,
  Sparkles
} from 'lucide-react';
import { PERSONAL_INFO } from '../data';

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  // Dynamically initialize the Calendly widget cleanly on mount (resilient to StrictMode)
  useEffect(() => {
    const scriptId = 'calendly-embed-script';
    let script = document.getElementById(scriptId) as HTMLScriptElement | null;
    
    const initWidget = () => {
      const el = document.getElementById('calendly-embed-container');
      if (el && (window as any).Calendly) {
        el.innerHTML = ''; // prevent duplicating iframe on re-renders
        (window as any).Calendly.initInlineWidget({
          url: 'https://calendly.com/atienzo-carlo/30min',
          parentElement: el,
          prefill: {},
          pageSettings: {
            backgroundColor: '0f172a', // Slate 900
            textColor: 'ffffff', // White text
            primaryColor: 'a855f7', // Purple Neon accents
            hideLandingPageDetails: true, // Keep it highly integrated and clean
          }
        });
      }
    };

    if (!script) {
      script = document.createElement('script');
      script.id = scriptId;
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      script.onload = initWidget;
      document.head.appendChild(script);
    } else {
      if ((window as any).Calendly) {
        initWidget();
      } else {
        script.addEventListener('load', initWidget);
      }
    }

    return () => {
      if (script) {
        script.removeEventListener('load', initWidget);
      }
    };
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  return (
    <section
      id="contact"
      className="py-24 bg-white dark:bg-slate-950 border-t border-slate-205 dark:border-slate-900 relative transition-colors duration-300"
    >
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-slate-100/50 dark:from-slate-900/50 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-left max-w-3xl mb-16">
          <div className="flex items-center gap-1.5 text-xs font-mono text-cyan-600 dark:text-cyan-400 uppercase tracking-widest font-semibold mb-3">
            <span className="w-2 h-2 rounded-full bg-cyan-500"></span>
            Inquiries
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4 transition-colors">
            Let&apos;s Design Your Automated Future
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 font-sans leading-relaxed transition-colors">
            Interested in linking your accounting to your CRM, building automated lead response flows, or designing intelligent AI agents to handle phone reception? Submit your project details below to see our automation webhook live.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start text-left">
          {/* Left Column: Direct coordinates and platform profiles */}
          <div className="lg:col-span-4 space-y-8">
            <div className="space-y-4">
              <h3 className="text-sm font-mono text-cyan-605 dark:text-cyan-400 uppercase tracking-wider font-semibold">
                Direct Contact
              </h3>

              {/* Direct coordinates cards */}
              <div className="space-y-3.5">
                {/* Email Address */}
                <div className="group bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-850 p-4 rounded-xl flex items-center justify-between transition-all hover:border-slate-350 dark:hover:border-slate-800 shadow-xs">
                  <div className="flex gap-3.5 items-center">
                    <div className="w-9 h-9 rounded-lg bg-cyan-505/10 dark:bg-cyan-500/10 flex items-center justify-center border border-cyan-200 dark:border-cyan-500/20 text-cyan-600 dark:text-cyan-400">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div className="leading-none">
                      <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400 block mb-1">
                        Professional Email
                      </span>
                      <a href={`mailto:${PERSONAL_INFO.email}`} className="text-xs sm:text-sm text-slate-805 dark:text-slate-200 hover:text-cyan-605 dark:hover:text-cyan-400 font-sans font-semibold">
                        {PERSONAL_INFO.email}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="p-1.5 text-slate-450 hover:text-slate-950 dark:hover:text-white transition-colors hover:bg-slate-100 dark:hover:bg-slate-950 rounded border border-transparent hover:border-slate-205 dark:hover:border-slate-850 cursor-pointer"
                    title="Copy Email to Clipboard"
                  >
                    <Copy className={`w-4 h-4 ${copiedEmail ? 'text-cyan-505 dark:text-cyan-400' : ''}`} />
                  </button>
                </div>

                {/* Mobile Phone */}
                <div className="group bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-850 p-4 rounded-xl flex items-center justify-between transition-all hover:border-slate-350 dark:hover:border-slate-800 shadow-xs">
                  <div className="flex gap-3.5 items-center">
                    <div className="w-9 h-9 rounded-lg bg-indigo-505/10 dark:bg-indigo-500/10 flex items-center justify-center border border-indigo-200 dark:border-indigo-500/20 text-indigo-600 dark:text-indigo-400">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div className="leading-none">
                      <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400 block mb-1">
                        Direct Phone
                      </span>
                      <a href={`tel:${PERSONAL_INFO.phone}`} className="text-xs sm:text-sm text-slate-805 dark:text-slate-200 hover:text-indigo-605 dark:hover:text-indigo-400 font-sans font-semibold">
                        {PERSONAL_INFO.phone}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={handleCopyPhone}
                    className="p-1.5 text-slate-455 hover:text-slate-950 dark:hover:text-white transition-colors hover:bg-slate-100 dark:hover:bg-slate-950 rounded border border-transparent hover:border-slate-205 dark:hover:border-slate-850 cursor-pointer"
                    title="Copy Phone to Clipboard"
                  >
                    <Copy className={`w-4 h-4 ${copiedPhone ? 'text-indigo-505 dark:text-indigo-400' : ''}`} />
                  </button>
                </div>

                {/* Locations Coordinates */}
                <div className="group bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-850 p-4 rounded-xl flex items-center transition-all hover:border-slate-350 dark:hover:border-slate-800 shadow-xs">
                  <div className="flex gap-3.5 items-center">
                    <div className="w-9 h-9 rounded-lg bg-purple-505/10 dark:bg-purple-500/10 flex items-center justify-center border border-purple-200 dark:border-purple-500/20 text-purple-600 dark:text-purple-400">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div className="leading-none">
                      <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400 block mb-1">
                        Current Base
                      </span>
                      <span className="text-xs sm:text-sm text-slate-805 dark:text-slate-200 font-sans font-semibold">
                        {PERSONAL_INFO.location}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Platform links */}
            <div className="space-y-4">
              <h3 className="text-sm font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider font-semibold">
                Work Interfaces
              </h3>
              <div className="grid grid-cols-1 gap-2.5">
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-3 bg-slate-50/80 dark:bg-slate-900/40 hover:bg-slate-100/90 dark:hover:bg-slate-900 border border-slate-200 dark:border-slate-850 hover:border-indigo-500/30 rounded-xl transition-all duration-200 group shadow-xs"
                >
                  <span className="flex items-center gap-2.5 text-slate-650 dark:text-slate-355 text-xs sm:text-sm font-medium">
                    <Linkedin className="w-4 h-4 text-indigo-505 dark:text-indigo-400" /> Linkedin Profile
                  </span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-450 dark:text-slate-500 group-hover:text-slate-700 dark:group-hover:text-slate-300" />
                </a>

                <a
                  href={PERSONAL_INFO.upwork}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-3 bg-slate-50/80 dark:bg-slate-900/40 hover:bg-slate-100/90 dark:hover:bg-slate-900 border border-slate-200 dark:border-slate-850 hover:border-emerald-500/30 rounded-xl transition-all duration-200 group shadow-xs"
                >
                  <span className="flex items-center gap-2.5 text-slate-650 dark:text-slate-355 text-xs sm:text-sm font-medium border-l-2 border-emerald-500 pl-2">
                    Upwork Contract Hub
                  </span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-450 dark:text-slate-500 group-hover:text-slate-700 dark:group-hover:text-slate-300" />
                </a>

                <a
                  href={PERSONAL_INFO.onlineJobsPh}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-3 bg-slate-50/80 dark:bg-slate-900/40 hover:bg-slate-100/90 dark:hover:bg-slate-900 border border-slate-200 dark:border-slate-850 hover:border-cyan-500/30 rounded-xl transition-all duration-200 group shadow-xs"
                >
                  <span className="flex items-center gap-2.5 text-slate-655 dark:text-slate-355 text-xs sm:text-sm font-medium border-l-2 border-cyan-550 dark:border-cyan-500 pl-2">
                    OnlineJobs.ph Directory
                  </span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-450 dark:text-slate-500 group-hover:text-slate-700 dark:group-hover:text-slate-300" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Embedded Calendly booking experience (Col-span 8) */}
          <div className="lg:col-span-8 space-y-6">
            <div className="bg-slate-50/90 dark:bg-slate-900/60 backdrop-blur-xl border border-purple-500/30 dark:border-purple-500/50 rounded-2xl p-6 sm:p-8 shadow-[0_0_15px_rgba(168,85,247,0.15)] dark:shadow-[0_0_25px_rgba(168,85,247,0.25)] relative overflow-hidden transition-all duration-300">
              
              {/* Purple neon border / subtle layout indicators */}
              <div className="mb-6 pb-4 border-b border-slate-200 dark:border-slate-800">
                <div className="flex items-center justify-between gap-2 mb-2">
                  <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-purple-500 animate-pulse" />
                    Schedule a Discovery Call
                  </h3>
                  <span className="text-[10px] font-mono text-purple-600 dark:text-purple-400 uppercase bg-purple-500/10 px-2.5 py-0.5 rounded border border-purple-500/20 select-none font-bold">
                    30-min Consultation
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-sans leading-relaxed">
                  Book a free 30-minute consultation to discuss AI automation, workflow optimization, n8n, Make, Zapier, AI agents, or custom business automations.
                </p>
              </div>

              {/* Class override to force the child iframe to take full 100% container dimension without collapsing, and hide any redundant scrollbars */}
              <style dangerouslySetInnerHTML={{__html: `
                #calendly-embed-container iframe {
                  width: 100% !important;
                  height: 100% !important;
                  min-height: 800px !important;
                  border: none !important;
                  overflow: hidden !important;
                }
                /* Hide vertical scrollbar inside embedded widget wrapper panels if any exist */
                .calendly-inline-widget, #calendly-embed-container {
                  scrollbar-width: none !important; /* Firefox */
                  -ms-overflow-style: none !important;  /* IE and Edge */
                }
                #calendly-embed-container::-webkit-scrollbar {
                  display: none !important; /* Chrome, Safari, and Opera */
                }
              `}} />

              {/* Calendly Inline Widget Embed Container */}
              <div 
                id="calendly-embed-container" 
                className="w-full relative rounded-xl border border-slate-200/50 dark:border-slate-800/50 overflow-hidden bg-slate-950" 
                style={{ height: '800px', minHeight: '800px' }}
              >
                {/* Visual loading fallback while script downloads or compiles */}
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-100 dark:bg-slate-900/70 select-none gap-3 pointer-events-none">
                  <div className="relative flex h-8 w-8">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-8 w-8 bg-purple-500 items-center justify-center text-white text-xs uppercase font-extrabold">
                      CA
                    </span>
                  </div>
                  <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                    Initializing Scheduler...
                  </span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
