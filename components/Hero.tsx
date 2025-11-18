
import React from 'react';
import HeroLeft from './HeroLeft';
import HeroRight from './HeroRight';

const Hero: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative">
      {/* Ambient Background Elements */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-brand-orange/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none mix-blend-multiply"></div>
      
      {/* Left Column - Content */}
      <div className="lg:col-span-5 flex flex-col gap-8 z-10 order-2 lg:order-1 relative">
        <HeroLeft />
      </div>

      {/* Right Column - Visuals */}
      <div className="lg:col-span-7 relative z-0 order-1 lg:order-2 min-h-[400px] md:min-h-[600px] lg:h-[700px] flex items-center justify-center">
         {/* Background dotted pattern behind right side */}
         <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] opacity-60 rounded-[3rem]"></div>
         <HeroRight />
      </div>
    </div>
  );
};

export default Hero;
