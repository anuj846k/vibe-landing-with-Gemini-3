import React from 'react';

const CompanyLogos: React.FC = () => {
  const logos = [
    {
      name: "Bolt",
      svg: <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8"><path d="M11 19L13 12H20L13 5L11 12H4L11 19Z" /></svg>,
      text: "BOLTASH"
    },
    {
      name: "Lightbox",
      svg: <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8"><rect x="2" y="2" width="20" height="20" rx="5" fillOpacity="0.2"/><path d="M12 7V17M7 12H17" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/></svg>,
      text: "LIGHTBOX"
    },
    {
      name: "Feather",
      svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8"><path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"></path><line x1="16" y1="8" x2="2" y2="22"></line><line x1="17.5" y1="15" x2="9" y2="15"></line></svg>,
      text: "FEATHER"
    },
    {
      name: "Spherule",
      svg: <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8"><circle cx="12" cy="12" r="8" /><circle cx="16" cy="8" r="3" fill="white" /></svg>,
      text: "SPHERULE"
    },
    {
      name: "GlobalBank",
      svg: <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8"><path d="M2 22H22V20H20V10H22V8H2V10H4V20H2V22ZM6 10H8V20H6V10ZM10 10H12V20H10V10ZM14 10H16V20H14V10ZM12 3L2 8V8H22V8L12 3Z" /></svg>,
      text: "GLOBALBANK"
    },
    {
      name: "Nietzsche",
      svg: <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8"><path d="M12 2L2 7V17L12 22L22 17V7L12 2Z" fillOpacity="0.2" stroke="currentColor" strokeWidth="2"/></svg>,
      text: "NIETZSCHE"
    },
    {
      name: "Acme",
      svg: <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8"><path d="M12 2L1 21H23L12 2ZM12 6L19.5 19H4.5L12 6Z" /></svg>,
      text: "ACME CORP"
    }
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-6 mt-16 lg:mt-24">
      <p className="text-center text-sm font-semibold text-gray-400 uppercase tracking-[0.2em] mb-10">
        Trusted by 10,000+ forward-thinking teams
      </p>
      
      <div className="relative w-full overflow-hidden before:absolute before:left-0 before:top-0 before:bottom-0 before:w-24 before:bg-gradient-to-r before:from-white before:to-transparent before:z-10 after:absolute after:right-0 after:top-0 after:bottom-0 after:w-24 after:bg-gradient-to-l after:from-white after:to-transparent after:z-10">
        <div className="flex items-center gap-16 animate-marquee w-max py-2">
          {/* First Set */}
          {logos.map((logo, index) => (
            <div key={`logo-1-${index}`} className="flex items-center gap-3 text-gray-400 group cursor-default transition-colors duration-300 hover:text-brand-dark">
              <div className="opacity-50 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:scale-110">
                {logo.svg}
              </div>
              <span className="font-bold text-xl tracking-tight opacity-50 group-hover:opacity-100 transition-opacity duration-300 font-sans">
                {logo.text}
              </span>
            </div>
          ))}
          
          {/* Duplicate Set for infinite scroll */}
          {logos.map((logo, index) => (
            <div key={`logo-2-${index}`} className="flex items-center gap-3 text-gray-400 group cursor-default transition-colors duration-300 hover:text-brand-dark">
               <div className="opacity-50 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:scale-110">
                {logo.svg}
              </div>
              <span className="font-bold text-xl tracking-tight opacity-50 group-hover:opacity-100 transition-opacity duration-300 font-sans">
                {logo.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompanyLogos;