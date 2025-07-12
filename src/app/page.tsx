// app/page.tsx
import { Hero } from '@/components/Hero';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home',
  description: 'Welcome to Africa Aviation Innovation Summit 2025',
};

/**
 * Home page for AAIS 2025.
 * Features full-width hero section with call-to-action and key information.
 */
export default function HomePage(): JSX.Element {
  return (
    <>

      <Hero />
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-7xl mx-auto">
          // Section content
        </div>
      </section>

    </>
  );
}
