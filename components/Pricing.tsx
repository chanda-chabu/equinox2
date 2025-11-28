import React, { useState } from 'react';
import { Check, X } from 'lucide-react';
import Button from './ui/Button';
import PaymentModal from './PaymentModal';

const Pricing: React.FC = () => {
  const [isYearly, setIsYearly] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<{name: string, price: string, period: string} | null>(null);

  const handlePlanClick = (plan: any) => {
    // If it's a paid plan with a price (not $0 and not Custom), open payment modal
    if (plan.price !== "$0" && plan.price !== "Custom") {
        setSelectedPlan({
            name: plan.name,
            price: plan.price,
            period: plan.period
        });
    } else {
        // Otherwise scroll to contact (for Free Demo or Enterprise)
        const element = document.getElementById('contact');
        if (element) {
           const headerOffset = 80;
           const elementPosition = element.getBoundingClientRect().top;
           const offsetPosition = elementPosition + window.scrollY - headerOffset;
           window.scrollTo({ top: offsetPosition, behavior: "smooth" });
        }
    }
  };

  const plans = [
    {
      name: "Free Demo Plan",
      price: "$0",
      period: "forever",
      description: "Experience the power of Equinox with zero commitment. Perfect for analysis.",
      features: [
        "Website & SEO Audit",
        "Competitor Analysis Report",
        "30-min Strategy Consultation",
        "Basic Growth Roadmap"
      ],
      notIncluded: [
        "Implementation",
        "24/7 Support",
        "Dedicated Account Manager"
      ],
      cta: "Book Demo",
      variant: "outline",
      popular: false
    },
    {
      name: "Monthly Plan",
      price: "$2,997",
      period: "per month",
      description: "Full-service growth engine for startups scaling from $10k to $100k MRR.",
      features: [
        "Paid Ads Management (Meta/Google)",
        "Social Media Content (12 posts/mo)",
        "Weekly Performance Reporting",
        "Email Marketing Automation",
        "Slack Support Channel"
      ],
      notIncluded: [
        "CRO Experiments",
        "Video Production"
      ],
      cta: "Start Monthly",
      variant: "primary",
      popular: false
    },
    {
      name: "Yearly Plan",
      price: "$2,497",
      period: "per month, billed yearly",
      description: "Maximum value for committed brands ready to dominate their niche.",
      features: [
        "Everything in Monthly",
        "Priority Ad Account Whitelisting",
        "Advanced CRO & A/B Testing",
        "Quarterly Business Reviews",
        "24/7 Priority Support"
      ],
      notIncluded: [],
      cta: "Go Yearly & Save",
      variant: "orange",
      popular: true,
      badge: "Best Value"
    },
    {
      name: "Premium Plan",
      price: "Custom",
      period: "based on needs",
      description: "Enterprise-grade infrastructure for brands doing $1M+ annually.",
      features: [
        "Dedicated Growth Squad (5 members)",
        "Full-Stack Development Support",
        "Custom Video Production Studio",
        "Influencer Network Access",
        "Executive Dashboarding"
      ],
      notIncluded: [],
      cta: "Contact Sales",
      variant: "white",
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-24 relative bg-slate-50 dark:bg-[#020617] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Payment Modal */}
        {selectedPlan && (
            <PaymentModal 
                isOpen={true}
                onClose={() => setSelectedPlan(null)}
                planName={selectedPlan.name}
                price={selectedPlan.price}
                billingPeriod={selectedPlan.period}
            />
        )}

        {/* Header */}
        <div className="text-center mb-12">
            <span className="text-xs font-semibold tracking-wider text-orange-500 dark:text-orange-400 uppercase mb-3 block">Simple Pricing</span>
            <h2 className="text-3xl md:text-5xl font-medium text-slate-900 dark:text-white mb-6">
                Choose Your <span className="font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-purple-500 dark:from-orange-400 dark:to-purple-400">Growth Velocity</span>
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto mb-8">
                Transparent pricing tailored to your stage of business. No hidden fees, just results.
            </p>

            {/* Toggle */}
            <div className="flex items-center justify-center gap-4">
                <span className={`text-sm font-medium ${!isYearly ? 'text-slate-900 dark:text-white' : 'text-slate-500'}`}>Monthly</span>
                <button 
                    onClick={() => setIsYearly(!isYearly)}
                    className="w-14 h-7 bg-slate-200 dark:bg-white/10 rounded-full relative p-1 transition-colors hover:bg-slate-300 dark:hover:bg-white/20"
                >
                    <div className={`w-5 h-5 bg-orange-500 rounded-full shadow-lg transition-transform duration-300 ${isYearly ? 'translate-x-7' : 'translate-x-0'}`}></div>
                </button>
                <span className={`text-sm font-medium ${isYearly ? 'text-slate-900 dark:text-white' : 'text-slate-500'}`}>
                    Yearly <span className="text-emerald-600 dark:text-emerald-400 text-xs font-bold ml-1">(Save 20%)</span>
                </span>
            </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {plans.map((plan, index) => (
                <div 
                    key={index}
                    className={`relative p-6 rounded-3xl border flex flex-col h-full transition-all duration-300 hover:-translate-y-2 ${
                        plan.popular 
                            ? 'bg-white dark:bg-white/[0.03] border-orange-500/50 shadow-2xl shadow-orange-500/10' 
                            : 'bg-white dark:bg-white/[0.02] border-slate-200 dark:border-white/5 hover:shadow-lg dark:hover:bg-white/[0.04]'
                    }`}
                >
                    {plan.badge && (
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-orange-500 text-white text-xs font-bold rounded-full shadow-lg">
                            {plan.badge}
                        </div>
                    )}

                    <div className="mb-6">
                        <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">{plan.name}</h3>
                        <div className="flex items-baseline gap-1">
                            <span className="text-3xl font-bold text-slate-900 dark:text-white">{plan.price}</span>
                            {plan.period !== "forever" && <span className="text-xs text-slate-500">{isYearly && plan.name === "Monthly Plan" ? "billed yearly" : plan.period}</span>}
                        </div>
                        <p className="text-sm text-slate-600 dark:text-slate-400 mt-4 leading-relaxed h-16">
                            {plan.description}
                        </p>
                    </div>

                    <div className="flex-1 space-y-3 mb-8">
                        {plan.features.map((feat, i) => (
                            <div key={i} className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300">
                                <Check size={16} className="text-emerald-500 dark:text-emerald-400 flex-shrink-0 mt-0.5" />
                                <span>{feat}</span>
                            </div>
                        ))}
                        {plan.notIncluded.map((feat, i) => (
                            <div key={i} className="flex items-start gap-2 text-sm text-slate-400 dark:text-slate-600">
                                <X size={16} className="flex-shrink-0 mt-0.5" />
                                <span>{feat}</span>
                            </div>
                        ))}
                    </div>

                    <Button 
                        variant={plan.variant as any} 
                        className="w-full"
                        onClick={() => handlePlanClick(plan)}
                        // Only add href if it is NOT a paid plan (so smooth scroll works via onClick override or native behavior, but here we control flow)
                        // Actually, Button component renders <a> if href is present. We want <button> for paid plans.
                        href={(plan.price === "$0" || plan.price === "Custom") ? "#contact" : undefined}
                    >
                        {plan.cta}
                    </Button>
                </div>
            ))}
        </div>
        
        {/* Comparison Table */}
        <div className="overflow-x-auto rounded-3xl border border-slate-200 dark:border-white/5 bg-white dark:bg-[#0A0F1E] shadow-lg mb-8">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-200 dark:border-white/5">
                <th className="p-6 text-slate-900 dark:text-white font-semibold bg-slate-50 dark:bg-white/[0.02]">Features</th>
                <th className="p-6 text-slate-900 dark:text-white font-semibold bg-slate-50 dark:bg-white/[0.02]">Free Demo</th>
                <th className="p-6 text-slate-900 dark:text-white font-semibold bg-slate-50 dark:bg-white/[0.02]">Monthly</th>
                <th className="p-6 text-orange-500 dark:text-orange-400 font-bold bg-orange-500/5 dark:bg-orange-500/10 border-l border-r border-orange-500/10">Yearly</th>
                <th className="p-6 text-slate-900 dark:text-white font-semibold bg-slate-50 dark:bg-white/[0.02]">Premium</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-white/5">
              {[
                { category: "Strategy", items: [
                    { name: "Growth Roadmap", free: true, monthly: true, yearly: true, premium: true },
                    { name: "Competitor Analysis", free: true, monthly: true, yearly: true, premium: true },
                    { name: "Quarterly Business Reviews", free: false, monthly: false, yearly: true, premium: true },
                  ]
                },
                { category: "Execution", items: [
                    { name: "Paid Ads Management", free: false, monthly: true, yearly: true, premium: true },
                    { name: "SEO Optimization", free: "Audit Only", monthly: "Basic", yearly: "Advanced", premium: "Enterprise" },
                    { name: "Content Creation", free: false, monthly: "12 posts", yearly: "20 posts", premium: "Unlimited" },
                  ]
                },
                { category: "Support", items: [
                    { name: "Response Time", free: "Standard", monthly: "24h", yearly: "Priority", premium: "Instant (Slack)" },
                    { name: "Dedicated Manager", free: false, monthly: false, yearly: true, premium: true },
                  ]
                }
              ].map((section, idx) => (
                <React.Fragment key={idx}>
                  <tr className="bg-slate-50/50 dark:bg-white/[0.01]">
                    <td colSpan={5} className="p-3 px-6 text-xs font-bold text-slate-500 uppercase tracking-wider">{section.category}</td>
                  </tr>
                  {section.items.map((row, i) => (
                    <tr key={i} className="hover:bg-slate-50 dark:hover:bg-white/[0.02] transition-colors">
                      <td className="p-4 px-6 text-sm text-slate-600 dark:text-slate-300 font-medium">{row.name}</td>
                      <td className="p-4 px-6 text-sm text-slate-500 dark:text-slate-400">
                        {typeof row.free === 'boolean' ? (row.free ? <Check size={18} className="text-emerald-500" /> : <span className="text-slate-300 dark:text-slate-700">-</span>) : row.free}
                      </td>
                      <td className="p-4 px-6 text-sm text-slate-500 dark:text-slate-400">
                        {typeof row.monthly === 'boolean' ? (row.monthly ? <Check size={18} className="text-emerald-500" /> : <span className="text-slate-300 dark:text-slate-700">-</span>) : row.monthly}
                      </td>
                      <td className="p-4 px-6 text-sm text-slate-900 dark:text-white font-medium bg-orange-500/5 dark:bg-orange-500/5 border-l border-r border-orange-500/10">
                         {typeof row.yearly === 'boolean' ? (row.yearly ? <Check size={18} className="text-emerald-500" /> : <span className="text-slate-300 dark:text-slate-700">-</span>) : row.yearly}
                      </td>
                      <td className="p-4 px-6 text-sm text-slate-500 dark:text-slate-400">
                        {typeof row.premium === 'boolean' ? (row.premium ? <Check size={18} className="text-emerald-500" /> : <span className="text-slate-300 dark:text-slate-700">-</span>) : row.premium}
                      </td>
                    </tr>
                  ))}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>

        <div className="text-center animate-fade-in-up">
            <p className="text-slate-600 dark:text-slate-300 mb-2">
                Intimidated by the numbers? Don't be.
            </p>
            <p className="text-slate-500 dark:text-slate-400 text-sm">
                Our <span className="text-orange-500 dark:text-orange-400 font-semibold">Free Demo Plan</span> is completely complimentary and includes a full audit. <br className="hidden md:inline"/>
                It's the perfect way to test our capabilities with zero risk.
            </p>
        </div>

      </div>
    </section>
  );
};

export default Pricing;