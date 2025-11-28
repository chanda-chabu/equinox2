import React, { useState, useEffect } from 'react';
import { X, CreditCard, Smartphone, Lock, Check, Loader2, ShieldCheck, Wifi, Server, RefreshCw, FileCheck, Shield } from 'lucide-react';
import Button from './ui/Button';

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  planName: string;
  price: string;
  billingPeriod: string;
}

const PaymentModal: React.FC<PaymentModalProps> = ({ isOpen, onClose, planName, price, billingPeriod }) => {
  const [method, setMethod] = useState<'card' | 'momo'>('card');
  const [processingStage, setProcessingStage] = useState<'idle' | 'connecting' | 'verifying' | 'finalizing' | 'success'>('idle');
  
  // Reset state when opening
  useEffect(() => {
    if (isOpen) {
      setProcessingStage('idle');
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();
    setProcessingStage('connecting');
    
    // Simulate realistic payment gateway steps
    setTimeout(() => {
        setProcessingStage('verifying');
    }, 1500);

    setTimeout(() => {
        setProcessingStage('finalizing');
    }, 3000);

    setTimeout(() => {
      setProcessingStage('success');
    }, 4500);
  };

  const renderProcessingView = () => {
    return (
        <div className="absolute inset-0 z-20 bg-white dark:bg-[#0F172A] flex flex-col items-center justify-center p-8 text-center animate-in fade-in duration-300">
            <div className="relative mb-8">
                {/* Background Pulse */}
                <div className="absolute inset-0 bg-orange-500/20 rounded-full animate-ping"></div>
                
                <div className="relative w-24 h-24 bg-white dark:bg-[#1E293B] rounded-full border border-slate-200 dark:border-white/10 flex items-center justify-center shadow-xl">
                    {processingStage === 'connecting' && <Wifi size={40} className="text-orange-500 animate-pulse" />}
                    {processingStage === 'verifying' && <Server size={40} className="text-purple-500 animate-pulse" />}
                    {processingStage === 'finalizing' && <RefreshCw size={40} className="text-emerald-500 animate-spin" />}
                </div>
            </div>

            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                {processingStage === 'connecting' && "Establishing Secure Connection..."}
                {processingStage === 'verifying' && "Verifying Payment Credentials..."}
                {processingStage === 'finalizing' && "Finalizing Transaction..."}
            </h3>
            
            <p className="text-slate-500 dark:text-slate-400 text-sm mb-8">
                Please do not close this window or refresh the page.
            </p>

            {/* Progress Bar */}
            <div className="w-64 h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                <div 
                    className="h-full bg-gradient-to-r from-orange-500 to-purple-600 transition-all duration-1000 ease-out"
                    style={{ 
                        width: processingStage === 'connecting' ? '30%' : 
                               processingStage === 'verifying' ? '60%' : 
                               '90%' 
                    }}
                ></div>
            </div>

            <div className="mt-8 flex items-center gap-2 text-xs text-slate-400 font-mono">
                <Lock size={12} />
                <span>TLS 1.3 ENCRYPTED CONNECTION</span>
            </div>
        </div>
    );
  };

  const renderSuccessView = () => {
      return (
        <div className="absolute inset-0 z-20 bg-white dark:bg-[#0F172A] flex flex-col items-center justify-center p-8 text-center animate-in zoom-in-95 duration-500">
            <div className="w-24 h-24 bg-green-500/10 rounded-full flex items-center justify-center mb-6 ring-4 ring-green-500/20">
                <Check size={48} className="text-green-500" />
            </div>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Payment Successful!</h2>
            <p className="text-slate-500 dark:text-slate-400 max-w-sm mb-8">
                Welcome to Equinox. We have sent a receipt to your email. Your account manager will reach out shortly.
            </p>
            <Button variant="orange" onClick={onClose} className="w-48">
                Access Dashboard
            </Button>
            <p className="mt-4 text-xs text-slate-400">Transaction ID: EQX-{Math.floor(Math.random() * 1000000)}</p>
        </div>
      );
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Blurred Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-md animate-in fade-in duration-500"
        onClick={processingStage === 'idle' ? onClose : undefined}
      ></div>

      {/* Modal Container */}
      <div className="relative w-full max-w-4xl bg-white dark:bg-[#0F172A] rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row animate-in zoom-in-95 fade-in duration-300 border border-slate-200 dark:border-white/10 max-h-[90vh] overflow-y-auto md:overflow-hidden">
        
        {/* Close Button (Hidden during processing) */}
        {processingStage === 'idle' && (
            <button 
            onClick={onClose}
            className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 dark:hover:text-white transition-colors z-30 bg-white/10 rounded-full backdrop-blur-sm"
            >
            <X size={20} />
            </button>
        )}

        {/* Processing/Success Overlays */}
        {processingStage !== 'idle' && processingStage !== 'success' && renderProcessingView()}
        {processingStage === 'success' && renderSuccessView()}

        {/* Left Side: Order Summary */}
        <div className="w-full md:w-2/5 bg-slate-50 dark:bg-[#020617] p-8 border-r border-slate-200 dark:border-white/5 flex flex-col justify-between relative overflow-hidden group">
           {/* Decorative Elements */}
           <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-orange-500 to-purple-600"></div>
           <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-orange-500/10 dark:bg-orange-500/5 rounded-full blur-3xl pointer-events-none group-hover:bg-orange-500/20 transition-colors duration-700"></div>
           <div className="absolute top-1/2 right-0 w-40 h-40 bg-purple-500/10 dark:bg-purple-500/5 rounded-full blur-3xl pointer-events-none"></div>

           <div className="relative z-10">
             <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-orange-500 to-purple-600 flex items-center justify-center text-white">
                    {/* Simplified EX Logo */}
                    <span className="font-bold text-xs">EX</span>
                </div>
                <h3 className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Equinox Checkout</h3>
             </div>

             <div className="mb-8">
               <span className="text-xs text-slate-400 uppercase tracking-wider">Selected Plan</span>
               <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-1">{planName}</h2>
               <p className="text-slate-500 text-sm mt-1">{billingPeriod}</p>
             </div>

             <div className="text-4xl font-bold text-slate-900 dark:text-white mb-8 tracking-tight">
               {price}
             </div>

             <div className="space-y-4">
               <h4 className="text-xs font-semibold text-slate-400 uppercase">Includes</h4>
               <ul className="space-y-3">
                  <li className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-300">
                    <FileCheck size={16} className="text-emerald-500 mt-0.5" />
                    <span>30-Day Money-Back Guarantee</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-300">
                    <Check size={16} className="text-emerald-500 mt-0.5" />
                    <span>Instant Access to Dashboard</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-300">
                    <Check size={16} className="text-emerald-500 mt-0.5" />
                    <span>Secure SSL Encryption</span>
                  </li>
               </ul>
             </div>
           </div>

           <div className="relative z-10 mt-8 md:mt-0 p-4 bg-orange-500/5 border border-orange-500/10 rounded-xl">
              <div className="flex items-center gap-2 mb-2 text-orange-600 dark:text-orange-400 font-semibold text-sm">
                 <ShieldCheck size={16} />
                 <span>Risk-Free Guarantee</span>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                 If you're not satisfied with your growth metrics in the first 30 days, we'll refund 100% of your investment. No questions asked.
              </p>
           </div>
        </div>

        {/* Right Side: Payment Form */}
        <div className="w-full md:w-3/5 p-8 bg-white dark:bg-[#0F172A] flex flex-col">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">Payment Details</h3>

            {/* Payment Method Toggle */}
            <div className="flex gap-4 mb-8">
                <button
                    onClick={() => setMethod('card')}
                    className={`flex-1 py-3 px-4 rounded-xl border flex items-center justify-center gap-2 transition-all duration-200 ${
                        method === 'card' 
                            ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 border-transparent shadow-lg' 
                            : 'bg-transparent border-slate-200 dark:border-white/10 text-slate-500 hover:border-slate-300 dark:hover:border-white/20'
                    }`}
                >
                    <CreditCard size={18} />
                    <span className="text-sm font-medium">Card</span>
                </button>
                <button
                    onClick={() => setMethod('momo')}
                    className={`flex-1 py-3 px-4 rounded-xl border flex items-center justify-center gap-2 transition-all duration-200 ${
                        method === 'momo' 
                            ? 'bg-orange-500 text-white border-transparent shadow-lg shadow-orange-500/20' 
                            : 'bg-transparent border-slate-200 dark:border-white/10 text-slate-500 hover:border-slate-300 dark:hover:border-white/20'
                    }`}
                >
                    <Smartphone size={18} />
                    <span className="text-sm font-medium">Mobile Money</span>
                </button>
            </div>

            <form onSubmit={handlePayment} className="space-y-5 flex-1">
                {method === 'card' ? (
                    <>
                        <div className="space-y-2">
                            <label className="text-xs font-semibold text-slate-500 uppercase">Cardholder Name</label>
                            <input type="text" placeholder="John Doe" className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-orange-500 focus:bg-white dark:focus:bg-white/10 transition-colors" required />
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-semibold text-slate-500 uppercase">Card Number</label>
                            <div className="relative">
                                <CreditCard className="absolute left-4 top-3 text-slate-400" size={18} />
                                <input type="text" placeholder="0000 0000 0000 0000" className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl pl-12 pr-4 py-3 text-sm focus:outline-none focus:border-orange-500 focus:bg-white dark:focus:bg-white/10 transition-colors" required />
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="space-y-2 flex-1">
                                <label className="text-xs font-semibold text-slate-500 uppercase">Expiry</label>
                                <input type="text" placeholder="MM/YY" className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-orange-500 focus:bg-white dark:focus:bg-white/10 transition-colors" required />
                            </div>
                            <div className="space-y-2 flex-1">
                                <label className="text-xs font-semibold text-slate-500 uppercase">CVC</label>
                                <div className="relative">
                                    <Lock className="absolute left-4 top-3 text-slate-400" size={16} />
                                    <input type="text" placeholder="123" className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl pl-10 pr-4 py-3 text-sm focus:outline-none focus:border-orange-500 focus:bg-white dark:focus:bg-white/10 transition-colors" required />
                                </div>
                            </div>
                        </div>
                    </>
                ) : (
                    <>
                         <div className="space-y-2">
                            <label className="text-xs font-semibold text-slate-500 uppercase">Network Provider</label>
                            <div className="grid grid-cols-3 gap-3">
                                {['MTN', 'Airtel', 'M-Pesa'].map((provider) => (
                                    <label key={provider} className="cursor-pointer">
                                        <input type="radio" name="provider" className="peer sr-only" required />
                                        <div className="py-3 rounded-xl border border-slate-200 dark:border-white/10 text-center text-sm font-medium text-slate-600 dark:text-slate-300 peer-checked:border-orange-500 peer-checked:bg-orange-500/5 peer-checked:text-orange-500 transition-all hover:bg-slate-50 dark:hover:bg-white/5">
                                            {provider}
                                        </div>
                                    </label>
                                ))}
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-semibold text-slate-500 uppercase">Phone Number</label>
                            <div className="relative">
                                <span className="absolute left-4 top-3 text-slate-400 text-sm font-medium">+260</span>
                                <input type="tel" placeholder="97 000 0000" className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl pl-14 pr-4 py-3 text-sm focus:outline-none focus:border-orange-500 focus:bg-white dark:focus:bg-white/10 transition-colors" required />
                            </div>
                        </div>
                        <div className="p-4 bg-yellow-500/10 rounded-xl border border-yellow-500/20">
                            <p className="text-xs text-yellow-600 dark:text-yellow-500">
                                You will receive a prompt on your phone to authorize the transaction.
                            </p>
                        </div>
                    </>
                )}

                <div className="pt-4 mt-auto">
                    <Button variant="orange" className="w-full h-12 text-base font-bold shadow-lg shadow-orange-500/20" shape="default">
                        {method === 'card' ? `Pay ${price}` : `Authorize ${price}`}
                        <ShieldCheck size={18} className="ml-2" />
                    </Button>
                    <div className="mt-4 flex items-center justify-center gap-4 opacity-50 grayscale">
                        {/* Simple placeholder SVGs or Text for card logos */}
                        <div className="h-6 font-bold text-slate-400 italic">VISA</div>
                        <div className="h-6 font-bold text-slate-400">Mastercard</div>
                        <div className="h-6 flex items-center gap-1 text-slate-400 text-xs"><Lock size={12}/> 256-bit SSL</div>
                    </div>
                </div>
            </form>
        </div>

      </div>
    </div>
  );
};

export default PaymentModal;