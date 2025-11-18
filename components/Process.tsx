import React, { useEffect, useRef, useState } from 'react';
import { Lightbulb, Target, Rocket } from 'lucide-react';

const Process: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 } // Trigger when 15% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 lg:py-32 bg-[#111827] text-white relative overflow-hidden">
      {/* Refined Background Pattern */}
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:32px_32px]"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-96 bg-brand-orange/10 blur-[100px] rounded-full pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-end justify-between gap-12 mb-24">
            <div className={`max-w-2xl transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <span className="text-brand-orange font-bold tracking-wider text-xs uppercase mb-4 block">How It Works</span>
                <h2 className="text-4xl lg:text-5xl font-bold mb-6 tracking-tight leading-tight">
                    Our proven process for <br/>
                    <span className="font-serif italic text-brand-orange font-normal">exceptional results</span>
                </h2>
                <p className="text-gray-400 text-lg max-w-xl leading-relaxed">
                    We don't just guess; we follow a data-backed strategy to ensure every campaign delivers maximum ROI.
                </p>
            </div>
            <button className={`hidden lg:inline-flex items-center justify-center px-8 py-3 border border-white/20 rounded-full hover:bg-white hover:text-brand-dark transition-all duration-1000 delay-200 font-medium group ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                See Case Studies
                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            {/* Connecting Line (Desktop) */}
            {/* 
              Line Positioning:
              - top-12 (3rem / 48px) aligns with center of h-24 (6rem / 96px) icons.
              - left-[16.66%] / right-[16.66%] spans from center of Col 1 to center of Col 3 in a 3-col grid.
            */}
            <div className="hidden md:block absolute top-12 left-0 w-full h-[3px] z-0 -translate-y-1/2">
                 <div className={`absolute top-0 left-[16.66%] right-[16.66%] h-full bg-white/10 rounded-full overflow-hidden transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                    {/* Intense Beam Gradient */}
                    <div className="absolute top-0 bottom-0 w-1/3 bg-gradient-to-r from-transparent via-brand-orange via-50% to-transparent blur-[4px] animate-beam opacity-80"></div>
                    <div className="absolute top-[1px] bottom-[1px] w-1/3 bg-gradient-to-r from-transparent via-white via-50% to-transparent blur-[1px] animate-beam opacity-90"></div>
                 </div>
            </div>

            {/* Step 1 */}
            <div className={`relative z-10 flex flex-col items-center text-center group transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
                <div className="w-24 h-24 rounded-2xl bg-[#111827] border border-gray-800 flex items-center justify-center mb-8 relative group-hover:border-brand-orange/50 group-hover:bg-gray-900 transition-all duration-500 shadow-2xl group-hover:shadow-[0_0_30px_-5px_rgba(240,88,63,0.3)] z-20">
                    <Lightbulb size={32} className="text-brand-orange" />
                    <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-brand-orange text-white font-bold flex items-center justify-center shadow-lg shadow-brand-orange/20 border-2 border-[#111827]">1</div>
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-brand-orange transition-colors">Discovery & Strategy</h3>
                <p className="text-gray-400 leading-relaxed">We deep dive into your business model, audience, and competitors to craft a bespoke roadmap.</p>
            </div>

            {/* Step 2 */}
            <div className={`relative z-10 flex flex-col items-center text-center group transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
                <div className="w-24 h-24 rounded-2xl bg-[#111827] border border-gray-800 flex items-center justify-center mb-8 relative group-hover:border-brand-orange/50 group-hover:bg-gray-900 transition-all duration-500 shadow-2xl group-hover:shadow-[0_0_30px_-5px_rgba(240,88,63,0.3)] z-20">
                    <Target size={32} className="text-brand-orange" />
                    <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-brand-orange text-white font-bold flex items-center justify-center shadow-lg shadow-brand-orange/20 border-2 border-[#111827]">2</div>
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-brand-orange transition-colors">Execution & Optimization</h3>
                <p className="text-gray-400 leading-relaxed">Our experts launch your campaigns, continuously monitoring and tweaking for peak performance.</p>
            </div>

            {/* Step 3 */}
            <div className={`relative z-10 flex flex-col items-center text-center group transition-all duration-700 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
                <div className="w-24 h-24 rounded-2xl bg-[#111827] border border-gray-800 flex items-center justify-center mb-8 relative group-hover:border-brand-orange/50 group-hover:bg-gray-900 transition-all duration-500 shadow-2xl group-hover:shadow-[0_0_30px_-5px_rgba(240,88,63,0.3)] z-20">
                    <Rocket size={32} className="text-brand-orange" />
                    <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-brand-orange text-white font-bold flex items-center justify-center shadow-lg shadow-brand-orange/20 border-2 border-[#111827]">3</div>
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-brand-orange transition-colors">Scaling & Growth</h3>
                <p className="text-gray-400 leading-relaxed">Once we hit the winning formula, we scale aggressively to maximize your market share.</p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Process;