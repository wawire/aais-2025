'use client';

import type { ScrollEventHandler } from '@/types/navigation.types';
import { useCallback, useEffect, useRef, useState } from 'react';

interface UseScrollDetectionOptions {
  readonly threshold?: number;
  readonly debounceMs?: number;
}

interface ScrollDetectionReturn {
  readonly isScrolled: boolean;
  readonly scrollY: number;
}

/**
 * Optimized scroll detection hook with debouncing and passive listeners
 * Implements performance best practices for scroll events
 */
export function useScrollDetection(
  options: UseScrollDetectionOptions = {}
): ScrollDetectionReturn {
  const { threshold = 10, debounceMs = 16 } = options;

  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [scrollY, setScrollY] = useState<number>(0);
  const timeoutRef = useRef<NodeJS.Timeout>();

  const handleScroll = useCallback<ScrollEventHandler>(() => {
    // Clear previous timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    // Debounce scroll events for performance
    timeoutRef.current = setTimeout(() => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
      setIsScrolled(currentScrollY > threshold);
    }, debounceMs);
  }, [threshold, debounceMs]);

  useEffect(() => {
    // Use passive listener for better performance
    const options: AddEventListenerOptions = { passive: true };

    window.addEventListener('scroll', handleScroll, options);

    // Initial check
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [handleScroll]);

  return { isScrolled, scrollY };
}
