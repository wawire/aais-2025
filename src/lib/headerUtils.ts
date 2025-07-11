/**
 * Header utility functions for reusable styling logic
 * Implements Clean Architecture principles with separated concerns
 */

import { cn } from '@/lib/utils';

/**
 * Navigation link styling utility with transparent hover effects
 *
 * @param {boolean} isActive - Whether the link represents the current page
 * @param {string} additionalClasses - Optional additional CSS classes
 * @returns {string} Complete CSS class string
 */
export function getNavigationLinkClasses(
  isActive: boolean,
  additionalClasses?: string
): string {
  return cn(
    // Base responsive styles
    'relative px-4 py-2 font-medium transition-all duration-300 ease-in-out font-heading rounded-lg',
    // Accessibility focus states (WCAG 2.1 AA compliant)
    'focus:outline-none focus:ring-2 focus:ring-aviationGold focus:ring-offset-2 focus:ring-offset-transparent',
    // Transparent hover effects with primary color
    'hover:bg-aviationGold/20 hover:text-aviationGold hover:scale-105',
    // Active state with enhanced visual feedback
    isActive
      ? 'bg-aviationGold/30 text-aviationGold font-semibold after:absolute after:bottom-0 after:left-1/2 after:transform after:-translate-x-1/2 after:w-8 after:h-0.5 after:bg-aviationGold after:rounded-full'
      : 'text-white',
    additionalClasses
  );
}

/**
 * Header container styling utility with scroll-based transparency
 *
 * @param {boolean} isScrolled - Whether the page has been scrolled
 * @param {string} additionalClasses - Optional additional CSS classes
 * @returns {string} Complete CSS class string
 */
export function getHeaderContainerClasses(
  isScrolled: boolean,
  additionalClasses?: string
): string {
  return cn(
    'fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out',
    'border-b border-aviationGold/10',
    isScrolled
      ? 'bg-charcoal-900/95 backdrop-blur-md shadow-lg border-b border-aviationGold/20'
      : 'bg-gradient-to-r from-charcoal-900/80 via-charcoal-800/70 to-charcoal-900/80 backdrop-blur-sm',
    additionalClasses
  );
}

/**
 * Primary button styling utility for consistent CTA design
 *
 * @param {boolean} isMobile - Whether this is for mobile layout
 * @param {string} additionalClasses - Optional additional CSS classes
 * @returns {string} Complete CSS class string
 */
export function getPrimaryButtonClasses(
  isMobile: boolean = false,
  additionalClasses?: string
): string {
  return cn(
    // Core button styles with primary color background
    'flex items-center space-x-2 bg-aviationGold text-white',
    'px-6 py-3 rounded-xl font-semibold font-accent',
    // Enhanced shadows and hover effects
    'shadow-md hover:shadow-lg hover:bg-aviationGold/90',
    'transition-all duration-300 transform hover:scale-105',
    // Accessibility compliance
    'focus:outline-none focus:ring-2 focus:ring-aviationGold focus:ring-offset-2 focus:ring-offset-transparent',
    'group',
    // Mobile-specific adjustments
    isMobile ? 'w-full justify-center' : '',
    additionalClasses
  );
}
