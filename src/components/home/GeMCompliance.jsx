'use client';

import { CheckCircle2, Shield, Award, FileCheck } from 'lucide-react';
import GlassSurface from '../ui/GlassSurface';

const GeMCompliance = () => {
  const certifications = [
    { icon: CheckCircle2, text: 'GeM Portal Registered Vendor' },
    { icon: Shield, text: 'GST Compliant (27DRGPD9065L1ZA)' },
    { icon: FileCheck, text: 'Third Party Inspection Approved' },
    { icon: Award, text: 'NABL Lab Test Certificates' },
  ];

  const experience = [
    { icon: CheckCircle2, text: '3+ Years Govt Supply Experience' },
    { icon: Shield, text: 'Central/State PSU Approved' },
    { icon: FileCheck, text: 'Ready Stock Available' },
    { icon: Award, text: 'Bureau Veritas Inspection Partner' },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-primary-50 via-white to-primary-100 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-200 rounded-full filter blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-300 rounded-full filter blur-3xl opacity-20"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            GeM Portal Approved & <span className="bg-gradient-to-r from-green-600 to-green-700 bg-clip-text text-transparent">Government Compliant</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Certified supplier for government procurement with full compliance and quality assurance
          </p>
        </div>

        {/* Two-Column Layout */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Column - Certifications */}
          <div className="relative group">
            {/* Gradient border effect */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-green-500 via-primary-500 to-green-600 rounded-3xl opacity-30 group-hover:opacity-50 blur transition-opacity duration-300"></div>
            <div className="relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center mr-3">
                  <Award className="w-6 h-6 text-white" />
                </div>
                Certifications
              </h3>
              <ul className="space-y-4">
                {certifications.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <li key={index} className="flex items-start group/item">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-green-400 to-green-500 flex items-center justify-center mt-0.5 shadow-sm">
                        <CheckCircle2 className="w-4 h-4 text-white" />
                      </div>
                      <span className="ml-3 text-gray-700 font-medium group-hover/item:text-gray-900 transition-colors">{item.text}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          {/* Right Column - Experience */}
          <div className="relative group">
            {/* Gradient border effect */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-500 via-green-500 to-primary-600 rounded-3xl opacity-30 group-hover:opacity-50 blur transition-opacity duration-300"></div>
            <div className="relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center mr-3">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                Government Supply Experience
              </h3>
              <ul className="space-y-4">
                {experience.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <li key={index} className="flex items-start group/item">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-green-400 to-green-500 flex items-center justify-center mt-0.5 shadow-sm">
                        <CheckCircle2 className="w-4 h-4 text-white" />
                      </div>
                      <span className="ml-3 text-gray-700 font-medium group-hover/item:text-gray-900 transition-colors">{item.text}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>

        {/* CTA with Glass Effect */}
        <div className="mt-12 flex justify-center">
          <div className="relative group cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:scale-105">
            <GlassSurface
              width={280}
              height={56}
              borderRadius={28}
              brightness={85}
              opacity={0.6}
              blur={15}
              displace={2}
              className="shadow-xl group-hover:shadow-2xl transition-shadow duration-300"
            >
              <a
                href="https://gem.gov.in"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center space-x-2 w-full h-full text-gray-900 font-semibold text-lg"
              >
                <Shield className="w-5 h-5" />
                <span>View GeM Profile</span>
              </a>
            </GlassSurface>
            {/* Enhanced glow effect on hover */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-green-400/0 via-primary-400/0 to-green-400/0 group-hover:from-green-400/30 group-hover:via-primary-400/40 group-hover:to-green-400/30 blur-xl transition-all duration-300 -z-10 pointer-events-none"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GeMCompliance;
