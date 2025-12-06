'use client';

import Hero from '@/components/home/Hero';
import FeaturedProducts from '@/components/home/FeaturedProducts';
import StackingCardsShowcase from '@/components/home/StackingCardsShowcase';
import BrandsShowcase from '@/components/home/BrandsShowcase';
import ClientsShowcase from '@/components/home/ClientsShowcase';
import GeMCompliance from '@/components/home/GeMCompliance';
import CTASection from '@/components/home/CTASection';

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedProducts />
      <StackingCardsShowcase />
      <BrandsShowcase />
      <ClientsShowcase />
      <GeMCompliance />
      <CTASection />
    </>
  );
}
