'use client';

import type { LogoConfig } from '@/types/navigation.types';
import Image from 'next/image';
import Link from 'next/link';
import { memo } from 'react';

interface LogoTransitionProps {
  readonly isScrolled: boolean;
  readonly config: LogoConfig;
  readonly className?: string;
}

/**
 * Optimized logo component with smooth transitions
 * Uses Next.js Image optimization and preloading
 */
const LogoTransition = memo<LogoTransitionProps>(({
  isScrolled,
  config,
  className = '',
}) => {
  return (
    <Link
      href="/"
      className={`
        relative block focus:outline-none focus:ring-2 focus:ring-aviationGold
        focus:ring-offset-2 rounded-lg transition-all duration-300
        ${className}
      `}
      aria-label="AAIS 2025 - Return to homepage"
    >
      {/* Primary Logo (White) - Visible when not scrolled */}
      <Image
        src={config.primary.src}
        alt={config.primary.alt}
        width={config.width}
        height={config.height}
        priority
        className={`
          transition-opacity duration-300 ease-in-out
          ${isScrolled ? 'opacity-0' : 'opacity-100'}
        `}
        sizes="(max-width: 768px) 120px, 160px"
      />

      {/* Secondary Logo (Colored) - Visible when scrolled */}
      <Image
        src={config.secondary.src}
        alt={config.secondary.alt}
        width={config.width}
        height={config.height}
        className={`
          absolute inset-0 transition-opacity duration-300 ease-in-out
          ${isScrolled ? 'opacity-100' : 'opacity-0'}
        `}
        sizes="(max-width: 768px) 120px, 160px"
      />
    </Link>
  );
});

LogoTransition.displayName = 'LogoTransition';

export { LogoTransition };
