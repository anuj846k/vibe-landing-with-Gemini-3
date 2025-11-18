
import React from 'react';
import { ArrowRight, Star } from 'lucide-react';
import Button from './ui/Button';

const HeroLeft: React.FC = () => {
  return (
    <div className="flex flex-col items-start max-w-xl relative">
      {/* Tagline Badge */}
      <div className="animate-fade-in-up opacity-0" style={{ animationDelay: '100ms' }}>
        <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 border border-orange-200/60 bg-orange-50/80 backdrop-blur-sm rounded-full mb-8 shadow-sm hover:shadow-md hover:bg-orange-50 transition-all duration-300 cursor-default">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-orange opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-orange"></span>
          </span>
          <span className="text-[11px] font-bold tracking-wider text-brand-orange uppercase">
            #1 Digital Marketing Platform
          </span>
        </div>
      </div>

      {/* Main Headline */}
      <h1 className="animate-fade-in-up opacity-0 text-5xl md:text-6xl lg:text-[4.5rem] leading-[1.05] font-extrabold text-brand-dark mb-6 tracking-tighter" style={{ animationDelay: '200ms' }}>
        Smarter Marketing <br />
        <span className="font-serif italic text-brand-orange font-medium relative inline-block pr-4">
          Bigger Impacts
        </span>
      </h1>

      {/* Subheadline */}
      <p className="animate-fade-in-up opacity-0 text-lg md:text-xl text-gray-500 mb-10 leading-relaxed font-normal max-w-lg" style={{ animationDelay: '300ms' }}>
        Marketive gives you the tools to engage, convert, and scale without the chaos. From automated campaigns to real-time insights.
      </p>

      {/* CTA Buttons */}
      <div className="animate-fade-in-up opacity-0 flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-12" style={{ animationDelay: '400ms' }}>
        <Button variant="primary" className="px-8 py-4 text-base font-bold shadow-xl shadow-brand-orange/25 hover:shadow-brand-orange/40 hover:-translate-y-1 transition-all duration-300 rounded-xl bg-gradient-to-r from-brand-orange to-[#ee4d32]">
          Get Started Free
        </Button>
        <Button variant="outline" className="px-8 py-4 text-base font-semibold group flex items-center justify-center gap-2 border-gray-200 hover:border-gray-300 hover:bg-gray-50/50 text-brand-dark rounded-xl bg-white shadow-sm hover:shadow-md transition-all duration-200">
          Book a Demo
          <ArrowRight size={18} className="text-gray-400 group-hover:text-brand-orange group-hover:translate-x-1 transition-all" />
        </Button>
      </div>

      {/* Social Proof */}
      <div className="animate-fade-in-up opacity-0 flex items-center gap-6 w-full" style={{ animationDelay: '500ms' }}>
        <div className="flex items-center -space-x-3.5">
           {[1, 2, 3].map((i) => (
              <img 
                key={i}
                src={`https://picsum.photos/id/${100 + i}/100/100`} 
                alt="User" 
                className="w-11 h-11 rounded-full border-[3px] border-white object-cover shadow-sm hover:z-10 transition-all"
              />
            ))}
            <div className="w-11 h-11 rounded-full border-[3px] border-white bg-gray-100 flex items-center justify-center text-[10px] font-bold text-gray-600 shadow-sm">
                15k+
            </div>
        </div>
        
        <div className="flex flex-col gap-0.5">
            <div className="flex items-center gap-1">
                <div className="flex">
                  {[1,2,3,4,5].map(s => <Star key={s} size={14} className="fill-yellow-400 text-yellow-400" />)}
                </div>
                <span className="text-sm font-bold text-brand-dark ml-1">4.9/5</span>
            </div>
            <span className="text-xs font-medium text-gray-400">From 150k+ happy users</span>
        </div>
      </div>
    </div>
  );
};

export default HeroLeft;
