/**
 * Application Configuration Constants
 * Centralized configuration for the application
 */

// Event Configuration
export const EVENT_CONFIG = {
  NAME: 'Africa Aviation Innovation Summit 2025',
  SHORT_NAME: 'AAIS 2025',
  EDITION: 4,
  DATE: {
    START: '2025-11-06T09:00:00+03:00',
    END: '2025-11-07T18:00:00+03:00',
    TIMEZONE: 'Africa/Nairobi',
  },
  LOCATION: {
    VENUE: 'Diani Reef Beach Resort',
    CITY: 'Diani Beach',
    REGION: 'Kwale County',
    COUNTRY: 'Kenya',
    COORDINATES: {
      LAT: -4.2789,
      LNG: 39.5686,
    },
  },
  REGISTRATION_DEADLINE: '2025-11-01T23:59:59+03:00',
  EARLY_BIRD_DEADLINE: '2025-10-01T23:59:59+03:00',
} as const;

// Registration Packages
export const REGISTRATION_PACKAGES = {
  DELEGATE: {
    ID: 'delegate',
    NAME: 'Delegate Package',
    PRICE: 300,
    EARLY_BIRD_PRICE: 250,
    CURRENCY: 'USD',
    FEATURES: [
      'Full conference access (2 days)',
      'All keynote sessions',
      'Networking lunch & coffee breaks',
      'Conference materials',
      'Certificate of attendance',
    ],
  },
  EXHIBITOR: {
    ID: 'exhibitor',
    NAME: 'Exhibitor Package',
    PRICE: 2000,
    EARLY_BIRD_PRICE: 1800,
    CURRENCY: 'USD',
    FEATURES: [
      'Exhibition booth (3x3m)',
      '2 delegate passes',
      'Company logo in materials',
      'Networking opportunities',
      'Product showcase space',
    ],
  },
  SPONSOR_SILVER: {
    ID: 'sponsor-silver',
    NAME: 'Silver Sponsor',
    PRICE: 5000,
    CURRENCY: 'USD',
    FEATURES: [
      'Logo on website & materials',
      '4 delegate passes',
      'Exhibition space',
      'Speaking opportunity (10 min)',
      'Social media mentions',
    ],
  },
  SPONSOR_GOLD: {
    ID: 'sponsor-gold',
    NAME: 'Gold Sponsor',
    PRICE: 10000,
    CURRENCY: 'USD',
    FEATURES: [
      'Premium logo placement',
      '6 delegate passes',
      'Larger exhibition space',
      'Panel speaker opportunity',
      'VIP dinner invitation',
      'Press release inclusion',
    ],
  },
  SPONSOR_PLATINUM: {
    ID: 'sponsor-platinum',
    NAME: 'Platinum Sponsor',
    PRICE: 20000,
    CURRENCY: 'USD',
    FEATURES: [
      'Top-tier logo placement',
      '10 delegate passes',
      'Premium exhibition space',
      'Keynote speaking slot',
      'Exclusive branding opportunities',
      'Post-event attendee list',
    ],
  },
} as const;

// Contact Information
export const CONTACT_INFO = {
  EMAIL: {
    GENERAL: 'info@aais2025.com',
    REGISTRATION: 'register@aais2025.com',
    SPONSORSHIP: 'aais@kenya-airways.com',
    SPEAKERS: 'speakers@aais2025.com',
    SUPPORT: 'support@aais2025.com',
  },
  PHONE: {
    OFFICE: '+254-20-3274747',
    WHATSAPP: '+254-722-123456',
  },
  SOCIAL: {
    TWITTER: '@AAIS2025',
    FACEBOOK: '/AAIS2025',
    LINKEDIN: '/company/aais2025',
    INSTAGRAM: '@aais2025',
  },
  ADDRESS: {
    STREET: 'Kenya Airways Headquarters',
    CITY: 'Nairobi',
    COUNTRY: 'Kenya',
  },
} as const;

// API Configuration
export const API_CONFIG = {
  BASE_URL: process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000',
  TIMEOUT: 30000, // 30 seconds
  RETRY_ATTEMPTS: 3,
  RETRY_DELAY: 1000, // 1 second
} as const;

// Form Configuration
export const FORM_CONFIG = {
  MAX_FILE_SIZE: 5 * 1024 * 1024, // 5MB
  ALLOWED_FILE_TYPES: ['image/jpeg', 'image/png', 'image/webp', 'application/pdf'],
  DEBOUNCE_DELAY: 300, // ms
  AUTO_SAVE_DELAY: 2000, // ms
} as const;

// Pagination
export const PAGINATION = {
  DEFAULT_PAGE_SIZE: 12,
  PAGE_SIZE_OPTIONS: [12, 24, 48],
  MAX_PAGE_SIZE: 100,
} as const;

// Analytics
export const ANALYTICS_CONFIG = {
  GA_MEASUREMENT_ID: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID,
  GTM_ID: process.env.NEXT_PUBLIC_GTM_ID,
  TRACK_PAGE_VIEWS: true,
  TRACK_ERRORS: true,
  TRACK_PERFORMANCE: true,
} as const;

// Feature Flags
export const FEATURE_FLAGS = {
  ENABLE_REGISTRATION: process.env.NEXT_PUBLIC_ENABLE_REGISTRATION === 'true',
  ENABLE_LIVE_STREAMING: process.env.NEXT_PUBLIC_ENABLE_LIVE_STREAMING === 'true',
  ENABLE_CHAT: process.env.NEXT_PUBLIC_ENABLE_CHAT === 'true',
  ENABLE_ANALYTICS: process.env.NODE_ENV === 'production',
  ENABLE_ERROR_TRACKING: process.env.NODE_ENV === 'production',
} as const;

// Theme Configuration
export const THEME_CONFIG = {
  COLORS: {
    PRIMARY: '#C2A542', // Aviation Gold
    SECONDARY: '#1a1a1a', // Charcoal
    ACCENT: '#6b7280', // Sage
  },
  FONTS: {
    PRIMARY: 'Roboto Flex',
    HEADING: 'Interstate',
    ACCENT: 'Lucida Sans Demibold',
  },
} as const;

// Session Storage Keys
export const STORAGE_KEYS = {
  REGISTRATION_DRAFT: 'aais_registration_draft',
  USER_PREFERENCES: 'aais_user_preferences',
  VIEWED_SPEAKERS: 'aais_viewed_speakers',
  AGENDA_FILTERS: 'aais_agenda_filters',
} as const;

// Error Messages
export const ERROR_MESSAGES = {
  GENERIC: 'An unexpected error occurred. Please try again.',
  NETWORK: 'Network error. Please check your internet connection.',
  VALIDATION: 'Please check the form for errors.',
  UNAUTHORIZED: 'You are not authorized to perform this action.',
  NOT_FOUND: 'The requested resource was not found.',
  SERVER_ERROR: 'Server error. Please try again later.',
  TIMEOUT: 'Request timeout. Please try again.',
} as const;

// Success Messages
export const SUCCESS_MESSAGES = {
  REGISTRATION_COMPLETE: 'Registration completed successfully!',
  CONTACT_SENT: 'Your message has been sent successfully.',
  SUBSCRIPTION_SUCCESS: 'Thank you for subscribing to our newsletter!',
  PROFILE_UPDATED: 'Your profile has been updated.',
} as const;
