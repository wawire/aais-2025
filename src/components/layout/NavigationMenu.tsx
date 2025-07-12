'use client';

import { useKeyboardNavigation } from '@/hooks/useKeyboardNavigation';
import type { NavigationEventHandler, NavigationItem } from '@/types/navigation.types';
import Link from 'next/link';
import { memo, useState } from 'react';

interface NavigationMenuProps {
  readonly items: readonly NavigationItem[];
  readonly isScrolled: boolean;
  readonly onNavigate?: NavigationEventHandler;
  readonly className?: string;
}

/**
 * Navigation menu with optimized spacing for 90% width container
 */
const NavigationMenu = memo<NavigationMenuProps>(({
  items,
  isScrolled,
  onNavigate,
  className = '',
}) => {
  const [focusedIndex, setFocusedIndex] = useState<number>(-1);

  useKeyboardNavigation({
    onArrowKeys: (direction) => {
      if (direction === 'left' || direction === 'up') {
        setFocusedIndex(prev => Math.max(0, prev - 1));
      } else if (direction === 'right' || direction === 'down') {
        setFocusedIndex(prev => Math.min(items.length - 1, prev + 1));
      }
    },
  });

  const handleItemClick = (item: NavigationItem) => {
    onNavigate?.(item);
  };

  // Separate regular nav items from Register CTA
  const regularItems = items.filter(item => item.id !== 'register');
  const registerItem = items.find(item => item.id === 'register');

  return (
    <nav
      role="navigation"
      aria-label="Main navigation"
      className={className}
    >
      <div className="flex items-center justify-between w-full max-w-4xl mx-auto">
        {/* Regular Navigation Items */}
        <ul className="flex items-center space-x-8 lg:space-x-12 xl:space-x-16 list-none">
          {regularItems.map((item, index) => (
            <li key={item.id} className="list-none">
              <Link
                href={item.href}
                onClick={() => handleItemClick(item)}
                className={`
                  relative px-4 py-3 font-medium transition-all duration-300
                  text-body-lg hover:text-body-lg focus:text-body-lg
                  ${isScrolled
                    ? 'text-charcoal-700 hover:text-aviationGold focus:text-aviationGold'
                    : 'text-white hover:text-aviationGold focus:text-aviationGold'
                  }
                  focus:outline-none focus:ring-2 focus:ring-aviationGold focus:ring-offset-2
                  active:scale-95 transform
                  ${focusedIndex === index ? 'ring-2 ring-aviationGold ring-offset-2' : ''}
                `}
                style={{ listStyle: 'none' }}
                aria-label={item.ariaLabel || `Navigate to ${item.label}`}
                target={item.external ? '_blank' : undefined}
                rel={item.external ? 'noopener noreferrer' : undefined}
                onFocus={() => setFocusedIndex(index)}
                onBlur={() => setFocusedIndex(-1)}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Register Now CTA Button */}
        {registerItem && (
          <div className="flex-shrink-0 ml-8">
            <Link
              href={registerItem.href}
              onClick={() => handleItemClick(registerItem)}
              className={`
                inline-flex items-center px-6 py-3 rounded-lg font-semibold
                text-body-lg transition-all duration-300 transform
                ${isScrolled
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
          </div>
        )}
      </div>
    </nav>
  );
});

NavigationMenu.displayName = 'NavigationMenu';

export { NavigationMenu };
