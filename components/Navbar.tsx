
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Button from './ui/Button';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Features', href: '#features' },
    { name: 'How it works', href: '#process' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'About Us', href: '#about' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-white/80 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.03)] border-b border-gray-100/50 py-3' 
          : 'bg-transparent py-5 lg:py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 cursor-pointer group relative z-50">
            <div className="w-9 h-9 relative transition-transform group-hover:scale-105 duration-300">
               {/* Abstract Orange Triangle Logo */}
              <svg viewBox="0 0 100 100" className="fill-brand-orange w-full h-full drop-shadow-sm">
                 <path d="M50 15 L85 85 L15 85 Z" className="opacity-95" />
                 <path d="M50 35 L75 85 L25 85 Z" fill="white" fillOpacity="0.35" />
              </svg>
            </div>
            <span className="text-xl font-bold text-brand-dark tracking-tight group-hover:text-brand-orange transition-colors">Marketive</span>
          </a>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-[15px] font-medium text-gray-600 hover:text-brand-orange transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-brand-orange after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Auth Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <a href="#" className="px-4 py-2 text-[15px] font-semibold text-gray-600 hover:text-brand-dark transition-colors">Log In</a>
            <Button variant="primary" className="px-6 py-2.5 text-[15px] shadow-lg shadow-brand-orange/25 hover:shadow-brand-orange/40 hover:-translate-y-0.5 transition-all duration-300">Sign Up</Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden text-brand-dark hover:text-brand-orange transition-colors relative z-50 p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-0 left-0 w-full h-screen bg-white z-40 flex flex-col pt-24 px-6 gap-6 lg:hidden animate-in fade-in duration-200">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsMenuOpen(false)}
                className="text-2xl font-bold text-gray-800 hover:text-brand-orange py-2 border-b border-gray-50"
              >
                {link.name}
              </a>
            ))}
            <div className="mt-8 flex flex-col gap-4">
              <Button variant="outline" className="w-full justify-center py-3 text-lg">Log In</Button>
              <Button variant="primary" className="w-full justify-center py-3 text-lg">Sign Up Free</Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
