import React from 'react';
import { Lightbulb, Target, Rocket } from 'lucide-react';

const Process: React.FC = () => {
  return (
    <section className="py-24 bg-brand-dark text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(30deg,#ffffff_1px,transparent_1px)] [background-size:30px_30px]"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-end justify-between gap-12 mb-20">
            <div className="max-w-2xl">
                <span className="text-brand-orange font-bold tracking-wider text-xs uppercase mb-3 block">How It Works</span>
                <h2 className="text-4xl lg:text-5xl font-bold mb-6 tracking-tight">
                    Our proven process for <br/>
                    <span className="font-serif italic text-brand-orange font-normal">exceptional results</span>
                </h2>
                <p className="text-gray-400 text-lg max-w-xl">
                    We don't just guess; we follow a data-backed strategy to ensure every campaign delivers maximum ROI.
                </p>
            </div>
            <button className="hidden lg:block px-8 py-3 border border-white/20 rounded-full hover:bg-white hover:text-brand-dark transition-all duration-300">
                See Case Studies
            </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-gray-800 via-brand-orange/50 to-gray-800 border-t border-dashed border-gray-600 z-0"></div>

            {/* Step 1 */}
            <div className="relative z-10 flex flex-col items-center text-center md:items-start md:text-left group">
                <div className="w-24 h-24 rounded-full bg-gray-800 border-4 border-brand-dark flex items-center justify-center mb-8 relative group-hover:border-brand-orange transition-colors duration-500">
                    <Lightbulb size={32} className="text-brand-orange" />
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-white text-brand-dark font-bold flex items-center justify-center shadow-lg">1</div>
                </div>
                <h3 className="text-2xl font-bold mb-4">Discovery & Strategy</h3>
                <p className="text-gray-400 leading-relaxed">We deep dive into your business model, audience, and competitors to craft a bespoke roadmap.</p>
            </div>

            {/* Step 2 */}
            <div className="relative z-10 flex flex-col items-center text-center md:items-start md:text-left group">
                <div className="w-24 h-24 rounded-full bg-gray-800 border-4 border-brand-dark flex items-center justify-center mb-8 relative group-hover:border-brand-orange transition-colors duration-500">
                    <Target size={32} className="text-brand-orange" />
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-white text-brand-dark font-bold flex items-center justify-center shadow-lg">2</div>
                </div>
                <h3 className="text-2xl font-bold mb-4">Execution & Optimization</h3>
                <p className="text-gray-400 leading-relaxed">Our experts launch your campaigns, continuously monitoring and tweaking for peak performance.</p>
            </div>

            {/* Step 3 */}
            <div className="relative z-10 flex flex-col items-center text-center md:items-start md:text-left group">
                <div className="w-24 h-24 rounded-full bg-gray-800 border-4 border-brand-dark flex items-center justify-center mb-8 relative group-hover:border-brand-orange transition-colors duration-500">
                    <Rocket size={32} className="text-brand-orange" />
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-white text-brand-dark font-bold flex items-center justify-center shadow-lg">3</div>
                </div>
                <h3 className="text-2xl font-bold mb-4">Scaling & Growth</h3>
                <p className="text-gray-400 leading-relaxed">Once we hit the winning formula, we scale aggressively to maximize your market share.</p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Process;