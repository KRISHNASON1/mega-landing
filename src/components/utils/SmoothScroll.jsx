'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Lenis from '@studio-freight/lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

export default function SmoothScroll() {
    const pathname = usePathname();

    useEffect(() => {
        // Disable Lenis entirely on mobile/touch devices — native scroll is smoother
        const isMobile = window.innerWidth < 768 || 'ontouchstart' in window;

        if (isMobile) {
            // On mobile, just scroll to top on route change and refresh ScrollTrigger
            window.scrollTo(0, 0);
            requestAnimationFrame(() => {
                ScrollTrigger.refresh();
            });
            return;
        }

        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            direction: 'vertical',
            gestureDirection: 'vertical',
            smooth: true,
            smoothTouch: false,
            touchMultiplier: 2,
            wheelMultiplier: 1,
            autoResize: true,
        });

        // Sync Lenis scroll with GSAP ScrollTrigger
        lenis.on('scroll', ScrollTrigger.update);

        // Use GSAP ticker for the Lenis RAF loop
        const rafCallback = (time) => {
            lenis.raf(time * 1000);
        };
        gsap.ticker.add(rafCallback);
        gsap.ticker.lagSmoothing(0);

        // Scroll to top on route change
        lenis.scrollTo(0, { immediate: true });

        // Refresh ScrollTrigger after Lenis is ready
        requestAnimationFrame(() => {
            ScrollTrigger.refresh();
        });

        return () => {
            gsap.ticker.remove(rafCallback);
            lenis.destroy();
        };
    }, [pathname]);

    return null;
}
