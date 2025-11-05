/**
 * Centralized metadata configuration for AAIS 2025
 * Provides SEO, Open Graph, and Twitter Card metadata
 */

import type { Metadata } from 'next';

const siteUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://aais2025.com';
const siteName = 'Africa Aviation Innovation Summit 2025';
const siteDescription =
  "Join 500+ aviation leaders at the 4th Africa Aviation Innovation Summit. November 6-7, 2025 at Diani Reef Beach Resort, Kenya. Investing in Africa's Aviation Future.";
const siteKeywords = [
  'Africa Aviation Innovation Summit',
  'AAIS 2025',
  'aviation summit Kenya',
  'aviation innovation Africa',
  'Kenya Airways',
  'Diani aviation conference',
  'African aviation investment',
  'aviation transformation',
  'aviation technology Africa',
  'airline innovation',
];

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteName,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  keywords: siteKeywords,
  authors: [{ name: 'AAIS 2025 Organizing Committee' }],
  creator: 'AAIS 2025',
  publisher: 'Africa Aviation Innovation Summit',

  // Open Graph
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName,
    title: siteName,
    description: siteDescription,
    images: [
      {
        url: `${siteUrl}/images/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: 'Africa Aviation Innovation Summit 2025 - Join us in Diani, Kenya',
        type: 'image/jpeg',
      },
      {
        url: `${siteUrl}/images/aais2025-logo-primary.svg`,
        width: 800,
        height: 400,
        alt: 'AAIS 2025 Logo',
        type: 'image/svg+xml',
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: siteName,
    description: siteDescription,
    creator: '@AAIS2025',
    site: '@AAIS2025',
    images: [`${siteUrl}/images/twitter-card.jpg`],
  },

  // Icons & Manifest
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/images/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/images/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/images/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },

  manifest: '/manifest.json',

  // Additional metadata
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  alternates: {
    canonical: siteUrl,
  },

  // Verification (add your codes when available)
  verification: {
    google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
    // bing: 'your-bing-verification-code',
  },

  // Category
  category: 'conference',
};

/**
 * Generate metadata for individual pages
 */
export function generatePageMetadata({
  title,
  description,
  path = '',
  image,
  noIndex = false,
}: {
  title: string;
  description?: string;
  path?: string;
  image?: string;
  noIndex?: boolean;
}): Metadata {
  const pageUrl = `${siteUrl}${path}`;
  const pageDescription = description || siteDescription;
  const pageImage = image || `${siteUrl}/images/og-image.jpg`;

  return {
    title,
    description: pageDescription,
    openGraph: {
      title,
      description: pageDescription,
      url: pageUrl,
      images: [
        {
          url: pageImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      title,
      description: pageDescription,
      images: [pageImage],
    },
    alternates: {
      canonical: pageUrl,
    },
    robots: noIndex
      ? {
          index: false,
          follow: false,
        }
      : undefined,
  };
}

/**
 * Event-specific structured data (JSON-LD)
 */
export const eventStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'Event',
  name: 'Africa Aviation Innovation Summit 2025',
  description: siteDescription,
  startDate: '2025-11-06T09:00:00+03:00',
  endDate: '2025-11-07T18:00:00+03:00',
  eventStatus: 'https://schema.org/EventScheduled',
  eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
  location: {
    '@type': 'Place',
    name: 'Diani Reef Beach Resort',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Diani Beach',
      addressRegion: 'Kwale County',
      addressCountry: 'Kenya',
    },
  },
  image: [`${siteUrl}/images/og-image.jpg`],
  organizer: {
    '@type': 'Organization',
    name: 'Africa Aviation Innovation Summit',
    url: siteUrl,
  },
  offers: {
    '@type': 'Offer',
    url: `${siteUrl}/register`,
    price: '300',
    priceCurrency: 'USD',
    availability: 'https://schema.org/InStock',
    validFrom: '2024-01-01T00:00:00+03:00',
  },
};
