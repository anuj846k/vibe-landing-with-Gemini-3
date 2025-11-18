import React from 'react';
import { ArrowRight, Star, CheckCircle2, Play } from 'lucide-react';
import Button from './ui/Button';

const HeroLeft: React.FC = () => {
  return (
    <div className="flex flex-col items-start max-w-xl">
      {/* Tagline Badge */}
      <div className="animate-fade-in-up opacity-0" style={{ animationDelay: '100ms' }}>
        <div className="inline-flex items-center gap-2.5 px-4 py-2 border border-orange-100 bg-orange-50/50 rounded-full mb-8">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-orange opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-orange"></span>
          </span>
          <span className="text-[11px] md:text-xs font-bold tracking-widest text-brand-orange uppercase">
            #1 Digital Marketing Tools
          </span>
        </div>
      </div>

      {/* Main Headline */}
      <h1 className="animate-fade-in-up opacity-0 text-5xl md:text-6xl lg:text-[4.25rem] leading-[1.1] font-bold text-brand-dark mb-6 tracking-tight" style={{ animationDelay: '200ms' }}>
        Smarter Marketing <br />
        <span className="font-serif italic text-brand-orange font-medium relative inline-block pr-4">
          Bigger Impacts
        </span>
      </h1>

      {/* Subheadline */}
      <p className="animate-fade-in-up opacity-0 text-lg text-gray-500 mb-10 leading-relaxed font-light" style={{ animationDelay: '300ms' }}>
        Marketive gives you the tools to engage, convert, and scale without the chaos. From automated campaigns to real-time insights.
      </p>

      {/* CTA Buttons */}
      <div className="animate-fade-in-up opacity-0 flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-12" style={{ animationDelay: '400ms' }}>
        <Button variant="primary" className="px-8 py-4 text-base shadow-xl shadow-brand-orange/20 hover:shadow-brand-orange/30 hover:-translate-y-1 transition-all duration-300 rounded-xl">
          Get Started Free
        </Button>
        <Button variant="outline" className="px-8 py-4 text-base group flex items-center justify-center gap-2 border-gray-200 hover:border-gray-300 hover:bg-gray-50 text-brand-dark rounded-xl bg-white">
          Book a Demo
          <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>

      {/* Social Proof */}
      <div className="animate-fade-in-up opacity-0 flex items-center gap-6 w-full" style={{ animationDelay: '500ms' }}>
        <div className="flex items-center -space-x-3">
           {[1, 2, 3].map((i) => (
              <img 
                key={i}
                src={`https://picsum.photos/id/${100 + i}/100/100`} 
                alt="User" 
                className="w-10 h-10 rounded-full border-[3px] border-white object-cover shadow-sm"
              />
            ))}
            <div className="w-10 h-10 rounded-full border-[3px] border-white bg-gray-100 flex items-center justify-center text-[10px] font-bold text-gray-600">
                15k+
            </div>
        </div>
        
        <div className="flex flex-col">
            <div className="flex items-center gap-1 mb-0.5">
                <Star size={14} className="fill-yellow-400 text-yellow-400" />
                <span className="text-sm font-bold text-brand-dark">4.8</span>
                <span className="text-sm text-gray-500">(150k reviews)</span>
            </div>
        </div>
      </div>
    </div>
  );
};

export default HeroLeft;