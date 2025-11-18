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
    <section className="py-24 bg-brand-light/50 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-orange/20 to-transparent"></div>
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-brand-orange/5 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="text-brand-orange font-bold tracking-wider text-xs uppercase mb-3 block">Our Services</span>
                <h2 className="text-4xl lg:text-5xl font-bold text-brand-dark mb-6 tracking-tight">
                    Comprehensive solutions for <span className="font-serif italic text-brand-orange font-normal">maximum growth</span>
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                    We provide a full suite of digital marketing services designed to help your business thrive in the digital age.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => (
                    <div 
                        key={index} 
                        className="group p-8 bg-white rounded-2xl shadow-sm hover:shadow-xl border border-gray-100 hover:border-brand-orange/20 transition-all duration-300 flex flex-col items-start"
                    >
                        <div className="w-14 h-14 rounded-xl bg-brand-light text-brand-orange flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                            <service.icon size={28} strokeWidth={1.5} />
                        </div>
                        <h3 className="text-xl font-bold text-brand-dark mb-3 group-hover:text-brand-orange transition-colors">{service.title}</h3>
                        <p className="text-gray-600 leading-relaxed mb-6 flex-grow">{service.description}</p>
                        <a href="#" className="inline-flex items-center text-sm font-bold text-brand-dark group-hover:text-brand-orange transition-colors">
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