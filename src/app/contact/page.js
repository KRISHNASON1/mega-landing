'use client';

import { Suspense, useMemo } from 'react';
import { useSearchParams } from 'next/navigation';
import { MapPin, Phone, Mail, Clock, ArrowRight } from 'lucide-react';
import ContactForm from '@/components/shared/ContactForm';

function ContactPageContent() {
  const searchParams = useSearchParams();

  // Extract and format product enquiry
  const initialRequirements = useMemo(() => {
    const productParam = searchParams.get('product');
    if (productParam) {
      return `Enquire On - [Product: ${productParam}]`;
    }
    return '';
  }, [searchParams]);
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Us',
      details: ['Plot No. 57, Opp M.I.D.C Water Tank TALOJA', 'Navi Mumbai - 410208', 'Maharashtra, India'],
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: ['+91 750 6070 157', '022 2741 0775'],
      links: ['tel:+917506070157', 'tel:02227410775'],
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: ['megaenterprise.info@gmail.com'],
      links: ['mailto:megaenterprise.info@gmail.com'],
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Monday - Saturday: 9AM - 7PM', 'Sunday: Closed'],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white pt-32 pb-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-10 md:mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-4 md:mb-6">
            Get In <span className="bg-gradient-to-r from-primary-600 to-primary-700 bg-clip-text text-transparent">Touch</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-2">
            Have a question or need a quote? We're here to help. Reach out to our team and we'll respond within 24 hours.
          </p>
        </div>

        {/* Contact Info - Unique Split Layout */}
        <div className="mb-20">
          {/* Visit Us - Large Featured Section */}
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 mb-8 group">
            {/* Desktop: Map on right side */}
            <div className="hidden md:block absolute top-0 right-0 w-1/2 h-full overflow-hidden rounded-r-3xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.5447892345!2d73.1089!3d19.0760!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDA0JzMzLjYiTiA3M8KwMDYnMzIuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="MEGA Enterprise Location"
                className="w-full h-full"
              ></iframe>
            </div>

            {/* Content */}
            <div className="relative z-10 p-6 sm:p-8 md:p-12">
              <div className="flex items-start space-x-4 sm:space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-white/20 backdrop-blur-xl rounded-2xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                    <MapPin className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-white" />
                  </div>
                </div>
                <div className="flex-1 md:max-w-[45%]">
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">Visit Our Office</h3>
                  <div className="space-y-1 sm:space-y-2 text-white/90 text-base sm:text-lg">
                    <p className="font-semibold">{contactInfo[0].details[0]}</p>
                    <p>{contactInfo[0].details[1]}</p>
                    <p>{contactInfo[0].details[2]}</p>
                  </div>
                  <div className="mt-4 sm:mt-6">
                    <a
                      href="https://maps.google.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-white text-primary-600 rounded-full font-semibold text-sm sm:text-base hover:shadow-xl hover:scale-105 transition-all duration-300"
                    >
                      <span>Get Directions</span>
                      <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile: Map below content */}
            <div className="md:hidden w-full h-48 sm:h-56 overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.5447892345!2d73.1089!3d19.0760!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDA0JzMzLjYiTiA3M8KwMDYnMzIuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="MEGA Enterprise Location"
                className="w-full h-full"
              ></iframe>
            </div>
          </div>

          {/* Three Column Info Bars */}
          <div className="grid md:grid-cols-3 gap-6">
            {/* Call Us */}
            <div className="group relative overflow-hidden rounded-2xl bg-white border-2 border-primary-300 p-8 transition-shadow duration-300 hover:shadow-2xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-100 to-transparent rounded-full -mr-16 -mt-16 opacity-100"></div>
              <div className="relative">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-xl flex items-center justify-center transform scale-110 rotate-3">
                    <Phone className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Call Us</h3>
                </div>
                <div className="space-y-3">
                  {contactInfo[1].details.map((detail, idx) => (
                    <a
                      key={idx}
                      href={contactInfo[1].links[idx]}
                      className="block text-gray-700 hover:text-primary-600 font-semibold text-lg transition-colors group/link"
                    >
                      <span className="inline-flex items-center space-x-2">
                        <span className="w-2 h-2 bg-green-500 rounded-full group-hover/link:animate-ping"></span>
                        <span>{detail}</span>
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Email Us */}
            <div className="group relative overflow-hidden rounded-2xl bg-white border-2 border-primary-300 p-8 transition-shadow duration-300 hover:shadow-2xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-100 to-transparent rounded-full -mr-16 -mt-16 opacity-100"></div>
              <div className="relative">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl flex items-center justify-center transform scale-110 rotate-3">
                    <Mail className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Email Us</h3>
                </div>
                <div className="space-y-3">
                  <a
                    href={contactInfo[2].links[0]}
                    className="block text-gray-700 hover:text-primary-600 font-semibold text-lg break-all transition-colors group/link"
                  >
                    <span className="inline-flex items-center space-x-2">
                      <span className="w-2 h-2 bg-blue-500 rounded-full group-hover/link:animate-ping"></span>
                      <span>{contactInfo[2].details[0]}</span>
                    </span>
                  </a>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="group relative overflow-hidden rounded-2xl bg-white border-2 border-primary-300 p-8 transition-shadow duration-300 hover:shadow-2xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-100 to-transparent rounded-full -mr-16 -mt-16 opacity-100"></div>
              <div className="relative">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-xl flex items-center justify-center transform scale-110 rotate-3">
                    <Clock className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Hours</h3>
                </div>
                <div className="space-y-3">
                  {contactInfo[3].details.map((detail, idx) => (
                    <p key={idx} className="text-gray-700 font-semibold text-lg flex items-center space-x-2">
                      <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                      <span>{detail}</span>
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form & Instant Communication - Side by Side on Desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Contact Form Section */}
          <div>
            <ContactForm initialRequirements={initialRequirements} />
          </div>

          {/* Alternative Contact Methods */}
          <div className="text-center flex items-stretch">
            <div className="relative rounded-3xl backdrop-blur-xl bg-gradient-to-br from-white/10 via-white/5 to-transparent border border-white/30 shadow-xl overflow-hidden w-full">
              {/* Liquid glass shine effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-white/5 to-transparent pointer-events-none"></div>
              {/* Bottom gradient for depth */}
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-white/5 to-transparent pointer-events-none"></div>
              <div className="relative p-12 flex flex-col justify-center h-full">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Prefer Instant Communication?
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Connect with us directly via WhatsApp for quick responses
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                  <a
                    href="https://wa.me/917506070157?text=Hello%20MEGA%20Enterprise%2C%20I%27m%20interested%20in%20your%20products"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 px-8 py-4 bg-green-500 hover:bg-green-600 text-white rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                    <span>Chat on WhatsApp</span>
                  </a>
                  <a
                    href="tel:+917506070157"
                    className="inline-flex items-center space-x-2 px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
                  >
                    <Phone className="w-5 h-5" />
                    <span>Call Now</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ContactPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white pt-32 pb-0 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    }>
      <ContactPageContent />
    </Suspense>
  );
}
