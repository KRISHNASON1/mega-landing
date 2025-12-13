'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { ArrowRight, Play } from 'lucide-react';
import { gsap } from 'gsap';

const Hero = () => {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial animation timeline
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.from(titleRef.current, {
        y: 100,
        opacity: 0,
        duration: 1,
        delay: 0.2,
      })
        .from(
          subtitleRef.current,
          {
            y: 50,
            opacity: 0,
            duration: 0.8,
          },
          '-=0.5'
        )
        .from(
          ctaRef.current,
          {
            y: 30,
            opacity: 0,
            duration: 0.8,
          },
          '-=0.5'
        );

      // Floating animation for glass cards
      gsap.to('.glass-float', {
        y: -20,
        duration: 3,
        ease: 'power1.inOut',
        yoyo: true,
        repeat: -1,
        stagger: 0.5,
      });

      // Animation for wavy lines
      gsap.to('.wavy-line-1', {
        attr: { d: 'M0,100 C30,50 50,90 100,0' },
        duration: 10,
        ease: 'sine.inOut',
        yoyo: true,
        repeat: -1,
      });

      gsap.to('.wavy-line-2', {
        attr: { d: 'M0,100 C40,95 60,70 100,30' },
        duration: 8,
        ease: 'sine.inOut',
        yoyo: true,
        repeat: -1,
        delay: 1,
      });
    }, heroRef);

    return () => {
      // Kill all GSAP animations immediately
      gsap.killTweensOf('.glass-float');
      gsap.killTweensOf('.wavy-line-1');
      gsap.killTweensOf('.wavy-line-2');
      if (titleRef.current) gsap.killTweensOf(titleRef.current);
      if (subtitleRef.current) gsap.killTweensOf(subtitleRef.current);
      if (ctaRef.current) gsap.killTweensOf(ctaRef.current);

      // Revert the GSAP context
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-50 via-white to-primary-100"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-primary-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 left-1/4 w-72 h-72 bg-primary-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" style={{ animationDelay: '4s' }}></div>

        {/* Floating Wavy Lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path
            className="wavy-line-1 text-primary-100/40"
            d="M0,100 C30,60 50,80 100,0"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.2"
          />
          <path
            className="wavy-line-2 text-primary-100/40"
            d="M0,100 C40,90 60,60 100,20"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.2"
          />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center">
          {/* Trust Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/60 backdrop-blur-sm rounded-full px-6 py-2 mb-8 border border-white/40 shadow-lg">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            <span className="text-sm font-medium text-gray-700">GeM Approved Supplier</span>
          </div>

          {/* Main Title */}
          <h1
            ref={titleRef}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
          >
            <span className="bg-gradient-to-r from-primary-700 via-primary-600 to-primary-500 bg-clip-text text-transparent">
              Industrial Excellence
            </span>
            <br />
            <span className="text-gray-900">Delivered</span>
          </h1>

          {/* Subtitle */}
          <p
            ref={subtitleRef}
            className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Your trusted partner in industrial & project materials.
            <span className="font-semibold text-primary-700"> 20+ years of excellence</span>,
            serving <span className="font-semibold text-primary-700">50+ major clients</span> across India.
          </p>

          {/* CTAs */}
          <div ref={ctaRef} className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link
              href="/contact"
              className="group px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex items-center space-x-2"
            >
              <span>Request Quote</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/products"
              className="group px-8 py-4 bg-white/60 backdrop-blur-sm text-gray-900 rounded-full font-semibold text-lg border-2 border-gray-200 hover:border-primary-500 hover:shadow-xl transition-all duration-300 flex items-center space-x-2"
            >
              <span>View Catalog</span>
              <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </Link>
          </div>

          {/* Stats with Glass Effect */}
          <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: '20+', label: 'Years Experience' },
              { value: '50+', label: 'Major Clients' },
              { value: '1000+', label: 'Products' },
              { value: 'GeM', label: 'Approved Vendor' },
            ].map((stat, index) => (
              <div key={index} className="glass-float">
                <div className="relative h-40 rounded-3xl backdrop-blur-xl bg-gradient-to-br from-white/10 via-white/5 to-transparent border border-white/30 shadow-2xl transform hover:scale-105 transition-all duration-300 overflow-hidden">
                  {/* Liquid glass shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-white/5 to-transparent pointer-events-none"></div>
                  {/* Bottom gradient for depth */}
                  <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-white/5 to-transparent pointer-events-none"></div>
                  <div className="relative text-center p-6">
                    <div className="text-4xl font-bold bg-gradient-to-r from-primary-700 to-primary-500 bg-clip-text text-transparent mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-800 font-semibold">{stat.label}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-gray-400 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
