/**
 * Navigation type definitions for AAIS 2025 header
 * Ensures type safety across navigation components
 */

export interface NavigationItem {
  readonly id: string;
  readonly label: string;
  readonly href: string;
  readonly ariaLabel?: string;
  readonly external?: boolean;
}

export interface HeaderState {
  readonly isScrolled: boolean;
  readonly isMenuOpen: boolean;
  readonly currentSection?: string;
}

export interface LogoConfig {
  readonly primary: {
    src: string;
    alt: string;
  };
  readonly secondary: {
    src: string;
    alt: string;
  };
  readonly width: number;
  readonly height: number;
}

export interface TransparentHeaderProps {
  className?: string;
  logoConfig?: LogoConfig;
  navigationItems?: readonly NavigationItem[];
  onNavigate?: (item: NavigationItem) => void;
}

// Event handler types
export type ScrollEventHandler = () => void;
export type NavigationEventHandler = (item: NavigationItem) => void;
export type KeyboardEventHandler = (event: KeyboardEvent) => void;
