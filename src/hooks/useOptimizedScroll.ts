import { useCallback, useEffect, useState } from 'react';

interface UseOptimizedScrollOptions {
  threshold?: number;
  throttleMs?: number;
}

/**
 * Optimized scroll hook with throttling for better performance
 * Prevents excessive re-renders during scroll events
 *
 * @param {UseOptimizedScrollOptions} options - Configuration options
 * @returns {Object} Scroll state and utilities
 */
export function useOptimizedScroll({
  threshold = 20,
  throttleMs = 16
}: UseOptimizedScrollOptions = {}) {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [scrollPosition, setScrollPosition] = useState<number>(0);

  const handleScroll = useCallback(() => {
    const position = window.scrollY;
    setScrollPosition(position);
    setIsScrolled(position > threshold);
  }, [threshold]);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const throttledScroll = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(handleScroll, throttleMs);
    };

    window.addEventListener('scroll', throttledScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', throttledScroll);
      clearTimeout(timeoutId);
    };
  }, [handleScroll, throttleMs]);

  return { isScrolled, scrollPosition };
}
