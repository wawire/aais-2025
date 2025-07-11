'use client';

import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

/**
 * Interface defining props for the Timer component.
 * @interface TimerProps
 */
interface TimerProps {
  targetDate: Date;
}

/**
 * Timer component displaying a countdown to a target date.
 * @param {TimerProps} props - Component props
 * @param {Date} props.targetDate - Target date for countdown
 * @returns {JSX.Element} Rendered Timer component
 */
function Timer({ targetDate }: TimerProps): JSX.Element {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className="flex space-x-2 text-center" aria-live="polite">
      <div className="bg-gray-800/50 px-3 py-2 rounded-lg">
        <div className="text-aviationGold text-lg font-bold">{timeLeft.days}</div>
        <div className="text-xs text-gray-200">Days</div>
      </div>
      <div className="bg-gray-800/50 px-3 py-2 rounded-lg">
        <div className="text-aviationGold text-lg font-bold">{timeLeft.hours}</div>
        <div className="text-xs text-gray-200">Hours</div>
      </div>
      <div className="bg-gray-800/50 px-3 py-2 rounded-lg">
        <div className="text-aviationGold text-lg font-bold">{timeLeft.minutes}</div>
        <div className="text-xs text-gray-200">Minutes</div>
      </div>
      <div className="bg-gray-800/50 px-3 py-2 rounded-lg">
        <div className="text-aviationGold text-lg font-bold">{timeLeft.seconds}</div>
        <div className="text-xs text-gray-200">Seconds</div>
      </div>
    </div>
  );
}

/**
 * Hero section for AAIS 2025, featuring video background, morphing patterns, and CTA.
 * Optimized as the website's entry point with luxurious aviation styling.
 * @returns {JSX.Element} Rendered Hero component
 */
export function Hero(): JSX.Element {
  const targetDate = new Date('2025-07-15T00:00:00Z');

  return (
    <section className="relative min-h-[80vh] max-h-[100vh] overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/videos/hero-bg.mp4" type="video/mp4" />
        <Image
          src="/images/hero-bg.jpg"
          alt="Hero background fallback"
          fill
          style={{ objectFit: 'cover' }}
          quality={75}
          priority
        />
      </video>
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>

      {/* Morphing Patterns */}
      <div className="absolute inset-0 opacity-30 animate-morph">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
          <path
            d="M10 10 Q50 0 90 10 T90 90 Q50 100 10 90 T10 10"
            fill="none"
            stroke="#C2A542"
            strokeWidth="0.5"
            className="transition-all duration-10000"
          />
        </svg>
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-6 lg:px-12 py-12 md:py-20 z-10 flex flex-col items-center justify-center text-center min-h-[80vh] max-h-[100vh]">
        <h1 className="text-4xl md:text-5xl font-bold text-white font-roboto mb-4">
          Soar into Innovation at AAIS 2025
        </h1>
        <p className="text-lg md:text-xl text-gray-200 font-inter mb-6">
          Join the Future of Aviation Excellence, July 15-17, 2025
        </p>
        <Timer targetDate={targetDate} />
        <Link
          href="/register"
          className="mt-8 inline-flex items-center px-8 py-4 bg-aviationGold text-white font-semibold font-open-sans rounded-lg shadow-md hover:shadow-lg hover:bg-aviationGold-600 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-aviationGold focus:ring-offset-2 focus:ring-offset-transparent"
          aria-label="Register for AAIS 2025"
        >
          <span>Register Now</span>
          <ArrowRight size={18} className="ml-2 transition-transform duration-300 hover:translate-x-1" />
        </Link>
      </div>
    </section>
  );
}
