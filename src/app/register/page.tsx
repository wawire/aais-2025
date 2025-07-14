

import RegisterHero from '@/components/sections/RegisterHero';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Register - AAIS 2025 | Africa Aviation Innovation Summit',
  description: 'Register for the Africa Aviation Innovation Summit 2025 in Diani, Kenya. Choose from Early Bird, Standard, Student, Corporate, Exhibitor, and Sponsorship packages.',
  keywords: 'AAIS 2025, aviation summit, Kenya Airways, registration, aviation conference, Diani',
  openGraph: {
    title: 'Register for AAIS 2025',
    description: 'Join the premier aviation innovation summit in Africa',
    images: ['/images/aais-2025-hero.jpg'],
  },
};

/**
 * Registration landing page for AAIS 2025
 * Features package selection, multi-step registration, and payment integration
 */
export default function RegisterPage(): JSX.Element {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-aviationGold/5">
<RegisterHero />

      {/* Package Selection */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Choose Your Package
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Select the perfect package for your needs. Early Bird pricing available until October 1, 2025.
          </p>
        </div>
      </section>


    </div>
  );
}
