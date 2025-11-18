import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CompanyLogos from './components/CompanyLogos';
import Services from './components/Services';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import CTA from './components/CTA';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-brand-orange/20 scroll-smooth antialiased">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section id="home" className=" pb-16 lg:pt-32 lg:pb-24 overflow-hidden">
          <Hero />
          <CompanyLogos />
        </section>

        {/* Services / Features */}
        <section id="features">
          <Services />
        </section>

        {/* Process */}
        <section id="process">
          <Process />
        </section>

        {/* Testimonials / About */}
        <section id="about">
          <Testimonials />
        </section>

        {/* Pricing */}
        <section id="pricing">
          <Pricing />
        </section>

        {/* Call to Action */}
        <CTA />
      </main>

      <Footer />
    </div>
  );
};

export default App;