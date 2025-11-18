import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Button from './ui/Button';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
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
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 cursor-pointer group">
            <div className="w-8 h-8 relative transition-transform group-hover:scale-110 duration-300">
               {/* Abstract Orange Triangle Logo */}
              <svg viewBox="0 0 100 100" className="fill-brand-orange w-full h-full">
                 <path d="M50 15 L85 85 L15 85 Z" className="opacity-90" />
                 <path d="M50 35 L75 85 L25 85 Z" fill="white" fillOpacity="0.3" />
              </svg>
            </div>
            <span className="text-xl font-bold text-brand-dark tracking-tight">Marketive</span>
          </a>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-sm font-medium text-gray-600 hover:text-brand-orange transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Auth Buttons */}
          <div className="hidden lg:flex items-center gap-6">
            <a href="#" className="text-sm font-bold text-brand-dark hover:text-brand-orange transition-colors">Log In</a>
            <Button variant="primary" className="px-6 py-2.5 text-sm">Sign Up</Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden text-brand-dark hover:text-brand-orange transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white shadow-lg p-6 z-50 flex flex-col gap-4 lg:hidden border-t border-gray-100 animate-in slide-in-from-top-5 duration-200">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsMenuOpen(false)}
                className="text-base font-medium text-gray-700 hover:text-brand-orange py-2 border-b border-gray-50 last:border-0"
              >
                {link.name}
              </a>
            ))}
            <div className="mt-4 flex flex-col gap-3">
              <a href="#" className="text-base font-bold text-center text-brand-dark py-2">Log In</a>
              <Button variant="primary" className="w-full">Sign Up</Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;