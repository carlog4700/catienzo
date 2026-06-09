import React from 'react';
import { 
  ArrowRight, 
  ExternalLink, 
  Sparkles, 
  Zap, 
  Layers, 
  Cpu, 
  Database,
  Code2, 
  Send, 
  Terminal,
  Heart,
  Coffee,
  Globe,
  Award,
  Users,
  Play
} from 'lucide-react';
import { PERSONAL_INFO } from '../data';

export default function Hero() {
  const handleScrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = contactSection.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleScrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = projectsSection.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-28 pb-20 flex flex-col justify-center overflow-hidden bg-[#030008] text-[#f1f1f1] transition-all duration-300"
    >
      {/* Decorative Aurora Violet Glow Gradients matching One Peak Creative */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#4c1d95]/20 blur-[140px] rounded-full pointer-events-none z-0"></div>
      <div className="absolute top-[20%] right-[-10%] w-[60%] h-[60%] bg-[#7c3aed]/20 blur-[160px] rounded-full pointer-events-none z-0 animate-pulse"></div>
      <div className="absolute bottom-[-10%] left-[20%] w-[45%] h-[45%] bg-[#6d28d9]/15 blur-[120px] rounded-full pointer-events-none z-0"></div>

      {/* Subtle Digital Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(124,58,237,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(124,58,237,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none z-0 opacity-40"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* ================= LEFT COLUMN ================= */}
          <div className="lg:col-span-6 space-y-8 text-left">
            
            {/* Pill Badge matching One Peak's 'VIRAL CONTENT ACCELERATOR' */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-violet-500/35 bg-[#120726] text-violet-300 backdrop-blur-md shadow-lg shadow-violet-500/5 select-none animate-fade-in">
              <Sparkles className="w-4 h-4 text-violet-400 animate-spin" />
              <span className="font-mono text-[10px] sm:text-xs font-bold uppercase tracking-widest">
                AI AUTOMATION SPECIALIST
              </span>
            </div>

            {/* Main Typographic Headline Group (Obsidian-Purple layout) */}
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight text-white font-display select-none">
                <span className="block text-violet-400 text-sm sm:text-base font-mono uppercase tracking-widest mb-3 font-bold">
                  Hi, I'm Carlo.
                </span>
                <span className="block bg-gradient-to-r from-white via-slate-105 to-indigo-200 text-transparent bg-clip-text">
                  I help businesses automate workflows, connect systems, and save hours of manual work with AI.
                </span>
              </h1>
              
              {/* Detailed Description based on resume references */}
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-xl font-sans tracking-wide">
                Enterprise IT professional with 8+ years of experience, now helping businesses automate workflows and connect systems using AI.
              </p>
            </div>

            {/* CTA action buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={handleScrollToContact}
                className="group flex items-center gap-2 bg-gradient-to-r from-[#7c3aed] to-[#4f46e5] hover:from-[#8b5cf6] hover:to-[#6366f1] text-white font-sans text-xs sm:text-sm font-bold uppercase tracking-wider px-6 py-4 rounded-xl shadow-xl shadow-violet-950/40 hover:shadow-violet-500/20 active:scale-95 transition-all duration-300 cursor-pointer"
              >
                <span>Book a Free Consultation</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={handleScrollToProjects}
                className="group flex items-center gap-2 text-slate-400 hover:text-white font-sans text-xs sm:text-sm font-bold uppercase tracking-wider px-5 py-4 rounded-xl border border-slate-800 hover:border-violet-500/20 bg-slate-950/30 hover:bg-slate-950/80 transition-all duration-300 cursor-pointer"
              >
                <Play className="w-4 h-4 text-violet-400 fill-violet-400/20 animate-pulse group-hover:scale-110 transition-transform" />
                <span>Explore Integrations</span>
              </button>
            </div>

            {/* User social/metrics stacked badges mimicking the "Join 1000+ creators..." section */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-4 border-t border-slate-900">
              {/* Profile group overlaps */}
              <div className="flex -space-x-3 select-none">
                <span className="w-8 h-8 rounded-full border border-slate-800 bg-slate-900 flex items-center justify-center text-[10px] font-mono font-bold text-violet-400 shadow-lg">n8n</span>
                <span className="w-8 h-8 rounded-full border border-slate-800 bg-slate-900 flex items-center justify-center text-[10px] font-mono font-bold text-indigo-400 shadow-lg">Zp</span>
                <span className="w-8 h-8 rounded-full border border-slate-800 bg-slate-900 flex items-center justify-center text-[10px] font-mono font-bold text-purple-400 shadow-lg">Mk</span>
                <span className="w-8 h-8 rounded-full border border-slate-800 bg-slate-900 flex items-center justify-center text-[10px] font-mono font-bold text-cyan-400 shadow-lg">Az</span>
              </div>
              <div>
                <p className="text-xs text-slate-400 font-sans tracking-wide text-left leading-normal">
                  <span className="block font-bold text-violet-400 text-[10px] sm:text-xs uppercase tracking-wider mb-0.5">Certified In:</span>
                  Zapier • Make • n8n • Microsoft Azure
                </p>
              </div>
            </div>

          </div>

          {/* ================= RIGHT COLUMN (PORTRAIT + FLOATING GLASS VISUALS) ================= */}
          <div className="lg:col-span-6 relative mt-12 lg:mt-0 flex flex-col items-center justify-center">
            
            {/* Visual glow ring centered behind portrait */}
            <div className="absolute w-[440px] h-[440px] bg-indigo-500/10 blur-[90px] rounded-full pointer-events-none z-0"></div>

            {/* Main Portrait Frame with Dark Purple Vignette */}
            <div className="relative w-full max-w-[450px] aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border border-slate-850/60 bg-[#080515] group select-none z-10 transition-all duration-300">
              
              {/* Smooth deep dark fade overlay inside image at bottom */}
              <div className="absolute inset-x-0 bottom-0 top-0 bg-gradient-to-t from-[#030008] via-transparent to-transparent z-10 pointer-events-none"></div>
              
              <img
                src={PERSONAL_INFO.profileImage}
                alt={PERSONAL_INFO.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-700 relative z-0 opacity-90"
              />
            </div>

            {/* Placeholder container to keep layout balanced */}
            <div className="absolute bottom-[6%] right-0 h-10 w-10 pointer-events-none opacity-0"></div>

          </div>

        </div>

        {/* ================= BOTTOM GRID OF 4 COLUMNS ================= */}
        {/* Exact One Peak Creative mockup of services at footer of hero */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-20 lg:mt-28 border-t border-slate-900/80 pt-16">
          
          {/* Card 1: Proven Viral Formats analogue -> Proven Automations */}
          <div className="bg-[#090514]/40 border border-slate-900 hover:border-violet-500/20 rounded-2xl p-6 hover:bg-[#0c071a]/60 backdrop-blur-sm shadow-xl hover:-translate-y-1 transition-all duration-300 text-center space-y-4">
            <div className="mx-auto w-12 h-12 rounded-full bg-violet-950/40 border border-violet-500/20 flex items-center justify-center text-violet-400">
              <Zap className="w-5 h-5 fill-current" fill="currentColor" />
            </div>
            <div className="space-y-2">
              <h3 className="font-display font-bold text-white text-base">Workflow Automation</h3>
              <p className="font-sans text-xs text-slate-400 leading-relaxed">
                Designing scalable workflows using n8n, Zapier, and Make to automate repetitive tasks and improve operational efficiency.
              </p>
            </div>
          </div>

          {/* Card 2: Expert Coaching analogue -> System AI Agents */}
          <div className="bg-[#090514]/40 border border-slate-900 hover:border-violet-500/20 rounded-2xl p-6 hover:bg-[#0c071a]/60 backdrop-blur-sm shadow-xl hover:-translate-y-1 transition-all duration-300 text-center space-y-4">
            <div className="mx-auto w-12 h-12 rounded-full bg-indigo-950/40 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
              <Cpu className="w-5 h-5" />
            </div>
            <div className="space-y-2">
              <h3 className="font-display font-bold text-white text-base">AI Agent Workflows</h3>
              <p className="font-sans text-xs text-slate-400 leading-relaxed">
                Building AI-powered assistants using OpenAI and Google Gemini with memory, knowledge bases, and automated actions.
              </p>
            </div>
          </div>

          {/* Card 3: AI-Powered Tools analogue -> Custom APIs */}
          <div className="bg-[#090514]/40 border border-slate-900 hover:border-violet-500/20 rounded-2xl p-6 hover:bg-[#0c071a]/60 backdrop-blur-sm shadow-xl hover:-translate-y-1 transition-all duration-300 text-center space-y-4">
            <div className="mx-auto w-12 h-12 rounded-full bg-purple-950/40 border border-purple-500/20 flex items-center justify-center text-purple-400">
              <Database className="w-5 h-5" />
            </div>
            <div className="space-y-2">
              <h3 className="font-display font-bold text-white text-base">API Coordination</h3>
              <p className="font-sans text-xs text-slate-400 leading-relaxed">
                Connecting applications through APIs, webhooks, and data workflows to enable seamless automation across systems.
              </p>
            </div>
          </div>

          {/* Card 4: Community & Support analogue -> Enterprise Support */}
          <div className="bg-[#090514]/40 border border-slate-900 hover:border-violet-500/20 rounded-2xl p-6 hover:bg-[#0c071a]/60 backdrop-blur-sm shadow-xl hover:-translate-y-1 transition-all duration-300 text-center space-y-4">
            <div className="mx-auto w-12 h-12 rounded-full bg-pink-950/40 border border-pink-500/20 flex items-center justify-center text-pink-400">
              <Users className="w-5 h-5" />
            </div>
            <div className="space-y-2">
              <h3 className="font-display font-bold text-white text-base">Enterprise IT Foundation</h3>
              <p className="font-sans text-xs text-slate-400 leading-relaxed">
                Leveraging 8+ years of enterprise IT experience in systems support, Microsoft Azure, Entra ID, networking, and operations.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
