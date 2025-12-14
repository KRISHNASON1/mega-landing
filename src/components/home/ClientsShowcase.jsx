'use client';



const ClientsShowcase = () => {
  const animationDuration = 35;

  // Row 1 - scrolls left to right
  const clientsRow1 = [
    { name: 'TATA Projects', logo: '/images/clients/tata-projects.svg' },
    { name: 'Afcons Infrastructure', logo: '/images/clients/afcons.svg' },
    { name: 'HCC Ltd', logo: '/images/clients/hcc.svg' },
    { name: 'J Kumar Infra', logo: '/images/clients/jkumar.svg' },
    { name: 'ITD Cementation', logo: '/images/clients/itd.svg' },
    { name: 'NCC Ltd', logo: '/images/clients/ncc.svg' },
    { name: 'Montecarlo Ltd', logo: '/images/clients/montecarlo.svg' },
    { name: 'Godrej Properties', logo: '/images/clients/godrej.svg' },
    { name: 'Leighton India', logo: '/images/clients/leighton.svg' },
    { name: 'Coastal Marine', logo: '/images/clients/coastal.svg' },
    { name: 'B G Shirke', logo: '/images/clients/shirke.svg' },
    { name: 'Rubberwala Housing', logo: '/images/clients/rubberwala.svg' },
  ];

  // Row 2 - scrolls right to left (opposite direction)
  const clientsRow2 = [
    { name: 'Sunteck Realty', logo: '/images/clients/sunteck.svg' },
    { name: 'Shrim Bhanu Construction', logo: '/images/clients/bhanu.svg' },
    { name: 'Glass Wall Systems', logo: '/images/clients/glasswall.svg' },
    { name: 'Afita Constructions', logo: '/images/clients/afita.svg' },
    { name: 'Ganesh Benzoplast', logo: '/images/clients/ganesh.svg' },
    { name: 'Suasth Health Care', logo: '/images/clients/suasth.svg' },
    { name: 'Multistoreys Projects', logo: '/images/clients/multistoreys.svg' },
    { name: 'Futech Projects', logo: '/images/clients/futech.svg' },
    { name: 'Shelke Constructions', logo: '/images/clients/shelke.svg' },
    { name: 'Sharad Constructions', logo: '/images/clients/sharad.svg' },
    { name: 'Bearys Properties', logo: '/images/clients/bearys.svg' },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      <style jsx>{`
        @keyframes marquee-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        @keyframes marquee-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
        
        .marquee-track-left {
          display: flex;
          flex-wrap: nowrap;
          width: fit-content;
          animation: marquee-left ${animationDuration}s linear infinite;
        }
        
        .marquee-track-right {
          display: flex;
          flex-wrap: nowrap;
          width: fit-content;
          animation: marquee-right ${animationDuration}s linear infinite;
        }
        
        .marquee-track-left:hover,
        .marquee-track-right:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Serving India's <span className="bg-gradient-to-r from-primary-600 to-primary-700 bg-clip-text text-transparent">Leading Infrastructure</span> Companies
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            From government PSUs to private enterprises, we're the trusted material supply partner for major construction and industrial projects across India
          </p>
        </div>
      </div>

      {/* Row 1 - Left to Right */}
      <div className="overflow-hidden relative mb-6">
        <div className="marquee-track-left">
          {/* First set */}
          {clientsRow1.map((client, index) => (
            <div
              key={`row1-first-${index}`}
              className="flex-shrink-0 w-36 sm:w-44 md:w-52 h-20 sm:h-24 md:h-28 bg-white border border-gray-200 rounded-xl shadow-lg flex items-center justify-center p-2 mx-2 sm:mx-3 md:mx-4 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              style={{ minWidth: '144px' }}
            >
              <img
                src={client.logo}
                alt={client.name}
                className="w-full h-full object-contain"
              />
            </div>
          ))}
          {/* Duplicate set for seamless loop */}
          {clientsRow1.map((client, index) => (
            <div
              key={`row1-second-${index}`}
              className="flex-shrink-0 w-36 sm:w-44 md:w-52 h-20 sm:h-24 md:h-28 bg-white border border-gray-200 rounded-xl shadow-lg flex items-center justify-center p-2 mx-2 sm:mx-3 md:mx-4 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              style={{ minWidth: '144px' }}
            >
              <img
                src={client.logo}
                alt={client.name}
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Row 2 - Right to Left (opposite direction) */}
      <div className="overflow-hidden relative">
        <div className="marquee-track-right">
          {/* First set */}
          {clientsRow2.map((client, index) => (
            <div
              key={`row2-first-${index}`}
              className="flex-shrink-0 w-36 sm:w-44 md:w-52 h-20 sm:h-24 md:h-28 bg-white border border-gray-200 rounded-xl shadow-lg flex items-center justify-center p-2 mx-2 sm:mx-3 md:mx-4 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              style={{ minWidth: '144px' }}
            >
              <img
                src={client.logo}
                alt={client.name}
                className="w-full h-full object-contain"
              />
            </div>
          ))}
          {/* Duplicate set for seamless loop */}
          {clientsRow2.map((client, index) => (
            <div
              key={`row2-second-${index}`}
              className="flex-shrink-0 w-36 sm:w-44 md:w-52 h-20 sm:h-24 md:h-28 bg-white border border-gray-200 rounded-xl shadow-lg flex items-center justify-center p-2 mx-2 sm:mx-3 md:mx-4 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              style={{ minWidth: '144px' }}
            >
              <img
                src={client.logo}
                alt={client.name}
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      {/* View More CTA */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mt-12">
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
