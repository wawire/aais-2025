import type { Metadata } from 'next';
import { Roboto_Flex } from 'next/font/google';
import '../styles/globals.css';
import { cn } from '@/lib/utils';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

// Initialize Roboto Flex font with subsets and weights (600 for Demibold)
const robotoFlex = Roboto_Flex({ subsets: ['latin'], weight: ['400', '600', '700'] });

/**
 * Root layout for AAIS 2025 application.
 * Includes header and footer for consistent navigation and branding.
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Page content
 * @returns {JSX.Element} Root layout
 */
export const metadata: Metadata = {
  title: 'AAIS 2025',
  description: 'Africa Aviation Innovation Summit 2025',
  icons: { icon: '/favicon.ico' },
};

export default function RootLayout({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <html lang="en">
      <body className={cn(robotoFlex.className, 'min-h-screen bg-white font-sans')}>
        <Header />
        <main className="container mx-auto px-4 py-8">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
