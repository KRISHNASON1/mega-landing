'use client';

import { useEffect } from 'react';
import Hero from '@/components/home/Hero';
import AboutSnippet from '@/components/home/AboutSnippet';
import FeaturedProducts from '@/components/home/FeaturedProducts';
import StackingCardsShowcase from '@/components/home/StackingCardsShowcase';
import BrandsShowcase from '@/components/home/BrandsShowcase';
import ClientsShowcase from '@/components/home/ClientsShowcase';
import GeMCompliance from '@/components/home/GeMCompliance';
import CTASection from '@/components/home/CTASection';
import FAQ from '@/components/home/FAQ';

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Hero />
      <AboutSnippet />
      <FeaturedProducts />
      <StackingCardsShowcase />
      <div className="reveal">
        <BrandsShowcase />
      </div>
      <div className="reveal">
        <ClientsShowcase />
      </div>
      <div className="reveal">
        <GeMCompliance />
      </div>
      <FAQ />
      <div className="reveal">
        <CTASection />
      </div>
    </>
  );
}
