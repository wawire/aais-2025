/**
 * Utility functions for AAIS 2025 Aviation Event Management System
 * Production-ready class name handling and common utilities
 */

import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combines class names using clsx and merges Tailwind classes with tailwind-merge
 * This prevents conflicts between Tailwind classes and ensures proper merging
 *
 * @param inputs - Class values to combine and merge
 * @returns Merged class string
 *
 * @example
 * cn('px-2 py-1', 'px-3') // Returns 'py-1 px-3' (px-2 is overridden)
 * cn('text-red-500', condition && 'text-blue-500') // Conditional classes
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

/**
 * Formats a string to title case
 * Useful for displaying names, titles, etc.
 */
export function toTitleCase(str: string): string {
  return str.replace(
    /\w\S*/g,
    (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
  );
}

/**
 * Truncates text to a specified length with ellipsis
 * Useful for preview text, table cells, etc.
 */
export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength).trim() + '...';
}

/**
 * Formats numbers for display (e.g., 1234 -> 1,234)
 */
export function formatNumber(num: number): string {
  return new Intl.NumberFormat().format(num);
}

/**
 * Generates a readable slug from text
 * Useful for URLs, IDs, etc.
 */
export function slugify(text: string): string {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '');
}

/**
 * Debounce function for performance optimization
 * Useful for search inputs, API calls, etc.
 */
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout | null = null;

  return (...args: Parameters<T>) => {
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

/**
 * Type-safe object key checker
 */
export function hasKey<T extends object>(
  obj: T,
  key: string | number | symbol
): key is keyof T {
  return key in obj;
}

/**
 * Aviation-specific utility: Format aircraft registration
 */
export function formatAircraftRegistration(registration: string): string {
  // Remove any existing hyphens and format properly
  const cleaned = registration.replace(/[-\s]/g, '').toUpperCase();

  // Format based on common patterns (e.g., N123AB -> N-123AB)
  if (cleaned.match(/^[A-Z]\d+[A-Z]*$/)) {
    return cleaned.replace(/^([A-Z])(\d+)([A-Z]*)$/, '$1-$2$3');
  }

  return cleaned;
}

/**
 * Aviation-specific utility: Format ICAO codes
 */
export function formatICAOCode(code: string): string {
  return code.toUpperCase().trim();
}

/**
 * Date formatting utilities
 */
export const dateUtils = {
  /**
   * Format date for display in the UI
   */
  formatDisplay(date: Date): string {
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }).format(date);
  },

  /**
   * Format date and time for display
   */
  formatDateTime(date: Date): string {
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    }).format(date);
  },

  /**
   * Format date in ISO format for APIs
   */
  formatISO(date: Date): string {
    return date.toISOString();
  },

  /**
   * Get relative time (e.g., "2 hours ago")
   */
  getRelativeTime(date: Date): string {
    const rtf = new Intl.RelativeTimeFormat('en-US', { numeric: 'auto' });
    const diff = date.getTime() - Date.now();
    const diffInSeconds = Math.floor(diff / 1000);
    const diffInMinutes = Math.floor(diffInSeconds / 60);
    const diffInHours = Math.floor(diffInMinutes / 60);
    const diffInDays = Math.floor(diffInHours / 24);

    if (Math.abs(diffInDays) > 0) {
      return rtf.format(diffInDays, 'day');
    } else if (Math.abs(diffInHours) > 0) {
      return rtf.format(diffInHours, 'hour');
    } else if (Math.abs(diffInMinutes) > 0) {
      return rtf.format(diffInMinutes, 'minute');
    } else {
      return rtf.format(diffInSeconds, 'second');
    }
  },
};

/**
 * Form validation utilities
 */
export const validation = {
  /**
   * Validate email format
   */
  isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  },

  /**
   * Validate phone number (basic US format)
   */
  isValidPhone(phone: string): boolean {
    const phoneRegex = /^\+?1?[-.\s]?\(?[0-9]{3}\)?[-.\s]?[0-9]{3}[-.\s]?[0-9]{4}$/;
    return phoneRegex.test(phone);
  },

  /**
   * Validate aircraft registration format
   */
  isValidAircraftRegistration(registration: string): boolean {
    // Basic validation for common registration formats
    const regexPatterns = [
      /^[A-Z]-[A-Z]{4}$/, // International format
      /^N\d{1,5}[A-Z]{0,2}$/, // US format
      /^[A-Z]{1,2}-[A-Z]{3,4}$/, // European format
    ];

    const cleaned = registration.replace(/[-\s]/g, '').toUpperCase();
    return regexPatterns.some(pattern => pattern.test(cleaned));
  },
};

/**
 * Local storage utilities with error handling
 */
export const storage = {
  /**
   * Get item from localStorage with error handling
   */
  getItem<T>(key: string, defaultValue: T): T {
    try {
      if (typeof window === 'undefined') return defaultValue;
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : defaultValue;
    } catch {
      return defaultValue;
    }
  },

  /**
   * Set item in localStorage with error handling
   */
  setItem<T>(key: string, value: T): void {
    try {
      if (typeof window !== 'undefined') {
        window.localStorage.setItem(key, JSON.stringify(value));
      }
    } catch (error) {
      console.warn('Failed to save to localStorage:', error);
    }
  },

  /**
   * Remove item from localStorage
   */
  removeItem(key: string): void {
    try {
      if (typeof window !== 'undefined') {
        window.localStorage.removeItem(key);
      }
    } catch (error) {
      console.warn('Failed to remove from localStorage:', error);
    }
  },
};
