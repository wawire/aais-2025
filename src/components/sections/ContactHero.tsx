import React from 'react';
import BaseHero from '../ui/BaseHero';

const ContactHero: React.FC = () => {
  return (
    <BaseHero
      backgroundClass="bg-hero-contact"
      overlay="aviation"
      className="pt-32 md:pt-40 pb-16"
    >
      <div className="w-full max-w-5xl mx-auto text-center">
        <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
          Contact & Support
          <span className="block text-aviationGold mt-1 text-2xl md:text-3xl lg:text-4xl">
            We're Here to Help
          </span>
        </h1>

        <p className="font-body text-lg md:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed mb-8">
          Have questions about AAIS 2025? Our team is ready to assist with registration,
          logistics, accommodations, and any other inquiries.
        </p>
      </div>
    </BaseHero>
  );
};

export default ContactHero;
