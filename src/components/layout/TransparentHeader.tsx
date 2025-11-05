// components/Header/TransparentHeader.tsx
'use client';

import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { useScrollDetection } from '@/hooks/useScrollDetection';
import Link from 'next/link';
import { memo, useEffect, useMemo, useState } from 'react';
import { LogoTransition } from './LogoTransition';
import { MobileNavigation } from './MobileNavigation';

// --- Start: Added types directly here ---
interface NavigationItem {
  id: string;
  label: string;
  href: string;
  external?: boolean;
  ariaLabel?: string;
}

interface LogoConfig {
  primary: {
    src: string;
    alt: string;
  };
  secondary: {
    src: string;
    alt: string;
  };
  width: number;
  height: number;
}

type NavigationEventHandler = (item: NavigationItem) => void; // Defined here as it's used in onNavigate

interface TransparentHeaderProps {
  readonly className?: string;
  readonly logoConfig?: LogoConfig; // Made optional as it has a default
  readonly navigationItems?: readonly NavigationItem[]; // Made optional as it has a default
  readonly onNavigate?: NavigationEventHandler;
}
// --- End: Added types directly here ---

// Default configuration constants
const DEFAULT_LOGO_CONFIG: LogoConfig = {
  primary: {
    src: '/images/aais2025-logo-primary.svg',
    alt: 'AAIS 2025 - Africa Aviation Innovation Summit',
  },
  secondary: {
    src: '/images/aais2025-logo-secondary.svg',
    alt: 'AAIS 2025 - Africa Aviation Innovation Summit',
  },
  width: 250,
  height: 96,
} as const;

const DEFAULT_NAVIGATION_ITEMS: readonly NavigationItem[] = [
  {
    id: 'About',
    label: 'About the Summit',
    href: '/about',
    ariaLabel: 'Learn more about AAIS 2025',
  },
  {
    id: 'agenda',
    label: 'Agenda',
    href: '/agenda',
    ariaLabel: 'View event agenda and schedule',
  },

  {
    id: 'speakers',
    label: 'Speakers',
    href: '/speakers',
    ariaLabel: 'Meet our keynote speakers and industry leaders',
  },
  {
    id: 'register',
    label: 'Register Now',
    href: '/register',
    ariaLabel: 'Register for AAIS 2025',
  },
  {
    id: 'venue',
    label: 'Venue & Travel Info',
    href: '/venue',
    ariaLabel: 'Event venue information and location',
  },
  {
    id: 'contact',
    label: 'Contact',
    href: '/contact',
    ariaLabel: 'Contact us for more information',
  },
] as const;

/**
 * Enterprise-grade transparent header component for AAIS 2025
 * Enhanced z-index and clickability fixes
 */
const TransparentHeader = memo<TransparentHeaderProps>(
  ({
    className = '',
    logoConfig = DEFAULT_LOGO_CONFIG,
    navigationItems = DEFAULT_NAVIGATION_ITEMS,
    onNavigate,
  }) => {
    // Mobile menu state
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Optimized scroll detection with debouncing
    const { isScrolled } = useScrollDetection({
      threshold: 10,
      debounceMs: 16,
    });

    // Body scroll lock when mobile menu is open
    useEffect(() => {
      if (isMobileMenuOpen) {
        document.body.style.overflow = 'hidden';
        // Consider adding a small padding-right to body to avoid content jump if scrollbar disappears
        // document.body.style.paddingRight = '0px'; // Adjust if scrollbar width is an issue
      } else {
        document.body.style.overflow = '';
        // document.body.style.paddingRight = '';
      }

      return () => {
        document.body.style.overflow = '';
        // document.body.style.paddingRight = '';
      };
    }, [isMobileMenuOpen]);

    // Close mobile menu on escape key
    useEffect(() => {
      const handleEscape = (event: KeyboardEvent) => {
        if (event.key === 'Escape' && isMobileMenuOpen) {
          setIsMobileMenuOpen(false);
        }
      };

      document.addEventListener('keydown', handleEscape);
      return () => document.removeEventListener('keydown', handleEscape);
    }, [isMobileMenuOpen]);

    // Enhanced header classes with higher z-index
    const headerClasses = useMemo(
      () => `
    fixed top-0 left-0 right-0 z-[100] w-full
    transition-all duration-300 ease-in-out
    ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'}
    ${className}
  `,
      [isScrolled, className]
    );

    // Container with 90% width
    const containerClasses = useMemo(
      () => `
    w-[90%] mx-auto px-4 sm:px-6 lg:px-8
  `,
      []
    );

    // Enhanced inner container with better positioning
    const innerContainerClasses = useMemo(
      () => `
    w-full flex items-center relative z-10
    h-16 md:h-20 lg:h-24
  `,
      []
    );

    // Separate regular nav items from Register CTA
    const regularItems = navigationItems.filter(item => item.id !== 'register');
    const registerItem = navigationItems.find(item => item.id === 'register');

    const handleItemClick = (item: NavigationItem) => {
      onNavigate?.(item);
    };

    const toggleMobileMenu = () => {
      setIsMobileMenuOpen(prev => !prev);
    };

    const closeMobileMenu = () => {
      setIsMobileMenuOpen(false);
    };

    const handleMobileNavigate = (item: NavigationItem) => {
      handleItemClick(item);
      closeMobileMenu();
    };

    return (
      <>
        <header className={headerClasses} role="banner" aria-label="Main site header">
          <div className={containerClasses}>
            <div className={innerContainerClasses}>
              {/* Desktop Layout */}
              <div className="hidden md:contents">
                {/* Left Section - Logo (desktop only) */}
                <div className="flex-shrink-0 w-auto relative z-20">
                  <LogoTransition
                    isScrolled={isScrolled}
                    config={logoConfig}
                    className="h-10 md:h-12 lg:h-16 w-auto"
                  />
                </div>

                {/* Center Section - Navigation (desktop only) */}
                <div className="flex-1 flex justify-center items-center px-8 relative z-20">
                  <nav role="navigation" aria-label="Main navigation" className="w-full max-w-4xl">
                    <ul className="flex items-center justify-center space-x-6 lg:space-x-8 xl:space-x-10 list-none">
                      {regularItems.map(item => (
                        <li key={item.id} className="list-none flex-shrink-0">
                          <Link
                            href={item.href}
                            onClick={() => handleItemClick(item)}
                            className={`
                            relative px-3 py-3 font-medium transition-all duration-300 whitespace-nowrap z-30
                            text-body-md lg:text-body-lg hover:text-body-md lg:hover:text-body-lg focus:text-body-md lg:focus:text-body-lg
                            ${
                              isScrolled
                                ? 'text-charcoal-700 hover:text-aviationGold focus:text-aviationGold'
                                : 'text-white hover:text-aviationGold focus:text-aviationGold'
                            }
                            focus:outline-none focus:ring-2 focus:ring-aviationGold focus:ring-offset-2
                            active:scale-95 transform cursor-pointer
                          `}
                            style={{ listStyle: 'none' }}
                            aria-label={item.ariaLabel || `Maps to ${item.label}`}
                            target={item.external ? '_blank' : undefined}
                            rel={item.external ? 'noopener noreferrer' : undefined}
                          >
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </nav>
                </div>

                {/* Right Section - Register Button (desktop only) */}
                <div className="flex-shrink-0 flex items-center relative z-20">
                  {registerItem && (
                    <Link
                      href={registerItem.href}
                      onClick={() => handleItemClick(registerItem)}
                      className={`
                      inline-flex items-center px-6 py-3 rounded-lg font-semibold whitespace-nowrap z-30
                      text-body-lg transition-all duration-300 transform cursor-pointer
                      ${
                        isScrolled
                          ? 'bg-aviationGold text-white hover:bg-aviationGold/90 focus:bg-aviationGold/90'
                          : 'bg-aviationGold text-white hover:bg-aviationGold/90 focus:bg-aviationGold/90'
                      }
                      hover:scale-105 active:scale-95
                      focus:outline-none focus:ring-2 focus:ring-aviationGold focus:ring-offset-2
                      shadow-lg hover:shadow-xl
                    `}
                      aria-label={registerItem.ariaLabel || 'Register for AAIS 2025'}
                    >
                      Register Now
                    </Link>
                  )}
                </div>
              </div>

              {/* Mobile Layout - Enhanced clickability */}
              <div className="md:hidden w-full flex justify-end relative z-30">
                <button
                  type="button"
                  onClick={toggleMobileMenu}
                  aria-label={isMobileMenuOpen ? 'Close mobile menu' : 'Open mobile menu'}
                  aria-expanded={isMobileMenuOpen ? 'true' : 'false'}
                  aria-controls={isMobileMenuOpen ? 'mobile-menu' : undefined}
                  className={`p-3 rounded-lg transition-all duration-300 relative z-[110] cursor-pointer ${
                    isScrolled
                      ? 'text-charcoal-700 hover:text-aviationGold'
                      : 'text-white hover:text-aviationGold'
                  } focus:outline-none focus:ring-2 focus:ring-aviationGold focus:ring-offset-2 active:scale-95 transform`}
                >
                  {isMobileMenuOpen ? (
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Mobile Navigation Menu */}
        <MobileNavigation
          logoConfig={logoConfig}
          items={navigationItems}
          isOpen={isMobileMenuOpen}
          isScrolled={isScrolled}
          onClose={closeMobileMenu}
          onNavigate={handleMobileNavigate}
        />
      </>
    );
  }
);

TransparentHeader.displayName = 'TransparentHeader';

export { TransparentHeader };
export type { TransparentHeaderProps };
