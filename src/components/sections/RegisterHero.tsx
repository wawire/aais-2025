import React from 'react';
import BaseHero from '../ui/BaseHero';

const RegisterHero: React.FC = () => {
  return (
    <BaseHero
      backgroundClass="bg-hero-register"
      overlay="aviation"
      className="pt-32 md:pt-40 pb-16"
    >
      <div className="w-full max-w-5xl mx-auto">
        <h1 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
          Join Africa's Premier
          <span className="block text-aviationGold mt-1">
            Aviation Innovation Summit
          </span>
        </h1>

        <p className="font-body text-lg text-gray-200 leading-relaxed mb-8 max-w-3xl mx-auto">
          Connect with aviation leaders, policymakers, and investors shaping Africa's aviation future.
          November 6–7, 2025 in Diani, Kenya.
        </p>

      </div>
    </BaseHero>
  );
};

export default RegisterHero;
