/**
 * Google Analytics Component
 * Loads GA4 script and initializes tracking
 */

'use client';

import Script from 'next/script';
import { useEffect } from 'react';
import { initAnalytics } from '@/lib/analytics';

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

export default function GoogleAnalytics() {
  useEffect(() => {
    if (GA_MEASUREMENT_ID) {
      initAnalytics();
    }
  }, []);

  // Only load in production or when GA_MEASUREMENT_ID is set
  if (!GA_MEASUREMENT_ID || process.env.NODE_ENV === 'development') {
    return null;
  }

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}', {
            page_path: window.location.pathname,
          });
        `}
      </Script>
    </>
  );
}
