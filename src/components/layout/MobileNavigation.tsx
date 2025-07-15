// components/MobileNavigation/MobileNavigation.tsx
'use client';

import { useKeyboardNavigation } from '@/hooks/useKeyboardNavigation'; // Assuming this hook exists and is correctly typed
import Link from 'next/link';
import Image from 'next/image'; // Import Image from next/image
import { memo, useEffect, useRef } from 'react';

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
  width: number;
  height: number;
}
// --- End: Added types directly here ---

interface MobileNavigationProps {
  readonly logoConfig: LogoConfig;
  readonly items: readonly NavigationItem[];
  readonly isOpen: boolean;
  readonly isScrolled: boolean;
  readonly onClose: () => void;
  readonly onNavigate?: (item: NavigationItem) => void;
}

/**
 * Mobile navigation with logo in header and all navigation items
 */
const MobileNavigation = memo<MobileNavigationProps>(({
  logoConfig,
  items,
  isOpen,
  isScrolled,
  onClose,
  onNavigate,
}) => {
  const menuRef = useRef<HTMLDivElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  // Focus management
  useEffect(() => {
    if (isOpen && firstLinkRef.current) {
      setTimeout(() => {
        firstLinkRef.current?.focus();
      }, 150);
    }
  }, [isOpen]);

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  // Separate regular nav items from Register CTA
  const regularItems = items.filter(item => item.id !== 'register');
  const registerItem = items.find(item => item.id === 'register');

  const handleItemClick = (item: NavigationItem) => {
    onNavigate?.(item);
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop with blur effect */}
      <div
        className={`
          fixed inset-0 z-40
          bg-charcoal-900/90 backdrop-blur-lg
          transition-opacity duration-300 ease-in-out
          ${isOpen ? 'opacity-100' : 'opacity-0'}
        `}
        aria-hidden="true"
      />

      {/* Mobile Menu Container */}
      <div
        ref={menuRef}
        id="mobile-menu"
        className={`
          fixed top-0 right-0 bottom-0 z-50 w-80 max-w-[85vw]
          bg-white dark:bg-charcoal-900
          shadow-2xl
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}
          flex flex-col
        `}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation menu"
      >
        {/* Header with Logo instead of "Menu" text */}
        <div className="flex items-center justify-between p-6 border-b border-softGray-200 dark:border-charcoal-700">
          {/* Logo replacing "Menu" text */}
          <Link
            href="/"
            onClick={onClose}
            className="block focus:outline-none focus:ring-2 focus:ring-aviationGold focus:ring-offset-2 rounded-lg transition-all duration-300"
            aria-label="AAIS 2025 - Return to homepage"
          >
            <Image
              src={logoConfig.primary.src}
              alt={logoConfig.primary.alt}
              width={logoConfig.width * 0.8} // Slightly smaller for header
              height={logoConfig.height * 0.8}
              className="w-auto h-8 md:h-10"
              priority
            />
          </Link>

          {/* Close Button */}
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-charcoal-600 hover:text-aviationGold hover:bg-softGray-100 dark:text-softGray-400 dark:hover:text-aviationGold dark:hover:bg-charcoal-800 transition-colors duration-200"
            aria-label="Close mobile menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Navigation Items */}
        <nav className="flex-1 overflow-y-auto py-6" role="navigation" aria-label="Mobile main navigation">
          <ul className="space-y-1 px-6">
            {regularItems.map((item, index) => (
              <li key={item.id}>
                <Link
                  ref={index === 0 ? firstLinkRef : undefined}
                  href={item.href}
                  onClick={() => handleItemClick(item)}
                  className="
                    block px-4 py-4 rounded-lg
                    text-body-lg font-medium
                    text-charcoal-700 hover:text-aviationGold hover:bg-aviationGold/5
                    dark:text-softGray-200 dark:hover:text-aviationGold dark:hover:bg-aviationGold/10
                    focus:outline-none focus:ring-2 focus:ring-aviationGold focus:ring-offset-2
                    transition-all duration-200
                    active:scale-98 transform
                  "
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

        {/* Register CTA Button */}
        {registerItem && (
          <div className="p-6 border-t border-softGray-200 dark:border-charcoal-700">
            <Link
              href={registerItem.href}
              onClick={() => handleItemClick(registerItem)}
              className="
                w-full flex items-center justify-center px-6 py-4 rounded-lg
                bg-aviationGold hover:bg-aviationGold/90
                text-white font-semibold text-body-lg
                focus:outline-none focus:ring-2 focus:ring-aviationGold focus:ring-offset-2
                transition-all duration-200 transform
                active:scale-98 shadow-lg hover:shadow-xl
              "
              aria-label={registerItem.ariaLabel || 'Register for AAIS 2025'}
            >
              <span>Register Now</span>
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        )}

        {/* Footer */}
        <div className="p-6 border-t border-softGray-200 dark:border-charcoal-700 bg-softGray-50 dark:bg-charcoal-800">
          <p className="text-caption text-charcoal-500 dark:text-softGray-400 text-center">
            Africa Aviation Innovation Summit 2025
          </p>
        </div>
      </div>
    </>
  );
});

MobileNavigation.displayName = 'MobileNavigation';

export { MobileNavigation };