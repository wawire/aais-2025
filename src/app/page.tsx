// app/page.tsx
// import { EventHighlights } from '@/components/EventHilights';
import { Hero } from '@/components/Hero';
import { EventHighlights } from '@/components/sections/EventHighlights';
import { Registration } from '@/components/sections/Registration';
import { SponsorsPartners } from '@/components/sections/SponsorsPartners';
import { WhyAttend } from '@/components/sections/WhyAttend';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home',
  description: 'Welcome to Africa Aviation Innovation Summit 2025',
};

/**
 * Home page for AAIS 2025.
 */
export default function HomePage(): JSX.Element {
  return (
    <>

      <Hero />
      <EventHighlights />
      <WhyAttend />
      <Registration />
      <SponsorsPartners/>


    </>
  );
}
