import React from 'react';
import { ArrowRight, Star } from 'lucide-react';
import Button from './ui/Button';

const HeroLeft: React.FC = () => {
  return (
    <div className="flex flex-col items-start animate-fade-in-up">
      {/* Tagline Badge */}
      <div className="inline-block px-3 py-1 mb-6 border border-brand-orange/30 bg-brand-orange/5 rounded-full">
        <span className="text-[10px] md:text-xs font-bold tracking-wider text-brand-orange uppercase">
          #1 Digital Marketing Tools
        </span>
      </div>

      {/* Main Headline */}
      <h1 className="text-5xl md:text-6xl lg:text-[4rem] leading-[1.1] font-bold text-brand-dark mb-6 tracking-tight">
        Smarter Marketing <br />
        <span className="font-serif italic text-brand-orange font-normal">Bigger Impacts</span>
      </h1>

      {/* Subheadline */}
      <p className="text-lg text-brand-gray mb-8 leading-relaxed max-w-lg">
        Marketive gives you tools to engage, and convert without the chaos. From automated campaigns to real-time insights.
      </p>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-10">
        <Button variant="primary" className="px-8 py-3.5 text-base shadow-lg shadow-brand-orange/20">
          Get Started
        </Button>
        <Button variant="outline" className="px-6 py-3.5 text-base group flex items-center justify-center gap-2 border-gray-200 hover:border-gray-300 text-brand-dark">
          Book a Demo
          <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>

      {/* Social Proof */}
      <div className="flex items-center gap-4">
        <div className="flex -space-x-3">
          {[1, 2, 3].map((i) => (
            <img 
              key={i}
              src={`https://picsum.photos/id/${100 + i}/50/50`} 
              alt="User" 
              className="w-10 h-10 rounded-full border-2 border-white object-cover"
            />
          ))}
        </div>
        <div className="flex items-center gap-2">
          <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
          <span className="text-sm font-bold text-brand-dark">
            4.8 <span className="font-normal text-brand-gray">(150K)</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default HeroLeft;