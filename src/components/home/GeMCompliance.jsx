'use client';

import { CheckCircle2, Shield, Award, FileCheck } from 'lucide-react';

const GeMCompliance = () => {
  const certifications = [
    { icon: CheckCircle2, text: 'GeM Portal Registered Vendor' },
    { icon: Shield, text: 'GST Compliant' },
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
      {/* Background Decorations — hidden on mobile */}
      <div className="hidden md:block absolute top-0 right-0 w-96 h-96 bg-primary-200 rounded-full filter blur-3xl opacity-20"></div>
      <div className="hidden md:block absolute bottom-0 left-0 w-96 h-96 bg-primary-300 rounded-full filter blur-3xl opacity-20"></div>

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


      </div>
    </section>
  );
};

export default GeMCompliance;
