import React from 'react';
import Button from './ui/Button';
import { BarChart2, ArrowRight } from 'lucide-react';

const FinalCTA: React.FC = () => {
  return (
    <section className="py-24 bg-white dark:bg-[#020617] border-t border-slate-200 dark:border-white/5 relative overflow-hidden transition-colors duration-300">
        {/* Background elements */}
        <div className="absolute inset-0 bg-grid-white opacity-[0.03]"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-orange-500/5 blur-[100px] rounded-full pointer-events-none"></div>
        
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
            <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-purple-600 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-2xl shadow-orange-500/20 rotate-6 hover:rotate-12 transition-transform duration-500">
                <BarChart2 className="text-white" size={40} />
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight">
                Turn Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-purple-500">Analytics</span> Into Revenue
            </h2>
            
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 mb-10 leading-relaxed max-w-2xl mx-auto font-light">
                Most websites lose 90% of their traffic before a purchase. You don't need a premium plan to fix that. 
                <br className="hidden md:block" />
                <span className="text-slate-900 dark:text-white font-medium mt-2 block">
                    Our Free Demo includes a comprehensive site audit to identify these leaks instantly.
                </span>
            </p>
            
            <div className="flex flex-col items-center gap-4">
                <Button variant="orange" size="lg" shape="pill" href="#contact" className="shadow-xl shadow-orange-500/30 px-10 py-4 text-lg w-full sm:w-auto hover:scale-105 transform transition-transform">
                    Book Free Demo Call
                    <ArrowRight size={22} className="ml-2" />
                </Button>
                <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">
                    No credit card required • Zero commitment • 100% Free
                </p>
            </div>
        </div>
    </section>
  );
};

export default FinalCTA;