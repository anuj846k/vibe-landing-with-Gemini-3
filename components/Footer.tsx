import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Send } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0B0F19] text-white pt-24 pb-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-20">
            
            {/* Brand Column */}
            <div className="lg:col-span-2">
                <div className="flex items-center gap-3 mb-6">
                    <div className="w-8 h-8 relative">
                         <svg viewBox="0 0 100 100" className="fill-brand-orange w-full h-full">
                            <path d="M50 15 L85 85 L15 85 Z" className="opacity-90" />
                            <path d="M50 35 L75 85 L25 85 Z" fill="white" fillOpacity="0.3" />
                         </svg>
                    </div>
                    <span className="text-2xl font-bold tracking-tight text-white">Marketive</span>
                </div>
                <p className="text-gray-400 leading-relaxed mb-8 max-w-sm">
                    Marketive gives you tools to engage and convert without the chaos. We help brands build meaningful connections.
                </p>
                <div className="flex gap-4">
                    {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                        <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-orange transition-all duration-300 group hover:scale-110">
                            <Icon size={18} className="text-gray-400 group-hover:text-white transition-colors" />
                        </a>
                    ))}
                </div>
            </div>

            {/* Links Columns */}
            <div>
                <h4 className="font-bold text-lg mb-6 text-white">Product</h4>
                <ul className="space-y-4 text-gray-400">
                    <li><a href="#" className="hover:text-brand-orange transition-colors inline-block">Features</a></li>
                    <li><a href="#" className="hover:text-brand-orange transition-colors inline-block">Pricing</a></li>
                    <li><a href="#" className="hover:text-brand-orange transition-colors inline-block">Case Studies</a></li>
                    <li><a href="#" className="hover:text-brand-orange transition-colors inline-block">Reviews</a></li>
                </ul>
            </div>

            <div>
                <h4 className="font-bold text-lg mb-6 text-white">Company</h4>
                <ul className="space-y-4 text-gray-400">
                    <li><a href="#" className="hover:text-brand-orange transition-colors inline-block">About Us</a></li>
                    <li><a href="#" className="hover:text-brand-orange transition-colors inline-block">Careers</a></li>
                    <li><a href="#" className="hover:text-brand-orange transition-colors inline-block">Press</a></li>
                    <li><a href="#" className="hover:text-brand-orange transition-colors inline-block">Contact</a></li>
                </ul>
            </div>

            {/* Newsletter */}
            <div className="lg:col-span-1">
                <h4 className="font-bold text-lg mb-6 text-white">Newsletter</h4>
                <p className="text-sm text-gray-400 mb-4">Subscribe to our newsletter to get the latest news and offers.</p>
                <form className="relative group">
                    <input 
                        type="email" 
                        placeholder="Your email address" 
                        className="w-full bg-white/5 border border-white/10 rounded-xl py-3.5 px-4 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-brand-orange/50 focus:ring-2 focus:ring-brand-orange/20 transition-all"
                    />
                    <button type="submit" className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-brand-orange rounded-lg text-white hover:bg-brand-orange/90 transition-colors shadow-lg">
                        <Send size={14} />
                    </button>
                </form>
            </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm">© 2024 Marketive. All rights reserved.</p>
            <div className="flex gap-8 text-sm text-gray-500">
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;