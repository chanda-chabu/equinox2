import React from 'react';
import { Twitter, Instagram, Linkedin, Facebook, Youtube, ArrowRight } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-[#020617] border-t border-white/5 pt-20 pb-10 overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-orange-500/5 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            
            {/* Newsletter Section */}
            <div className="mb-20 p-8 md:p-12 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-purple-600/10 opacity-50 group-hover:opacity-70 transition-opacity duration-500"></div>
                <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="text-center md:text-left">
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Join the inner circle</h3>
                        <p className="text-slate-400">Get the latest 2025 marketing tactics delivered to your inbox.</p>
                    </div>
                    <div className="w-full md:w-auto flex-1 max-w-md">
                        <form className="relative flex items-center" onSubmit={(e) => e.preventDefault()}>
                            <input 
                                type="email" 
                                placeholder="Enter your email" 
                                className="w-full bg-[#020617] border border-white/10 text-white rounded-full py-4 pl-6 pr-14 focus:outline-none focus:border-orange-500/50 transition-colors placeholder:text-slate-600"
                            />
                            <button className="absolute right-2 p-2 bg-white text-black rounded-full hover:bg-orange-500 hover:text-white transition-colors transform hover:scale-105 active:scale-95">
                                <ArrowRight size={20} />
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-12 gap-12 mb-16">
                {/* Brand Column */}
                <div className="col-span-2 md:col-span-4">
                    <div className="flex items-center gap-2 mb-6">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-orange-500 to-purple-600 flex items-center justify-center shadow-lg shadow-orange-500/20 p-1.5">
                            {/* Custom EX Monogram SVG */}
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-white w-full h-full">
                                <path d="M4 6h10" />
                                <path d="M4 12h8" />
                                <path d="M4 18h10" />
                                <path d="M14 6l6 12" />
                                <path d="M20 6l-6 12" />
                            </svg>
                        </div>
                        <span className="text-xl font-bold text-white tracking-tight">Equinox</span>
                    </div>
                    <p className="text-slate-400 mb-8 leading-relaxed max-w-sm">
                        The growth engine for modern brands. We combine data science with creative excellence to scale revenue in the AI era.
                    </p>
                    <div className="flex items-center gap-3 flex-wrap">
                        {[
                            { icon: Twitter, href: "#", label: "Twitter" },
                            { icon: Instagram, href: "#", label: "Instagram" },
                            { icon: Linkedin, href: "#", label: "LinkedIn" },
                            { icon: Youtube, href: "#", label: "YouTube" },
                            { icon: Facebook, href: "#", label: "Facebook" }
                        ].map((social, i) => (
                            <a 
                                key={i} 
                                href={social.href} 
                                aria-label={social.label}
                                className="w-10 h-10 rounded-full bg-white/5 border border-white/5 flex items-center justify-center text-slate-400 hover:bg-white hover:text-black hover:scale-110 transition-all duration-300"
                            >
                                <social.icon size={18} />
                            </a>
                        ))}
                    </div>
                </div>

                {/* Links Columns */}
                <div className="col-span-1 md:col-span-2 md:col-start-6">
                    <h4 className="text-white font-semibold mb-6">Services</h4>
                    <ul className="space-y-4 text-sm text-slate-400">
                        <li><a href="#" className="hover:text-orange-500 transition-colors">Paid Acquisition</a></li>
                        <li><a href="#" className="hover:text-orange-500 transition-colors">SEO & Content</a></li>
                        <li><a href="#" className="hover:text-orange-500 transition-colors">Conversion Rate</a></li>
                        <li><a href="#" className="hover:text-orange-500 transition-colors">Email Automation</a></li>
                    </ul>
                </div>

                <div className="col-span-1 md:col-span-2">
                    <h4 className="text-white font-semibold mb-6">Company</h4>
                    <ul className="space-y-4 text-sm text-slate-400">
                        <li><a href="#" className="hover:text-orange-500 transition-colors">About Us</a></li>
                        <li><a href="#" className="hover:text-orange-500 transition-colors">Case Studies</a></li>
                        <li><a href="#" className="hover:text-orange-500 transition-colors">Careers</a></li>
                        <li><a href="#contact" className="hover:text-orange-500 transition-colors">Contact</a></li>
                    </ul>
                </div>

                <div className="col-span-1 md:col-span-2">
                    <h4 className="text-white font-semibold mb-6">Legal</h4>
                    <ul className="space-y-4 text-sm text-slate-400">
                        <li><a href="#" className="hover:text-orange-500 transition-colors">Privacy Policy</a></li>
                        <li><a href="#" className="hover:text-orange-500 transition-colors">Terms of Service</a></li>
                        <li><a href="#" className="hover:text-orange-500 transition-colors">Cookie Policy</a></li>
                    </ul>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
                <p>&copy; 2025 Equinox Marketing Inc. All rights reserved.</p>
                <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    <span>Systems Operational</span>
                </div>
            </div>
        </div>
    </footer>
  );
};

export default Footer;