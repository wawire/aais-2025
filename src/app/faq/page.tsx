import { FAQ } from '@/components/FAQ';
import FaqHero from '@/components/sections/FaqHero';
import type { Metadata } from 'next';

/**
 * Metadata configuration for FAQ page SEO optimization
 */
export const metadata: Metadata = {
  title: 'FAQ - AAIS 2025 | Africa Aviation Innovation Summit',
  description: 'Frequently asked questions about the Africa Aviation Innovation Summit 2025. Get answers about registration, venue, logistics, sponsorship, and more for the premier aviation event in Africa.',
  keywords: 'AAIS 2025, FAQ, Africa Aviation Innovation Summit, aviation conference, Kenya Airways, registration questions, venue information',
  openGraph: {
    title: 'FAQ - AAIS 2025',
    description: 'Get answers to your questions about the Africa Aviation Innovation Summit 2025',
    type: 'website',
    url: '/faq',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FAQ - AAIS 2025',
    description: 'Get answers to your questions about the Africa Aviation Innovation Summit 2025',
  },
};

/**
 * FAQ Page Component for AAIS 2025
 *
 * This page serves as the main entry point for frequently asked questions
 * about the Africa Aviation Innovation Summit 2025. It leverages the reusable
 * FAQ component with default content and styling.

 * @returns {JSX.Element} FAQ page content
 */
export default function FAQPage(): JSX.Element {
  return (
    <main role="main" aria-label="Frequently Asked Questions for AAIS 2025">
          <FaqHero/>
      <FAQ
        contactUrl="/contact"
        className="min-h-screen"
      />
    </main>
  );
}
