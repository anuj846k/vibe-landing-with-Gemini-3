
import React from 'react';
import { Search, BarChart2, PenTool, MessageCircle, Mail, Globe, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Search,
    title: 'SEO Optimization',
    description: 'Increase your visibility and rank higher on search engines with our data-driven SEO strategies.',
  },
  {
    icon: BarChart2,
    title: 'Marketing Analytics',
    description: 'Get real-time insights into your campaigns. We turn raw data into actionable growth strategies.',
  },
  {
    icon: PenTool,
    title: 'Content Strategy',
    description: 'Engage your audience with compelling content that tells your story and drives conversions.',
  },
  {
    icon: MessageCircle,
    title: 'Social Media Marketing',
    description: 'Build a loyal community and increase brand awareness across all major social platforms.',
  },
  {
    icon: Mail,
    title: 'Email Automation',
    description: 'Nurture leads and retain customers with personalized, automated email marketing workflows.',
  },
  {
    icon: Globe,
    title: 'Web Development',
    description: 'Fast, responsive, and conversion-optimized websites tailored to your brand identity.',
  }
];

const Services: React.FC = () => {
  return (
    <section className="py-24 lg:py-32 bg-brand-light/30 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-orange/20 to-transparent"></div>
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-brand-orange/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute top-40 -left-20 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-20">
                <span className="inline-block py-1 px-3 rounded-full bg-brand-orange/10 text-brand-orange font-bold tracking-wider text-xs uppercase mb-4">Our Expertise</span>
                <h2 className="text-4xl lg:text-5xl font-bold text-brand-dark mb-6 tracking-tight">
                    Comprehensive solutions for <br className="hidden md:block" />
                    <span className="font-serif italic text-brand-orange font-normal relative">
                        maximum growth
                        <svg className="absolute w-full h-2 -bottom-1 left-0 text-brand-orange opacity-30" viewBox="0 0 100 10" preserveAspectRatio="none">
                            <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="2" fill="none" />
                        </svg>
                    </span>
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                    We provide a full suite of digital marketing services designed to help your business thrive in the digital age.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => (
                    <div 
                        key={index} 
                        className="group p-8 bg-white rounded-2xl shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] border border-gray-100 hover:border-brand-orange/20 transition-all duration-300 flex flex-col items-start h-full relative overflow-hidden hover:scale-[1.02] hover:rotate-1"
                    >
                        {/* Hover Gradient Background */}
                        <div className="absolute inset-0 bg-gradient-to-br from-brand-orange/0 to-brand-orange/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                        <div className="relative z-10 w-14 h-14 rounded-xl bg-orange-50 text-brand-orange flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 group-hover:animate-pulse">
                            <service.icon size={28} strokeWidth={1.5} />
                        </div>
                        
                        <h3 className="relative z-10 text-xl font-bold text-brand-dark mb-3 group-hover:text-brand-orange transition-colors">{service.title}</h3>
                        
                        <p className="relative z-10 text-gray-600 leading-relaxed mb-8 flex-grow">{service.description}</p>
                        
                        <a href="#" className="relative z-10 inline-flex items-center text-sm font-bold text-brand-dark group-hover:text-brand-orange transition-colors mt-auto">
                            Learn More <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                        </a>
                    </div>
                ))}
            </div>
        </div>
    </section>
  );
};

export default Services;
