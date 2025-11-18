import React from 'react';

const CompanyLogos: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 mt-24 lg:mt-12">
      <p className="text-gray-500 text-sm mb-6 font-medium">Trusted by top companies</p>
      <div className="flex flex-wrap gap-8 md:gap-12 items-center opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
        
        {/* Loom */}
        <div className="flex items-center gap-2">
            <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current" xmlns="http://www.w3.org/2000/svg"><path d="M13.2 0L0 12l13.2 12L24 12 13.2 0zm0 4.2L20.4 10.8l-7.2 6.6-7.2-6.6 7.2-6.6z"/></svg>
            <span className="font-bold text-xl tracking-tight">loom</span>
        </div>

        {/* Mailchimp */}
        <div className="flex items-center gap-2">
             <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current" xmlns="http://www.w3.org/2000/svg"><path d="M4.4 13.2c0-2.6 1.8-4.5 4.3-4.5 1.3 0 2.4.5 3.1 1.3.7-.8 1.8-1.3 3.1-1.3 2.5 0 4.3 1.9 4.3 4.5v4.2h-2.6v-4.1c0-1.4-.9-2.3-2.1-2.3s-2.1.9-2.1 2.3v4.1H9.8v-4.1c0-1.4-.9-2.3-2.1-2.3S5.6 11.9 5.6 13.3v4.1H3V8h2.6v1.5c-.4-.7-1-1.5-1.2-1.7.1.1 0 5.4 0 5.4z"/></svg>
             <span className="font-bold text-xl tracking-tight">mailchimp</span>
        </div>

        {/* Notion */}
        <div className="flex items-center gap-2">
            <span className="border border-current rounded p-0.5 text-sm font-serif">N</span>
            <span className="font-medium text-xl">Notion</span>
        </div>

        {/* Stripe */}
        <div className="flex items-center gap-1">
            <span className="font-bold text-xl tracking-tighter italic">stripe</span>
        </div>

      </div>
    </div>
  );
};

export default CompanyLogos;