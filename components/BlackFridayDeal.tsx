import React, { useState, useEffect } from 'react';
import { Timer, Check, ArrowRight, Zap, Shield, Rocket, Sparkles, ChevronDown, HelpCircle } from 'lucide-react';
import Button from './ui/Button';

const BlackFridayDeal: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({ hours: 11, minutes: 59, seconds: 59 });
  const [formData, setFormData] = useState({ name: '', email: '', website: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [activeField, setActiveField] = useState<string | null>(null);
  
  // Accordion States
  const [openFeature, setOpenFeature] = useState<number | null>(0); // Default first one open
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Simulated Countdown Timer
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return { hours: 24, minutes: 0, seconds: 0 }; // Reset for demo purposes
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const features = [
    {
      title: "24/7 Server Monitoring & Uptime Guarantee",
      description: "We employ enterprise-grade monitoring tools to check your site's health every 60 seconds. If an issue is detected, our engineers are alerted instantly to resolve it before it impacts your revenue."
    },
    {
      title: "Unlimited Content Updates & Design Tweaks",
      description: "Need to change text, swap images, or add a new testimonial? Just ping us. We handle all standard content updates within 24 hours so your site is always fresh."
    },
    {
      title: "Weekly SEO Audits & Competitor Analysis",
      description: "Stay ahead of the curve. We scan your site weekly for SEO opportunities and spy on your competitors' keyword strategies to keep you ranking high."
    },
    {
      title: "Priority Support Access (Slack Channel)",
      description: "Skip the email queue. You get a dedicated Slack channel with direct access to our engineering team for instant communication and faster resolutions."
    }
  ];

  const faqs = [
    {
      question: "Is this a long-term contract?",
      answer: "No. Our growth suite is a month-to-month subscription. You can cancel anytime with 1-click from your dashboard if you feel you've outgrown us (though few do!)."
    },
    {
      question: "Does the price increase after Black Friday?",
      answer: "Not for you. By claiming this deal, you lock in the $997/mo rate for as long as you maintain your active subscription, even when our public prices go up."
    },
    {
      question: "What is the turnaround time for updates?",
      answer: "For most standard requests (text changes, image swaps, blog posts), we have a 24-hour turnaround. More complex features or custom dev work usually take 2-3 business days."
    },
    {
      question: "What if I need a new website built from scratch?",
      answer: "This package is optimized for maintenance and growth of existing assets. If you need a full build or redesign, please book a strategy call using the button at the top of the page!"
    }
  ];

  return (
    <section id="black-friday" className="py-24 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[#020617]"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      
      {/* Dynamic Spotlights */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-orange-600/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Deal Container */}
        <div className="rounded-[2.5rem] border border-white/10 bg-white/[0.02] backdrop-blur-xl relative overflow-hidden">
          
          {/* "Limited Time" ribbon effect */}
          <div className="absolute top-0 right-0 bg-gradient-to-l from-red-600 to-orange-600 text-white text-xs font-bold px-12 py-1 rotate-45 translate-x-12 translate-y-8 shadow-lg shadow-orange-500/20 z-20">
            BLACK FRIDAY
          </div>

          <div className="p-8 md:p-12 lg:p-16 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            
            {/* Left Column: The Pitch & Features */}
            <div className="space-y-8">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-bold uppercase tracking-widest mb-6 animate-pulse">
                  <Timer size={14} />
                  <span>Offer Ends In: {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s</span>
                </div>
                
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                  Total Peace of Mind. <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-red-400 to-purple-500">
                    Unstoppable Growth.
                  </span>
                </h2>
                
                <p className="text-slate-300 text-lg leading-relaxed max-w-xl">
                  Secure our premium <strong>Monthly Maintenance & Growth Suite</strong> at our lowest price ever. We handle the tech, the updates, and the strategy while you focus on closing deals.
                </p>
              </div>

              {/* Pricing Block */}
              <div className="flex items-end gap-6 border-l-4 border-orange-500 pl-6 py-2">
                <div>
                  <div className="text-slate-500 text-lg line-through font-medium mb-1">Was $2,997/mo</div>
                  <div className="text-5xl font-bold text-white tracking-tight">$997<span className="text-2xl text-slate-400 font-normal">/mo</span></div>
                </div>
                <div className="bg-white/5 px-3 py-1 rounded-lg text-emerald-400 text-sm font-bold border border-emerald-500/20 mb-2">
                  SAVE 66%
                </div>
              </div>

              {/* Animated Feature Accordion */}
              <div className="space-y-4">
                <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-2">What's Included:</p>
                {features.map((feature, i) => (
                  <div 
                    key={i} 
                    className={`rounded-xl border transition-all duration-300 overflow-hidden ${
                      openFeature === i 
                        ? 'bg-white/10 border-orange-500/30 shadow-lg' 
                        : 'bg-white/5 border-white/5 hover:bg-white/[0.07]'
                    }`}
                  >
                    <button 
                      onClick={() => setOpenFeature(openFeature === i ? null : i)}
                      className="w-full flex items-center justify-between p-4 text-left focus:outline-none"
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${openFeature === i ? 'bg-orange-500' : 'bg-slate-700'}`}>
                          <Check size={12} className="text-white" strokeWidth={3} />
                        </div>
                        <span className={`text-sm font-medium transition-colors ${openFeature === i ? 'text-white' : 'text-slate-300'}`}>
                          {feature.title}
                        </span>
                      </div>
                      <ChevronDown 
                        size={16} 
                        className={`text-slate-500 transition-transform duration-300 ${openFeature === i ? 'rotate-180 text-orange-400' : ''}`} 
                      />
                    </button>
                    
                    <div 
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${openFeature === i ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}
                    >
                      <div className="p-4 pt-0 pl-12 text-sm text-slate-400 leading-relaxed">
                        {feature.description}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: The Premium Form */}
            <div className="relative">
              {/* Form Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-purple-600/20 rounded-3xl blur-2xl -z-10 transform translate-y-4"></div>

              {!isSubmitted ? (
                <div className="bg-[#0F172A]/80 backdrop-blur-md border border-white/10 rounded-3xl p-8 md:p-10 shadow-2xl relative group">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 via-red-500 to-purple-600 rounded-t-3xl"></div>
                  
                  <div className="text-center mb-8">
                     <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-4 text-orange-400">
                        <Sparkles size={24} />
                     </div>
                     <h3 className="text-2xl font-bold text-white">Claim Your Deal</h3>
                     <p className="text-slate-400 text-sm mt-2">Limited to the first 50 signups only.</p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    
                    {/* Name Input */}
                    <div className="relative">
                       <label className={`absolute left-4 transition-all duration-300 pointer-events-none ${activeField === 'name' || formData.name ? '-top-2.5 text-xs bg-[#0F172A] px-2 text-orange-400' : 'top-3.5 text-slate-500 text-sm'}`}>
                         Full Name
                       </label>
                       <input 
                         type="text" 
                         className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3.5 text-white outline-none focus:border-orange-500/50 focus:bg-white/[0.05] transition-all"
                         onFocus={() => setActiveField('name')}
                         onBlur={() => setActiveField(null)}
                         onChange={(e) => setFormData({...formData, name: e.target.value})}
                         value={formData.name}
                         required
                       />
                    </div>

                    {/* Email Input */}
                    <div className="relative">
                       <label className={`absolute left-4 transition-all duration-300 pointer-events-none ${activeField === 'email' || formData.email ? '-top-2.5 text-xs bg-[#0F172A] px-2 text-orange-400' : 'top-3.5 text-slate-500 text-sm'}`}>
                         Work Email
                       </label>
                       <input 
                         type="email" 
                         className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3.5 text-white outline-none focus:border-orange-500/50 focus:bg-white/[0.05] transition-all"
                         onFocus={() => setActiveField('email')}
                         onBlur={() => setActiveField(null)}
                         onChange={(e) => setFormData({...formData, email: e.target.value})}
                         value={formData.email}
                         required
                       />
                    </div>

                    {/* Website Input */}
                    <div className="relative">
                       <label className={`absolute left-4 transition-all duration-300 pointer-events-none ${activeField === 'website' || formData.website ? '-top-2.5 text-xs bg-[#0F172A] px-2 text-orange-400' : 'top-3.5 text-slate-500 text-sm'}`}>
                         Company Website URL
                       </label>
                       <input 
                         type="text" 
                         className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3.5 text-white outline-none focus:border-orange-500/50 focus:bg-white/[0.05] transition-all"
                         onFocus={() => setActiveField('website')}
                         onBlur={() => setActiveField(null)}
                         onChange={(e) => setFormData({...formData, website: e.target.value})}
                         value={formData.website}
                       />
                    </div>

                    {/* Checkbox */}
                    <label className="flex items-start gap-3 cursor-pointer group/check">
                      <div className="relative mt-0.5">
                        <input type="checkbox" className="peer sr-only" required />
                        <div className="w-5 h-5 rounded border border-slate-600 peer-checked:bg-orange-500 peer-checked:border-orange-500 transition-all flex items-center justify-center">
                           <Check size={14} className="text-white opacity-0 peer-checked:opacity-100" />
                        </div>
                      </div>
                      <span className="text-sm text-slate-400 group-hover/check:text-slate-300 transition-colors">
                        Lock in this price for 12 months. I understand this offer expires soon.
                      </span>
                    </label>

                    <Button variant="orange" className="w-full h-14 text-lg font-bold shadow-xl shadow-orange-500/20" shape="default">
                       Secure My Spot Now
                       <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                    
                    <div className="flex items-center justify-center gap-4 text-xs text-slate-500 pt-2">
                      <span className="flex items-center gap-1"><Shield size={12} /> SSL Secure</span>
                      <span className="flex items-center gap-1"><Rocket size={12} /> Instant Setup</span>
                    </div>

                  </form>
                </div>
              ) : (
                <div className="bg-[#0F172A]/80 backdrop-blur-md border border-white/10 rounded-3xl p-12 shadow-2xl h-full min-h-[500px] flex flex-col items-center justify-center text-center">
                    <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mb-6">
                        <Check size={40} className="text-green-500" />
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-4">You're In!</h3>
                    <p className="text-slate-300 mb-8 max-w-xs">
                        We've reserved your Black Friday rate. One of our growth strategists will be in touch shortly to finalize your setup.
                    </p>
                    <Button variant="secondary" onClick={() => setIsSubmitted(false)}>
                        Back to Home
                    </Button>
                </div>
              )}
            </div>
          </div>
          
          {/* FAQ Section */}
          <div className="border-t border-white/5 bg-black/20 p-8 md:p-12">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-2 mb-8 justify-center md:justify-start">
                  <HelpCircle className="text-slate-500" size={20} />
                  <h3 className="text-xl font-semibold text-white">Frequently Asked Questions</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                {faqs.map((faq, i) => (
                  <div 
                    key={i} 
                    className={`rounded-xl border transition-all duration-300 ${
                      openFaq === i 
                        ? 'bg-white/[0.07] border-white/20' 
                        : 'bg-transparent border-transparent hover:bg-white/[0.03]'
                    }`}
                  >
                    <button 
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      className="w-full flex items-center justify-between p-4 text-left focus:outline-none"
                    >
                      <span className="text-sm font-medium text-slate-200 pr-4">{faq.question}</span>
                      <ChevronDown 
                        size={16} 
                        className={`text-slate-500 flex-shrink-0 transition-transform duration-300 ${openFaq === i ? 'rotate-180 text-orange-400' : ''}`} 
                      />
                    </button>
                    <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openFaq === i ? 'max-h-32 opacity-100' : 'max-h-0 opacity-0'}`}>
                      <div className="p-4 pt-0 text-sm text-slate-400 leading-relaxed">
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BlackFridayDeal;