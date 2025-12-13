'use client';

import { useState, useEffect } from 'react';
import { Award, Users, Building2, TrendingUp, Shield, CheckCircle, MapPin } from 'lucide-react';
import BubbleSurface from '@/components/ui/BubbleSurface';
import HorizontalScrollSection from '@/components/ui/HorizontalScrollSection';

export default function AboutPage() {
  const [activeStat, setActiveStat] = useState(-1);

  useEffect(() => {
    // Timings aligned with the 2s dash animation + 0.5s delay
    // The line moves from left to right, triggering each item
    const timeouts = [
      setTimeout(() => setActiveStat(0), 600),  // Item 1 hit
      setTimeout(() => setActiveStat(-1), 1000), // Item 1 reset
      setTimeout(() => setActiveStat(1), 1000), // Item 2 hit
      setTimeout(() => setActiveStat(-1), 1400), // Item 2 reset
      setTimeout(() => setActiveStat(2), 1400), // Item 3 hit
      setTimeout(() => setActiveStat(-1), 1800), // Item 3 reset
      setTimeout(() => setActiveStat(3), 1800), // Item 4 hit
      setTimeout(() => setActiveStat(-1), 2200), // Item 4 reset
    ];

    return () => timeouts.forEach(t => clearTimeout(t));
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section with Wavy Background */}
        <div className="relative text-center mb-10 pb-20">
          {/* Main Title */}
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 relative z-10">
            About <span className="text-primary-600">MEGA Enterprise</span>
          </h1>
          {/* Subtitle */}
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed relative z-10 mb-16">
            With over 20 years of excellence, we're your trusted partner in industrial and project materials supply,
            serving government PSUs, infrastructure giants, and private enterprises across India.
          </p>

          {/* Wavy Background SVG - Refined to match single large wave */}
          <div className="absolute top-1/2 left-0 right-0 -z-10 w-full h-[800px] overflow-hidden pointer-events-none translate-y-20 animate-fade-in">
            <svg viewBox="0 0 1440 320" className="w-full h-full text-blue-50" preserveAspectRatio="none">
              <path fill="#f0f9ff" fillOpacity="1" d="M0,224L80,213.3C160,203,320,181,480,181.3C640,181,800,203,960,213.3C1120,224,1280,224,1360,224L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
            </svg>
          </div>

          {/* Stats - Connected Pill Design */}
          <div className="relative z-10">
            {/* Wavy Connecting Line (SVG) */}
            <div className="absolute top-[55%] left-0 w-full h-40 -translate-y-1/2 hidden md:block pointer-events-none z-0">
              <svg viewBox="0 0 1200 100" className="w-full h-full" preserveAspectRatio="none">
                <path
                  d="M100,50 C250,50 350,85 600,60 C850,35 950,50 1100,50"
                  fill="none"
                  stroke="#3b82f6"
                  strokeWidth="3"
                  strokeLinecap="round"
                  vectorEffect="non-scaling-stroke"
                  className="opacity-80"
                  style={{
                    strokeDasharray: '1000',
                    strokeDashoffset: '1000',
                    animation: 'dash 2s ease-out forwards 0.5s'
                  }}
                />
              </svg>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-0 relative max-w-6xl mx-auto">
              {[
                { value: '20+', label: 'Years Experience', icon: Award, offset: 'translate-y-0', delay: '0.1s' },
                { value: '50+', label: 'Major Clients', icon: Users, offset: 'md:translate-y-12', delay: '0.2s' },
                { value: '1000+', label: 'Products', icon: Building2, offset: 'md:translate-y-2', delay: '0.3s' },
                { value: '20+', label: 'Brand Partners', icon: TrendingUp, offset: 'translate-y-0', delay: '0.4s' },
              ].map((stat, index) => {
                const Icon = stat.icon;
                const isActive = activeStat === index;

                return (
                  <div key={index}
                    className={`flex flex-col items-center relative ${stat.offset}`}
                    style={{
                      animation: `fadeUp 0.8s ease-out forwards ${stat.delay}`,
                      opacity: 0,
                      transform: 'translateY(20px)'
                    }}
                  >
                    {/* Icon circle */}
                    <div className={`
                      w-12 h-12 rounded-full bg-blue-100 border-4 border-white shadow-sm flex items-center justify-center mb-4 relative z-10
                      transition-transform duration-300
                      ${isActive ? 'scale-110 rotate-3' : 'hover:scale-110 hover:rotate-3'}
                    `}>
                      <Icon className="w-5 h-5 text-blue-600" />
                    </div>

                    {/* Stat pill */}
                    <div
                      className={`
                        bg-white border-2 border-white shadow-[0_4px_20px_rgb(0,0,0,0.05)] px-10 py-5 relative z-10
                        rounded-[2rem] w-full max-w-[220px]
                        flex flex-col items-center justify-center
                        group cursor-pointer
                        transition-all duration-300
                        ${isActive
                          ? 'shadow-[0_10px_30px_rgb(59,130,246,0.15)] -translate-y-1'
                          : 'hover:shadow-[0_10px_30px_rgb(59,130,246,0.15)] hover:-translate-y-1'
                        }
                      `}
                      style={{
                        background: 'linear-gradient(180deg, #ffffff 0%, #f0f9ff 100%)'
                      }}
                    >
                      <div className={`
                        text-4xl md:text-5xl font-bold text-blue-500 text-center mb-4
                        transition-transform duration-300
                        ${isActive ? 'scale-105' : 'group-hover:scale-105'}
                      `}>
                        {stat.value}
                      </div>

                      {/* Slider Dot on the bottom */}
                      <div className="w-full h-1.5 bg-blue-100 rounded-full mt-1 relative overflow-hidden">
                        <div className={`
                          absolute top-0 left-1/2 -translate-x-1/2 h-full bg-blue-500 rounded-full transition-all duration-500 ease-out
                          ${isActive ? 'w-full' : 'w-8 group-hover:w-full'}
                        `} />
                        <div className={`
                          absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white border-2 border-blue-500 rounded-full shadow-sm
                          transition-transform duration-300
                          ${isActive ? 'scale-110' : 'group-hover:scale-110'}
                        `} />
                      </div>
                    </div>

                    {/* Label */}
                    <div className="text-sm text-gray-800 font-medium mt-4 text-center">
                      {stat.label}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Keyframe animations styles */}
            <style jsx global>{`
                @keyframes fadeUp {
                  from { opacity: 0; transform: translateY(20px); }
                  to { opacity: 1; transform: translateY(0); }
                }
                @keyframes dash {
                  to { stroke-dashoffset: 0; }
                }
             `}</style>
          </div>
        </div>

        {/* Our Story - Parallax Section */}
        <div
          className="mb-20 relative rounded-3xl overflow-hidden"
          style={{
            backgroundImage: 'url(/images/team-photo.jpg)',
            backgroundAttachment: 'fixed',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}
        >
          {/* Blue overlay for better text readability and theme consistency */}
          <div className="absolute inset-0 bg-primary-700/70" />

          {/* Content */}
          <div className="relative z-10 p-12 md:p-16">
            <h2 className="text-4xl font-bold text-white mb-6">Our Story</h2>
            <div className="prose prose-lg max-w-none space-y-4">
              <p className="text-white/90 text-lg leading-relaxed">
                Founded in 2003, MEGA Enterprise began with a simple vision: to provide reliable, high-quality
                industrial materials to businesses across India. What started as a small operation in Navi Mumbai
                has grown into a trusted name in industrial supply, serving some of the country's largest
                infrastructure companies.
              </p>
              <p className="text-white/90 text-lg leading-relaxed">
                Today, we're proud to be a GeM-approved supplier, authorized dealer for 20+ leading brands, and
                the preferred material partner for government PSUs and private enterprises alike. Our commitment
                to quality, reliability, and customer service has earned us partnerships with industry giants like
                TATA Projects, Afcons Infrastructure, and L&T.
              </p>
              <p className="text-white/90 text-lg leading-relaxed">
                With a catalog of 1000+ products spanning electrical materials, safety equipment, LED lighting,
                pipes, fittings, and more, we're equipped to handle projects of any scale. Our team of experienced
                professionals ensures seamless procurement, timely delivery, and comprehensive support throughout
                your project lifecycle.
              </p>
            </div>
          </div>
        </div>

        {/* Subsidiaries - Group Network */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">Our Subsidiaries</h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            A robust network of sister concerns extending the reach of MEGA Enterprise across key industrial hubs.
          </p>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              { name: 'Royal Electricals', location: 'Taloja' },
              { name: 'Shree Sagar Enterprises', location: 'Chakan, Pune' },
              { name: 'Tirupati Electricals', location: 'Ambernath' },
              { name: 'Natural Office Mart', location: 'Turbhe' },
            ].map((sub, index) => (
              <BubbleSurface
                key={index}
                width="100%"
                height="auto"
                borderRadius={24}
                className="transform hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="p-8 flex items-center space-x-6 relative overflow-hidden">
                  {/* Decorative background element */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary-50 rounded-bl-[100px] -mr-8 -mt-8 opacity-50 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Icon Container */}
                  <div className="flex-shrink-0 w-16 h-16 bg-white border-2 border-primary-100 rounded-2xl flex items-center justify-center shadow-sm group-hover:border-primary-500 group-hover:shadow-md transition-all duration-300 relative z-10">
                    <Building2 className="w-8 h-8 text-primary-600" />
                  </div>

                  {/* Text Content */}
                  <div className="flex-1 relative z-10">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-700 transition-colors duration-300">
                      {sub.name}
                    </h3>

                    <div className="flex items-center text-gray-500 text-sm font-medium">
                      <div className="flex items-center px-3 py-1 bg-gray-100 rounded-full group-hover:bg-primary-50 group-hover:text-primary-700 transition-colors duration-300">
                        <MapPin className="w-3.5 h-3.5 mr-1.5 text-primary-500" />
                        {sub.location}
                      </div>
                    </div>
                  </div>
                </div>
              </BubbleSurface>
            ))}
          </div>
        </div>

        {/* Horizontal Scroll Section (Vision, Mission, Industries, Why Us) */}
      </div>

      {/* Full width container for scroll section */}
      <div className="w-full mb-20">
        <HorizontalScrollSection />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* CTA */}
        <div className="text-center">
          <BubbleSurface
            width="100%"
            height="auto"
            borderRadius={32}
          >
            <div className="p-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Ready to Partner With Us?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Join 50+ major companies who trust MEGA Enterprise for their material needs
              </p>
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
              >
                Get Started
              </a>
            </div>
          </BubbleSurface>
        </div>
      </div>
    </div>
  );
}
