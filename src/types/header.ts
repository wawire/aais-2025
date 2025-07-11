/**
 * TypeScript definitions for Header component
 * Ensures type safety and better developer experience
 */

export interface NavigationLink {
  /** The URL path for the navigation link */
  href: string;
  /** Display text for the navigation link */
  label: string;
  /** Accessibility label for screen readers */
  aria: string;
  /** Optional icon component */
  icon?: React.ComponentType<{ size?: number; className?: string }>;
  /** Whether the link should open in a new tab */
  external?: boolean;
}

export interface HeaderProps {
  /** Additional CSS classes for the header container */
  className?: string;
  /** Path to the logo image file */
  logoSrc?: string;
  /** Alt text for the logo image */
  logoAlt?: string;
  /** Custom navigation links (overrides default) */
  customLinks?: NavigationLink[];
  /** Whether to show the CTA button */
  showCTA?: boolean;
  /** Custom CTA button text */
  ctaText?: string;
  /** Custom CTA button link */
  ctaHref?: string;
}

export interface ScrollState {
  /** Whether the page has been scrolled beyond threshold */
  isScrolled: boolean;
  /** Current scroll position in pixels */
  scrollPosition: number;
}

export interface MenuState {
  /** Whether the mobile menu is currently open */
  isMenuOpen: boolean;
  /** Function to toggle mobile menu state */
  toggleMenu: () => void;
  /** Function to close mobile menu */
  closeMenu: () => void;
}
