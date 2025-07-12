import React from 'react';
import BaseHero from '../ui/BaseHero';

const AgendaHero: React.FC = () => {
  return (
    <BaseHero
      backgroundClass="bg-hero-agenda"
      overlay="aviation"
      className="pt-32 md:pt-40 pb-16"
    >
      <div className="w-full max-w-5xl mx-auto text-center">
        <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
          AAIS 2025 Summit
          <span className="block text-aviationGold mt-1 text-2xl md:text-3xl lg:text-4xl">
            Program Schedule
          </span>
        </h1>

        <p className="font-body text-lg md:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed mb-8">
          Two days of keynotes, panels, workshops, and networking focused on
          investing in Africa's aviation future through innovation.
        </p>
      </div>
    </BaseHero>
  );
};

export default AgendaHero;
