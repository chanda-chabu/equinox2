import React from 'react';

const Logos: React.FC = () => {
  // SVG Logos as components for cleaner usage
  const WebflowLogo = () => (
    <svg className="h-8 w-auto text-white" viewBox="0 0 50 12" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
       <path d="M26.4173 0.283203C22.6186 0.283203 21.0186 2.45025 20.3061 5.37877H20.2173C19.4184 2.45025 17.6394 0.283203 13.9961 0.283203C9.72909 0.283203 8.30459 4.14589 7.41784 8.23232H7.32924C6.52932 2.62886 4.93043 0.283203 2.17646 0.283203H0V11.7163H4.08581C6.21855 11.7163 6.66258 8.05775 7.19557 5.46736H7.28456C8.0841 8.86015 9.41808 11.7163 12.8399 11.7163H15.5948V5.37877H15.6834C16.4834 8.86015 17.6385 11.7163 21.4619 11.7163H24.3946V5.46736H24.4831C25.1054 8.68164 26.2608 11.7163 29.4593 11.7163H32.4805V0.283203H26.4173ZM45.6264 4.09829V0.283203H41.5398V4.18728C41.5398 5.43384 40.7399 5.87787 39.4069 5.87787H38.5173V8.99047H39.5843C42.4278 8.99047 43.1393 7.8344 43.6726 6.1432H43.7612L44.2949 11.7163H48.2936L50 0.283203H45.6264V4.09829Z"/>
    </svg>
  );

  const RelumeLogo = () => (
    <svg className="h-8 w-auto text-white" viewBox="0 0 100 28" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
       <path d="M12.4 2.8L6.2 13.4L0 2.8H12.4ZM24.8 2.8H12.4L18.6 13.4L24.8 2.8ZM12.4 24L6.2 13.4L0 24H12.4ZM24.8 24H12.4L18.6 13.4L24.8 24Z" fill="white"/>
       <text x="35" y="20" fontSize="18" fontWeight="bold" fontFamily="sans-serif">Relume</text>
    </svg>
  );

  return (
    <section className="py-10 border-t border-b border-white/5 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <p className="text-sm font-medium text-slate-500 whitespace-nowrap">Trusted by companies around the world</p>
            
            <div className="flex items-center gap-12 overflow-x-auto pb-2 md:pb-0 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
                <WebflowLogo />
                <RelumeLogo />
                <WebflowLogo />
                <RelumeLogo />
                <WebflowLogo />
                <RelumeLogo />
            </div>
        </div>
      </div>
    </section>
  );
};

export default Logos;