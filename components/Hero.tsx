import React, { useState, useEffect, useRef } from 'react';
import Button from './ui/Button';
import { ArrowRight, Users, Globe, Play, X } from 'lucide-react';

const Hero: React.FC = () => {
  const [websiteUrl, setWebsiteUrl] = useState('');
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [counts, setCounts] = useState({ clients: 0, spend: 0 });
  const [hasTriggeredStats, setHasTriggeredStats] = useState(false);
  const [currentBgIndex, setCurrentBgIndex] = useState(0);
  
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const headlineText = "Scale your revenue with";

  const backgroundImages = [
    {
      url: "https://images.unsplash.com/photo-1544531586-fde5298cdd40?q=80&w=2664&auto=format&fit=crop",
      alt: "Professional Tutoring & Mentorship"
    },
    {
      url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2664&auto=format&fit=crop",
      alt: "Management Systems & Analytics"
    },
    {
      url: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2664&auto=format&fit=crop",
      alt: "Strategic Team Meetings"
    }
  ];

  // Background Slideshow Logic
  useEffect(() => {
    const interval = setInterval(() => {
        setCurrentBgIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Modal Accessibility & Scroll Lock
  useEffect(() => {
    if (isVideoOpen) {
      // Lock body scroll
      document.body.style.overflow = 'hidden';
      
      // Focus close button for accessibility
      setTimeout(() => {
        closeButtonRef.current?.focus();
      }, 100);

      // Handle Escape key
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          setIsVideoOpen(false);
        }
      };
      
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        window.removeEventListener('keydown', handleKeyDown);
        document.body.style.overflow = 'unset';
      };
    }
  }, [isVideoOpen]);

  // Counter Animation Logic - Triggered on Hover
  const triggerStatsAnimation = () => {
    if (hasTriggeredStats) return;
    setHasTriggeredStats(true);

    const duration = 4500; // Slowed down for premium feel
    const start = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - start;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function: easeOutExpo (Fast start, slow end)
      const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);

      setCounts({
        clients: Math.floor(ease * 200),
        spend: Math.floor(ease * 150)
      });

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  };

  // Moving Particle Cloud Animation Logic
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    
    // Set canvas size with DPI scaling
    const dpr = window.devicePixelRatio || 1;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.scale(dpr, dpr);
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;

    const particles: Particle[] = [];
    const particleCount = window.innerWidth < 768 ? 50 : 100; // Optimal count for "cloud" feel
    const connectionDistance = 140;
    const mouseRadius = 180; // Distance of mouse interaction

    // Colors: Orange, Purple, Indigo, White
    // We can keep these constant or make them adapt to theme via CSS, but JS canvas is harder to theme dynamically without reload.
    // We'll keep them vibrant as they overlay both dark and light nicely.
    const colors = ['rgba(249, 115, 22, 0.9)', 'rgba(168, 85, 247, 0.9)', 'rgba(99, 102, 241, 0.9)', 'rgba(255, 255, 255, 0.6)'];

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
      
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        // Random velocity for drifting
        this.vx = (Math.random() - 0.5) * 1.5; 
        this.vy = (Math.random() - 0.5) * 1.5;
        this.size = Math.random() * 2 + 1;
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }

      update() {
        // Normal movement
        this.x += this.vx;
        this.y += this.vy;

        // Bounce off edges to keep them in the "cloud"
        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;

        // Mouse Interaction - Repulsion
        // If mouse is close, push particle away
        const dx = mouseRef.current.x - this.x;
        const dy = mouseRef.current.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < mouseRadius) {
          const forceDirectionX = dx / distance;
          const forceDirectionY = dy / distance;
          const force = (mouseRadius - distance) / mouseRadius;
          
          // Push away factor
          const pushStrength = 6;
          this.x -= forceDirectionX * force * pushStrength;
          this.y -= forceDirectionY * force * pushStrength;
        }
      }

      draw() {
        ctx!.beginPath();
        ctx!.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx!.fillStyle = this.color;
        ctx!.fill();
      }
    }

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    let animationFrameId: number;

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      
      // Update and draw particles
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });

      // Draw connections
      ctx.lineWidth = 0.5;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectionDistance) {
            // Opacity based on distance
            const opacity = 1 - (distance / connectionDistance);
            ctx.beginPath();
            // Increased opacity multiplier from 0.2 to 0.35
            // Use standard JS logic to detect dark mode for connection color?
            // For now, assume white/colored connections look good on both or primarily dark hero
            ctx.strokeStyle = `rgba(148, 163, 184, ${opacity * 0.35})`; // Slate-400 equivalentish
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
      
      // Connect to mouse if close (optional visual flare)
      for (let i = 0; i < particles.length; i++) {
        const dx = mouseRef.current.x - particles[i].x;
        const dy = mouseRef.current.y - particles[i].y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < mouseRadius) {
            const opacity = 1 - (distance / mouseRadius);
             ctx.beginPath();
            ctx.strokeStyle = `rgba(249, 115, 22, ${opacity * 0.3})`; // Orange glow connection to mouse
            ctx.moveTo(mouseRef.current.x, mouseRef.current.y);
            ctx.lineTo(particles[i].x, particles[i].y);
            ctx.stroke();
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      
      // Reset particles within bounds if resized
      particles.forEach(p => {
          if (p.x > width) p.x = width - 10;
          if (p.y > height) p.y = height - 10;
      })
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (containerRef.current) {
        // Calculate mouse position relative to the container for accurate interaction
        const rect = containerRef.current.getBoundingClientRect();
        mouseRef.current = { 
            x: e.clientX - rect.left, 
            y: e.clientY - rect.top 
        };
    }
  };

  return (
    <section 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative pt-32 pb-24 overflow-hidden bg-slate-50 dark:bg-[#020617] text-slate-900 dark:text-white min-h-screen flex flex-col items-center transition-colors duration-300"
    >
      
      {/* Background Layers */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-grid-white opacity-[0.05] mask-gradient"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-transparent to-slate-50 dark:from-[#020617] dark:via-transparent dark:to-[#020617]"></div>
        
        {/* Light Leak */}
        <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-gradient-to-br from-orange-500/20 to-purple-600/20 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-screen opacity-60"></div>
        
        {/* Particle Cloud Canvas - Added blur here */}
        <canvas 
          ref={canvasRef} 
          className="absolute inset-0 w-full h-full mix-blend-multiply dark:mix-blend-screen blur-[3px]"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex flex-col items-center">
        
        {/* Top Badge with Animated Gradient Glow - LIGHTER & SUBTLER */}
        <div className="relative group mb-8 animate-fade-in-up">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-300 via-purple-300 to-orange-300 rounded-full blur opacity-30 group-hover:opacity-50 transition duration-1000 group-hover:duration-200 animate-gradient-xy"></div>
            <div className="relative inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-white/10 shadow-sm">
                <span className="text-orange-500 dark:text-orange-400">✨</span>
                <span className="text-sm font-medium text-slate-600 dark:text-slate-300">Certified & Results-Driven Agency</span>
            </div>
        </div>

        {/* Main Headline - Staggered Animation */}
        <h1 className="text-5xl md:text-7xl font-semibold text-center tracking-tight leading-[1.1] mb-6 max-w-4xl drop-shadow-sm dark:drop-shadow-2xl text-slate-900 dark:text-white">
          <div className="inline-block">
            {headlineText.split("").map((char, index) => (
              <span 
                key={index} 
                className="inline-block animate-fade-in-up" 
                style={{ 
                  animationDelay: `${index * 30}ms`,
                  opacity: 0, // ensure it starts hidden
                  animationFillMode: 'forwards'
                }}
              >
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </div>
          <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-purple-500 to-indigo-500 inline-block animate-fade-in-up delay-700 opacity-0" style={{ animationFillMode: 'forwards' }}>
            top growth experts
          </span>
        </h1>

        <p className="text-slate-600 dark:text-slate-400 text-lg md:text-xl text-center max-w-2xl mb-8 leading-relaxed animate-fade-in-up delay-1000 opacity-0" style={{ animationFillMode: 'forwards' }}>
          Gain unfair advantages from industry veterans using data-driven strategies. Enhance your market presence and dominate your niche.
        </p>

        {/* Video Trigger Button */}
        <div className="flex justify-center mb-12 animate-fade-in-up delay-1000 opacity-0" style={{ animationFillMode: 'forwards' }}>
            <button
                onClick={() => setIsVideoOpen(true)}
                className="group relative inline-flex items-center gap-3 pl-2 pr-6 py-2 bg-white dark:bg-white/5 hover:bg-slate-50 dark:hover:bg-white/10 border border-slate-200 dark:border-white/10 rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
            >
                <span className="relative flex h-10 w-10 items-center justify-center">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-500 opacity-20"></span>
                    <span className="relative inline-flex h-10 w-10 rounded-full bg-gradient-to-r from-orange-500 to-purple-600 items-center justify-center shadow-lg">
                        <Play size={16} fill="white" className="ml-1 text-white" />
                    </span>
                </span>
                <span className="text-base font-medium text-slate-700 dark:text-slate-200 group-hover:text-slate-900 dark:group-hover:text-white">See how it works</span>
            </button>
        </div>

        {/* Search Bar / Input Field */}
        <div className="w-full max-w-lg relative mb-20 animate-fade-in-up delay-1000 opacity-0 group" style={{ animationFillMode: 'forwards' }}>
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-purple-600 rounded-full blur opacity-10 group-hover:opacity-20 transition-opacity"></div>
          <div className="relative bg-white/80 dark:bg-[#0F172A]/80 backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-full p-2 flex items-center shadow-lg">
             <div className="pl-4 text-slate-400 dark:text-slate-500">
                <Globe size={20} />
             </div>
             <input 
               type="text" 
               placeholder="Enter your website URL..." 
               className="bg-transparent border-none text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:ring-0 flex-grow px-4 h-10 outline-none w-full"
               value={websiteUrl}
               onChange={(e) => setWebsiteUrl(e.target.value)}
             />
             <Button variant="orange" size="sm" shape="pill" className="min-w-[100px]" onClick={() => console.log(websiteUrl)}>
               Analyze
             </Button>
          </div>
        </div>

        {/* Bento Grid Layout */}
        <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-6 animate-fade-in-up delay-1000 opacity-0" style={{ animationFillMode: 'forwards' }}>
            
            {/* Left Column Group */}
            <div className="md:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6 content-start">
                
                {/* Statistics Wrapper - Interactive Fading Component */}
                <div 
                  className={`col-span-1 md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6 transition-all duration-700 ease-out cursor-default ${hasTriggeredStats ? 'opacity-100 filter-none' : 'opacity-70 blur-[1px] hover:opacity-100 hover:blur-0'}`}
                  onMouseEnter={triggerStatsAnimation}
                >
                    {/* Stat Card 1 */}
                    <div className="glass-card p-6 rounded-3xl flex flex-col justify-between h-48 bg-white dark:bg-white/[0.03] hover:shadow-lg dark:hover:bg-white/[0.05] transition-all group border border-slate-200 dark:border-white/5">
                        <div>
                            <h3 className="text-4xl font-bold text-slate-900 dark:text-white mb-1 group-hover:text-orange-500 dark:group-hover:text-orange-400 transition-colors">
                                {counts.clients}+
                            </h3>
                            <p className="text-sm text-slate-500 dark:text-slate-400">Active Clients</p>
                        </div>
                        <p className="text-xs text-slate-500 leading-relaxed mt-4">
                            Expert teams ready to guide your brand's journey to the top.
                        </p>
                    </div>

                    {/* Stat Card 2 */}
                    <div className="glass-card p-6 rounded-3xl flex flex-col justify-between h-48 bg-white dark:bg-white/[0.03] hover:shadow-lg dark:hover:bg-white/[0.05] transition-all group border border-slate-200 dark:border-white/5">
                        <div>
                            <h3 className="text-4xl font-bold text-slate-900 dark:text-white mb-1 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                                ${counts.spend}M
                            </h3>
                            <p className="text-sm text-slate-500 dark:text-slate-400">Ad Spend Managed</p>
                        </div>
                        <p className="text-xs text-slate-500 leading-relaxed mt-4">
                            Brands who have successfully scaled their revenue with us.
                        </p>
                    </div>
                </div>

                {/* Wide Text Card */}
                <div className="md:col-span-2 glass-card p-8 rounded-3xl relative overflow-hidden group bg-white dark:bg-white/[0.03] border border-slate-200 dark:border-white/5">
                    <div className="absolute top-0 right-0 p-32 bg-gradient-to-bl from-orange-500/10 to-transparent rounded-full blur-3xl pointer-events-none"></div>
                    
                    <div className="relative z-10">
                        <h3 className="text-2xl md:text-3xl font-medium text-slate-900 dark:text-white uppercase tracking-wide leading-tight">
                            UNLOCK <span className="inline-flex -mb-1 mx-1 align-baseline"><Users className="text-orange-500 dark:text-orange-400" /></span> YOUR <br/>
                            <span className="inline-block border border-slate-300 dark:border-white/20 rounded-full px-4 py-0.5 text-sm align-middle mx-1 mb-1 text-slate-600 dark:text-slate-300">Market Dominance</span> 
                            POTENTIAL WITH US!
                        </h3>
                    </div>
                </div>

            </div>

            {/* Right Column - Large Portrait Card - VISUALS FADE */}
            <div className="md:col-span-5 relative group h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-purple-600 rounded-3xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
                <div className="relative h-full min-h-[400px] rounded-3xl overflow-hidden glass-card border-0 ring-1 ring-slate-200 dark:ring-white/10 group-hover:ring-slate-300 dark:group-hover:ring-white/20 transition-all">
                    
                    {/* Background Images Slideshow */}
                    {backgroundImages.map((img, index) => (
                      <div 
                        key={index}
                        className={`absolute inset-0 w-full h-full transition-all duration-[1500ms] ease-in-out ${index === currentBgIndex ? 'opacity-100 scale-105' : 'opacity-0 scale-100'}`}
                      >
                         <img 
                            src={img.url} 
                            alt={img.alt} 
                            className="w-full h-full object-cover"
                         />
                         {/* Subtle dark overlay per image for text contrast */}
                         <div className="absolute inset-0 bg-black/30"></div>
                      </div>
                    ))}

                    {/* Gradient Overlay for Text Readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent dark:from-[#020617] dark:via-[#020617]/40"></div>
                    
                    {/* Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-8 z-10 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                        {/* Premium Badge */}
                        <div className="inline-flex items-center px-3 py-1 rounded-full bg-orange-500/20 border border-orange-500/30 backdrop-blur-md mb-4 shadow-[0_0_15px_rgba(249,115,22,0.2)]">
                            <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse mr-2"></span>
                            <span className="text-xs font-bold text-orange-100 uppercase tracking-widest">Free Consultation</span>
                        </div>

                        <h3 className="text-3xl font-bold text-white mb-3 leading-tight tracking-tight drop-shadow-lg">
                            Claim your <br/> Free Demo Call
                        </h3>
                        <p className="text-slate-200 text-sm mb-6 max-w-xs leading-relaxed font-light drop-shadow-md">
                            Elevate your brand with {backgroundImages[currentBgIndex].alt.toLowerCase()}. Get insights into our process and scale your business to new heights.
                        </p>
                        
                        <a 
                           href="#contact"
                           className="group/btn inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white text-[#020617] font-bold text-sm hover:bg-orange-500 hover:text-white transition-all duration-300 shadow-lg hover:shadow-orange-500/40"
                        >
                            Book Free Demo 
                            <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                        </a>
                    </div>
                </div>
            </div>

        </div>

      </div>

      {/* Marquee Strip (Scrolling Animation) */}
      <div className="w-full mt-24 border-t border-slate-200 dark:border-white/5 bg-slate-100/50 dark:bg-white/[0.01] py-10 relative z-10 overflow-hidden group">
         {/* Gradient Masks */}
         <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-slate-50 to-transparent dark:from-[#020617] z-20 pointer-events-none"></div>
         <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-slate-50 to-transparent dark:from-[#020617] z-20 pointer-events-none"></div>

         <div className="flex w-max animate-marquee opacity-50 grayscale group-hover:grayscale-0 transition-all duration-500 hover:[animation-play-state:paused]">
            {/* Logos Set 1 */}
            <div className="flex items-center gap-16 px-8">
                <span className="text-xl font-bold text-slate-400 dark:text-slate-500">NETFLIX</span>
                <span className="text-xl font-bold text-slate-400 dark:text-slate-500">SHOPIFY</span>
                <span className="text-xl font-bold text-slate-400 dark:text-slate-500">SPOTIFY</span>
                <span className="text-xl font-bold text-slate-400 dark:text-slate-500">AMAZON</span>
                <span className="text-xl font-bold text-slate-400 dark:text-slate-500">GOOGLE</span>
                <span className="text-xl font-bold text-slate-400 dark:text-slate-500">MICROSOFT</span>
                <span className="text-xl font-bold text-slate-400 dark:text-slate-500">ADOBE</span>
                <span className="text-xl font-bold text-slate-400 dark:text-slate-500">SAMSUNG</span>
                <span className="text-xl font-bold text-slate-400 dark:text-slate-500">NIKE</span>
            </div>
            {/* Logos Set 2 (Duplicate for seamless loop) */}
            <div className="flex items-center gap-16 px-8">
                <span className="text-xl font-bold text-slate-400 dark:text-slate-500">NETFLIX</span>
                <span className="text-xl font-bold text-slate-400 dark:text-slate-500">SHOPIFY</span>
                <span className="text-xl font-bold text-slate-400 dark:text-slate-500">SPOTIFY</span>
                <span className="text-xl font-bold text-slate-400 dark:text-slate-500">AMAZON</span>
                <span className="text-xl font-bold text-slate-400 dark:text-slate-500">GOOGLE</span>
                <span className="text-xl font-bold text-slate-400 dark:text-slate-500">MICROSOFT</span>
                <span className="text-xl font-bold text-slate-400 dark:text-slate-500">ADOBE</span>
                <span className="text-xl font-bold text-slate-400 dark:text-slate-500">SAMSUNG</span>
                <span className="text-xl font-bold text-slate-400 dark:text-slate-500">NIKE</span>
            </div>
         </div>
      </div>

      {/* Video Sales Letter Modal with YouTube Embed */}
      {isVideoOpen && (
        <div 
          role="dialog"
          aria-modal="true"
          aria-label="Video Player"
          onClick={() => setIsVideoOpen(false)}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-300"
        >
            <div 
                onClick={(e) => e.stopPropagation()}
                className="relative w-full max-w-5xl aspect-video bg-black rounded-3xl overflow-hidden shadow-2xl border border-white/10 ring-1 ring-white/20 animate-in zoom-in-95 duration-300"
            >
                {/* Close Button */}
                <button 
                    ref={closeButtonRef}
                    onClick={() => setIsVideoOpen(false)}
                    aria-label="Close video"
                    className="absolute top-6 right-6 z-20 p-2 bg-black/50 text-white rounded-full hover:bg-white/20 transition-colors backdrop-blur-md group/close focus:outline-none focus:ring-2 focus:ring-white/50"
                >
                    <X size={24} className="group-hover/close:rotate-90 transition-transform duration-300" />
                </button>

                {/* YouTube Iframe - Updated for stability */}
                <iframe 
                    width="100%" 
                    height="100%" 
                    src="https://www.youtube.com/embed/VZuMcqI9xoo?autoplay=1&mute=1&controls=1&rel=0&playsinline=1&modestbranding=1" 
                    title="Equinox Marketing Strategy" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowFullScreen
                    className="w-full h-full rounded-3xl"
                ></iframe>
            </div>
        </div>
      )}

    </section>
  );
};

export default Hero;