/**
 * Enhanced Hero component type definitions for AAIS 2025
 * Optimized for 90vh layout with reduced spacing
 */

export type HeroButtonVariant = 'primary' | 'secondary' | 'outline';

export interface HeroAction {
  /** Unique identifier for the action */
  id: string;

  /** Display text for the button */
  label: string;

  /** URL or route path */
  href: string;

  /** Visual style variant */
  variant: HeroButtonVariant;

  /** Accessibility label */
  ariaLabel?: string;

  /** Whether this is an external link */
  external?: boolean;
}

export interface HeroProps {

  className?: string;


  title?: string;


  subtitle?: string;


  description?: string;


  actions?: readonly HeroAction[];


  backgroundImage?: string;


  backgroundVideo?: string;


  eventDate?: string;


  eventLocation?: string;
}
