'use client';

import { cn } from '@/lib/utils';
import { ArrowRight, Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';

interface NavigationLink {
  href: string;
  label: string;
  aria: string;
}

interface HeaderProps {
  className?: string;
  logoSrc?: string;
  logoAlt?: string;
}

export function Header(props: HeaderProps): JSX.Element {
  const {
    className,
    logoSrc = '/images/aais2025-logo-primary.svg',
    logoAlt = 'AAIS 2025 Logo',
  } = props;

  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const links: NavigationLink[] = [
    { href: '/', label: 'Home', aria: 'Navigate to Home' },
    { href: '/about', label: 'About', aria: 'Navigate to About AAIS' },
    { href: '/agenda', label: 'Agenda', aria: 'Navigate to Event Agenda' },
    { href: '/speakers', label: 'Speakers', aria: 'Navigate to Speakers' },
    { href: '/venue', label: 'Venue', aria: 'Navigate to Venue Information' },
    { href: '/contact', label: 'Contact', aria: 'Navigate to Contact' },
  ];

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 20);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const handleMenuToggle = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  const handleLinkClick = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  const getLinkClassName = useCallback(
    (isActive: boolean): string =>
      cn(
        'relative px-4 py-2 font-medium transition-all duration-300 ease-in-out font-heading rounded-lg',
        'focus:outline-none focus:ring-2 focus:ring-aviationGold focus:ring-offset-2 focus:ring-offset-transparent',
        'hover:bg-aviationGold/20 hover:text-aviationGold hover:scale-105',
        isActive
          ? 'bg-aviationGold/30 text-aviationGold font-semibold after:absolute after:bottom-0 after:left-1/2 after:transform after:-translate-x-1/2 after:w-8 after:h-0.5 after:bg-aviationGold after:rounded-full'
          : 'text-white'
      ),
    []
  );

  const getHeaderClassName = useCallback(
    (): string =>
      cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out',
        'border-b border-aviationGold/10',
        isScrolled
          ? 'bg-charcoal-900/95 backdrop-blur-md shadow-lg border-b border-aviationGold/20'
          : 'bg-gradient-to-r from-charcoal-900/80 via-charcoal-800/70 to-charcoal-900/80 backdrop-blur-sm',
        className
      ),
    [isScrolled, className]
  );

  return (
    <header className={getHeaderClassName()}>
      <nav className="container mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link
            href="/"
            className="flex items-center space-x-3 group p-4"
            aria-label="AAIS 2025 Home"
          >
            <div className="relative">
              <Image
                src={logoSrc}
                alt={logoAlt}
                width={160}
                height={240}
                priority
                className="transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-aviationGold rounded-full animate-pulse" />
            </div>


          </Link>

          <div className="hidden lg:flex items-center space-x-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={getLinkClassName(pathname === link.href)}
                aria-label={link.aria}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <Link
              href="/register"
              className={cn(
                'hidden md:flex items-center space-x-2 bg-aviationGold text-white px-6 py-3 rounded-xl font-semibold font-accent',
                'shadow-md hover:shadow-lg hover:bg-aviationGold/90',
                'transition-all duration-300 transform hover:scale-105',
                'focus:outline-none focus:ring-2 focus:ring-aviationGold focus:ring-offset-2 focus:ring-offset-transparent',
                'group'
              )}
              aria-label="Register for AAIS 2025"
            >
              <span>Register Now</span>
              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>

            <button
              onClick={handleMenuToggle}
              className={cn(
                'lg:hidden p-3 rounded-xl transition-all duration-300',
                'hover:bg-aviationGold/20 hover:text-aviationGold',
                'focus:outline-none focus:ring-2 focus:ring-aviationGold focus:ring-offset-2 focus:ring-offset-transparent'
              )}
              aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={isMenuOpen}
            >
              <div className="relative w-6 h-6">
                <Menu
                  size={24}
                  className={cn(
                    'absolute inset-0 text-white transition-all duration-300',
                    isMenuOpen ? 'opacity-0 rotate-90 scale-0' : 'opacity-100 rotate-0 scale-100'
                  )}
                />
                <X
                  size={24}
                  className={cn(
                    'absolute inset-0 text-white transition-all duration-300',
                    isMenuOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-0'
                  )}
                />
              </div>
            </button>
          </div>
        </div>

        <div
          className={cn(
            'lg:hidden overflow-hidden transition-all duration-500 ease-in-out',
            isMenuOpen ? 'max-h-96 opacity-100 pb-6' : 'max-h-0 opacity-0'
          )}
        >
          <div className="bg-charcoal-900/95 backdrop-blur-md rounded-xl mt-4 p-6 border border-aviationGold/20 shadow-lg">
            <ul className="flex flex-col space-y-4">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={cn(
                      'flex items-center justify-between w-full p-4 rounded-xl transition-all duration-300 font-heading',
                      'hover:bg-aviationGold/20 hover:text-aviationGold hover:translate-x-2',
                      'focus:outline-none focus:ring-2 focus:ring-aviationGold',
                      pathname === link.href
                        ? 'bg-aviationGold/30 text-aviationGold font-semibold border-l-4 border-aviationGold'
                        : 'text-white'
                    )}
                    aria-label={link.aria}
                    onClick={handleLinkClick}
                  >
                    <span>{link.label}</span>
                    <ArrowRight
                      size={16}
                      className={cn(
                        'transition-all duration-300',
                        pathname === link.href ? 'text-aviationGold' : 'text-gray-400'
                      )}
                    />
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-6 pt-6 border-t border-aviationGold/20">
              <Link
                href="/register"
                className={cn(
                  'flex items-center justify-center space-x-2 w-full',
                  'bg-aviationGold text-white p-4 rounded-xl font-semibold font-accent',
                  'shadow-md hover:shadow-lg hover:bg-aviationGold/90',
                  'transition-all duration-300 transform hover:scale-105',
                  'focus:outline-none focus:ring-2 focus:ring-aviationGold group'
                )}
                aria-label="Register for AAIS 2025"
                onClick={handleLinkClick}
              >
                <span>Register for AAIS 2025</span>
                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </div>

            {/* : Mobile Contact Info Section */}
            <div className="mt-4 text-center">
              <p className="text-sm text-gray-300 font-body">
                Questions? Call{' '}
                <a
                  href="tel:+254716851914"
                  className="text-aviationGold hover:text-aviationGold/80 transition-colors duration-200 font-accent"
                >
                  +254 716 851 914
                </a>
              </p>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
