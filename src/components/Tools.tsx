import React, { useState } from 'react';
import {
  GitFork,
  Zap,
  Layers,
  Sparkles,
  Cpu,
  Mic,
  Webhook,
  Database,
  Folder,
  FileSpreadsheet,
  Receipt,
  ListTodo,
  Mail,
  Slack,
  Facebook,
  Linkedin
} from 'lucide-react';

interface ToolItem {
  name: string;
  category: 'Core Engines' | 'Cognitive Layers' | 'Data & APIs' | 'Business SaaS';
  icon: React.ReactNode;
  description: string;
  badge: string;
  colorClass: string;
}

const getBrandColor = (name: string) => {
  switch (name) {
    case 'n8n': return '#FF6C37';
    case 'Zapier': return '#FF4A00';
    case 'Make.com': return '#6A1B9A';
    case 'Google Gemini AI': return '#4285F4';
    case 'OpenAI / OpenRouter': return '#10A37F';
    case 'Vapi AI': return '#0070F3';
    case 'Webhooks & REST APIs': return '#E91E63';
    case 'Airtable': return '#1860F2';
    case 'Google Drive': return '#34A853';
    case 'Google Sheets': return '#0F9D58';
    case 'Xero Accounting': return '#13B5EA';
    case 'Asana PM': return '#F06A6A';
    case 'Gmail Ingress': return '#EA4335';
    case 'Slack Alerts': return '#4A154B';
    case 'Meta Graph API': return '#1877F2';
    case 'LinkedIn API': return '#0A66C2';
    default: return '#8B5CF6';
  }
};

const getBrandFill = (name: string) => {
  switch (name) {
    case 'Zapier': return 'rgba(255, 74, 0, 0.1)';
    case 'Google Gemini AI': return 'rgba(66, 133, 244, 0.1)';
    case 'Airtable': return 'rgba(24, 96, 242, 0.1)';
    case 'Google Drive': return 'rgba(52, 168, 83, 0.1)';
    case 'Meta Graph API': return 'rgba(24, 119, 242, 0.1)';
    case 'LinkedIn API': return 'rgba(10, 102, 194, 0.1)';
    default: return 'transparent';
  }
};

export default function Tools() {
  const [selectedCat, setSelectedCat] = useState<string>('All');

  const categories = ['All', 'Core Engines', 'Cognitive Layers', 'Data & APIs', 'Business SaaS'];

  const tools: ToolItem[] = [
    {
      name: 'n8n',
      category: 'Core Engines',
      icon: <GitFork className="w-5 h-5" />,
      description: 'Primary self-hosted engine of choice for heavy nested loops, custom JSON arrays formatting, and state management.',
      badge: 'Orchestration',
      colorClass: 'text-red-500 bg-red-500/10'
    },
    {
      name: 'Zapier',
      category: 'Core Engines',
      icon: <Zap className="w-5 h-5" />,
      description: 'Instant SaaS integrations using pre-built webhooks and multi-step data handshakes across active campaigns.',
      badge: 'B2B Connectors',
      colorClass: 'text-orange-500 bg-orange-500/10'
    },
    {
      name: 'Make.com',
      category: 'Core Engines',
      icon: <Layers className="w-5 h-5" />,
      description: 'Visual flow modeling with granular iteration arrays, deep router trees, and advanced API error bypass blocks.',
      badge: 'Visual Automations',
      colorClass: 'text-purple-500 bg-purple-500/10'
    },
    {
      name: 'Google Gemini AI',
      category: 'Cognitive Layers',
      icon: <Sparkles className="w-5 h-5" />,
      description: 'Used for text classification, unstructured invoice data harvesting, and context-aware chat response parsing.',
      badge: 'LLMs & Vision',
      colorClass: 'text-cyan-500 bg-cyan-500/10'
    },
    {
      name: 'OpenAI / OpenRouter',
      category: 'Cognitive Layers',
      icon: <Cpu className="w-5 h-5" />,
      description: 'Powers resume tailored grading alignment checking, system diagnostics formatting, and cold outreach drafts.',
      badge: 'Cognitive Agent',
      colorClass: 'text-emerald-500 bg-emerald-500/10'
    },
    {
      name: 'Vapi AI',
      category: 'Cognitive Layers',
      icon: <Mic className="w-5 h-5" />,
      description: 'Super-low latency conversational voice streaming streams, STT coordination, and agent schedule routing.',
      badge: 'Voice AI Agents',
      colorClass: 'text-blue-500 bg-blue-500/10'
    },
    {
      name: 'Webhooks & REST APIs',
      category: 'Data & APIs',
      icon: <Webhook className="w-5 h-5" />,
      description: 'Deep handler of security headers, OAuth parameters, JSON structure parsing, and robust error retry queues.',
      badge: 'Custom Protocols',
      colorClass: 'text-pink-500 bg-pink-500/10'
    },
    {
      name: 'Airtable',
      category: 'Data & APIs',
      icon: <Database className="w-5 h-5" />,
      description: 'Serves as an operational relational database holding caller profiles, chat indexes, and telemetry dossiers.',
      badge: 'Relational Leads',
      colorClass: 'text-yellow-500 bg-yellow-500/10'
    },
    {
      name: 'Google Drive',
      category: 'Data & APIs',
      icon: <Folder className="w-5 h-5" />,
      description: 'Automated document cloning from base layout templates and nested dynamic directory organization paths.',
      badge: 'Asset Storage',
      colorClass: 'text-indigo-500 bg-indigo-500/10'
    },
    {
      name: 'Google Sheets',
      category: 'Data & APIs',
      icon: <FileSpreadsheet className="w-5 h-5" />,
      description: 'The standard data logger dashboard capturing performance logs, lead rows, and outstanding account status reports.',
      badge: 'Live Tabulation',
      colorClass: 'text-green-500 bg-green-500/10'
    },
    {
      name: 'Xero Accounting',
      category: 'Business SaaS',
      icon: <Receipt className="w-5 h-5" />,
      description: 'Connected via secure API hooks to query client accounts receivables, unpaid ledgers, and invoice status tables.',
      badge: 'Ledger Reporting',
      colorClass: 'text-teal-500 bg-teal-500/10'
    },
    {
      name: 'Asana PM',
      category: 'Business SaaS',
      icon: <ListTodo className="w-5 h-5" />,
      description: 'Triggered to spin up support workflows, open operational boards, and schedule team assignments smoothly.',
      badge: 'Team Checklists',
      colorClass: 'text-rose-500 bg-rose-500/10'
    },
    {
      name: 'Gmail Ingress',
      category: 'Business SaaS',
      icon: <Mail className="w-5 h-5" />,
      description: 'Scans inbox structures, parses file attachments stream, and compiles background email draft answers.',
      badge: 'Email Automation',
      colorClass: 'text-red-600 bg-red-600/10'
    },
    {
      name: 'Slack Alerts',
      category: 'Business SaaS',
      icon: <Slack className="w-5 h-5" />,
      description: 'Receives instant notification blocks, pipeline failure reports, logs details, and system run validation cards.',
      badge: 'Instant Telemetry',
      colorClass: 'text-indigo-600 bg-indigo-600/10'
    },
    {
      name: 'Meta Graph API',
      category: 'Business SaaS',
      icon: <Facebook className="w-5 h-5" />,
      description: 'Integrated to monitor Page inbox streams and send instant Support Agent replies to client PM threads.',
      badge: 'Social Channels',
      colorClass: 'text-blue-600 bg-blue-600/10'
    },
    {
      name: 'LinkedIn API',
      category: 'Business SaaS',
      icon: <Linkedin className="w-5 h-5" />,
      description: 'Hooks on social media schedulers to dispatch media packages, quote slides, and hashtags automated assets.',
      badge: 'B2B Publishing',
      colorClass: 'text-sky-600 bg-[#0A66C2]/10'
    }
  ];

  const [selectedTool, setSelectedTool] = useState<ToolItem>(tools[0]);

  // Two continuous rows to populate sliding marquees
  const row1 = tools.slice(0, 8);
  const row2 = tools.slice(8, 16);

  const isSelectedCategory = (tool: ToolItem) => {
    if (selectedCat === 'All') return true;
    return tool.category === selectedCat;
  };

  return (
    <section
      id="tools"
      className="py-24 bg-[#030008] border-t border-slate-900 relative overflow-hidden text-[#f1f1f1] transition-all duration-300"
    >
      {/* CSS Animation injection */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marquee {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-50%, 0, 0); }
        }
        @keyframes marquee-reverse {
          0% { transform: translate3d(-50%, 0, 0); }
          100% { transform: translate3d(0, 0, 0); }
        }
        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marquee 45s linear infinite;
        }
        .animate-marquee-reverse {
          display: flex;
          width: max-content;
          animation: marquee-reverse 45s linear infinite;
        }
      `}} />

      {/* Modern Radial Violet/Indigo Glows mapping the layout of One Peak */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#4c1d95]/10 blur-[140px] rounded-full pointer-events-none z-0 animate-pulse"></div>
      
      {/* Subtle Digital Grid overlay matching the attachment exactly */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(124,58,237,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(124,58,237,0.035)_1px,transparent_1px)] bg-[size:36px_36px] pointer-events-none z-0 opacity-60"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full mb-12">
        {/* Section Header */}
        <div className="text-left md:text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 text-xs font-mono text-[#a78bfa] uppercase tracking-widest font-semibold mb-3">
            <span className="w-2 h-2 rounded-full bg-violet-400"></span>
            Tech Stack Matrix
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4 font-display">
            Integrated Tools & Platforms
          </h2>
          <p className="text-sm sm:text-base text-slate-400 font-sans leading-relaxed">
            The actual engines, database layers, and SaaS endpoints operated within my deployed automations. Hover to pause or select below to read blueprints.
          </p>
        </div>

        {/* Filter Tab bar mimicking the premium glass filter pills */}
        <div className="flex flex-wrap items-center justify-start md:justify-center gap-2 mb-12 pb-4 border-b border-slate-900">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCat(cat)}
              className={`px-4 py-1.5 text-xs font-mono rounded-lg transition-all border cursor-pointer ${
                selectedCat === cat
                  ? 'bg-violet-500/15 text-violet-300 border-violet-500/35 shadow-lg shadow-violet-500/5'
                  : 'bg-slate-950/40 text-slate-400 border-slate-800/80 hover:bg-slate-900 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* CONTINUOUS DUAL SCROLLING MARQUEE CANVAS EXACTLY LIKE ATTACHMENT */}
      <div className="relative space-y-5 py-4 w-full select-none overflow-hidden z-10 pointer-events-none">
        
        {/* Horizontal Marquee ROW 1: Slides Left */}
        <div className="w-full flex overflow-hidden">
          <div className="animate-marquee gap-5 flex py-2 hover:[animation-play-state:paused]">
            {/* Duplicated 3 times to ensure a dense, mathematically flawless loop representation */}
            {[...row1, ...row1, ...row1].map((tool, idx) => {
              const isMatching = isSelectedCategory(tool);
              return (
                <div
                  key={`r1-${tool.name}-${idx}`}
                  onClick={() => setSelectedTool(tool)}
                  className={`w-[115px] h-[90px] sm:w-[150px] sm:h-[110px] bg-white rounded-2xl flex flex-col items-center justify-center p-3 sm:py-4 sm:px-3 shrink-0 pointer-events-auto transition-all duration-300 relative border border-slate-200/80 shadow-lg hover:shadow-xl hover:shadow-violet-550/10 cursor-pointer text-center ${
                    isMatching ? 'opacity-100 scale-100' : 'opacity-25 hover:opacity-85'
                  } ${
                    selectedTool.name === tool.name 
                      ? 'ring-2 ring-violet-500 ring-offset-2 ring-offset-[#030008] scale-[1.04] border-transparent shadow-violet-550/30 shadow-2xl z-20' 
                      : ''
                  }`}
                >
                  <div className="flex items-center justify-center h-8 sm:h-12 w-full">
                    {React.cloneElement(tool.icon as React.ReactElement, {
                      className: "w-7 h-7 sm:w-8 sm:h-8 stroke-[2.3]",
                      style: {
                        color: getBrandColor(tool.name),
                        fill: getBrandFill(tool.name)
                      }
                    })}
                  </div>
                  <span className="text-[9px] sm:text-[11px] font-mono font-bold text-slate-800 tracking-wider truncate max-w-full px-1 mt-2 block">
                    {tool.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Horizontal Marquee ROW 2: Slides Right */}
        <div className="w-full flex overflow-hidden">
          <div className="animate-marquee-reverse gap-5 flex py-2 hover:[animation-play-state:paused]">
            {/* Duplicated 3 times to guarantee continuous loop wrapping */}
            {[...row2, ...row2, ...row2].map((tool, idx) => {
              const isMatching = isSelectedCategory(tool);
              return (
                <div
                  key={`r2-${tool.name}-${idx}`}
                  onClick={() => setSelectedTool(tool)}
                  className={`w-[115px] h-[90px] sm:w-[150px] sm:h-[110px] bg-white rounded-2xl flex flex-col items-center justify-center p-3 sm:py-4 sm:px-3 shrink-0 pointer-events-auto transition-all duration-300 relative border border-slate-200/80 shadow-lg hover:shadow-xl hover:shadow-violet-550/10 cursor-pointer text-center ${
                    isMatching ? 'opacity-100 scale-100' : 'opacity-25 hover:opacity-85'
                  } ${
                    selectedTool.name === tool.name 
                      ? 'ring-2 ring-violet-500 ring-offset-2 ring-offset-[#030008] scale-[1.04] border-transparent shadow-violet-555/30 shadow-2xl z-20' 
                      : ''
                  }`}
                >
                  <div className="flex items-center justify-center h-8 sm:h-12 w-full">
                    {React.cloneElement(tool.icon as React.ReactElement, {
                      className: "w-7 h-7 sm:w-8 sm:h-8 stroke-[2.3]",
                      style: {
                        color: getBrandColor(tool.name),
                        fill: getBrandFill(tool.name)
                      }
                    })}
                  </div>
                  <span className="text-[9px] sm:text-[11px] font-mono font-bold text-slate-800 tracking-wider truncate max-w-full px-1 mt-2 block">
                    {tool.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

      </div>

      {/* ACTIVE CONNECTIONS DETAILED INSPECTOR PANEL */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 relative z-10 w-full">
        <div className="max-w-4xl mx-auto bg-[#090514]/90 border border-violet-500/20 rounded-3xl p-6 sm:p-8 backdrop-blur-xl shadow-2xl relative">
          
          {/* Subtle light glow behind active details card */}
          <div className="absolute top-0 right-0 transform translate-x-1/4 -translate-y-1/4 w-32 h-32 bg-indigo-550/10 blur-[80px] rounded-full pointer-events-none"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            
            {/* Left Box: Active Selected Icon Frame */}
            <div className="md:col-span-4 flex flex-col items-center md:items-start text-center md:text-left space-y-4 border-b md:border-b-0 md:border-r border-slate-900 pb-6 md:pb-0 md:pr-8">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-xl border border-slate-250 shrink-0">
                {React.cloneElement(selectedTool.icon as React.ReactElement, {
                  className: "w-9 h-9 stroke-[2.2]",
                  style: {
                    color: getBrandColor(selectedTool.name),
                    fill: getBrandFill(selectedTool.name)
                  }
                })}
              </div>
              <div className="space-y-1">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[9px] font-mono font-bold uppercase bg-violet-955/50 border border-violet-550/30 text-violet-300">
                  {selectedTool.badge}
                </div>
                <h3 className="text-xl font-black text-white leading-none font-display pt-1">
                  {selectedTool.name}
                </h3>
                <p className="text-[10px] font-mono text-slate-450 uppercase tracking-widest">
                  {selectedTool.category}
                </p>
              </div>
            </div>

            {/* Right Box: Selected Specs and Blueprints details */}
            <div className="md:col-span-8 space-y-4 text-left">
              <div className="space-y-1">
                <span className="text-[9px] font-mono text-violet-400 block uppercase tracking-wider font-bold">INTEGRATION BLUEPRINT & FLOW ROLE</span>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans font-medium">
                  {selectedTool.description}
                </p>
              </div>

              {/* Status and SLA telemetry matching first poster concept */}
              <div className="flex flex-wrap items-center gap-5 pt-4 border-t border-slate-900/40 text-xs font-mono text-slate-450">
                <span className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span className="text-slate-400">Endpoint Status:</span>
                  <strong className="text-emerald-400 font-bold uppercase text-[9px]">Active</strong>
                </span>
                <span className="text-slate-500">
                  Uptime SLA: <strong className="text-violet-400">100%</strong>
                </span>
                <span className="text-slate-500">
                  Response Class: <strong className="text-indigo-400">10x Speedup</strong>
                </span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
