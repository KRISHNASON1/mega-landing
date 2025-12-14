'use client';

import Link from 'next/link';

const BrandsShowcase = () => {
  const animationDuration = 30;

  const brands = [
    { name: 'Siemens', logo: '/images/brands/siemens.svg' },
    { name: 'Polycab', logo: '/images/brands/polycab.svg' },
    { name: 'Ledvance', logo: '/images/brands/ledvance.svg' },
    { name: 'Berger Paints', logo: '/images/brands/berger-paints.svg' },
    { name: 'Shalimar Paints', logo: '/images/brands/shalimar-paints.svg' },
    { name: 'Usha International', logo: '/images/brands/usha-international.svg' },
    { name: 'Europa Locks', logo: '/images/brands/europa-locks.svg' },
    { name: 'Udyogi Safety', logo: '/images/brands/udyogi-safety.svg' },
    { name: 'British Paints', logo: '/images/brands/british-paints.svg' },
    { name: 'Link Locks', logo: '/images/brands/link-locks.svg' },
  ];

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

      <section className="py-24 flex items-center">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Authorized Partners of <span className="bg-gradient-to-r from-primary-600 to-primary-700 bg-clip-text text-transparent">Leading Brands</span>
            </h2>
          </div>

          {/* Infinite Marquee */}
          <div className="overflow-hidden relative">
            <div className="marquee-track flex flex-nowrap">
              {/* First set of brands */}
              {brands.map((brand, index) => (
                <div
                  key={`first-${index}`}
                  className="flex-shrink-0 w-28 sm:w-36 md:w-40 h-16 sm:h-18 md:h-20 bg-white border border-gray-200 rounded-xl shadow-lg flex items-center justify-center p-1 mx-2 sm:mx-4 md:mx-6"
                  style={{ minWidth: '112px' }}
                >
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className="w-full h-full object-contain scale-110"
                  />
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {brands.map((brand, index) => (
                <div
                  key={`second-${index}`}
                  className="flex-shrink-0 w-28 sm:w-36 md:w-40 h-16 sm:h-18 md:h-20 bg-white border border-gray-200 rounded-xl shadow-lg flex items-center justify-center p-1 mx-2 sm:mx-4 md:mx-6"
                  style={{ minWidth: '112px' }}
                >
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className="w-full h-full object-contain scale-110"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-12 text-center">
            <Link href="/about" className="text-primary-600 font-medium hover:underline inline-block">
              + 20 more authorized partnerships
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BrandsShowcase;
