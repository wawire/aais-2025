/**
 * Newsletter form data interface.
 * @interface NewsletterFormData
 */
export interface NewsletterFormData {
  email: string;
}

/**
 * Newsletter submission result interface.
 * @interface NewsletterSubmissionResult
 */
export interface NewsletterSubmissionResult {
  success: boolean;
  message?: string;
}

/**
 * Supported locales for multilingual support.
 * @type FooterLocale
 */
export type FooterLocale = 'en' | 'sw';

/**
 * Footer component props interface.
 * @interface FooterProps
 */
export interface FooterProps {
  /** Optional year for copyright (defaults to current year) */
  year?: number;
  /** Locale for multilingual support (defaults to 'en') */
  locale?: FooterLocale;
  /** Custom newsletter submission handler */
  onNewsletterSubmit?: (data: NewsletterFormData) => Promise<NewsletterSubmissionResult>;
  /** Whether to show newsletter signup */
  showNewsletter?: boolean;
}
