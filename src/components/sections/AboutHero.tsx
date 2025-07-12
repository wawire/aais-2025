import React from 'react';
import BaseHero from '../ui/BaseHero';

const AboutHero: React.FC = () => {
  return (
    <BaseHero
      backgroundClass="bg-hero-about"
      overlay="luxury"
      className="pt-32 md:pt-40 pb-16"
    >
      <div className="w-full max-w-5xl mx-auto text-center">
        <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
          Africa Aviation Innovation Summit
          <span className="block text-aviationGold mt-2 text-2xl md:text-3xl lg:text-4xl">
            4th Edition 2025
          </span>
        </h1>

        <p className="font-body text-lg md:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed mb-8">
          Investing in Africa's Aviation Future: Unlocking Opportunities for Growth and
          Transformation through Innovation
        </p>

        {/* Uncomment this section if event details are to be shown */}
        {/*
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-aviationGold font-accent text-lg font-semibold">📅 Dates</div>
            <div className="text-gray-300 font-body">November 6–7, 2025</div>
          </div>
          <div className="text-center">
            <div className="text-aviationGold font-accent text-lg font-semibold">📍 Venue</div>
            <div className="text-gray-300 font-body">Diani, Kenya</div>
          </div>
          <div className="text-center">
            <div className="text-aviationGold font-accent text-lg font-semibold">🏢 Organizer</div>
            <div className="text-gray-300 font-body">Kenya Airways PLC</div>
          </div>
        </div>
        */}
      </div>
    </BaseHero>
  );
};

export default AboutHero;
