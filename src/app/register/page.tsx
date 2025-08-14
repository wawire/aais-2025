import RegisterHero from '@/components/sections/RegisterHero';
import { Metadata } from 'next';
import { Registration } from '../../components/sections/Registration';

export const metadata: Metadata = {
  title: 'Register - AAIS 2025 | Africa Aviation Innovation Summit',
  description:
    'Register for the Africa Aviation Innovation Summit 2025 in Diani, Kenya. Choose from Early Bird, Standard, Student, Corporate, Exhibitor, and Sponsorship packages.',
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
      <Registration />
    </div>
  );
}
