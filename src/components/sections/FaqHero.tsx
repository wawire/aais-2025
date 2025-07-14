import React from 'react';
import BaseHero from '../ui/BaseHero';

const FaqHero: React.FC = () => {
  return (
    <BaseHero
      backgroundClass="bg-hero-faq"
      overlay="aviation"
      className="pt-32 md:pt-40 pb-16"
    >
      <div className="w-full max-w-5xl mx-auto text-center">
        <h1 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
          Frequently Asked Questions
          <span className="block text-aviationGold mt-1">
            Everything You Need to Know
          </span>
        </h1>

        <p className="font-body text-lg text-gray-200 max-w-3xl mx-auto leading-relaxed mb-8">
          Have questions about AAIS 2025? We've compiled answers to the most common
          inquiries regarding registration, venue, travel, and more.
        </p>
      </div>
    </BaseHero>
  );
};

export default FaqHero;
