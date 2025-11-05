// app/layout.tsx
import { Footer } from '@/components/layout/Footer';
import { TransparentHeader } from '@/components/layout/TransparentHeader';
import GoogleAnalytics from '@/components/GoogleAnalytics';
import { cn } from '@/lib/utils';
import { defaultMetadata, eventStructuredData } from '@/lib/metadata';
import type { Metadata } from 'next';
import { Roboto_Flex } from 'next/font/google';
import Script from 'next/script';
import '../styles/globals.css';

const robotoFlex = Roboto_Flex({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-roboto-flex',
  display: 'swap',
});

export const metadata: Metadata = defaultMetadata;

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
          'bg-gradient-to-br from-gray-50 via-softGray-100 to-gray-50',
          'selection:bg-aviationGold selection:text-white',
          'transition-colors duration-300'
        )}
      >
        {/* Google Analytics */}
        <GoogleAnalytics />

        {/* Structured Data for SEO */}
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(eventStructuredData) }}
        />

        {/* Skip to content link for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[9999] focus:px-4 focus:py-2 focus:bg-aviationGold focus:text-white focus:rounded-lg focus:shadow-lg"
        >
          Skip to main content
        </a>

        <div className="relative z-10 flex flex-col min-h-screen">
          <TransparentHeader />
          <main
            id="main-content"
            role="main"
            tabIndex={-1}
            className="flex-1 focus:outline-none text-charcoal-900"
          >
            {children}
          </main>
          <Footer/>
        </div>
      </body>
    </html>
  );
}
