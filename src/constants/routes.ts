/**
 * Application Routes
 * Centralized route definitions for type-safe navigation
 */

export const ROUTES = {
  // Public routes
  HOME: '/',
  ABOUT: '/about',
  SPEAKERS: '/speakers',
  AGENDA: '/agenda',
  VENUE: '/venue',
  CONTACT: '/contact',
  FAQ: '/faq',

  // Registration flow
  REGISTER: '/register',
  REGISTER_SUCCESS: '/register/success',

  // Admin routes
  ADMIN_DASHBOARD: '/admin/dashboard',
  ADMIN_REGISTRATIONS: '/admin/registrations',
  ADMIN_SPEAKERS: '/admin/speakers',

  // API routes
  API: {
    REGISTRATION: '/api/registration',
    CONTACT: '/api/contact',
    SPEAKERS: '/api/speakers',
    SPONSORS: '/api/sponsors',
    WEBHOOKS: {
      STRIPE: '/api/webhooks/stripe',
      MPESA: '/api/webhooks/mpesa',
    },
  },
} as const;

/**
 * External routes
 */
export const EXTERNAL_ROUTES = {
  TWITTER: 'https://twitter.com/AAIS2025',
  FACEBOOK: 'https://facebook.com/AAIS2025',
  LINKEDIN: 'https://linkedin.com/company/aais2025',
  VENUE_WEBSITE: 'https://dianireefresort.com',
} as const;

/**
 * Type-safe route helper
 */
export type AppRoute = typeof ROUTES[keyof typeof ROUTES];

/**
 * Get route with params
 * @example getRoute('/speakers/:id', { id: '123' }) // '/speakers/123'
 */
export function getRoute(
  route: string,
  params?: Record<string, string | number>
): string {
  if (!params) return route;

  return Object.entries(params).reduce((path, [key, value]) => {
    return path.replace(`:${key}`, String(value));
  }, route);
}

/**
 * Check if route is active
 */
export function isActiveRoute(currentPath: string, route: string): boolean {
  return currentPath === route || currentPath.startsWith(`${route}/`);
}
