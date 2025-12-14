'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Package, Zap, Shield, Cpu, Cable, Lightbulb, Wrench, Settings, Box, BrainCircuit, Hammer, BatteryCharging } from 'lucide-react';
import Link from 'next/link';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const StackingCardsShowcase = () => {
  const sectionRef = useRef(null);
  const cardsContainerRef = useRef(null);
  const cardsRefs = useRef([]);
  const ctaRef = useRef(null);
  const exploreButtonRef = useRef(null);
  const isUnmountingRef = useRef(false);
  const backgroundLinesRef = useRef(null);
  const mobileBackgroundRef = useRef(null);
  const [isMobileView, setIsMobileView] = useState(false);

  // Detect mobile viewport
  useEffect(() => {
    const checkMobile = () => setIsMobileView(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // 12 products for desktop (4 stacks of 3)
  const products = [
    {
      id: 1,
      title: 'Industrial Cables',
      description: 'Heavy-duty cables for industrial applications with superior conductivity',
      image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=80',
      color: 'from-blue-500 to-blue-700',
      category: 'Electrical',
      icon: Cable
    },
    {
      id: 2,
      title: 'Smart Lighting',
      description: 'IoT-enabled LED lighting systems for modern facilities',
      image: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=800&q=80',
      color: 'from-yellow-500 to-yellow-700',
      category: 'Lighting',
      icon: Lightbulb
    },
    {
      id: 3,
      title: 'Safety Gear Pro',
      description: 'Advanced protective equipment meeting international standards',
      image: 'https://images.unsplash.com/photo-1581578017093-cd30b0e417bf?w=800&q=80',
      color: 'from-red-500 to-red-700',
      category: 'Safety',
      icon: Shield
    },
    {
      id: 4,
      title: 'Power Distribution',
      description: 'Robust switchgear and distribution panels for optimal power management',
      image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=80',
      color: 'from-green-500 to-green-700',
      category: 'Electrical',
      icon: Zap
    },
    {
      id: 5,
      title: 'Automation Systems',
      description: 'Cutting-edge industrial automation and control solutions',
      image: 'https://images.unsplash.com/photo-1581244277943-fe4a9c777189?w=800&q=80',
      color: 'from-purple-500 to-purple-700',
      category: 'Automation',
      icon: Cpu
    },
    {
      id: 6,
      title: 'Precision Tools',
      description: 'Professional-grade tools for precision engineering and maintenance',
      image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?w=800&q=80',
      color: 'from-orange-500 to-orange-700',
      category: 'Tools',
      icon: Wrench
    },
    {
      id: 7,
      title: 'Control Systems',
      description: 'Advanced control panels and monitoring systems for industrial processes',
      image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80',
      color: 'from-indigo-500 to-indigo-700',
      category: 'Control',
      icon: Settings
    },
    {
      id: 8,
      title: 'Packaging Solutions',
      description: 'Industrial packaging equipment and materials for secure handling',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80',
      color: 'from-pink-500 to-pink-700',
      category: 'Packaging',
      icon: Package
    },
    {
      id: 9,
      title: 'Storage Systems',
      description: 'Heavy-duty storage racks and warehouse management solutions',
      image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&q=80',
      color: 'from-teal-500 to-teal-700',
      category: 'Storage',
      icon: Box
    },
    {
      id: 10,
      title: 'Smart Processors',
      description: 'Industrial-grade processors for automated control systems',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80',
      color: 'from-cyan-500 to-cyan-700',
      category: 'Electronics',
      icon: BrainCircuit
    },
    {
      id: 11,
      title: 'Heavy Machinery',
      description: 'Construction and industrial heavy machinery equipment',
      image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&q=80',
      color: 'from-amber-500 to-amber-700',
      category: 'Machinery',
      icon: Hammer
    },
    {
      id: 12,
      title: 'Power Backup',
      description: 'UPS systems and power backup solutions for critical operations',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
      color: 'from-lime-500 to-lime-700',
      category: 'Power',
      icon: BatteryCharging
    }
  ];

  useEffect(() => {
    if (typeof window === 'undefined' || !sectionRef.current) return;

    // Reset unmounting flag
    isUnmountingRef.current = false;

    // Ensure smooth scrolling is enabled across all browsers
    ScrollTrigger.normalizeScroll(true);

    let scrollTriggerInstance = null;

    const ctx = gsap.context(() => {
      const isMobile = window.innerWidth < 768;
      const cardsPerStack = isMobile ? 1 : 3;
      const totalCards = isMobile ? 8 : 12; // Changed from 6 to 8 for mobile
      const totalStacks = Math.ceil(totalCards / cardsPerStack);
      const stackGap = 25; // 25px vertical gap between stacks

      // Uneven offset for 3-card stacks (desktop)
      const unevenOffsets = [
        { x: -8, y: -2, rotation: -3 },  // Left card
        { x: 0, y: 0, rotation: 0 },     // Center card
        { x: 8, y: 2, rotation: 3 }      // Right card
      ];

      // Set initial positions for all cards
      cardsRefs.current.slice(0, totalCards).forEach((card, index) => {
        if (!card) return;

        const stackNumber = Math.floor(index / cardsPerStack);
        const positionInStack = index % cardsPerStack;

        // Desktop: Calculate horizontal position with uneven offset
        const baseX = isMobile ? 0 : positionInStack * 430; // Card width + gap (increased spacing)
        const offset = isMobile ? { x: 0, y: 0, rotation: 0 } : unevenOffsets[positionInStack];

        gsap.set(card, {
          x: baseX + offset.x,
          y: stackNumber === 0 ? offset.y : window.innerHeight,
          rotateZ: stackNumber === 0 ? offset.rotation : 0,
          opacity: 1,
          scale: 1,
          zIndex: stackNumber === 0 ? 100 : index,
          transformOrigin: 'center center',
          force3D: true // Ensures GPU acceleration
        });
      });

      // Set initial CTA state (hidden above viewport)
      gsap.set(ctaRef.current, {
        y: -window.innerHeight,
        opacity: 0,
        scale: 0.9,
        force3D: true // Ensures GPU acceleration
      });

      // Create master timeline with ScrollTrigger
      // Optimized for smooth scrolling performance
      const masterTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          pin: true,
          scrub: 0.5, // Reduced from 1 to 0.5 for smoother interpolation
          start: 'top top',
          end: '+=400%', // Reduced from 500% to 400% for better performance
          anticipatePin: 1,
          invalidateOnRefresh: true,
          pinSpacing: true,
          fastScrollEnd: true, // Prevents animation lag on fast scrolls
          onRefresh: (self) => {
            scrollTriggerInstance = self;
          }
        },
        smoothChildTiming: true // Smooths child animation timing
      });

      // Store the ScrollTrigger instance
      scrollTriggerInstance = masterTimeline.scrollTrigger;

      // Animation for each stack
      for (let stackIndex = 1; stackIndex < totalStacks; stackIndex++) {
        const stackStartIndex = stackIndex * cardsPerStack;
        const stackEndIndex = Math.min(stackStartIndex + cardsPerStack, totalCards);

        // Label for this stack phase
        const label = `stack${stackIndex}`;
        masterTimeline.add(label, stackIndex * 1);

        // Compress previous stacks
        for (let prevStackIndex = 0; prevStackIndex < stackIndex; prevStackIndex++) {
          const prevStartIndex = prevStackIndex * cardsPerStack;
          const prevEndIndex = Math.min(prevStartIndex + cardsPerStack, totalCards);

          for (let i = prevStartIndex; i < prevEndIndex; i++) {
            if (!cardsRefs.current[i]) continue;

            const positionInStack = i % cardsPerStack;
            const stackLevel = stackIndex - prevStackIndex;
            const offset = isMobile ? { x: 0, y: 0, rotation: 0 } : unevenOffsets[positionInStack];
            const baseX = isMobile ? 0 : positionInStack * 380;

            masterTimeline.to(
              cardsRefs.current[i],
              {
                x: baseX + offset.x,
                y: -stackLevel * stackGap + offset.y,
                rotateZ: offset.rotation,
                scale: 1 - stackLevel * 0.08,
                zIndex: prevStackIndex,
                duration: 1,
                ease: 'none', // Changed from 'power2.inOut' for smoother scrubbing
                force3D: true // Ensures GPU acceleration
              },
              label
            );
          }
        }

        // Bring in new stack from bottom
        for (let i = stackStartIndex; i < stackEndIndex; i++) {
          if (!cardsRefs.current[i]) continue;

          const positionInStack = i % cardsPerStack;
          const offset = isMobile ? { x: 0, y: 0, rotation: 0 } : unevenOffsets[positionInStack];
          const baseX = isMobile ? 0 : positionInStack * 380;

          masterTimeline.fromTo(
            cardsRefs.current[i],
            {
              y: window.innerHeight,
              opacity: 1,
              scale: 0.9,
              rotateZ: 0,
              force3D: true
            },
            {
              x: baseX + offset.x,
              y: offset.y,
              rotateZ: offset.rotation,
              opacity: 1,
              scale: 1,
              zIndex: 100,
              duration: 1,
              ease: 'none', // Changed from 'power2.out' for smoother scrubbing
              force3D: true // Ensures GPU acceleration
            },
            label
          );
        }
      }

      // Exit animation - all cards scroll up
      const exitLabel = 'exit';
      masterTimeline.add(exitLabel, totalStacks * 1);

      masterTimeline.to(
        cardsRefs.current.slice(0, totalCards),
        {
          y: -window.innerHeight,
          duration: 1,
          ease: 'none', // Changed from 'power2.in' for smoother scrubbing
          stagger: 0.03,
          force3D: true // Ensures GPU acceleration
        },
        exitLabel
      );

      // CTA reveal from top - comes down after cards exit
      masterTimeline.fromTo(
        ctaRef.current,
        {
          y: -window.innerHeight,
          opacity: 0,
          scale: 0.9,
          force3D: true
        },
        {
          y: 150,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: 'back.out(1.7)', // Spring effect for excitement
          force3D: true, // Ensures GPU acceleration
          onComplete: () => {
            // Exciting animations when button finishes animating
            if (!isUnmountingRef.current && exploreButtonRef.current) {
              const blueGlowElement = exploreButtonRef.current.querySelector('.blue-glow');
              const glowElement = exploreButtonRef.current.querySelector('.button-glow');

              // Create a timeline to sync button scale with blue glow
              const pulseTimeline = gsap.timeline();

              // Button pulse and blue glow appear together
              pulseTimeline.to(exploreButtonRef.current, {
                scale: 1.15,
                duration: 0.4,
                ease: 'power2.inOut',
              }, 0); // Start immediately

              // Blue glow appears as button scales up
              if (blueGlowElement) {
                pulseTimeline.to(blueGlowElement, {
                  opacity: 0.5,
                  duration: 0.2,
                  ease: 'power2.inOut',
                }, 0); // Start at the same time as button scale
              }

              // Regular glow effect
              if (glowElement) {
                pulseTimeline.to(glowElement, {
                  opacity: 0.5,
                  duration: 0.1,
                  ease: 'power2.inOut',
                }, 0);
              }

              // Button scales back down
              pulseTimeline.to(exploreButtonRef.current, {
                scale: 1,
                duration: 0.4,
                ease: 'power2.inOut',
              });

              // Blue glow fades but stays visible
              if (blueGlowElement) {
                pulseTimeline.to(blueGlowElement, {
                  opacity: 0.5,
                  duration: 0.4,
                  ease: 'power2.inOut',
                  onComplete: () => {
                    // Then continuous subtle pulsing
                    if (!isUnmountingRef.current && blueGlowElement) {
                      gsap.to(blueGlowElement, {
                        opacity: 0.5,
                        duration: 1,
                        yoyo: true,
                        repeat: -1,
                        ease: 'sine.inOut',
                      });
                    }
                  }
                });
              }

              // Regular glow fades
              if (glowElement) {
                pulseTimeline.to(glowElement, {
                  opacity: 0,
                  duration: 0.4,
                  ease: 'power2.inOut',
                });
              }

              // Continuous subtle floating animation
              gsap.to(exploreButtonRef.current, {
                y: -8,
                duration: 2.5,
                ease: 'sine.inOut',
                yoyo: true,
                repeat: -1,
              });
            }
          },
        },
        exitLabel + '+=0.5'
      );

      // Hold CTA visible for a moment before scroll unlocks
      masterTimeline.to(ctaRef.current, {
        y: 150,
        opacity: 1,
        scale: 1,
        duration: 0.5,
        force3D: true // Ensures GPU acceleration
      });

      // Background image scroll animation - synced with card animations
      // Desktop background
      if (backgroundLinesRef.current && !isMobile) {
        const img = backgroundLinesRef.current.querySelector('img');
        if (img) {
          // Wait for image to load to get actual height
          const setupImageAnimation = () => {
            const imageHeight = img.naturalHeight;
            const viewportHeight = window.innerHeight;

            // Calculate travel distance for precise sync
            // Start with bottom 40% of image visible
            const startY = -imageHeight * 0.53;
            const endY = -imageHeight * -0.2;

            // Set initial state - image partially visible at start
            gsap.set(img, {
              y: startY,
              opacity: 1,              // Fully visible from the start
              force3D: true
            });

            // Create timeline synced to main scroll
            const imageTimeline = gsap.timeline({
              scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top top',
                end: '+=400%',          // Match card animation scroll distance
                scrub: 0.5,             // Match master timeline for tight sync
                invalidateOnRefresh: true
              }
            });

            // Move from partially visible to completely off-screen at bottom
            imageTimeline.to(img, {
              y: endY,                  // Move from partial visibility to bottom
              duration: 1,              // Full scroll duration
              ease: 'none',             // Linear movement for predictable sync
              force3D: true
            });
          };

          if (img.complete) {
            setupImageAnimation();
          } else {
            img.addEventListener('load', setupImageAnimation);
          }
        }
      }

      // Mobile background - animation for mobileBackground.png
      // Simplified animation to ensure image is always visible
      if (mobileBackgroundRef.current) {
        const mobileImg = mobileBackgroundRef.current.querySelector('img');
        if (mobileImg && isMobile) {
          const setupMobileImageAnimation = () => {
            const imageHeight = mobileImg.naturalHeight || 2000;
            const imageWidth = mobileImg.naturalWidth || 375;
            const viewportHeight = window.innerHeight;
            const viewportWidth = window.innerWidth;

            // Calculate scaled height when image fits viewport width
            const scaledHeight = (imageHeight / imageWidth) * viewportWidth;

            // How much can we scroll the image (difference between image and viewport)
            const scrollableDistance = Math.max(0, scaledHeight - viewportHeight);

            // Start with image at top (y: 0), scroll to reveal bottom portions
            gsap.set(mobileImg, {
              y: 0,
              opacity: 1,
              force3D: true
            });

            // Animate from y: 0 to y: -scrollableDistance (revealing bottom of image)
            gsap.timeline({
              scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top top',
                end: '+=400%',
                scrub: 0.5,
                invalidateOnRefresh: true
              }
            }).to(mobileImg, {
              y: -scrollableDistance,
              duration: 1,
              ease: 'none',
              force3D: true
            });
          };

          if (mobileImg.complete && mobileImg.naturalHeight > 0) {
            setupMobileImageAnimation();
          } else {
            mobileImg.addEventListener('load', setupMobileImageAnimation);
          }
        }
      }

    }, sectionRef);

    return () => {
      // Set unmounting flag
      isUnmountingRef.current = true;

      // Kill the ScrollTrigger instance first
      if (scrollTriggerInstance) {
        try {
          scrollTriggerInstance.kill(true);
        } catch (e) {
          // Ignore errors during cleanup
        }
      }

      // Kill all GSAP animations on specific elements
      cardsRefs.current.forEach(card => {
        if (card) {
          try {
            gsap.killTweensOf(card);
          } catch (e) {
            // Ignore errors during cleanup
          }
        }
      });

      if (ctaRef.current) {
        try {
          gsap.killTweensOf(ctaRef.current);
        } catch (e) {
          // Ignore errors during cleanup
        }
      }

      if (exploreButtonRef.current) {
        try {
          gsap.killTweensOf(exploreButtonRef.current);
        } catch (e) {
          // Ignore errors during cleanup
        }
      }

      if (cardsContainerRef.current) {
        try {
          gsap.killTweensOf(cardsContainerRef.current);
        } catch (e) {
          // Ignore errors during cleanup
        }
      }

      if (backgroundLinesRef.current) {
        try {
          gsap.killTweensOf(backgroundLinesRef.current);
          const img = backgroundLinesRef.current.querySelector('img');
          if (img) {
            gsap.killTweensOf(img);
            // Remove load event listener if it was added
            img.removeEventListener('load', () => { });
          }
        } catch (e) {
          // Ignore errors during cleanup
        }
      }

      // Disable normalize scroll before cleanup
      try {
        ScrollTrigger.normalizeScroll(false);
      } catch (e) {
        // Ignore errors during cleanup
      }

      // Revert the GSAP context
      try {
        ctx.revert();
      } catch (e) {
        // Ignore errors during cleanup
      }

      // Clear all remaining ScrollTriggers
      try {
        ScrollTrigger.getAll().forEach(trigger => {
          if (trigger.vars && trigger.vars.trigger === sectionRef.current) {
            trigger.kill(true);
          }
        });
      } catch (e) {
        // Ignore errors during cleanup
      }
    };
  }, []);

  // Responsive handler
  useEffect(() => {
    const handleResize = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden bg-gradient-to-b from-white via-gray-50 to-white"
      aria-label="Product Showcase"
    >
      {/* Skip link for accessibility */}
      <a
        href="#after-stacking-showcase"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[1000] focus:px-4 focus:py-2 focus:bg-white focus:text-primary-600 focus:rounded-lg focus:shadow-lg"
      >
        Skip product showcase
      </a>

      {/* Scroll-Synced Background Image - Desktop */}
      <div
        ref={backgroundLinesRef}
        className="absolute inset-0 overflow-hidden pointer-events-none hidden md:block"
        style={{ backgroundColor: '#f2f5ee' }}
      >
        <img
          src="/background.png"
          alt=""
          className="absolute w-full h-auto object-cover"
          style={{ willChange: 'transform' }}
        />
      </div>

      {/* Scroll-Synced Background Image - Mobile */}
      <div
        ref={mobileBackgroundRef}
        className="absolute inset-0 overflow-hidden pointer-events-none md:hidden"
        style={{ backgroundColor: '#f2f5ee' }}
      >
        <img
          src="/mobileBackground.png"
          alt=""
          className="absolute w-full h-auto object-cover"
          style={{ willChange: 'transform' }}
        />
      </div>

      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 -left-48 w-96 h-96 bg-primary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-2/3 -right-48 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative h-screen flex items-start justify-center px-4 sm:px-6 lg:px-8 pt-72">
        {/* Cards Container with Perspective */}
        <div
          ref={cardsContainerRef}
          className="relative w-full max-w-7xl mx-auto"
          style={{
            perspective: '2000px',
            transformStyle: 'preserve-3d'
          }}
        >
          {/* Cards */}
          {products
            .filter((_, index) => !isMobileView || index < 8) // Only show 8 cards on mobile
            .map((product, index) => (
              <div
                key={product.id}
                ref={(el) => (cardsRefs.current[index] = el)}
                className="group cursor-pointer absolute inset-0 mx-auto w-full md:w-auto"
                style={{
                  transformStyle: 'preserve-3d',
                  willChange: 'transform, opacity' // Optimized for both transform and opacity changes
                }}
              >
                <div className="glass-card h-[420px] w-full max-w-md md:max-w-xs mx-auto md:ml-12 rounded-3xl shadow-2xl overflow-hidden">
                  <div className="relative h-full w-full">
                    {/* Background Image with Parallax */}
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                      style={{ backgroundImage: `url(${product.image})` }}
                    >
                      <div className={`absolute inset-0 bg-gradient-to-br ${product.color} opacity-60 group-hover:opacity-70 transition-opacity duration-300`}></div>
                    </div>

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

                    {/* Content */}
                    <div className="relative h-full flex flex-col justify-end p-8 text-white">
                      <div className="transform transition-transform duration-300 group-hover:translate-y-[-4px]">
                        <h3 className="text-2xl font-bold mb-3">{product.title}</h3>
                        <p className="text-white/90 mb-4 leading-relaxed">{product.description}</p>
                        <div className="inline-flex items-center text-sm font-semibold bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 group-hover:bg-white/20 transition-all duration-300">
                          <span>View Products</span>
                          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>

                    {/* Shine effect on hover */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

          {/* CTA Button (slides down from top after cards exit) */}
          <div
            ref={ctaRef}
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
            style={{ willChange: 'transform, opacity' }} // Optimized for both transform and opacity changes
          >
            <Link
              href="/products"
              ref={exploreButtonRef}
              className="pointer-events-auto group relative"
            >
              {/* Blue glow - continuous pulsing */}
              <div className="blue-glow absolute -inset-2 bg-blue-500 rounded-full opacity-0 blur-2xl transition-all duration-300 group-hover:opacity-70 group-hover:blur-3xl"></div>

              {/* Animated glow background */}
              <div className="button-glow absolute -inset-1 bg-gradient-to-r from-primary-600 via-primary-700 to-primary-600 rounded-full opacity-0 blur-xl transition-all duration-300 group-hover:opacity-100 animate-gradient-xy"></div>

              {/* Main button */}
              <div className="relative px-10 py-5 bg-gradient-to-r from-primary-600 via-primary-700 to-primary-800 text-white rounded-full font-bold text-xl shadow-2xl overflow-hidden transition-all duration-300 group-hover:scale-105 group-hover:shadow-primary-500/50">
                {/* Shimmer effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
                </div>

                {/* Particles effect on hover */}
                <div className="absolute inset-0 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="particle absolute top-1/4 left-1/4 w-1 h-1 bg-white rounded-full animate-particle-1"></div>
                  <div className="particle absolute top-1/2 left-1/3 w-1 h-1 bg-white rounded-full animate-particle-2"></div>
                  <div className="particle absolute top-3/4 left-2/3 w-1 h-1 bg-white rounded-full animate-particle-3"></div>
                  <div className="particle absolute top-1/3 left-3/4 w-1 h-1 bg-white rounded-full animate-particle-4"></div>
                </div>

                {/* Border animation */}
                <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute inset-0 rounded-full border-2 border-white/50 animate-ping-slow"></div>
                </div>

                {/* Button content */}
                <div className="relative flex items-center space-x-3">
                  <span className="relative">
                    Explore More Products
                    {/* Underline animation */}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
                  </span>
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300 group-hover:rotate-[-10deg]" />

                  {/* Sparkle on hover */}
                  <span className="absolute -top-1 -right-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    ✨
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Anchor for skip link */}
      <div id="after-stacking-showcase"></div>
    </section>
  );
};

export default StackingCardsShowcase;
