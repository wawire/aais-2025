import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { cn } from '@/lib/utils';
import type { Metadata } from 'next';
import { Roboto_Flex } from 'next/font/google';
import '../styles/globals.css';

const robotoFlex = Roboto_Flex({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-roboto-flex',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'AAIS 2025',
  description: 'Africa Aviation Innovation Summit 2025',
  icons: { icon: '/favicon.ico' },
  keywords: [
    'Africa Aviation Innovation Summit',
    'AAIS 2025',
    'aviation summit',
    'Kenya Airways',
    'aviation innovation',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en" dir="ltr" className={robotoFlex.variable}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body
        className={cn(
          robotoFlex.className,
          'min-h-screen font-sans antialiased',
          'bg-gradient-to-br from-gray-50 via-softGray-200 to-gray-100',
          'selection:bg-aviationGold selection:text-white'
        )}
      >
        {/* Accessibility: Skip Navigation */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50 bg-aviationGold text-white px-4 py-2 rounded-lg font-semibold"
        >
          Skip to main content
        </a>

        {/* Background Luxury Pattern */}
        <div
          className="fixed inset-0 opacity-5 pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C2A542' fill-opacity='0.1'%3E%3Ccircle cx='6' cy='6' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />

        {/* Layout Structure */}
        <div className="relative z-10 flex flex-col min-h-screen">
          <Header />
          <Hero />
          <main
            id="main-content"
            role="main"
            className="flex-1 container mx-auto px-4 py-8 focus:outline-none fade-in"
          >
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
