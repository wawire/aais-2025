import { Footer } from '@/components/layout/Footer';
import { TransparentHeader } from '@/components/layout/TransparentHeader';
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
          'bg-gradient-to-br from-gray-50 via-softGray-100 to-gray-50',
          'selection:bg-aviationGold selection:text-white',
          'transition-colors duration-300'
        )}
      >
        <div className="relative z-10 flex flex-col min-h-screen">
          <TransparentHeader />
          <main
            id="main-content"
            role="main"
            className="flex-1 container mx-auto px-4 py-8 focus:outline-none text-charcoal-900"
          >
            {children}
          </main>
          <Footer/>
        </div>
      </body>
    </html>
  );
}
