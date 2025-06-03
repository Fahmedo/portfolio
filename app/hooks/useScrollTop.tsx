'use client';

import { useCallback } from 'react';

interface ScrollOptions {
  offset?: number;
  duration?: number;
}

export const useScrollTo = () => {
  const scrollTo = useCallback(
    (elementId: string, options: ScrollOptions = {}) => {
      const { offset = 0, duration = 800 } = options;

      // Find the element to scroll to
      const element = document.getElementById(elementId);
      if (!element) return;

      // Get the element's position relative to the viewport
      const elementPosition = element.getBoundingClientRect().top;

      // Get the starting position
      const startPosition = window.pageYOffset;

      // Calculate distance to scroll (accounting for offset)
      const distance = elementPosition + startPosition - offset;

      let startTime: number | null = null;

      // Animation function
      function animation(currentTime: number) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1);

        // Easing function - easeInOutQuad
        const ease = (t: number) =>
          t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;

        window.scrollTo(0, startPosition + distance * ease(progress));

        // Continue animation if not finished
        if (timeElapsed < duration) {
          requestAnimationFrame(animation);
        }
      }

      // Start animation
      requestAnimationFrame(animation);
    },
    []
  );

  return { scrollTo };
};
