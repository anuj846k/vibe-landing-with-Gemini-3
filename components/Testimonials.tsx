import React from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "Marketive completely transformed our digital presence. Our leads have tripled in just three months!",
    author: "Sarah Johnson",
    role: "CMO, TechFlow",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80"
  },
  {
    quote: "The level of detail and strategy they bring to the table is unmatched. Highly recommended for any serious business.",
    author: "Michael Chen",
    role: "Founder, StartUp Inc",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80"
  },
  {
    quote: "We've worked with many agencies, but Marketive is the first to truly understand our unique brand voice.",
    author: "Emily Davis",
    role: "Director, Creative Studio",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 lg:py-32 bg-white relative">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#000000_1px,transparent_1px)] [background-size:24px_24px]"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-brand-orange font-bold tracking-wider text-xs uppercase mb-4 block">Testimonials</span>
            <h2 className="text-4xl lg:text-5xl font-bold text-brand-dark mb-6">
                Trusted by <span className="font-serif italic text-brand-orange font-normal">industry leaders</span>
            </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((item, index) => (
                <div key={index} className="bg-gray-50/50 p-10 rounded-[2rem] border border-transparent hover:border-brand-orange/20 hover:bg-white transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 flex flex-col h-full">
                    <div className="mb-6 text-brand-orange">
                        <Quote size={40} className="opacity-20 fill-current rotate-180" />
                    </div>
                    <p className="text-gray-700 text-lg italic mb-8 flex-grow leading-relaxed">"{item.quote}"</p>
                    
                    <div className="flex items-center gap-4 mt-auto pt-6 border-t border-gray-100">
                        <img src={item.image} alt={item.author} className="w-12 h-12 rounded-full object-cover ring-2 ring-brand-orange/20 p-0.5 bg-white" />
                        <div>
                            <h4 className="font-bold text-brand-dark">{item.author}</h4>
                            <p className="text-xs text-gray-500 font-medium uppercase tracking-wide">{item.role}</p>
                        </div>
                        <div className="ml-auto flex gap-0.5">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <Star key={star} size={14} className="text-yellow-400 fill-yellow-400" />
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;