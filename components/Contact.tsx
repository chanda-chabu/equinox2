import React, { useState } from 'react';
import { Calendar as CalendarIcon, Clock, ChevronLeft, ChevronRight, Check, User, Mail, Globe, ArrowRight, Video, Phone, MapPin } from 'lucide-react';
import Button from './ui/Button';

const Contact: React.FC = () => {
  const [step, setStep] = useState<1 | 2 | 3>(1); // 1: Date/Time, 2: Details, 3: Success
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    notes: ''
  });

  // Calendar Logic
  const daysInMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1).getDay();
  
  const timeSlots = [
    "09:00 AM", "10:00 AM", "11:30 AM", 
    "01:00 PM", "02:30 PM", "04:00 PM"
  ];

  const handleDateClick = (day: number) => {
    setSelectedDate(day);
    setSelectedTime(null); // Reset time when date changes
  };

  const handleNextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
  };

  const handlePrevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setStep(3);
    }, 1000);
  };

  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  return (
    <section id="contact" className="py-24 relative bg-slate-50 dark:bg-[#020617] border-t border-slate-200 dark:border-white/5 transition-colors duration-300">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-orange-500/10 dark:bg-orange-500/5 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[20%] right-[10%] w-[500px] h-[500px] bg-purple-500/10 dark:bg-purple-500/5 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Context */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-300 text-xs font-semibold uppercase tracking-wider mb-6">
                Contact Us
              </div>
              <h2 className="text-4xl md:text-5xl font-medium text-slate-900 dark:text-white mb-6">
                Let's Engineer Your <span className="font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-purple-500 dark:from-orange-400 dark:to-purple-400">Growth</span>
              </h2>
              <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
                Schedule a free 30-minute strategy session. We'll audit your current setup, identify bottlenecks, and map out a custom scaling plan.
              </p>
            </div>

            <div className="space-y-6">
              {/* Direct Contact Info */}
              <div className="p-6 bg-white dark:bg-white/5 rounded-2xl border border-slate-200 dark:border-white/5 space-y-4 shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center flex-shrink-0">
                      <Phone size={20} className="text-orange-600 dark:text-orange-400" />
                    </div>
                    <div>
                      <h4 className="text-slate-900 dark:text-white font-medium mb-1">Direct Line</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">+260 976551763</p>
                      <p className="text-xs text-slate-500 mt-1">Available Mon-Fri, 9am - 6pm</p>
                    </div>
                  </div>

                   <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center flex-shrink-0">
                      <Mail size={20} className="text-purple-600 dark:text-purple-400" />
                    </div>
                    <div>
                      <h4 className="text-slate-900 dark:text-white font-medium mb-1">Email Support</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">hello@equinox.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center flex-shrink-0">
                      <MapPin size={20} className="text-indigo-600 dark:text-indigo-400" />
                    </div>
                    <div>
                      <h4 className="text-slate-900 dark:text-white font-medium mb-1">HQ</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">Lusaka, Zambia</p>
                    </div>
                  </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-white dark:bg-white/5 border border-slate-200 dark:border-white/5 flex items-center justify-center flex-shrink-0 shadow-sm">
                  <Video size={20} className="text-slate-500 dark:text-slate-400" />
                </div>
                <div>
                  <h4 className="text-slate-900 dark:text-white font-medium mb-1">Video Consultation</h4>
                  <p className="text-sm text-slate-500">Google Meet or Zoom</p>
                </div>
              </div>
            </div>
            
            <div className="pt-8 border-t border-slate-200 dark:border-white/5">
                <p className="text-sm text-slate-500 mb-4">Trusted by 500+ companies</p>
                <div className="flex -space-x-3">
                    {[1,2,3,4].map((i) => (
                        <div key={i} className="w-10 h-10 rounded-full border-2 border-slate-50 dark:border-[#020617] bg-slate-800 flex items-center justify-center text-xs text-white overflow-hidden">
                            <img src={`https://images.unsplash.com/photo-${1500000000000 + i * 100000}?w=100&h=100&fit=crop`} alt="Client" className="w-full h-full object-cover" />
                        </div>
                    ))}
                    <div className="w-10 h-10 rounded-full border-2 border-slate-50 dark:border-[#020617] bg-slate-200 dark:bg-slate-800 flex items-center justify-center text-xs text-slate-600 dark:text-slate-400 font-medium">
                        +500
                    </div>
                </div>
            </div>
          </div>

          {/* Right Column: Interactive Booking Widget */}
          <div className="lg:col-span-7">
            <div className="bg-white/80 dark:bg-[#0F172A]/80 backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-3xl overflow-hidden shadow-2xl min-h-[600px] flex flex-col">
              
              {/* Widget Header */}
              <div className="p-6 border-b border-slate-200 dark:border-white/5 flex items-center justify-between bg-slate-50 dark:bg-black/20">
                 <h3 className="text-lg font-medium text-slate-900 dark:text-white flex items-center gap-2">
                    <CalendarIcon size={18} className="text-orange-500" />
                    Book Strategy Call
                 </h3>
                 <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${step >= 1 ? 'bg-orange-500' : 'bg-slate-300 dark:bg-slate-700'}`}></div>
                    <div className={`w-2 h-2 rounded-full ${step >= 2 ? 'bg-orange-500' : 'bg-slate-300 dark:bg-slate-700'}`}></div>
                    <div className={`w-2 h-2 rounded-full ${step >= 3 ? 'bg-orange-500' : 'bg-slate-300 dark:bg-slate-700'}`}></div>
                 </div>
              </div>

              {/* Step 1: Date & Time */}
              {step === 1 && (
                <div className="p-6 md:p-8 flex-1 flex flex-col md:flex-row gap-8 animate-in fade-in slide-in-from-right-4">
                    {/* Calendar Grid */}
                    <div className="flex-1">
                        <div className="flex items-center justify-between mb-6">
                            <h4 className="text-slate-900 dark:text-white font-medium">{monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}</h4>
                            <div className="flex gap-2">
                                <button onClick={handlePrevMonth} className="p-1 hover:bg-slate-100 dark:hover:bg-white/10 rounded transition-colors text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"><ChevronLeft size={20} /></button>
                                <button onClick={handleNextMonth} className="p-1 hover:bg-slate-100 dark:hover:bg-white/10 rounded transition-colors text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"><ChevronRight size={20} /></button>
                            </div>
                        </div>
                        
                        <div className="grid grid-cols-7 gap-2 text-center mb-2">
                            {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(day => (
                                <div key={day} className="text-xs font-medium text-slate-500 uppercase">{day}</div>
                            ))}
                        </div>
                        
                        <div className="grid grid-cols-7 gap-2">
                            {Array.from({ length: firstDayOfMonth }).map((_, i) => (
                                <div key={`empty-${i}`} className="aspect-square"></div>
                            ))}
                            {Array.from({ length: daysInMonth }).map((_, i) => {
                                const day = i + 1;
                                const isSelected = selectedDate === day;
                                return (
                                    <button
                                        key={day}
                                        onClick={() => handleDateClick(day)}
                                        className={`aspect-square rounded-lg text-sm font-medium transition-all duration-200 flex items-center justify-center ${
                                            isSelected 
                                                ? 'bg-gradient-to-br from-orange-500 to-purple-600 text-white shadow-lg' 
                                                : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/5 hover:text-slate-900 dark:hover:text-white'
                                        }`}
                                    >
                                        {day}
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    {/* Time Slots (Only visible when date selected) */}
                    <div className="md:w-48 border-l border-slate-200 dark:border-white/5 md:pl-8 flex flex-col">
                         <h4 className="text-slate-900 dark:text-white font-medium mb-4">Available Times</h4>
                         {!selectedDate ? (
                             <div className="flex-1 flex items-center justify-center text-center">
                                 <p className="text-sm text-slate-500">Select a date to view times</p>
                             </div>
                         ) : (
                             <div className="space-y-2 overflow-y-auto max-h-[300px] pr-2 scrollbar-thin">
                                 {timeSlots.map((time) => (
                                     <button
                                        key={time}
                                        onClick={() => setSelectedTime(time)}
                                        className={`w-full py-2.5 px-4 rounded-lg text-sm font-medium border transition-all duration-200 ${
                                            selectedTime === time 
                                                ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 border-transparent' 
                                                : 'border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-300 hover:border-orange-500 hover:text-orange-500'
                                        }`}
                                     >
                                        {time}
                                     </button>
                                 ))}
                             </div>
                         )}
                         
                         <div className="mt-auto pt-6">
                             <Button 
                                variant="primary" 
                                className="w-full" 
                                disabled={!selectedDate || !selectedTime}
                                onClick={() => setStep(2)}
                             >
                                Next Step
                             </Button>
                         </div>
                    </div>
                </div>
              )}

              {/* Step 2: Details Form */}
              {step === 2 && (
                <div className="p-6 md:p-8 flex-1 animate-in fade-in slide-in-from-right-4">
                    <div className="mb-8">
                         <button onClick={() => setStep(1)} className="text-sm text-slate-500 hover:text-slate-900 dark:hover:text-white flex items-center gap-1 mb-4 transition-colors">
                            <ChevronLeft size={16} /> Back to Calendar
                         </button>
                         <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">Your Details</h3>
                         <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">
                            Booking for {monthNames[currentMonth.getMonth()]} {selectedDate}, {currentMonth.getFullYear()} at {selectedTime}
                         </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4 max-w-lg">
                        <div className="space-y-2">
                            <label className="text-sm text-slate-500 dark:text-slate-400">Full Name</label>
                            <div className="relative">
                                <User className="absolute left-3 top-3 text-slate-400" size={18} />
                                <input 
                                    required
                                    type="text" 
                                    className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl py-2.5 pl-10 pr-4 text-slate-900 dark:text-white focus:outline-none focus:border-orange-500/50 transition-colors"
                                    placeholder="John Doe"
                                    value={formData.name}
                                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm text-slate-500 dark:text-slate-400">Work Email</label>
                            <div className="relative">
                                <Mail className="absolute left-3 top-3 text-slate-400" size={18} />
                                <input 
                                    required
                                    type="email" 
                                    className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl py-2.5 pl-10 pr-4 text-slate-900 dark:text-white focus:outline-none focus:border-orange-500/50 transition-colors"
                                    placeholder="john@company.com"
                                    value={formData.email}
                                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm text-slate-500 dark:text-slate-400">Company Website</label>
                            <div className="relative">
                                <Globe className="absolute left-3 top-3 text-slate-400" size={18} />
                                <input 
                                    type="text" 
                                    className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl py-2.5 pl-10 pr-4 text-slate-900 dark:text-white focus:outline-none focus:border-orange-500/50 transition-colors"
                                    placeholder="www.company.com"
                                    value={formData.company}
                                    onChange={(e) => setFormData({...formData, company: e.target.value})}
                                />
                            </div>
                        </div>
                        
                        <div className="pt-4">
                            <Button variant="orange" className="w-full h-12 text-base" shape="default">
                                Confirm Booking
                                <ArrowRight size={18} className="ml-2" />
                            </Button>
                        </div>
                    </form>
                </div>
              )}

              {/* Step 3: Success */}
              {step === 3 && (
                <div className="p-6 md:p-8 flex-1 flex flex-col items-center justify-center text-center animate-in zoom-in duration-300">
                    <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mb-6 ring-1 ring-green-500/20">
                        <Check size={40} className="text-green-500" />
                    </div>
                    <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Booking Confirmed!</h3>
                    <p className="text-slate-500 dark:text-slate-400 max-w-sm mb-8">
                        We've sent a calendar invitation to <strong>{formData.email}</strong>. 
                        We look forward to speaking with you on {monthNames[currentMonth.getMonth()]} {selectedDate} at {selectedTime}.
                    </p>
                    <div className="p-4 bg-slate-50 dark:bg-white/5 rounded-xl border border-slate-200 dark:border-white/5 w-full max-w-sm text-left mb-8">
                         <div className="text-xs text-slate-500 uppercase tracking-wider mb-2">Next Steps</div>
                         <ul className="text-sm text-slate-600 dark:text-slate-300 space-y-2">
                             <li className="flex gap-2"><Check size={14} className="text-orange-500 mt-0.5" /> Check your email for the meeting link</li>
                             <li className="flex gap-2"><Check size={14} className="text-orange-500 mt-0.5" /> Prepare any specific questions you have</li>
                         </ul>
                    </div>
                    <Button variant="outline" onClick={() => { setStep(1); setFormData({name:'', email:'', company:'', notes:''}); }}>
                        Book Another Call
                    </Button>
                </div>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;