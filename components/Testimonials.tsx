import React from 'react';
import { Play, Video, Phone, Plus, Mic, Camera, CheckCheck, ChevronLeft, Battery, Wifi, Signal, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  
  const videoTestimonials = [
    {
      name: "Alex Rivera",
      role: "Founder, Zenith",
      thumbnail: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1632&auto=format&fit=crop",
      duration: "1:45"
    },
    {
      name: "Sarah Chen",
      role: "CMO, FlowBase",
      thumbnail: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1548&auto=format&fit=crop",
      duration: "2:10"
    },
    {
      name: "Marcus Johnson",
      role: "Director, Apex",
      thumbnail: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1470&auto=format&fit=crop",
      duration: "1:15"
    }
  ];

  const whatsappConversations = [
    {
        sender: "Sarah Jenkins",
        role: "Founder, GlowCosmetics",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
        time: "09:41",
        messages: [
            { text: "Just got the weekly report...", type: "received", time: "09:41 AM" },
            { text: "Is this ROAS real? 8.4x?? 🤯", type: "received", time: "09:42 AM" },
            { text: "100% real. The new creative testing framework is printing money.", type: "sent", time: "09:45 AM" },
            { text: "Incredible work team! Let's scale the budget.", type: "received", time: "09:46 AM" }
        ]
    },
    {
        sender: "Marcus Thorne",
        role: "CMO, TechFlow",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
        time: "14:20",
        messages: [
            { text: "Conversion rate on the new landing page is insane.", type: "received", time: "2:15 PM" },
            { text: "We've never seen numbers like this before. Good job team.", type: "received", time: "2:16 PM" },
            { text: "Thanks Marcus! We're just getting started.", type: "sent", time: "2:20 PM" }
        ]
    },
    {
        sender: "Elena Rodriguez",
        role: "Director, LuxeLiving",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop",
        time: "11:06",
        messages: [
            { text: "Look at the sales spike from yesterday's email blast.", type: "received", time: "11:05 AM" },
            { text: "That automation flow you set up is magic.", type: "received", time: "11:06 AM" },
            { text: "Glad you like it! Open rates are sitting at 45% too.", type: "sent", time: "11:08 AM" }
        ]
    }
  ];

  const spokenTestimonials = [
    {
      text: "Equinox didn't just run our ads; they completely restructured our revenue model. The best agency partner we've ever had.",
      author: "James Wilson",
      company: "CEO, Struxure"
    },
    {
      text: "The level of data transparency is refreshing. I know exactly where every dollar goes and what it brings back.",
      author: "Anita Roy",
      company: "Marketing Lead, Velos"
    },
    {
      text: "We went from $50k/mo to $300k/mo in just two quarters. The strategy team is absolutely world-class.",
      author: "Tom Hiddleston",
      company: "Founder, Kinetic"
    },
    {
      text: "Finally, an agency that cares about profitability, not just vanity metrics. Highly recommended.",
      author: "Sarah O'Connor",
      company: "COO, BrightPath"
    },
    {
      text: "Their creative team is unmatched. The ad visuals stopped the scroll and doubled our CTR overnight.",
      author: "Mike Ross",
      company: "Director, Pearson"
    }
  ];

  return (
    <section id="testimonials" className="py-24 relative bg-[#020617] border-t border-white/5 overflow-hidden">
      <div className="absolute top-[20%] right-[5%] w-[300px] h-[300px] bg-orange-500/5 rounded-full blur-[100px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-semibold uppercase tracking-wider mb-6">
               Social Proof
            </div>
            <h2 className="text-3xl md:text-5xl font-medium text-white mb-6">
              Results You Can <span className="font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-purple-400">See</span>
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Real conversations with ambitious brands partnering with Equinox.
            </p>
        </div>

        {/* Video Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
            {videoTestimonials.map((video, index) => (
                <div key={index} className="group relative rounded-2xl overflow-hidden aspect-video bg-slate-900 border border-white/10 shadow-2xl cursor-pointer hover:border-orange-500/30 transition-all duration-300">
                    <img src={video.thumbnail} alt={video.name} className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 group-hover:scale-110 transition-transform shadow-xl">
                            <Play size={24} className="text-white fill-white ml-1" />
                        </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 to-transparent">
                        <h4 className="text-white font-medium">{video.name}</h4>
                        <p className="text-xs text-slate-300">{video.role}</p>
                    </div>
                    <div className="absolute top-4 right-4 px-2 py-1 bg-black/60 rounded text-xs text-white font-mono backdrop-blur-sm border border-white/10">
                        {video.duration}
                    </div>
                </div>
            ))}
        </div>

        {/* iPhone Style WhatsApp Conversations */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-32">
            {whatsappConversations.map((chat, index) => (
                <div key={index} className="relative select-none pointer-events-none transform transition-transform duration-500 hover:scale-[1.02] hover:z-10">
                    {/* Device Frame - iPhone Style */}
                    <div className="rounded-[3rem] overflow-hidden border-[8px] border-[#2a2a2a] bg-black shadow-2xl h-[450px] flex flex-col relative ring-1 ring-white/10">
                        
                        {/* Dynamic Island / Notch Area */}
                        <div className="absolute top-0 left-0 right-0 h-10 z-30 flex justify-center pt-2">
                             <div className="w-24 h-7 bg-black rounded-full"></div>
                        </div>

                        {/* Status Bar */}
                        <div className="px-6 pt-3 pb-2 flex justify-between items-center text-[10px] font-semibold text-white z-20">
                            <span className="pl-2">{chat.time}</span>
                            <div className="flex gap-1 items-center pr-2">
                                <Signal size={12} fill="currentColor" />
                                <Wifi size={12} />
                                <Battery size={12} fill="currentColor" />
                            </div>
                        </div>

                        {/* App Header (iOS Style) */}
                        <div className="bg-[#1F2C34]/80 backdrop-blur-xl px-4 py-2 flex items-center justify-between border-b border-white/5 z-20">
                            <div className="flex items-center gap-1 text-[#007AFF]">
                                <ChevronLeft size={24} />
                                <span className="text-sm font-medium -ml-1">99+</span>
                            </div>
                            
                            <div className="flex flex-col items-center flex-1">
                                <img 
                                    src={chat.avatar} 
                                    alt="Profile" 
                                    className="w-8 h-8 rounded-full object-cover mb-0.5"
                                />
                                <div className="text-white font-semibold text-[10px] leading-none">{chat.sender}</div>
                            </div>

                            <div className="flex items-center gap-4 text-[#007AFF]">
                                <Video size={20} strokeWidth={1.5} />
                                <Phone size={18} strokeWidth={1.5} />
                            </div>
                        </div>
                        
                        {/* Chat Body */}
                        <div className="relative flex-1 p-3 space-y-3 overflow-hidden bg-[#0B141A]">
                             {/* Wallpaper Pattern */}
                             <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
                             
                             {/* Date Pill */}
                             <div className="flex justify-center mb-4 relative z-10">
                                <span className="text-[10px] font-medium text-[#8696a0] bg-[#1F2C34] px-2 py-0.5 rounded-lg border border-white/5 shadow-sm">Today</span>
                             </div>

                            {chat.messages.map((msg, i) => (
                                <div key={i} className={`flex ${msg.type === 'sent' ? 'justify-end' : 'justify-start'} relative z-10`}>
                                    <div className={`max-w-[85%] relative shadow-sm text-[13px] leading-snug py-1.5 px-3 ${
                                        msg.type === 'sent' 
                                            ? 'bg-[#005C4B] text-white rounded-2xl rounded-tr-sm' 
                                            : 'bg-[#1F2C34] text-white rounded-2xl rounded-tl-sm'
                                    }`}>
                                        
                                        {msg.text}

                                        {/* Time & Receipt */}
                                        <div className={`flex items-center justify-end gap-1 pt-1 opacity-60`}>
                                            <span className="text-[9px]">{msg.time}</span>
                                            {msg.type === 'sent' && <CheckCheck size={12} className="text-[#53bdeb]" />}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Footer (Input Bar - iOS Style) */}
                        <div className="bg-[#1F2C34] px-3 py-2 flex items-center gap-3 border-t border-white/5 relative z-20 pb-5">
                            <Plus size={20} className="text-[#007AFF]" />
                            <div className="flex-1 bg-[#0B141A] rounded-full h-[32px] flex items-center px-3 text-[#8696a0] text-xs border border-white/5">
                                <span>Message...</span>
                            </div>
                            <Camera size={20} className="text-[#007AFF]" />
                            <Mic size={20} className="text-[#007AFF]" />
                        </div>

                        {/* Home Indicator */}
                        <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-28 h-1 bg-white/40 rounded-full z-30"></div>
                    </div>
                </div>
            ))}
        </div>

        {/* Spoken Testimonials Carousel */}
        <div className="w-full relative overflow-hidden group">
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#020617] to-transparent z-20 pointer-events-none"></div>
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#020617] to-transparent z-20 pointer-events-none"></div>
            
            <div className="flex w-max animate-marquee hover:[animation-play-state:paused] gap-6 px-6">
                {[...spokenTestimonials, ...spokenTestimonials].map((testimonial, i) => (
                    <div 
                        key={i} 
                        className="w-[400px] flex-shrink-0 bg-white/[0.03] backdrop-blur-md border border-white/5 rounded-2xl p-6 hover:bg-white/[0.05] transition-colors"
                    >
                        <Quote size={24} className="text-orange-500 mb-4 opacity-50" />
                        <p className="text-slate-300 text-lg leading-relaxed mb-6 font-light">
                            "{testimonial.text}"
                        </p>
                        <div className="flex items-center gap-3 border-t border-white/5 pt-4">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm">
                                {testimonial.author.charAt(0)}
                            </div>
                            <div>
                                <h5 className="text-white font-medium text-sm">{testimonial.author}</h5>
                                <p className="text-xs text-slate-500">{testimonial.company}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;