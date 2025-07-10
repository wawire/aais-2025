'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

/**
 * Header with navigation for AAIS 2025.
 * Includes mobile toggle and accessibility.
 * @returns {JSX.Element} Header component
 */
export function Header(): JSX.Element {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const links = [
    { href: '/', label: 'Home', aria: 'Home' },
    { href: '/about', label: 'About', aria: 'About AAIS' },
    { href: '/agenda', label: 'Agenda', aria: 'Agenda' },
    { href: '/register', label: 'Register', aria: 'Register' },
  ];

  return (
    <header className="bg-aviationGold text-white py-4 sticky top-0 z-50">
      <nav className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold" aria-label="AAIS 2025 Home">
          AAIS 2025
        </Link>
        <ul className="hidden md:flex space-x-4">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={cn('hover:underline', pathname === link.href ? 'font-bold' : '')}
                aria-label={link.aria}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>
      {isMenuOpen && (
        <ul className="md:hidden bg-aviationGold px-4 py-2 space-y-2">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={cn('block hover:underline', pathname === link.href ? 'font-bold' : '')}
                aria-label={link.aria}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
