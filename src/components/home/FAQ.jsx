'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "What industrial materials and products does MEGA Enterprise sell?",
    answer: "MEGA Enterprise supplies over 1,000 industrial products including electrical switchgears, structural steel, industrial lubricants, safety PPE kits, power tools, and hardware. We are authorized dealers for premium brands like Castrol, Siemens, Polycab, and TATA."
  },
  {
    question: "Is MEGA Enterprise a GeM-approved vendor?",
    answer: "Yes, MEGA Enterprise is a fully registered and GeM-approved (Government e-Marketplace) supplier. We regularly fulfill large-scale government and public sector tenders for industrial supplies."
  },
  {
    question: "Where is MEGA Enterprise located and what is your delivery area?",
    answer: "Our main office and warehouse are located at Plot No. 57, Opp M.I.D.C Water Tank in Taloja, Navi Mumbai, Maharashtra 410208. We serve over 50 major clients and provide delivery across India for bulk industrial orders."
  },
  {
    question: "How can I request a B2B quote for fabrication or engineering materials?",
    answer: "You can request an instant quote by visiting our Contact page, emailing sales@megaenterprise.in, or directly chatting with our sales executives Nirmal Dewasi (+91 750 6070 157) and Kailash Dewasi (+91 85911 69113) via WhatsApp or phone."
  },
  {
    question: "What brands of industrial lubricants and electrical components do you stock?",
    answer: "We stock premium industrial lubricants from Castrol, Shell, Mobil, and Gulf. For electrical components, we supply products from Siemens, Polycab, Finolex, and L&T switchgears."
  },
  {
    question: "Do you supply heavy structural steel and construction chemicals?",
    answer: "Yes, we supply a wide range of structural steel including TMT bars, angles, channels, and ISMBs from TATA and JSPL. We also provide construction chemicals for waterproofing, grouting, and concrete admixtures."
  },
  {
    question: "What is the minimum order quantity for wholesale industrial supplies?",
    answer: "While we cater primarily to B2B bulk requirements, minimum order quantities depend on the specific product category. Please contact our sales team at +91-7506070157 for exact MOQ requirements on your desired materials."
  },
  {
    question: "Do you provide custom fabrication and electrical engineering services?",
    answer: "Yes, besides material supply, MEGA Enterprise specializes in custom structural steel fabrication, electrical jobs, panel accessories installation, and bespoke engineering components from our Navi Mumbai facility."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <section className="py-24 bg-white reveal" id="faq">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600">
            Everything you need to know about partnering with MEGA Enterprise.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="border border-gray-200 rounded-2xl overflow-hidden bg-white hover:shadow-md transition-shadow"
            >
              <button
                className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none focus:bg-gray-50"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
              >
                <span className="font-semibold text-gray-900 pr-8">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-primary-600 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                )}
              </button>
              
              <div 
                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
