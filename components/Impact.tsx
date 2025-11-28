import React from 'react';
import { TrendingUp, TrendingDown, ArrowRight, Users, Activity, MousePointerClick } from 'lucide-react';

const Impact: React.FC = () => {
    return (
        <section id="impact" className="py-24 relative bg-[#020617] overflow-hidden border-b border-white/5">
             {/* Background glow */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none"></div>

             {/* Chart Animations */}
             <style>{`
                @keyframes draw {
                    from { stroke-dashoffset: 300; }
                    to { stroke-dashoffset: 0; }
                }
                @keyframes fadeInArea {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                .animate-draw {
                    stroke-dasharray: 300;
                    stroke-dashoffset: 300;
                    animation: draw 2.5s cubic-bezier(0.4, 0, 0.2, 1) forwards;
                }
                .animate-draw-delay {
                    stroke-dasharray: 300;
                    stroke-dashoffset: 300;
                    animation: draw 2.5s cubic-bezier(0.4, 0, 0.2, 1) 0.5s forwards;
                }
                .animate-fade-area {
                    opacity: 0;
                    animation: fadeInArea 1.5s ease-out 0.5s forwards;
                }
             `}</style>

             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300 text-xs font-semibold uppercase tracking-wider mb-6">
                        Case Study
                    </div>
                    <h2 className="text-3xl md:text-5xl font-medium text-white mb-6">
                        Real Results, <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-purple-400 font-serif italic">Real Revenue</span>
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
                        We don't just promise growth; we engineer it. See the transformation of a client's performance after implementing the Equinox Growth System for just 90 days.
                    </p>
                </div>

                {/* Comparison Container */}
                <div className="flex flex-col lg:flex-row gap-8 items-center justify-center">
                    
                    {/* BEFORE CARD */}
                    <div className="w-full lg:w-1/2 max-w-lg relative group">
                        <div className="absolute -top-3 left-6 bg-slate-800 text-slate-400 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider border border-slate-700 z-20 shadow-xl">
                            Before (Day 0)
                        </div>
                        <div className="glass-card p-8 rounded-3xl border border-white/5 bg-slate-900/40 grayscale-[0.8] opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 hover:bg-slate-900/60">
                             {/* Dashboard Header */}
                             <div className="flex items-center justify-between mb-8">
                                <h3 className="text-slate-400 font-medium text-lg">Monthly Analytics</h3>
                                <div className="text-xs text-slate-500 font-mono bg-white/5 px-2 py-1 rounded">Last 30 Days</div>
                             </div>
                             
                             <div className="space-y-6">
                                {/* Metric 1 */}
                                <div>
                                    <div className="flex justify-between items-end mb-2">
                                        <div>
                                            <div className="text-xs text-slate-500 uppercase tracking-wider mb-1">Unique Visitors</div>
                                            <div className="text-3xl font-bold text-slate-300">2,104</div>
                                        </div>
                                        <span className="flex items-center text-red-400 text-sm font-medium bg-red-500/10 px-2 py-1 rounded"><TrendingDown size={14} className="mr-1"/> -12%</span>
                                    </div>
                                    {/* Flat/Down Chart */}
                                    <div className="h-12 w-full pt-2 opacity-50">
                                        <svg viewBox="0 0 100 25" className="w-full h-full text-slate-600 stroke-current fill-none" strokeWidth="2" preserveAspectRatio="none">
                                            <path d="M0 15 L 10 18 L 20 12 L 30 16 L 40 20 L 50 18 L 60 22 L 70 15 L 80 18 L 90 22 L 100 20" vectorEffect="non-scaling-stroke" className="animate-draw"/>
                                        </svg>
                                    </div>
                                </div>

                                <div className="h-px bg-white/5 w-full"></div>

                                {/* Metric 2 */}
                                <div>
                                    <div className="flex justify-between items-end mb-2">
                                        <div>
                                            <div className="text-xs text-slate-500 uppercase tracking-wider mb-1">Conversion Rate</div>
                                            <div className="text-3xl font-bold text-slate-300">0.85%</div>
                                        </div>
                                        <span className="flex items-center text-slate-500 text-sm font-medium bg-slate-500/10 px-2 py-1 rounded"><Activity size={14} className="mr-1"/> 0.0%</span>
                                    </div>
                                    {/* Flat Chart */}
                                    <div className="h-12 w-full pt-2 opacity-50">
                                        <svg viewBox="0 0 100 25" className="w-full h-full text-slate-600 stroke-current fill-none" strokeWidth="2" preserveAspectRatio="none">
                                            <path d="M0 20 L 20 20 L 40 18 L 60 20 L 80 19 L 100 20" vectorEffect="non-scaling-stroke" className="animate-draw-delay"/>
                                        </svg>
                                    </div>
                                </div>
                             </div>
                        </div>
                    </div>

                    {/* Arrow Indicator */}
                    <div className="flex-shrink-0 text-slate-600 lg:rotate-0 rotate-90 z-20">
                        <div className="w-14 h-14 rounded-full bg-[#020617] flex items-center justify-center border border-white/10 shadow-xl shadow-orange-500/5 relative">
                             <div className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-500 to-purple-600 opacity-20 blur-md"></div>
                             <ArrowRight size={24} className="text-orange-500 relative z-10"/>
                        </div>
                    </div>

                    {/* AFTER CARD */}
                    <div className="w-full lg:w-1/2 max-w-lg relative">
                        <div className="absolute -top-4 right-6 bg-gradient-to-r from-orange-500 to-purple-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg shadow-orange-500/40 z-20">
                            After (Day 90)
                        </div>
                        {/* Glow effect behind */}
                        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-purple-600/10 rounded-3xl blur-2xl -z-10 transform scale-95"></div>
                        
                        <div className="glass-card p-8 rounded-3xl border border-orange-500/30 bg-[#0A0F1E]/90 relative overflow-hidden ring-1 ring-white/10">
                             {/* Decorative Top Line */}
                             <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 via-purple-500 to-indigo-500"></div>
                             
                             <div className="flex items-center justify-between mb-8">
                                <h3 className="text-white font-medium text-lg">Growth Dashboard</h3>
                                <div className="flex items-center gap-2">
                                    <span className="relative flex h-2 w-2">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                                    </span>
                                    <span className="text-xs text-green-400 font-medium tracking-wide">LIVE DATA</span>
                                </div>
                             </div>
                             
                             <div className="space-y-6">
                                {/* Metric 1 (Visitors) */}
                                <div className="group">
                                    <div className="flex justify-between items-end mb-2">
                                        <div>
                                            <div className="text-xs text-orange-200/60 uppercase tracking-wider mb-1 flex items-center gap-1"><Users size={12}/> Unique Visitors</div>
                                            <div className="text-4xl font-bold text-white tracking-tight">19,842</div>
                                        </div>
                                        <span className="flex items-center text-emerald-400 text-sm font-bold bg-emerald-500/10 px-2 py-1 rounded border border-emerald-500/20 shadow-[0_0_10px_rgba(16,185,129,0.2)]">
                                            <TrendingUp size={14} className="mr-1"/> +842%
                                        </span>
                                    </div>
                                    {/* Upward Chart */}
                                    <div className="h-12 w-full pt-2">
                                        <svg viewBox="0 0 100 25" className="w-full h-full drop-shadow-[0_0_8px_rgba(249,115,22,0.4)]" preserveAspectRatio="none">
                                            <defs>
                                                <linearGradient id="chartGradient" x1="0" y1="0" x2="1" y2="0">
                                                    <stop offset="0%" stopColor="#F97316" />
                                                    <stop offset="100%" stopColor="#A855F7" />
                                                </linearGradient>
                                                <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
                                                    <stop offset="0%" stopColor="#F97316" stopOpacity="0.3" />
                                                    <stop offset="100%" stopColor="#A855F7" stopOpacity="0" />
                                                </linearGradient>
                                            </defs>
                                            {/* Filled Area - Uses Fade In animation instead of draw */}
                                            <path d="M0 22 C 20 20, 30 15, 50 10 C 70 5, 80 8, 100 2 V 25 H 0 Z" fill="url(#areaGradient)" className="animate-fade-area" />
                                            {/* Stroked Line - Uses Draw animation */}
                                            <path d="M0 22 C 20 20, 30 15, 50 10 C 70 5, 80 8, 100 2" fill="none" stroke="url(#chartGradient)" strokeWidth="3" strokeLinecap="round" vectorEffect="non-scaling-stroke" className="animate-draw" />
                                        </svg>
                                    </div>
                                </div>

                                <div className="h-px bg-white/10 w-full"></div>

                                {/* Metric 2 (Conversion) */}
                                <div className="group">
                                    <div className="flex justify-between items-end mb-2">
                                        <div>
                                            <div className="text-xs text-purple-200/60 uppercase tracking-wider mb-1 flex items-center gap-1"><MousePointerClick size={12}/> Conversion Rate</div>
                                            <div className="text-4xl font-bold text-white tracking-tight">4.25%</div>
                                        </div>
                                        <span className="flex items-center text-emerald-400 text-sm font-bold bg-emerald-500/10 px-2 py-1 rounded border border-emerald-500/20 shadow-[0_0_10px_rgba(16,185,129,0.2)]">
                                            <TrendingUp size={14} className="mr-1"/> +400%
                                        </span>
                                    </div>
                                    {/* Upward Chart 2 */}
                                    <div className="h-12 w-full pt-2">
                                        <svg viewBox="0 0 100 25" className="w-full h-full drop-shadow-[0_0_8px_rgba(168,85,247,0.4)]" preserveAspectRatio="none">
                                            <defs>
                                                <linearGradient id="purpleArea" x1="0" y1="0" x2="0" y2="1">
                                                    <stop offset="0%" stopColor="#A855F7" stopOpacity="0.3" />
                                                    <stop offset="100%" stopColor="#A855F7" stopOpacity="0" />
                                                </linearGradient>
                                            </defs>
                                            {/* Filled Area - Fade In */}
                                            <path d="M0 20 C 15 18, 40 15, 60 8 C 80 5, 90 4, 100 2 V 25 H 0 Z" fill="url(#purpleArea)" className="animate-fade-area" />
                                            {/* Stroked Line - Draw */}
                                            <path d="M0 20 C 15 18, 40 15, 60 8 C 80 5, 90 4, 100 2" fill="none" stroke="#A855F7" strokeWidth="3" strokeLinecap="round" vectorEffect="non-scaling-stroke" className="animate-draw-delay" />
                                        </svg>
                                    </div>
                                </div>
                             </div>
                        </div>
                    </div>

                </div>
             </div>
        </section>
    );
};

export default Impact;