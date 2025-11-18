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
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-brand-orange/20 scroll-smooth">
      <Navbar />
      
      <main>
        <section id="home" className="pt-8 pb-16 lg:pt-12 lg:pb-12">
          <Hero />
          <CompanyLogos />
        </section>

        <section id="features">
          <Services />
        </section>

        <section id="process">
          <Process />
        </section>

        <section id="about">
          <Testimonials />
        </section>

        <section id="pricing">
          <Pricing />
        </section>

        <CTA />
      </main>

      <Footer />
    </div>
  );
};

export default App;