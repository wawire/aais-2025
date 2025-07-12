// components/Hero/Hero.tsx
'use client';

import type { HeroAction, HeroProps } from '@/types/hero.types';
import Image from 'next/image';
import Link from 'next/link';
import { memo, useCallback, useEffect, useMemo, useState } from 'react';

// Updated actions
const DEFAULT_ACTIONS: readonly HeroAction[] = [
  {
    id: 'sponsor',
    label: 'Become a Sponsor',
    href: '/sponsor',
    variant: 'primary',
    ariaLabel: 'Become a sponsor for AAIS 2025'
  },
  {
    id: 'register',
    label: 'Register as Delegate',
    href: '/register',
    variant: 'outline',
    ariaLabel: 'Register as delegate for AAIS 2025 - Early Bird $300'
  }
] as const;

// Move target date outside component to prevent recreation
const AAIS_EVENT_DATE = new Date('2025-11-06T09:00:00+03:00');

// Countdown interface
interface CountdownTime {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

/**
 * Hero section with proper z-index hierarchy and fixed infinite loop
 */
const Hero = memo<HeroProps>(({
  className = '',
  title = "Africa Aviation Innovation Summit 2025",
  subtitle = "4th Edition",
  description = "Investing in Africa's Aviation Future: Unlocking Opportunities for Growth and Transformation through Innovation",
  actions = DEFAULT_ACTIONS,
  backgroundImage = "/images/hero-aviation-bg.jpg",
  backgroundVideo = "/videos/mombasa-aerial.mp4",
  eventDate = "November 6-7, 2025",
  eventLocation = "Diani Reef Beach Resort, Kwale, Kenya"
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const [countdown, setCountdown] = useState<CountdownTime>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // Animation trigger - only run once
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []); // Empty dependency array

  // Memoized countdown calculation function
  const calculateTimeLeft = useCallback((): CountdownTime => {
    const now = new Date().getTime();
    const distance = AAIS_EVENT_DATE.getTime() - now;

    if (distance > 0) {
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      return { days, hours, minutes, seconds };
    }

    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }, []); // No dependencies needed as AAIS_EVENT_DATE is constant

  // Countdown timer effect - fixed infinite loop
  useEffect(() => {
    // Set initial countdown
    setCountdown(calculateTimeLeft());

    // Setup interval
    const interval = setInterval(() => {
      setCountdown(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, [calculateTimeLeft]); // Only depends on the memoized function

  const handleVideoError = useCallback(() => {
    setVideoError(true);
  }, []);

  // Memoized action button renderer
  const renderActionButton = useCallback((action: HeroAction) => {
    const baseClasses = "relative inline-flex items-center justify-center px-6 py-3 md:px-8 md:py-4 rounded-lg font-semibold text-base md:text-lg transition-all duration-300 transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-4 focus:ring-offset-2 focus:ring-offset-transparent";

    const variantClasses = {
      primary: "bg-aviationGold hover:bg-yellow-600 hover:text-white text-white shadow-lg hover:shadow-aviationGold/40 focus:ring-aviationGold",
      secondary: "bg-white hover:bg-gray-50 text-charcoal-900 shadow-lg hover:shadow-white/20 focus:ring-white",
      outline: "border-2 border-white text-white hover:bg-white hover:text-charcoal-600 shadow-lg hover:shadow-white/20 focus:ring-white backdrop-blur-sm"
    };

    const ButtonComponent = action.external ? 'a' : Link;
    const linkProps = action.external
      ? { href: action.href, target: '_blank', rel: 'noopener noreferrer' }
      : { href: action.href };

    return (
      <ButtonComponent
        key={action.id}
        {...linkProps}
        className={`${baseClasses} ${variantClasses[action.variant]}`}
        aria-label={action.ariaLabel || action.label}
        style={{
          pointerEvents: 'auto',
          cursor: 'pointer',
        }}
      >
        {action.label}
        <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </ButtonComponent>
    );
  }, []);

  // Memoized countdown unit renderer
  const renderCountdownUnit = useCallback((value: number, label: string, index: number) => (
    <div
      key={label}
      className={`bg-white/15 backdrop-blur-md border border-white/30 rounded-lg p-3 md:p-4 min-w-[80px] md:min-w-[100px] hover:bg-white/20 transition-all duration-300 shadow-lg ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
      style={{
        animationDelay: `${1000 + index * 100}ms`,
        pointerEvents: 'none',
      }}
    >
      <div
        className="text-white font-black text-2xl md:text-4xl lg:text-5xl mb-1 leading-none"
        style={{
          fontFamily: "'Interstate', 'Lucida Sans Demibold', sans-serif",
          textShadow: '0 2px 10px rgba(0,0,0,0.8)'
        }}
      >
        {value.toString().padStart(2, '0')}
      </div>
      <div
        className="text-gray-200 text-xs md:text-sm font-bold uppercase tracking-wider"
        style={{
          fontFamily: "'Roboto Flex', sans-serif"
        }}
      >
        {label}
      </div>
    </div>
  ), [isVisible]);

  // Memoized background video/image
  const backgroundContent = useMemo(() => {
    if (backgroundVideo && !videoError) {
      return (
        <video
          autoPlay
          muted
          loop
          playsInline
          onError={handleVideoError}
          className="w-full h-full object-cover"
          poster={backgroundImage}
          style={{ pointerEvents: 'none' }}
        >
          <source src={backgroundVideo} type="video/mp4" />
          <Image
            src={backgroundImage}
            alt="Africa Aviation Innovation Summit 2025"
            fill
            className="object-cover"
            priority
            sizes="100vw"
            style={{ pointerEvents: 'none' }}
          />
        </video>
      );
    }

    return (
      <Image
        src={backgroundImage}
        alt="Africa Aviation Innovation Summit 2025"
        fill
        className="object-cover"
        priority
        quality={95}
        sizes="100vw"
        style={{ pointerEvents: 'none' }}
      />
    );
  }, [backgroundVideo, videoError, backgroundImage, handleVideoError]);

  return (
    <section
      className={`relative w-full min-h-screen flex items-center justify-center overflow-hidden ${className}`}
      role="banner"
      aria-label="Hero section"
      style={{
        zIndex: 1, // Below header (9999)
        isolation: 'isolate',
      }}
    >
      {/* Background Media Container */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{ zIndex: -10 }}
      >
        {backgroundContent}
      </div>

      {/* Gradient Overlays */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"
        style={{ zIndex: -5 }}
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-charcoal-900/50 via-transparent to-charcoal-900/30"
        style={{ zIndex: -4 }}
      />

      {/* Main Content */}
      <div
        className="relative w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 md:pt-24 lg:pt-28"
        style={{
          zIndex: 10,
          pointerEvents: 'auto',
        }}
      >
        <div className="text-center">
          {/* Event Badge */}
          <div
            className={`inline-flex items-center px-5 py-3 md:px-6 md:py-3 rounded-full bg-aviationGold/20 border border-aviationGold/40 backdrop-blur-md mb-5 md:mb-6 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
            style={{ pointerEvents: 'none' }}
          >
            <div className="w-2 h-2 bg-aviationGold rounded-full mr-3 animate-pulse"></div>
            <span className="text-aviationGold font-semibold text-sm md:text-base uppercase tracking-wide">
              {eventDate} • Diani, Kenya
            </span>
          </div>

          {/* Main Title */}
          <h1
            className={`font-black text-white mb-3 md:mb-4 leading-tight transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
            style={{
              fontFamily: "'Interstate', 'Lucida Sans Demibold', 'Roboto Flex', sans-serif",
              textShadow: '0 4px 20px rgba(0,0,0,0.8)',
              letterSpacing: '-0.02em',
              fontSize: 'clamp(2rem, 6vw, 4.5rem)',
              lineHeight: 'clamp(2.1rem, 6.2vw, 4.7rem)',
              pointerEvents: 'none',
            }}
          >
            <div className="mb-1 md:mb-2">4<sup>th</sup> Africa Aviation</div>
            <div className="text-aviationGold">Innovation Summit 2025</div>
          </h1>

          {/* Description */}
          <p
            className={`text-gray-200 max-w-4xl mx-auto mb-6 md:mb-7 leading-relaxed font-semibold transition-all duration-1000 delay-900 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
            style={{
              fontFamily: "'Roboto Flex', sans-serif",
              textShadow: '0 2px 8px rgba(0,0,0,0.6)',
              fontSize: 'clamp(1.2rem, 2.2vw, 1.25rem)',
              lineHeight: 'clamp(1.4rem, 2.8vw, 1.8rem)',
              pointerEvents: 'none',
            }}
          >
            {description}
          </p>

          {/* Countdown Timer */}
          <div
            className={`mb-6 md:mb-8 transition-all duration-1000 delay-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ pointerEvents: 'none' }}
          >
            <div className="relative inline-block">
              <div
                className="absolute inset-0 bg-black/30 backdrop-blur-lg rounded-2xl border border-white/20 shadow-2xl"
                style={{ pointerEvents: 'none' }}
              />
              <div className="relative px-6 py-5 md:px-8 md:py-6">
                <div
                  className="text-white text-base md:text-lg font-normal mb-4"
                  style={{
                    fontFamily: "'Lucida Sans Demibold', sans-serif",
                    textShadow: '0 2px 8px rgba(0,0,0,0.6)'
                  }}
                >
                  Event Starts In
                </div>
                <div className="flex justify-center items-center gap-3 md:gap-4">
                  {renderCountdownUnit(countdown.days, 'DAYS', 0)}
                  {renderCountdownUnit(countdown.hours, 'HOURS', 1)}
                  {renderCountdownUnit(countdown.minutes, 'MINUTES', 2)}
                  {renderCountdownUnit(countdown.seconds, 'SECONDS', 3)}
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div
            className={`flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center transition-all duration-1000 delay-1400 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ pointerEvents: 'auto' }}
          >
            {actions.map(renderActionButton)}
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div
        className="absolute top-1/4 left-4 md:left-8 w-24 h-24 md:w-32 md:h-32 bg-aviationGold/6 rounded-full blur-3xl animate-pulse"
        style={{ zIndex: 5, pointerEvents: 'none' }}
      />
      <div
        className="absolute bottom-1/4 right-4 md:right-8 w-32 h-32 md:w-40 md:h-40 bg-blue-400/4 rounded-full blur-3xl animate-pulse delay-1000"
        style={{ zIndex: 5, pointerEvents: 'none' }}
      />

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-16 md:h-24 bg-gradient-to-t from-black/20 to-transparent"
        style={{ zIndex: 8, pointerEvents: 'none' }}
      />
    </section>
  );
});

Hero.displayName = 'Hero';

export { Hero };
export type { HeroProps };
