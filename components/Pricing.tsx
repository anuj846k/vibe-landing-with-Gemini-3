import React, { useState } from 'react';
import { Check } from 'lucide-react';
import Button from './ui/Button';

const plans = [
  {
    name: "Starter",
    price: "999",
    description: "Perfect for small businesses getting started.",
    features: ["Social Media Management", "Basic SEO Audit", "Monthly Reporting", "Email Support"],
    popular: false
  },
  {
    name: "Growth",
    price: "1,999",
    description: "Best for growing teams and aggressive scaling.",
    features: ["Everything in Starter", "Advanced SEO Strategy", "PPC Ad Management", "Content Creation (4 Posts)", "Weekly Strategy Calls"],
    popular: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Full-service solution for large organizations.",
    features: ["Everything in Growth", "Dedicated Account Manager", "Custom Development", "24/7 Priority Support", "Unlimited Revisions"],
    popular: false
  }
];

const Pricing: React.FC = () => {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section className="py-24 bg-[#FAFAFA]" id="pricing">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-brand-dark mb-6">
                Transparent <span className="font-serif italic text-brand-orange font-normal">Pricing</span>
            </h2>
            <p className="text-gray-600 text-lg mb-8">
                Choose the plan that fits your business goals. No hidden fees.
            </p>
            
            {/* Toggle */}
            <div className="flex items-center justify-center gap-4 mb-8">
                <span className={`text-sm font-medium ${!isYearly ? 'text-brand-dark' : 'text-gray-400'}`}>Monthly</span>
                <button 
                    onClick={() => setIsYearly(!isYearly)}
                    className="w-14 h-8 bg-brand-dark rounded-full relative p-1 transition-colors duration-300 focus:outline-none"
                    aria-label="Toggle pricing"
                >
                    <div className={`w-6 h-6 bg-white rounded-full transition-transform duration-300 ${isYearly ? 'translate-x-6' : 'translate-x-0'}`}></div>
                </button>
                <span className={`text-sm font-medium ${isYearly ? 'text-brand-dark' : 'text-gray-400'}`}>
                    Yearly <span className="text-[10px] text-brand-orange font-bold bg-brand-orange/10 px-2 py-0.5 rounded-full ml-1">SAVE 20%</span>
                </span>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            {plans.map((plan, index) => (
                <div 
                    key={index} 
                    className={`relative bg-white rounded-3xl p-8 ${plan.popular ? 'shadow-2xl ring-2 ring-brand-orange scale-105 z-10' : 'shadow-lg border border-gray-100'} flex flex-col h-full`}
                >
                    {plan.popular && (
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-orange text-white text-xs font-bold uppercase px-4 py-1.5 rounded-full tracking-wider shadow-lg">
                            Most Popular
                        </div>
                    )}
                    
                    <div className="mb-8">
                        <h3 className="text-xl font-bold text-brand-dark mb-2">{plan.name}</h3>
                        <p className="text-sm text-gray-500 h-10">{plan.description}</p>
                    </div>
                    
                    <div className="mb-8">
                        <div className="flex items-baseline gap-1">
                            <span className="text-4xl font-bold text-brand-dark">
                                {plan.price === "Custom" ? "Custom" : `$${isYearly ? (parseInt(plan.price.replace(',', '')) * 0.8).toFixed(0) : plan.price}`}
                            </span>
                            {plan.price !== "Custom" && <span className="text-gray-400 font-medium">/mo</span>}
                        </div>
                    </div>

                    <ul className="space-y-4 mb-8 flex-grow">
                        {plan.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-3 text-sm text-gray-700">
                                <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                                    <Check size={12} className="text-green-600" />
                                </div>
                                {feature}
                            </li>
                        ))}
                    </ul>

                    <Button 
                        variant={plan.popular ? 'primary' : 'outline'} 
                        className="w-full py-3"
                    >
                        {plan.price === "Custom" ? "Contact Sales" : "Get Started"}
                    </Button>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;