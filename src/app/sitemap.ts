/**
 * Dynamic sitemap generation for AAIS 2025
 * Next.js 15+ sitemap API
 */

import type { MetadataRoute } from 'next';

const siteUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://aais2025.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date();

  // Define all static pages
  const routes = [
    '',
    '/about',
    '/agenda',
    '/speakers',
    '/register',
    '/venue',
    '/contact',
    '/faq',
  ];

  return routes.map((route) => {
    // Set priority and changeFrequency based on page importance
    let priority = 0.5;
    let changeFrequency: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never' = 'monthly';

    if (route === '') {
      priority = 1.0;
      changeFrequency = 'weekly';
    } else if (route === '/register') {
      priority = 0.9;
      changeFrequency = 'weekly';
    } else if (route === '/speakers' || route === '/agenda') {
      priority = 0.8;
      changeFrequency = 'weekly';
    } else if (route === '/about' || route === '/venue') {
      priority = 0.7;
      changeFrequency = 'monthly';
    }

    return {
      url: `${siteUrl}${route}`,
      lastModified: currentDate,
      changeFrequency,
      priority,
    };
  });
}
