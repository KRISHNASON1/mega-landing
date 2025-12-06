'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Package, Zap, Shield, Cpu, Cable, Lightbulb, Wrench, Settings, Box, Cpu2, Hammer, BatteryCharging } from 'lucide-react';
import GlassSurface from '../ui/GlassSurface';
import Link from 'next/link';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const StackingCardsShowcase = () => {
  const sectionRef = useRef(null);
  const cardsContainerRef = useRef(null);
  const cardsRefs = useRef([]);
  const ctaRef = useRef(null);

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
      icon: Cpu2
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

    const ctx = gsap.context(() => {
      const isMobile = window.innerWidth < 768;
      const cardsPerStack = isMobile ? 1 : 3;
      const totalCards = isMobile ? 6 : 12;
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
        const baseX = isMobile ? 0 : positionInStack * 340; // Card width + gap
        const offset = isMobile ? { x: 0, y: 0, rotation: 0 } : unevenOffsets[positionInStack];

        gsap.set(card, {
          x: baseX + offset.x,
          y: stackNumber === 0 ? offset.y : window.innerHeight,
          rotateZ: stackNumber === 0 ? offset.rotation : 0,
          opacity: stackNumber === 0 ? 1 : 0,
          scale: 1,
          zIndex: stackNumber === 0 ? 100 : index,
          transformOrigin: 'center center'
        });
      });

      // Set initial CTA state (hidden below viewport)
      gsap.set(ctaRef.current, {
        y: window.innerHeight,
        opacity: 0,
        scale: 0.9
      });

      // Create master timeline with ScrollTrigger
      // Increased end value to add more scroll distance for CTA reveal
      const masterTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          pin: true,
          scrub: 1,
          start: 'top top',
          end: '+=500%', // Increased from 400% to 500% for CTA time
          anticipatePin: 1,
          invalidateOnRefresh: true
        }
      });

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
            const baseX = isMobile ? 0 : positionInStack * 340;

            masterTimeline.to(
              cardsRefs.current[i],
              {
                x: baseX + offset.x,
                y: -stackLevel * stackGap + offset.y,
                rotateZ: offset.rotation,
                scale: 1 - stackLevel * 0.08,
                zIndex: prevStackIndex,
                duration: 1,
                ease: 'power2.inOut'
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
          const baseX = isMobile ? 0 : positionInStack * 340;

          masterTimeline.fromTo(
            cardsRefs.current[i],
            {
              y: window.innerHeight,
              opacity: 0,
              scale: 0.9,
              rotateZ: 0
            },
            {
              x: baseX + offset.x,
              y: offset.y,
              rotateZ: offset.rotation,
              opacity: 1,
              scale: 1,
              zIndex: 100,
              duration: 1,
              ease: 'power2.out'
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
          ease: 'power2.in',
          stagger: 0.03
        },
        exitLabel
      );

      // CTA reveal from bottom - comes up after cards exit
      masterTimeline.fromTo(
        ctaRef.current,
        {
          y: window.innerHeight,
          opacity: 0,
          scale: 0.9
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: 'back.out(1.7)'
        },
        exitLabel + '+=0.5'
      );

      // Hold CTA visible for a moment before scroll unlocks
      masterTimeline.to(ctaRef.current, {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.5
      });

    }, sectionRef);

    return () => ctx.revert();
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

      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 -left-48 w-96 h-96 bg-primary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-2/3 -right-48 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
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
          {products.map((product, index) => (
            <div
              key={product.id}
              ref={(el) => (cardsRefs.current[index] = el)}
              className="group cursor-pointer absolute inset-0 mx-auto w-full md:w-auto"
              style={{
                transformStyle: 'preserve-3d',
                willChange: 'transform'
              }}
            >
              <GlassSurface
                width="100%"
                height={420}
                borderRadius={24}
                brightness={98}
                opacity={0.7}
                blur={12}
                className="shadow-2xl max-w-sm md:max-w-xs mx-auto md:mx-0"
              >
                <div className="relative h-full w-full overflow-hidden rounded-3xl">
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
              </GlassSurface>
            </div>
          ))}

          {/* CTA Button (slides up from bottom after cards exit) */}
          <div
            ref={ctaRef}
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
            style={{ willChange: 'transform' }}
          >
            <Link
              href="/products"
              className="pointer-events-auto group inline-flex items-center space-x-3 px-10 py-5 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-full font-semibold text-lg shadow-2xl hover:shadow-primary-500/50 hover:scale-105 transition-all duration-300"
            >
              <span>Explore More Products</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
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
