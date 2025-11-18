import React from 'react';
import Button from './ui/Button';
import { ArrowRight } from 'lucide-react';

const CTA: React.FC = () => {
  return (
    <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto bg-gradient-to-br from-brand-orange to-[#D64029] rounded-[3rem] p-12 lg:p-24 relative overflow-hidden shadow-2xl shadow-brand-orange/30 text-center group">
            
            {/* Abstract background shapes */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-white opacity-10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl group-hover:opacity-20 transition-opacity duration-700"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#111827] opacity-10 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
            
            <div className="relative z-10 max-w-3xl mx-auto">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
                    Ready to skyrocket your <br/> 
                    <span className="font-serif italic opacity-90">business growth?</span>
                </h2>
                <p className="text-white/90 text-lg md:text-xl mb-10 leading-relaxed max-w-2xl mx-auto">
                    Join 150K+ marketers who are already using Marketive to drive real results. Book your free consultation today.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <button className="bg-white text-brand-orange px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-50 transition-all shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 duration-300">
                        Start Your Free Trial
                    </button>
                    <Button variant="ghost" className="text-white border border-white/30 hover:bg-white/10 hover:border-white/50 px-10 py-4 text-lg rounded-xl">
                        Book a Demo
                        <ArrowRight size={20} className="ml-2" />
                    </Button>
                </div>
                <p className="mt-8 text-sm text-white/60 font-medium tracking-wide">No credit card required • 14-day free trial • Cancel anytime</p>
            </div>
        </div>
    </section>
  );
};

export default CTA;