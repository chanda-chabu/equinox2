import React from 'react';
import { Layers, Command, MessageCircle, Database, BarChart3, Globe, ShoppingCart, Zap } from 'lucide-react';

const Features: React.FC = () => {
  const integrations = [
    { name: "Shopify", icon: ShoppingCart, color: "text-green-400", bg: "bg-green-500/10", border: "border-green-500/20" },
    { name: "Meta Ads", icon: Globe, color: "text-blue-400", bg: "bg-blue-500/10", border: "border-blue-500/20" },
    { name: "Google Analytics", icon: BarChart3, color: "text-orange-400", bg: "bg-orange-500/10", border: "border-orange-500/20" },
    { name: "HubSpot", icon: Database, color: "text-orange-600", bg: "bg-orange-600/10", border: "border-orange-600/20" },
    { name: "Slack", icon: MessageCircle, color: "text-purple-400", bg: "bg-purple-500/10", border: "border-purple-500/20" },
    { name: "Zapier", icon: Zap, color: "text-orange-500", bg: "bg-orange-500/10", border: "border-orange-500/20" },
  ];

  return (
    <section id="features" className="py-24 relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-grid-white opacity-[0.03]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            
            {/* Left: Content */}
            <div className="w-full md:w-1/2">
                <span className="text-xs font-semibold tracking-wider text-purple-400 uppercase mb-3 block">Seamless Ecosystem</span>
                <h2 className="text-3xl md:text-5xl font-medium text-white mb-6 leading-tight">
                    Connected to Your <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-purple-400">Favorite Tools</span>
                </h2>
                <p className="text-slate-400 text-lg leading-relaxed mb-8">
                    Our platform sits at the center of your growth stack. We ingest data from your CRM, ad platforms, and store to provide a unified "Source of Truth" for your revenue.
                </p>
                
                <ul className="space-y-4">
                    {[
                        "Real-time ROI tracking across all channels",
                        "Automated lead syncing to your CRM",
                        "Dynamic audience updates based on purchase behavior"
                    ].map((item, i) => (
                        <li key={i} className="flex items-center gap-3 text-slate-300">
                            <div className="w-6 h-6 rounded-full bg-green-500/10 flex items-center justify-center border border-green-500/20">
                                <Zap size={14} className="text-green-400" />
                            </div>
                            {item}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Right: Visual Integration Hub */}
            <div className="w-full md:w-1/2 relative">
                <div className="relative aspect-square max-w-md mx-auto">
                    {/* Center Node (Equinox) */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-[#0F172A] rounded-full border border-white/10 shadow-[0_0_50px_rgba(249,115,22,0.3)] z-20 flex items-center justify-center group">
                        <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-purple-600 rounded-lg flex items-center justify-center">
                            <div className="w-4 h-4 bg-white rounded-full"></div>
                        </div>
                        {/* Pulse Ring */}
                        <div className="absolute inset-0 rounded-full border border-orange-500/50 animate-ping opacity-20"></div>
                    </div>

                    {/* Orbiting Nodes */}
                    {integrations.map((tool, i) => {
                        const angle = (i * 360) / integrations.length;
                        const radius = 140; // Distance from center
                        const x = Math.cos((angle * Math.PI) / 180) * radius;
                        const y = Math.sin((angle * Math.PI) / 180) * radius;

                        return (
                            <div 
                                key={i}
                                className="absolute top-1/2 left-1/2 z-10"
                                style={{ transform: `translate(-50%, -50%) translate(${x}px, ${y}px)` }}
                            >
                                {/* Connection Line */}
                                <div 
                                    className="absolute top-1/2 left-1/2 h-[1px] bg-gradient-to-r from-orange-500/50 to-transparent origin-left w-[140px] -z-10"
                                    style={{ 
                                        width: `${radius}px`,
                                        transform: `translate(-50%, -50%) rotate(${angle + 180}deg) translate(${radius/2}px, 0)`,
                                    }}
                                ></div>

                                {/* Icon Bubble */}
                                <div className={`w-16 h-16 rounded-2xl bg-[#020617] border ${tool.border} flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300 group`}>
                                    <tool.icon className={tool.color} size={24} />
                                    
                                    {/* Tooltip */}
                                    <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity px-2 py-1 bg-white/10 backdrop-blur-md rounded text-xs text-white whitespace-nowrap pointer-events-none">
                                        {tool.name}
                                    </div>
                                </div>
                            </div>
                        );
                    })}

                    {/* Orbit Rings */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] rounded-full border border-white/5 border-dashed animate-[spin_60s_linear_infinite]"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full border border-white/5 opacity-50"></div>
                </div>
            </div>

        </div>
      </div>
    </section>
  );
};

export default Features;