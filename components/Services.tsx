import React from 'react';
import { Search, PenTool, Share2, MousePointerClick, ArrowUpRight, BarChart, Target, Zap, Layout } from 'lucide-react';
import Button from './ui/Button';

const Services: React.FC = () => {
  const services = [
    {
      title: "Paid Acquisition",
      subtitle: "Meta & Google Ads",
      description: "Allocated budget management for high-ROAS campaigns. We handle creative testing, audience segmentation, and bid optimization.",
      icon: MousePointerClick,
      color: "orange",
      features: ["Creative A/B Testing", "Retargeting funnels", "Scale-up strategy"]
    },
    {
      title: "Organic Growth",
      subtitle: "SEO & Content",
      description: "Long-term traffic infrastructure. We build authority through technical SEO, backlinking, and high-value content clusters.",
      icon: Search,
      color: "purple",
      features: ["Technical Audits", "Keyword Dominance", "Content Production"]
    },
    {
      title: "Conversion Rate",
      subtitle: "CRO & Analytics",
      description: "Turning visitors into buyers. We analyze user behavior to optimize landing pages and checkout flows for maximum revenue.",
      icon: BarChart,
      color: "emerald",
      features: ["Heatmap Analysis", "Funnel Optimization", "Checkout Speed"]
    },
    {
      title: "Brand Automation",
      subtitle: "Email & SMS",
      description: "Lifecycle marketing that prints money while you sleep. Automated flows for abandoned carts, welcome series, and retention.",
      icon: Zap,
      color: "pink",
      features: ["Klaviyo Setup", "SMS Campaigns", "LTV Maximization"]
    }
  ];

  return (
    <section id="services" className="py-24 relative border-t border-slate-200 dark:border-white/5 bg-slate-50 dark:bg-[#020617] transition-colors duration-300">
       {/* Decorative gradient line */}
       <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-500/50 to-transparent opacity-50"></div>
       
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-3xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-600 dark:text-orange-400 text-xs font-semibold uppercase tracking-wider mb-6">
                    Service Allocations
                </div>
                <h2 className="text-3xl md:text-5xl font-medium text-slate-900 dark:text-white leading-tight">
                    Comprehensive <span className="font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-purple-500 dark:from-orange-400 dark:to-purple-400">Growth Solutions</span>
                </h2>
                <p className="mt-6 text-slate-600 dark:text-slate-400 text-lg max-w-2xl leading-relaxed">
                    We combine creativity with data to deliver marketing strategies that scale with your business. Each service is allocated specific resources to ensure maximum impact.
                </p>
            </div>
            
            <a href="#contact" className="hidden md:flex items-center gap-2 text-slate-900 dark:text-white hover:text-orange-500 dark:hover:text-orange-400 transition-colors pb-2 group font-medium">
                View all services
                <ArrowUpRight className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" size={18} />
            </a>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, index) => (
                <div 
                    key={index} 
                    className="group relative p-8 rounded-3xl bg-white dark:bg-white/[0.02] border border-slate-200 dark:border-white/5 hover:bg-slate-50 dark:hover:bg-white/[0.04] hover:shadow-lg dark:hover:border-white/10 transition-all duration-300 overflow-hidden hover:-translate-y-1"
                >
                    <div className="flex items-start justify-between mb-6">
                        <div className={`w-14 h-14 rounded-2xl bg-${service.color}-500/10 flex items-center justify-center border border-${service.color}-500/20 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                            <service.icon className={`text-${service.color}-600 dark:text-${service.color}-400`} size={28} />
                        </div>
                        <span className="text-xs font-mono text-slate-500 border border-slate-200 dark:border-white/10 px-2 py-1 rounded bg-slate-100 dark:bg-black/20">
                            {service.subtitle}
                        </span>
                    </div>
                    
                    <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-3">{service.title}</h3>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm mb-6 min-h-[60px]">
                        {service.description}
                    </p>

                    <div className="pt-6 border-t border-slate-100 dark:border-white/5 flex flex-wrap gap-2">
                        {service.features.map((feature, i) => (
                            <span key={i} className="text-xs font-medium text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-white/5 px-2 py-1 rounded-md flex items-center gap-1">
                                <Target size={10} className={`text-${service.color}-500 dark:text-${service.color}-400`} />
                                {feature}
                            </span>
                        ))}
                    </div>
                </div>
            ))}
         </div>
         
         <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-4">
            <div className="md:hidden w-full">
                <Button variant="outline" className="w-full" href="#contact">
                    View all services
                </Button>
            </div>
            <p className="text-slate-500 dark:text-slate-400 text-sm">
                Unsure which allocation fits your goals? <a href="#contact" className="text-orange-500 hover:text-orange-600 dark:hover:text-orange-400 font-medium underline decoration-orange-500/30 underline-offset-4">Book a free demo</a> to diagnose your gaps.
            </p>
         </div>
       </div>
    </section>
  );
};

export default Services;