'use client';

import { useEffect, useRef } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

/**
 * GSAPCleanup Component
 * Ensures all GSAP animations and ScrollTriggers are killed before navigation
 * to prevent "removeChild" errors during route transitions
 */
const GSAPCleanup = () => {
  const pathname = usePathname();
  const router = useRouter();
  const isNavigatingRef = useRef(false);

  useEffect(() => {
    // Aggressive cleanup function
    const cleanup = () => {
      try {
        // STEP 1: Kill all ScrollTrigger instances FIRST (this should unpin elements)
        const triggers = ScrollTrigger.getAll();
        triggers.forEach(trigger => {
          try {
            trigger.kill(true);
          } catch (e) {
            // Ignore errors during cleanup
          }
        });

        // STEP 2: Manually restore any pinned elements
        try {
          const pinSpacers = document.querySelectorAll('.pin-spacer');
          pinSpacers.forEach(spacer => {
            try {
              // Get the pinned element inside the spacer
              const pinnedElement = spacer.querySelector('[data-pin]') || spacer.firstElementChild;

              if (pinnedElement && spacer.parentNode) {
                // Move the element back to its original position
                spacer.parentNode.insertBefore(pinnedElement, spacer);

                // Remove the pin-spacer wrapper
                spacer.parentNode.removeChild(spacer);
              }
            } catch (e) {
              // Ignore errors during cleanup
            }
          });
        } catch (e) {
          // Ignore errors during cleanup
        }



        // STEP 4: Kill all GSAP tweens
        try {
          gsap.killTweensOf('*');
        } catch (e) {
          // Ignore errors during cleanup
        }



        // STEP 6: Clear props on all elements that might have been animated
        try {
          const animatedElements = document.querySelectorAll('[style*="transform"], [style*="opacity"], [style*="position"]');
          animatedElements.forEach(el => {
            try {
              gsap.set(el, { clearProps: 'all' });
            } catch (e) {
              // Ignore errors during cleanup
            }
          });
        } catch (e) {
          // Ignore errors during cleanup
        }
      } catch (e) {
        // Ignore all errors in cleanup
      }
    };

    // Intercept link clicks and ensure cleanup completes BEFORE navigation
    const handleLinkClick = (e) => {
      // Skip if already navigating
      if (isNavigatingRef.current) return;

      const target = e.target.closest('a');
      if (target && target.href) {
        try {
          const targetUrl = new URL(target.href);
          const currentUrl = new URL(window.location.href);

          // Check if it's an internal navigation to a different page
          const isInternal = targetUrl.origin === currentUrl.origin;
          const isDifferentPage = targetUrl.pathname !== currentUrl.pathname;

          if (isInternal && isDifferentPage) {
            // Prevent default navigation
            e.preventDefault();
            e.stopPropagation();
            e.stopImmediatePropagation();

            // Set navigating flag
            isNavigatingRef.current = true;

            // Run cleanup
            cleanup();

            // Allow cleanup to complete, then navigate using Next.js router
            setTimeout(() => {
              router.push(targetUrl.pathname + targetUrl.search + targetUrl.hash);
              // Scroll to top after navigation
              window.scrollTo(0, 0);
              document.documentElement.scrollTop = 0;
              // Reset flag after navigation
              setTimeout(() => {
                isNavigatingRef.current = false;
                window.scrollTo(0, 0);
              }, 100);
            }, 50);
          }
        } catch (err) {
          // If URL parsing fails, allow normal navigation
          isNavigatingRef.current = false;
        }
      }
    };

    // Use capture phase to intercept clicks early
    document.addEventListener('click', handleLinkClick, { capture: true });

    // Reset navigating flag when pathname changes
    isNavigatingRef.current = false;

    return () => {
      document.removeEventListener('click', handleLinkClick, { capture: true });
    };
  }, [pathname, router]);

  return null;
};

export default GSAPCleanup;
