import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Sparkles, Bot, User, Loader2, ArrowUp } from 'lucide-react';
import { GoogleGenAI, Chat } from "@google/genai";

interface Message {
  id: string;
  role: 'user' | 'model';
  text: string;
}

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      role: 'model',
      text: "Hello! I'm Equinox AI. I can help you scale your revenue, explain our services, or unlock our exclusive Black Friday deal. How can I assist you today?"
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatSessionRef = useRef<Chat | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Suggested questions chips
  const quickQuestions = [
    "What is the Black Friday Deal?",
    "What services do you offer?",
    "How do I book a call?",
    "Pricing details"
  ];

  // Initialize Gemini Chat Session
  useEffect(() => {
    try {
        if (!process.env.API_KEY) {
            console.warn("API Key not found for ChatBot");
            setHasError(true);
            return;
        }

        const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
        chatSessionRef.current = ai.chats.create({
            model: 'gemini-2.5-flash',
            config: {
                systemInstruction: `You are Equinox AI, the advanced virtual assistant for Equinox Marketing. 
                
                Brand Identity: High-performance, futuristic, data-driven, premium.
                
                Your capabilities:
                1. Explain our services: SEO, Content Marketing, Social Media Management, PPC Advertising.
                2. Discuss the Black Friday Deal: $997/mo (normally $2997) for the Growth Suite. Includes 24/7 monitoring, unlimited updates, weekly SEO audits, priority support.
                3. Direct users to sections of the page using anchor links: #contact, #services, #black-friday, #testimonials.
                
                Guidelines:
                - Keep responses concise (2-3 sentences max usually).
                - Be professional but witty and engaging.
                - Use emojis sparingly but effectively.
                - If asked about pricing not related to Black Friday, direct them to #contact for a custom quote.
                - Do not hallucinate services we don't offer.`,
            },
        });
    } catch (error) {
        console.error("Failed to initialize AI", error);
        setHasError(true);
    }
  }, []);

  // Auto-scroll to bottom of chat
  useEffect(() => {
    if (isOpen) {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
        // Focus input on open
        setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [messages, isOpen]);

  const handleSend = async (textOverride?: string) => {
    const textToSend = textOverride || inputText;
    
    if (!textToSend.trim() || isLoading || !chatSessionRef.current) return;

    // Add User Message
    const userMsg: Message = { id: Date.now().toString(), role: 'user', text: textToSend };
    setMessages(prev => [...prev, userMsg]);
    setInputText('');
    setIsLoading(true);

    try {
      // Send to Gemini
      const result = await chatSessionRef.current.sendMessage({ message: textToSend });
      
      const botMsg: Message = {
        id: (Date.now() + 1).toString(),
        role: 'model',
        text: result.text || "I'm processing that data... could you rephrase?"
      };
      setMessages(prev => [...prev, botMsg]);
    } catch (error: any) {
      console.error("Chat error:", error);
      
      let errorResponse = "I seem to be having trouble connecting to the server.";
      let actionSuggestion = "Please check your internet connection and try again.";

      // Attempt to identify error type
      const errorMessage = error.message || error.toString();
      
      if (errorMessage.includes("400") || errorMessage.includes("API key")) {
          errorResponse = "Configuration Error: My API access seems to be restricted.";
          actionSuggestion = "Please refresh the page or contact the site administrator.";
      } else if (errorMessage.includes("safety") || errorMessage.includes("blocked")) {
          errorResponse = "I couldn't process that specific request due to safety content filters.";
          actionSuggestion = "Could you try rephrasing your question?";
      } else if (errorMessage.includes("503") || errorMessage.includes("overloaded")) {
          errorResponse = "My systems are currently experiencing high traffic.";
          actionSuggestion = "Please wait a moment and try asking again.";
      }

      setMessages(prev => [...prev, {
        id: (Date.now() + 1).toString(),
        role: 'model',
        text: `${errorResponse}\n\n${actionSuggestion}\n\nAlternatively, you can book a demo directly through our contact form if you need immediate assistance.`
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  if (hasError) return null; // Hide chatbot if API key is missing

  return (
    <div className="fixed bottom-6 right-6 z-[60] flex flex-col items-end">
      
      {/* Chat Window */}
      <div 
        className={`mb-4 w-[90vw] md:w-[400px] max-h-[70vh] flex flex-col bg-[#0F172A]/90 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl shadow-black/50 overflow-hidden transition-all duration-300 origin-bottom-right ${
            isOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-90 translate-y-10 pointer-events-none'
        }`}
      >
        {/* Header */}
        <div className="p-4 border-b border-white/10 bg-gradient-to-r from-orange-500/10 to-purple-600/10 flex items-center justify-between">
            <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-orange-500 to-purple-600 flex items-center justify-center shadow-lg">
                    <Sparkles size={16} className="text-white" />
                </div>
                <div>
                    <h3 className="text-sm font-bold text-white">Equinox AI</h3>
                    <div className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                        <span className="text-[10px] text-emerald-400 font-medium uppercase tracking-wider">Online</span>
                    </div>
                </div>
            </div>
            <button 
                onClick={() => setIsOpen(false)}
                className="p-1.5 text-slate-400 hover:text-white hover:bg-white/10 rounded-full transition-colors"
            >
                <X size={18} />
            </button>
        </div>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 min-h-[300px] scrollbar-thin">
            {messages.map((msg) => (
                <div 
                    key={msg.id} 
                    className={`flex gap-3 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                    {msg.role === 'model' && (
                        <div className="w-8 h-8 rounded-full bg-slate-800 border border-white/10 flex items-center justify-center flex-shrink-0 mt-1">
                            <Bot size={14} className="text-orange-400" />
                        </div>
                    )}
                    
                    <div className={`max-w-[80%] rounded-2xl p-3 text-sm leading-relaxed whitespace-pre-wrap ${
                        msg.role === 'user' 
                            ? 'bg-orange-600 text-white rounded-tr-sm' 
                            : 'bg-white/5 border border-white/5 text-slate-200 rounded-tl-sm'
                    }`}>
                        {msg.text}
                    </div>

                    {msg.role === 'user' && (
                        <div className="w-8 h-8 rounded-full bg-slate-800 border border-white/10 flex items-center justify-center flex-shrink-0 mt-1">
                            <User size={14} className="text-purple-400" />
                        </div>
                    )}
                </div>
            ))}
            
            {isLoading && (
                 <div className="flex gap-3 justify-start">
                    <div className="w-8 h-8 rounded-full bg-slate-800 border border-white/10 flex items-center justify-center flex-shrink-0 mt-1">
                        <Bot size={14} className="text-orange-400" />
                    </div>
                    <div className="bg-white/5 border border-white/5 rounded-2xl rounded-tl-sm p-4 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce"></span>
                        <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce delay-100"></span>
                        <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce delay-200"></span>
                    </div>
                 </div>
            )}
            <div ref={messagesEndRef} />
        </div>

        {/* Quick Questions (Only show if less than 3 messages to avoid clutter) */}
        {messages.length < 4 && !isLoading && (
            <div className="px-4 pb-2 flex gap-2 overflow-x-auto scrollbar-hide">
                {quickQuestions.map((q, i) => (
                    <button
                        key={i}
                        onClick={() => handleSend(q)}
                        className="flex-shrink-0 px-3 py-1.5 text-xs font-medium text-slate-300 bg-white/5 hover:bg-orange-500 hover:text-white border border-white/10 rounded-full transition-all whitespace-nowrap"
                    >
                        {q}
                    </button>
                ))}
            </div>
        )}

        {/* Input Area */}
        <div className="p-4 pt-2 border-t border-white/5 bg-[#0A0F1E]">
            <div className="relative">
                <input
                    ref={inputRef}
                    type="text"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Ask me anything..."
                    className="w-full bg-white/5 border border-white/10 rounded-full pl-4 pr-12 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-orange-500/50 focus:bg-white/[0.08] transition-all"
                    disabled={isLoading}
                />
                <button
                    onClick={() => handleSend()}
                    disabled={!inputText.trim() || isLoading}
                    className="absolute right-1.5 top-1.5 p-1.5 bg-gradient-to-r from-orange-500 to-purple-600 rounded-full text-white shadow-lg hover:shadow-orange-500/25 disabled:opacity-50 disabled:cursor-not-allowed transition-all hover:scale-105 active:scale-95"
                >
                    {isLoading ? <Loader2 size={16} className="animate-spin" /> : <ArrowUp size={16} strokeWidth={3} />}
                </button>
            </div>
            <div className="text-center mt-2">
                <span className="text-[10px] text-slate-600">Powered by Gemini AI</span>
            </div>
        </div>

      </div>

      {/* Toggle Button (FAB) */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`group relative flex items-center justify-center w-14 h-14 rounded-full shadow-2xl transition-all duration-300 hover:scale-105 ${
            isOpen ? 'bg-slate-800 text-slate-400 rotate-90' : 'bg-gradient-to-r from-orange-500 to-purple-600 text-white'
        }`}
      >
        <div className={`absolute inset-0 rounded-full bg-white/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity ${isOpen ? 'hidden' : 'block'}`}></div>
        {isOpen ? <X size={24} /> : <MessageCircle size={28} fill="currentColor" className="stroke-none" />}
        
        {/* Notification Dot */}
        {!isOpen && messages.length === 1 && (
            <span className="absolute top-0 right-0 flex h-4 w-4">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500 border-2 border-[#020617]"></span>
            </span>
        )}
      </button>

    </div>
  );
};

export default ChatBot;