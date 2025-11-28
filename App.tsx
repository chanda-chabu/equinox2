import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Impact from './components/Impact';
import Services from './components/Services';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import BlackFridayDeal from './components/BlackFridayDeal';
import Contact from './components/Contact';
import Footer from './components/Footer';
import RevealOnScroll from './components/ui/RevealOnScroll';
import ChatBot from './components/ChatBot';
import FinalCTA from './components/FinalCTA';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#020617] text-slate-900 dark:text-white selection:bg-orange-500/30 overflow-x-hidden transition-colors duration-300">
      <div className="fixed inset-0 z-0 pointer-events-none">
        {/* Ambient background glows - Vibrant Equinox Palette */}
        <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-orange-600/10 dark:bg-orange-600/10 rounded-full blur-[120px]" />
        <div className="absolute top-[30%] right-[-10%] w-[700px] h-[700px] bg-purple-600/10 dark:bg-purple-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[20%] w-[500px] h-[500px] bg-indigo-600/10 dark:bg-indigo-600/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 flex flex-col w-full">
        <Navbar />
        <main>
          <Hero />
          
          <RevealOnScroll>
            <Impact />
          </RevealOnScroll>
          
          <RevealOnScroll delay={100}>
            <Services />
          </RevealOnScroll>
          
          <RevealOnScroll delay={100}>
            <Features />
          </RevealOnScroll>

          <RevealOnScroll delay={100}>
            <Pricing />
          </RevealOnScroll>
          
          <RevealOnScroll delay={100}>
            <Testimonials />
          </RevealOnScroll>

          <RevealOnScroll delay={100}>
            <BlackFridayDeal />
          </RevealOnScroll>

          <RevealOnScroll delay={100}>
             <FinalCTA />
          </RevealOnScroll>

          <RevealOnScroll delay={100}>
            <Contact />
          </RevealOnScroll>
        </main>
        
        <RevealOnScroll>
          <Footer />
        </RevealOnScroll>
        
        {/* Floating ChatBot */}
        <ChatBot />
      </div>
    </div>
  );
};

export default App;