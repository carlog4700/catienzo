import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import {
  FolderGit2,
  Calendar,
  Layers,
  Sparkles,
  Zap,
  Cpu,
  Mail,
  MessageSquare,
  Database,
  ArrowRight,
  TrendingUp,
  CheckCircle2,
  GitBranch,
  ShieldAlert,
  Terminal,
  Play,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  Plus,
  Minus,
  X
} from 'lucide-react';
import { PROJECTS } from '../data';
import { Project, ProjectStep } from '../types';

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeProjectId, setActiveProjectId] = useState<string>(PROJECTS[0].id);
  const [isZoomed, setIsZoomed] = useState<boolean>(false);

  // High-fidelity image zoom adjustment states
  const [zoomScale, setZoomScale] = useState<number>(1);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  const activeProject = PROJECTS.find((p) => p.id === activeProjectId) || PROJECTS[0];

  // Auto-close zoom when active project changes to prevent mismatch/confusion
  useEffect(() => {
    setIsZoomed(false);
    setZoomScale(1);
    setDragOffset({ x: 0, y: 0 });
    setIsDragging(false);
  }, [activeProjectId]);

  // Sync zoom reset when lightbox state toggled off
  useEffect(() => {
    if (!isZoomed) {
      setZoomScale(1);
      setDragOffset({ x: 0, y: 0 });
      setIsDragging(false);
    }
  }, [isZoomed]);

  const handleZoomIn = () => {
    setZoomScale((prev) => Math.min(prev + 0.25, 4.5));
  };

  const handleZoomOut = () => {
    setZoomScale((prev) => {
      const next = Math.max(prev - 0.25, 1);
      if (next === 1) {
        setDragOffset({ x: 0, y: 0 });
      }
      return next;
    });
  };

  const handleResetZoom = () => {
    setZoomScale(1);
    setDragOffset({ x: 0, y: 0 });
  };

  // Escape key handler to close the fullscreen image modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsZoomed(false);
      }
    };
    if (isZoomed) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isZoomed]);

  // Categories based on projects
  const categories = ['All', 'Full AI Agent', 'Workflow Integration', 'Data Automation', 'Reporting'];

  const filteredProjects = PROJECTS.filter((proj) => {
    if (selectedCategory === 'All') return true;
    return proj.category === selectedCategory;
  });

  // Map step type to custom styles and icons
  const getStepStyle = (type: string) => {
    switch (type) {
      case 'trigger':
        return {
          icon: <Zap className="w-5 h-5 text-amber-500" />,
          bgColor: 'bg-amber-500/10 border-amber-500/20 text-amber-600 dark:text-amber-300',
          badgeText: 'Trigger (Webhook/Cron)',
        };
      case 'ai':
        return {
          icon: <Sparkles className="w-5 h-5 text-indigo-500 dark:text-indigo-400" />,
          bgColor: 'bg-indigo-500/10 border-indigo-500/20 text-indigo-600 dark:text-indigo-300',
          badgeText: 'Gemini AI / LLM Node',
        };
      case 'action':
        return {
          icon: <Cpu className="w-5 h-5 text-cyan-500 dark:text-cyan-400" />,
          bgColor: 'bg-cyan-500/10 border-cyan-500/20 text-cyan-600 dark:text-cyan-300',
          badgeText: 'Core Integration Step',
        };
      case 'database':
        return {
          icon: <Database className="w-5 h-5 text-blue-500 dark:text-blue-400" />,
          bgColor: 'bg-blue-500/10 border-blue-500/20 text-blue-600 dark:text-blue-300',
          badgeText: 'Database / File Cabinet',
        };
      case 'notification':
        return {
          icon: <Mail className="w-5 h-5 text-emerald-500 dark:text-emerald-400" />,
          bgColor: 'bg-emerald-500/10 border-emerald-500/20 text-emerald-600 dark:text-emerald-300',
          badgeText: 'System Alert / Notification',
        };
      case 'crm':
        return {
          icon: <Layers className="w-5 h-5 text-purple-500 dark:text-purple-400" />,
          bgColor: 'bg-purple-500/10 border-purple-500/20 text-purple-600 dark:text-purple-300',
          badgeText: 'CRM / Accounting Portal',
        };
      default:
        return {
          icon: <Play className="w-5 h-5 text-slate-500 dark:text-slate-405" />,
          bgColor: 'bg-slate-500/10 border-slate-500/20 text-slate-600 dark:text-slate-300',
          badgeText: 'Operation step',
        };
    }
  };

  return (
    <section
      id="projects"
      className="py-24 bg-white dark:bg-slate-950 border-t border-slate-205 dark:border-slate-900 relative transition-colors duration-300"
    >
      <div className="absolute top-10 right-10 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Section Title */}
        <div className="text-left max-w-3xl mb-16">
          <div className="flex items-center gap-1.5 text-xs font-mono text-cyan-600 dark:text-cyan-400 uppercase tracking-widest font-semibold mb-3">
            <span className="w-2 h-2 rounded-full bg-cyan-500"></span>
            Case Portfolios
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4 transition-colors">
            Deployed Automation Workflows
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-404 font-sans leading-relaxed transition-colors">
            Click any project to see its **Interactive Blueprint Flowchart**. I specialize in converting messy multi-step manual processes into stable, self-healing modular state machines.
          </p>
        </div>

        {/* Filter Toolbar */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-slate-200 dark:border-slate-900 transition-colors">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setSelectedCategory(cat);
                const firstOfCat = PROJECTS.find((p) => cat === 'All' || p.category === cat);
                if (firstOfCat) {
                  setActiveProjectId(firstOfCat.id);
                }
              }}
              className={`px-4 py-2 text-xs font-mono rounded-lg transition-all border cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-cyan-500/15 text-cyan-600 dark:text-cyan-400 border-cyan-500/35 shadow-sm'
                  : 'bg-slate-50 dark:bg-slate-900/45 text-slate-550 dark:text-slate-400 border-slate-200 dark:border-slate-850 hover:text-slate-900 dark:hover:text-slate-202 hover:bg-slate-100 dark:hover:bg-slate-900'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Main Content Layout Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Cards Listing (Col-span 5) */}
          <div className="lg:col-span-5 space-y-4">
            {filteredProjects.length === 0 ? (
              <div className="p-8 text-center bg-slate-100 dark:bg-slate-900/20 border border-slate-200 dark:border-slate-850 rounded-xl text-slate-500 font-mono text-xs transition-colors">
                No automations match this filter criteria.
              </div>
            ) : null}

            {filteredProjects.map((project) => {
              const isActive = activeProjectId === project.id;
              return (
                <button
                  key={project.id}
                  onClick={() => setActiveProjectId(project.id)}
                  className={`w-full text-left p-5 rounded-xl border transition-all duration-300 relative group cursor-pointer ${
                    isActive
                      ? 'bg-white dark:bg-slate-900 border-indigo-500/50 shadow-md dark:shadow-xl scale-[1.01]'
                      : 'bg-slate-50 dark:bg-slate-900/30 border-slate-200 dark:border-slate-855 hover:bg-slate-100 dark:hover:bg-slate-900/80 hover:border-slate-300 dark:hover:border-slate-800'
                  }`}
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[10px] font-mono uppercase bg-slate-100 dark:bg-slate-950 px-2 py-0.5 rounded text-indigo-600 dark:text-indigo-400 border border-slate-200 dark:border-slate-850 transition-colors">
                        {project.category}
                      </span>
                      <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400">
                        {project.tools.length} Modules Connected
                      </span>
                    </div>

                    <h3 className="text-sm font-bold text-slate-800 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-sans line-clamp-2 transition-colors">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {project.tools.slice(0, 4).map((tool) => (
                        <span
                          key={tool}
                          className="px-1.5 py-0.5 text-[9px] font-mono bg-white dark:bg-slate-950/80 border border-slate-200 dark:border-slate-900 text-slate-650 dark:text-slate-300 rounded transition-colors"
                        >
                          {tool}
                        </span>
                      ))}
                      {project.tools.length > 4 && (
                        <span className="text-[9px] font-mono text-cyan-600 dark:text-cyan-400 self-center">
                          +{project.tools.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Blueprint Flowchart Detail Panel (Col-span 7) */}
          <div className="lg:col-span-7">
            <div className="bg-slate-50/90 dark:bg-slate-900/60 backdrop-blur-xl border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 space-y-8 text-left shadow-lg dark:shadow-2xl relative overflow-hidden transition-colors">
              {/* Slate terminal accent */}
              <div className="absolute top-0 right-0 w-36 h-36 bg-gradient-to-br from-indigo-500/5 to-transparent rounded-full blur-3xl"></div>

              {/* Title & Stats */}
              <div className="space-y-4 border-b border-slate-200 dark:border-slate-850 pb-6 transition-colors">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <h3 className="text-lg sm:text-xl font-black text-slate-900 dark:text-white leading-tight transition-colors">
                    {activeProject.title}
                  </h3>
                  <div className="flex items-center gap-1.5 bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-500/20">
                    <TrendingUp className="w-3.5 h-3.5 text-indigo-500 dark:text-indigo-400" />
                    <span className="text-xs font-mono font-medium text-indigo-600 dark:text-indigo-300">
                      High Operational ROI
                    </span>
                  </div>
                </div>

                <p className="text-sm text-slate-650 dark:text-slate-300 font-sans leading-relaxed transition-colors">
                  {activeProject.longDescription || activeProject.description}
                </p>

                {/* Key Metrics Banner */}
                <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/25 flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 dark:text-emerald-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-mono text-emerald-600 dark:text-emerald-400 font-bold uppercase tracking-wider">
                      Business Metric Outcome & Performance Impact
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-200 mt-1 leading-relaxed transition-colors">
                      {activeProject.impact}
                    </p>
                  </div>
                </div>
              </div>

              {/* Core Workflow Board Architectural Screenshot */}
              {activeProject.image && (
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    <h4 className="text-xs font-mono uppercase text-slate-500 dark:text-slate-400 tracking-wider">
                      Deployment Block Workflow Screenshot
                    </h4>
                    <div className="flex items-center gap-1.5 text-cyan-600 dark:text-cyan-400 font-mono text-[10px]">
                      <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
                      Interactive Click-to-Zoom
                    </div>
                  </div>
                  <div 
                    onClick={() => setIsZoomed(true)}
                    className="rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-md relative group bg-slate-150 dark:bg-slate-950/40 cursor-zoom-in"
                  >
                    <img
                      src={activeProject.image}
                      alt={`${activeProject.title} Board Screenshot`}
                      className="w-full h-auto object-contain max-h-[480px] md:max-h-[520px] transition-transform duration-500 group-hover:scale-[1.008]"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-slate-950/15 dark:bg-slate-955/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="bg-slate-900/90 text-white font-mono text-[11px] px-3.5 py-2 rounded-lg backdrop-blur-xs flex items-center gap-2 shadow-lg border border-slate-800">
                        <ZoomIn className="w-4 h-4 text-cyan-400 animate-pulse" /> Expand full image
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {/* Lightbox / Fullscreen Image Zoom Modal */}
              {isZoomed && activeProject.image && createPortal(
                <div 
                  onClick={() => setIsZoomed(false)}
                  className="fixed inset-0 bg-slate-950/95 z-[100] flex flex-col items-center justify-between p-4 md:p-6 cursor-zoom-out backdrop-blur-md animate-fade-in select-none overflow-hidden"
                >
                  {/* Top bar with active project metadata and escape buttons */}
                  <div className="w-full max-w-5xl flex items-center justify-between gap-4 z-10 p-3 px-4 bg-slate-905/70 dark:bg-slate-900/50 backdrop-blur-md rounded-xl border border-slate-200/10 dark:border-slate-800/50" onClick={(e) => e.stopPropagation()}>
                    <div className="text-left">
                      <p className="text-[10px] font-mono text-cyan-400 font-bold uppercase tracking-widest">Case Portfolio Full Spec</p>
                      <h4 className="text-xs sm:text-sm font-extrabold text-white transition-colors">{activeProject.title}</h4>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <span className="hidden md:inline-block text-slate-400 font-mono text-[10px] bg-slate-950/80 px-2.5 py-1.5 rounded border border-slate-850 select-none">
                        ESC key / click outside to dismiss
                      </span>
                      <button 
                        onClick={() => setIsZoomed(false)}
                        className="p-2 rounded-lg bg-slate-900/85 border border-slate-800/60 hover:border-slate-700 hover:bg-slate-900 text-slate-400 hover:text-white transition-all shadow-xl cursor-pointer"
                        aria-label="Close zoom overlay"
                      >
                        <X className="w-5 h-5" />
                      </button>
                    </div>
                  </div>

                  {/* Panoramic Zooming and Panning Canvas area - Allowing overflow visible for unconstrained full-screen scale */}
                  <div 
                    className="flex-1 w-full flex items-center justify-center overflow-visible relative cursor-grab active:cursor-grabbing my-3 sm:my-4" 
                    onClick={(e) => e.stopPropagation()}
                    onWheel={(e) => {
                      e.stopPropagation();
                      const scaleFactor = 0.15;
                      let newScale = zoomScale + (e.deltaY < 0 ? scaleFactor : -scaleFactor);
                      newScale = Math.min(Math.max(1, newScale), 4.5); // high fidelity zoom up to 450%
                      if (newScale === 1) {
                        setDragOffset({ x: 0, y: 0 });
                      }
                      setZoomScale(newScale);
                    }}
                    onMouseDown={(e) => {
                      if (zoomScale <= 1) return;
                      setIsDragging(true);
                      setDragStart({ x: e.clientX - dragOffset.x, y: e.clientY - dragOffset.y });
                    }}
                    onMouseMove={(e) => {
                      if (!isDragging) return;
                      setDragOffset({
                        x: e.clientX - dragStart.x,
                        y: e.clientY - dragStart.y
                      });
                    }}
                    onMouseUp={() => setIsDragging(false)}
                    onMouseLeave={() => setIsDragging(false)}
                  >
                    <div 
                      className="transition-transform duration-100 ease-out select-none"
                      style={{
                        transform: `translate(${dragOffset.x}px, ${dragOffset.y}px) scale(${zoomScale})`,
                        transformOrigin: 'center center',
                      }}
                    >
                      <img
                        src={activeProject.image}
                        alt={`${activeProject.title} Full Resolution Screenshot`}
                        className="max-w-[95vw] max-h-[82vh] object-contain rounded-lg border border-slate-800/40 shadow-2xl select-none"
                        referrerPolicy="no-referrer"
                        style={{
                          imageRendering: 'auto'
                        }}
                      />
                    </div>
                  </div>

                  {/* Sleek Floating Glass Controller Pad */}
                  <div 
                    className="z-10 bg-slate-900/90 border border-slate-800/80 rounded-2xl p-3 sm:px-6 flex items-center justify-between gap-6 max-w-md w-full shadow-2xl backdrop-blur-lg mb-2"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div className="flex items-center gap-1.5 leading-none">
                      <button
                        onClick={handleZoomOut}
                        disabled={zoomScale <= 1}
                        className="p-2 rounded-lg bg-slate-800/80 border border-slate-700/60 text-slate-300 hover:text-white hover:bg-slate-750 disabled:opacity-40 disabled:cursor-not-allowed transition-all cursor-pointer"
                        title="Zoom Out"
                      >
                        <Minus className="w-4 h-4" />
                      </button>

                      <span className="text-xs font-mono text-white font-bold min-w-[50px] text-center select-none">
                        {Math.round(zoomScale * 100)}%
                      </span>

                      <button
                        onClick={handleZoomIn}
                        disabled={zoomScale >= 4.5}
                        className="p-2 rounded-lg bg-slate-800/80 border border-slate-700/60 text-slate-300 hover:text-white hover:bg-slate-750 disabled:opacity-40 disabled:cursor-not-allowed transition-all cursor-pointer"
                        title="Zoom In"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="h-6 w-[1px] bg-slate-800"></div>

                    <div className="flex items-center gap-3">
                      <button
                        onClick={handleResetZoom}
                        className="text-xs font-mono font-bold bg-slate-800 hover:bg-slate-750 border border-slate-700/65 text-cyan-400 px-3.5 py-2 rounded-xl flex items-center gap-1.5 transition-all cursor-pointer"
                        title="Fit window"
                      >
                        <RotateCcw className="w-3.5 h-3.5" />
                        Reset
                      </button>

                      <span className="hidden sm:inline-block text-[10px] font-mono text-slate-400 select-none">
                        {zoomScale > 1 ? 'Drag to pan' : 'Scroll/button to zoom'}
                      </span>
                    </div>
                  </div>
                </div>,
                document.body
              )}

              {/* INTERACTIVE BLUEPRINT FLOWCHART VISUALIZATION */}
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-2">
                  <h4 className="text-xs font-mono uppercase text-slate-500 dark:text-slate-400 tracking-wider">
                    Pipeline Data Flow Blueprint
                  </h4>
                  <span className="text-[10px] font-mono text-cyan-600 dark:text-cyan-400 animate-pulse flex items-center gap-1">
                    <GitBranch className="w-3.5 h-3.5" /> Active webhook listener live
                  </span>
                </div>

                {/* Draw sequential nodes */}
                <div className="space-y-3.5 relative pl-4 md:pl-0">
                  {activeProject.steps.map((step, idx) => {
                    const nodeStyles = getStepStyle(step.type);
                    return (
                      <div key={idx} className="relative">
                        {/* Connecting line */}
                        {idx < activeProject.steps.length - 1 && (
                          <div className="absolute left-6 top-11 bottom-0 w-[2px] bg-slate-200 dark:bg-slate-800 flex items-center justify-center pointer-events-none transition-colors">
                            {/* Animated marching payload bead */}
                            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-bounce"></span>
                          </div>
                        )}

                        <div className="flex gap-4 items-start bg-white dark:bg-slate-950/80 p-4 rounded-xl border border-slate-150 dark:border-slate-850 hover:border-slate-300 dark:hover:border-slate-750 transition-all shadow-xs duration-200">
                          {/* Left icon circle */}
                          <div className={`p-2.5 rounded-lg border flex items-center justify-center transition-colors ${nodeStyles.bgColor}`}>
                            {nodeStyles.icon}
                          </div>

                          {/* Right text panel */}
                          <div className="space-y-1">
                            <div className="flex flex-wrap items-center gap-2">
                              <span className="text-xs font-sans font-bold text-slate-800 dark:text-white transition-colors">
                                {idx + 1}. {step.name}
                              </span>
                              <span className="text-[9px] font-mono bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-850 px-2 py-0.5 rounded text-slate-550 dark:text-slate-400 uppercase transition-colors">
                                {nodeStyles.badgeText}
                              </span>
                            </div>
                            <p className="text-xs text-slate-500 dark:text-slate-400 leading-normal transition-colors">
                              {step.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Technology details */}
              <div className="pt-4 border-t border-slate-200 dark:border-slate-850 transition-colors">
                <span className="text-xs font-mono text-slate-500 dark:text-slate-400">Integrated Services: </span>
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {activeProject.tools.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 text-xs font-mono bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-855 text-slate-700 dark:text-slate-300 rounded transition-colors"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
