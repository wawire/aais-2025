'use client';

import type { KeyboardEventHandler } from '@/types/navigation.types';
import { useCallback, useEffect } from 'react';

interface UseKeyboardNavigationOptions {
  readonly enabled?: boolean;
  readonly onEscape?: () => void;
  readonly onEnter?: () => void;
  readonly onArrowKeys?: (direction: 'up' | 'down' | 'left' | 'right') => void;
}

/**
 * Accessible keyboard navigation hook
 * Implements WCAG 2.1 AA compliance for navigation
 */
export function useKeyboardNavigation(
  options: UseKeyboardNavigationOptions = {}
): void {
  const { enabled = true, onEscape, onEnter, onArrowKeys } = options;

  const handleKeyDown = useCallback<KeyboardEventHandler>((event) => {
    if (!enabled) return;

    switch (event.key) {
      case 'Escape':
        event.preventDefault();
        onEscape?.();
        break;

      case 'Enter':
      case ' ':
        event.preventDefault();
        onEnter?.();
        break;

      case 'ArrowUp':
        event.preventDefault();
        onArrowKeys?.('up');
        break;

      case 'ArrowDown':
        event.preventDefault();
        onArrowKeys?.('down');
        break;

      case 'ArrowLeft':
        event.preventDefault();
        onArrowKeys?.('left');
        break;

      case 'ArrowRight':
        event.preventDefault();
        onArrowKeys?.('right');
        break;
    }
  }, [enabled, onEscape, onEnter, onArrowKeys]);

  useEffect(() => {
    if (!enabled) return;

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown, enabled]);
}
