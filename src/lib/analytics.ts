/**
 * Analytics and Performance Monitoring for AAIS 2025
 * Supports Google Analytics 4 and custom event tracking
 */

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

// Google Analytics Measurement ID from environment
const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || '';

/**
 * Initialize Google Analytics
 */
export const initAnalytics = () => {
  if (typeof window === 'undefined' || !GA_MEASUREMENT_ID) return;

  // Initialize dataLayer
  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    window.dataLayer?.push(arguments);
  };

  window.gtag('js', new Date());
  window.gtag('config', GA_MEASUREMENT_ID, {
    page_path: window.location.pathname,
  });
};

/**
 * Track page views
 */
export const trackPageView = (url: string) => {
  if (typeof window === 'undefined' || !GA_MEASUREMENT_ID || !window.gtag) return;

  window.gtag('config', GA_MEASUREMENT_ID, {
    page_path: url,
  });
};

/**
 * Event tracking types
 */
export type AnalyticsEvent =
  | 'registration_started'
  | 'registration_completed'
  | 'sponsor_inquiry'
  | 'speaker_view'
  | 'agenda_download'
  | 'social_share'
  | 'video_play'
  | 'form_submit'
  | 'link_click'
  | 'file_download';

interface EventParams {
  category?: string;
  label?: string;
  value?: number;
  [key: string]: any;
}

/**
 * Track custom events
 */
export const trackEvent = (eventName: AnalyticsEvent, params?: EventParams) => {
  if (typeof window === 'undefined' || !GA_MEASUREMENT_ID || !window.gtag) {
    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.log('Analytics Event:', eventName, params);
    }
    return;
  }

  window.gtag('event', eventName, {
    event_category: params?.category || 'engagement',
    event_label: params?.label,
    value: params?.value,
    ...params,
  });
};

/**
 * Track registration events
 */
export const trackRegistration = {
  started: (packageType: string) => {
    trackEvent('registration_started', {
      category: 'registration',
      label: packageType,
    });
  },
  completed: (packageType: string, amount: number) => {
    trackEvent('registration_completed', {
      category: 'registration',
      label: packageType,
      value: amount,
    });
  },
};

/**
 * Track sponsor inquiries
 */
export const trackSponsorInquiry = (packageType: string) => {
  trackEvent('sponsor_inquiry', {
    category: 'sponsorship',
    label: packageType,
  });
};

/**
 * Track speaker profile views
 */
export const trackSpeakerView = (speakerName: string) => {
  trackEvent('speaker_view', {
    category: 'content',
    label: speakerName,
  });
};

/**
 * Track social shares
 */
export const trackSocialShare = (platform: 'twitter' | 'facebook' | 'linkedin' | 'email') => {
  trackEvent('social_share', {
    category: 'social',
    label: platform,
  });
};

/**
 * Track file downloads
 */
export const trackDownload = (fileName: string, fileType: string) => {
  trackEvent('file_download', {
    category: 'download',
    label: fileName,
    file_type: fileType,
  });
};

/**
 * Web Vitals Performance Tracking
 * Sends Core Web Vitals to Google Analytics
 */
export const reportWebVitals = (metric: {
  id: string;
  name: string;
  value: number;
  label: 'web-vital' | 'custom';
}) => {
  if (typeof window === 'undefined' || !GA_MEASUREMENT_ID || !window.gtag) {
    return;
  }

  window.gtag('event', metric.name, {
    event_category: metric.label === 'web-vital' ? 'Web Vitals' : 'Custom Metrics',
    value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
    event_label: metric.id,
    non_interaction: true,
  });
};

/**
 * Exception tracking
 */
export const trackException = (description: string, fatal: boolean = false) => {
  if (typeof window === 'undefined' || !GA_MEASUREMENT_ID || !window.gtag) {
    console.error('Exception:', description);
    return;
  }

  window.gtag('event', 'exception', {
    description,
    fatal,
  });
};

/**
 * User timing for performance tracking
 */
export const trackTiming = (category: string, variable: string, value: number, label?: string) => {
  if (typeof window === 'undefined' || !GA_MEASUREMENT_ID || !window.gtag) {
    return;
  }

  window.gtag('event', 'timing_complete', {
    name: variable,
    value: Math.round(value),
    event_category: category,
    event_label: label,
  });
};
