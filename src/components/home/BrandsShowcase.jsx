'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const BrandsShowcase = () => {
  const sectionRef = useRef(null);
  const marqueeRef = useRef(null);
  const [animationDuration, setAnimationDuration] = useState(30);

  const brands = [
    { name: 'Siemens', logo: '/images/logos/logo_1.png' },
    { name: 'Polycab', logo: '/images/logos/logo_2.png' },
    { name: 'Havells', logo: '/images/logos/logo_3.png' },
    { name: 'L&T', logo: '/images/logos/logo_4.png' },
    { name: 'OSRAM', logo: '/images/logos/logo_5.png' },
    { name: 'Philips', logo: '/images/logos/logo_1.png' },
    { name: 'TATA', logo: '/images/logos/logo_2.png' },
    { name: 'Usha', logo: '/images/logos/logo_3.png' },
    { name: 'Berger', logo: '/images/logos/logo_4.png' },
    { name: 'Jindal', logo: '/images/logos/logo_5.png' },
  ];

  useEffect(() => {
    if (typeof window === 'undefined' || !sectionRef.current) return;

    let scrollTriggerInstance = null;

    const ctx = gsap.context(() => {
      // Scroll-lock: Speed up the marquee based on scroll
      scrollTriggerInstance = ScrollTrigger.create({
        trigger: sectionRef.current,
        pin: true,
        start: 'top top',
        end: '+=100%',
        anticipatePin: 1,
        invalidateOnRefresh: true,
        scrub: 0.5,
        onUpdate: (self) => {
          // Speed up marquee: from 30s (base) down to 3s when scrolling fast
          const newDuration = 30 - (self.progress * 27);
          setAnimationDuration(Math.max(3, newDuration));
        },
        onLeave: () => {
          // Smoothly return to base speed
          setAnimationDuration(30);
        },
        onEnterBack: () => {
          setAnimationDuration(30);
        }
      });
    }, sectionRef);

    return () => {
      if (scrollTriggerInstance) {
        scrollTriggerInstance.kill(true);
      }
      ctx.revert();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill(true));
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
    <div className="bg-white">
      <style jsx>{`
        @keyframes marquee-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .marquee-track {
          display: flex;
          width: fit-content;
          animation: marquee-scroll ${animationDuration}s linear infinite;
        }
        
        .marquee-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      <section ref={sectionRef} className="py-24 min-h-screen flex items-center">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Authorized Partners of <span className="bg-gradient-to-r from-primary-600 to-primary-700 bg-clip-text text-transparent">Leading Brands</span>
            </h2>
            <p className="text-xl text-gray-600">
              Trusted dealer and stockist relationships with 20+ international brands
            </p>
          </div>

          {/* Infinite Marquee */}
          <div ref={marqueeRef} className="overflow-hidden relative">
            <div className="marquee-track">
              {/* First set of brands */}
              {brands.map((brand, index) => (
                <div
                  key={`first-${index}`}
                  className="flex-shrink-0 w-40 h-20 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all mx-6"
                >
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {brands.map((brand, index) => (
                <div
                  key={`second-${index}`}
                  className="flex-shrink-0 w-40 h-20 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all mx-6"
                >
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-12 text-center">
            <p className="text-gray-600 font-medium">
              + 20 more authorized partnerships
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BrandsShowcase;
