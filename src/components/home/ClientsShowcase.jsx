'use client';

import { Star } from 'lucide-react';

const ClientsShowcase = () => {
  const clients = [
    { name: 'TATA Projects', logo: '/images/logos/logo_1.png' },
    { name: 'Afcons Infrastructure', logo: '/images/logos/logo_2.png' },
    { name: 'HCC Ltd', logo: '/images/logos/logo_3.png' },
    { name: 'J Kumar Infra', logo: '/images/logos/logo_4.png' },
    { name: 'ITD Cementation', logo: '/images/logos/logo_5.png' },
    { name: 'NCC Ltd', logo: '/images/logos/logo_1.png' },
    { name: 'Godrej Properties', logo: '/images/logos/logo_2.png' },
    { name: 'Leighton India', logo: '/images/logos/logo_3.png' },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary-100 rounded-full px-4 py-2 mb-6">
            <Star className="w-5 h-5 text-primary-700 fill-primary-700" />
            <span className="text-sm font-semibold text-primary-700">Trusted by Industry Leaders</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Serving India's <span className="bg-gradient-to-r from-primary-600 to-primary-700 bg-clip-text text-transparent">Leading Infrastructure</span> Companies
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From government PSUs to private enterprises, we're the trusted material supply partner for major construction and industrial projects across India
          </p>
        </div>

        {/* Clients Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {clients.map((client, index) => (
            <div
              key={index}
              className="group relative transform hover:-translate-y-2 transition-all duration-300"
            >
              {/* Gradient border glow on hover */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-300" />

              {/* Card */}
              <div className="relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer overflow-hidden h-[120px]">
                {/* Subtle top accent line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 to-primary-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

                <div className="flex items-center justify-center h-full p-6">
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="max-w-full max-h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More CTA */}
        <div className="text-center">
          <a
            href="/about"
            className="inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold text-lg group"
          >
            <span>View Complete Client Portfolio</span>
            <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ClientsShowcase;
