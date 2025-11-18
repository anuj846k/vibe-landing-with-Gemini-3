import React from 'react';
import HeroLeft from './HeroLeft';
import HeroRight from './HeroRight';

const Hero: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative">
      {/* Left Column - Content */}
      <div className="lg:col-span-5 flex flex-col gap-8 z-10 order-2 lg:order-1">
        <HeroLeft />
      </div>

      {/* Right Column - Visuals */}
      <div className="lg:col-span-7 relative z-0 order-1 lg:order-2 min-h-[400px] md:min-h-[600px] lg:h-[700px] flex items-center justify-center">
         {/* Background dotted pattern behind right side */}
         <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] opacity-50 rounded-3xl"></div>
         <HeroRight />
      </div>
    </div>
  );
};

export default Hero;