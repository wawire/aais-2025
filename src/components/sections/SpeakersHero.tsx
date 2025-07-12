import React from 'react';
import BaseHero from '../ui/BaseHero';

const SpeakersHero: React.FC = () => {
  const speakerCategories = [
    {
      icon: '✈️',
      title: 'Aviation Leaders',
      description: 'CEOs and executives from leading airlines',
    },
    {
      icon: '🏛️',
      title: 'Policymakers',
      description: 'Government representatives and regulators',
    },
    {
      icon: '💼',
      title: 'Investors',
      description: 'VCs and financiers driving industry growth',
    },
    {
      icon: '🚀',
      title: 'Innovators',
      description: 'Technology providers and startup founders',
    },
  ];

  return (
    <BaseHero
      backgroundClass="bg-hero-speakers"
      overlay="luxury"
      className="pt-32 md:pt-40 pb-16"
    >
      <div className="w-full max-w-5xl mx-auto">
        <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
          Learn From Industry
          <span className="block text-aviationGold mt-1 text-2xl md:text-3xl lg:text-4xl">
            Leaders & Innovators
          </span>
        </h1>

        <p className="font-body text-lg md:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed mb-8">
          Get insights from the minds shaping Africa's aviation future through keynote addresses,
          panel discussions, and interactive sessions.
        </p>
      </div>
    </BaseHero>
  );
};

export default SpeakersHero;
