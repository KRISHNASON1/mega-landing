'use client';

import { MapPin, Phone, Mail, Clock, ArrowRight, User } from 'lucide-react';
import ContactForm from '@/components/shared/ContactForm';

export default function ContactPage() {
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
          {/* Visit Us - Redesigned Full Width Section */}
          <div className="relative w-full h-[500px] sm:h-[600px] rounded-3xl overflow-hidden shadow-2xl mb-12">
            {/* Full Width Map Background */}
            <div className="absolute inset-0 w-full h-full">
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

            {/* Desktop: Full Floating Card Overlay (hidden on mobile) */}
            <div className="hidden sm:block absolute top-1/2 -translate-y-1/2 left-12 w-[400px] bg-white/95 backdrop-blur-md p-8 rounded-2xl shadow-xl z-10 border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Visit Our Office</h3>

              <div className="space-y-6">
                {/* Address */}
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-gray-400 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-gray-900 leading-relaxed font-medium">
                      Plot No. 57, Opp M.I.D.C Water Tank TALOJA<br />
                      Navi Mumbai - 410208<br />
                      Maharashtra, India
                    </p>
                  </div>
                </div>
              </div>

              {/* Get Directions Button */}
              <div className="mt-8">
                <a
                  href="https://maps.google.com/?q=Plot+No.+57,+Opp+M.I.D.C+Water+Tank+TALOJA,+Navi+Mumbai+-+410208"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full px-6 py-3 bg-[#0066FF] hover:bg-blue-700 text-white rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-blue-200"
                >
                  <span>Get Directions</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </div>
            </div>

            {/* Mobile: Only Get Directions Button at bottom (visible only on mobile) */}
            <div className="sm:hidden absolute bottom-6 left-4 right-4 z-10">
              <a
                href="https://maps.google.com/?q=Plot+No.+57,+Opp+M.I.D.C+Water+Tank+TALOJA,+Navi+Mumbai+-+410208"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full px-6 py-4 bg-[#0066FF] hover:bg-blue-700 text-white rounded-full font-semibold transition-all duration-300 shadow-xl"
              >
                <MapPin className="w-5 h-5 mr-2" />
                <span>Get Directions</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form & Messaging - Side by Side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Contact Form Section (Get a Quote) */}
          {/* Mobile: Order 1 (First), Desktop: Order 1 (Left) */}
          <div className="order-1 lg:order-1">
            <ContactForm />
          </div>

          {/* Contact Details & WhatsApp */}
          {/* Contact Details & WhatsApp - Clean Professional Look */}
          <div className="order-2 lg:order-2">
            <div className="relative bg-gradient-to-br from-blue-50 via-white to-indigo-50 rounded-3xl p-8 shadow-xl border border-blue-100/50 h-full flex flex-col overflow-hidden">
              {/* Decorative background element */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full -mr-32 -mt-32 opacity-40 pointer-events-none blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-purple-100 to-pink-100 rounded-full -ml-32 -mb-32 opacity-40 pointer-events-none blur-3xl"></div>

              <div className="relative z-10 mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  <span className="bg-gradient-to-r from-primary-700 to-primary-500 bg-clip-text text-transparent">Prefer Instant Communication?</span>
                </h2>
                <p className="text-gray-600 font-medium">
                  Connect with our team directly for immediate assistance and quotes.
                </p>
              </div>

              {/* Contact Persons Grid */}
              <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {/* Person 1 */}
                <div className="p-5 bg-gradient-to-br from-white to-blue-50/30 rounded-2xl border border-blue-100 shadow-sm hover:shadow-lg hover:border-blue-300 transition-all duration-300 group">
                  <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-blue-600 transition-all duration-300 shadow-sm">
                    <User className="w-6 h-6 text-blue-700 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors tracking-tight">NIRMAL DEWASI</h3>
                  <div className="space-y-2">
                    <a href="tel:+917506070157" className="flex items-center text-gray-600 hover:text-blue-700 transition-colors text-sm font-medium p-1 -ml-1 rounded-lg hover:bg-blue-50/50">
                      <Phone className="w-4 h-4 mr-2 text-blue-400 group-hover:text-blue-600" />
                      +91 750 6070 157
                    </a>
                    <a href="mailto:nirmal@megaenterprise.in" className="flex items-center text-gray-600 hover:text-blue-700 transition-colors text-xs font-medium p-1 -ml-1 rounded-lg hover:bg-blue-50/50">
                      <Mail className="w-4 h-4 mr-2 text-blue-400 group-hover:text-blue-600" />
                      nirmal@megaenterprise.in
                    </a>
                  </div>
                </div>

                {/* Person 2 */}
                <div className="p-5 bg-gradient-to-br from-white to-indigo-50/30 rounded-2xl border border-indigo-100 shadow-sm hover:shadow-lg hover:border-indigo-300 transition-all duration-300 group">
                  <div className="w-12 h-12 rounded-xl bg-indigo-100 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-indigo-600 transition-all duration-300 shadow-sm">
                    <User className="w-6 h-6 text-indigo-700 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-3 group-hover:text-indigo-700 transition-colors tracking-tight">KAILASH DEWASI</h3>
                  <div className="space-y-2">
                    <a href="tel:+919029652621" className="flex items-center text-gray-600 hover:text-indigo-700 transition-colors text-sm font-medium p-1 -ml-1 rounded-lg hover:bg-indigo-50/50">
                      <Phone className="w-4 h-4 mr-2 text-indigo-400 group-hover:text-indigo-600" />
                      +91 9029652621
                    </a>
                    <a href="mailto:kailash@megaenterprise.in" className="flex items-center text-gray-600 hover:text-indigo-700 transition-colors text-xs font-medium p-1 -ml-1 rounded-lg hover:bg-indigo-50/50">
                      <Mail className="w-4 h-4 mr-2 text-indigo-400 group-hover:text-indigo-600" />
                      kailash@megaenterprise.in
                    </a>
                  </div>
                </div>
              </div>

              {/* General Emails */}
              <div className="relative z-10 mb-8">
                <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4 pl-1 flex items-center">
                  <span className="w-8 h-0.5 bg-gray-300 mr-2 rounded-full"></span>
                  General Inquiries
                </h3>
                <div className="bg-blue-50/50 rounded-2xl p-4 border border-blue-100/50 space-y-3 backdrop-blur-sm">
                  {['info@megaenterprise.in', 'sales@megaenterprise.in', 'megaenterprise.info@gmail.com'].map((email) => (
                    <a key={email} href={`mailto:${email}`} className="flex items-center group p-3 bg-white/60 hover:bg-white rounded-xl border border-transparent hover:border-blue-100 transition-all duration-200 shadow-sm">
                      <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center mr-3 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                        <Mail className="w-4 h-4" />
                      </div>
                      <span className="text-gray-700 font-medium group-hover:text-blue-700 text-sm transition-colors">{email}</span>
                    </a>
                  ))}
                </div>
              </div>

              {/* WhatsApp CTA */}
              <div className="relative z-10 mt-auto">
                <a
                  href="https://wa.me/917506070157?text=Hello%20MEGA%20Enterprise%2C%20I%27m%20interested%20in%20your%20products"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-full px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white rounded-xl font-bold text-lg shadow-lg hover:shadow-green-200 hover:-translate-y-0.5 transition-all duration-300 group"
                >
                  <svg className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
