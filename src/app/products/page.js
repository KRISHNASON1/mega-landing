'use client';

import Link from 'next/link';
import { Shield, Zap, Power, Settings, Sun, Lightbulb, PenTool, Droplet, Hammer, Wrench } from 'lucide-react';

export default function ProductsPage() {
  const categories = [
    {
      name: 'Safety & PPE',
      description: 'Complete range of personal protective equipment and safety gear.',
      icon: <Shield className="w-8 h-8" />,
      color: 'from-orange-500 to-red-600',
      href: '/products/safety-ppe',
    },
    {
      name: 'Wires & Cables',
      description: 'High-grade industrial wires and cables for all applications.',
      icon: <Zap className="w-8 h-8" />,
      color: 'from-blue-500 to-cyan-600',
      href: '/products/wires-cables',
    },
    {
      name: 'Switchgears',
      description: 'Reliable switchgear systems for efficient power distribution.',
      icon: <Power className="w-8 h-8" />,
      color: 'from-green-500 to-emerald-600',
      href: '/products/switchgears',
    },
    {
      name: 'Motors',
      description: 'Efficient and durable motors for industrial machinery.',
      icon: <Settings className="w-8 h-8" />,
      color: 'from-purple-500 to-indigo-600',
      href: '/products/motors',
    },
    {
      name: 'Gearboxes',
      description: 'Precision gearboxes for optimal torque and speed control.',
      icon: <Settings className="w-8 h-8 rotate-90" />,
      color: 'from-gray-600 to-gray-800',
      href: '/products/gearboxes',
    },
    {
      name: 'Solar',
      description: 'Sustainable solar energy solutions and components.',
      icon: <Sun className="w-8 h-8" />,
      color: 'from-yellow-400 to-orange-500',
      href: '/products/solar',
    },
    {
      name: 'Lighting',
      description: 'Advanced LED lighting for industrial and commercial use.',
      icon: <Lightbulb className="w-8 h-8" />,
      color: 'from-yellow-300 to-yellow-500',
      href: '/products/lighting',
    },
    {
      name: 'Panel Accessories',
      description: 'Essential accessories for control panels and distribution boards.',
      icon: <PenTool className="w-8 h-8" />,
      color: 'from-blue-400 to-indigo-500',
      href: '/products/panel-accessories',
    },
    {
      name: 'Lubricants',
      description: 'High-performance lubricants for machinery maintenance.',
      icon: <Droplet className="w-8 h-8" />,
      color: 'from-teal-400 to-teal-600',
      href: '/products/lubricants',
    },
  ];

  const services = [
    {
      name: 'Fabrication',
      description: 'Custom metal fabrication services tailored to your specific industrial needs. Precision engineering and high-quality materials ensuring durability.',
      icon: <Hammer className="w-10 h-10" />,
      image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&q=80',
      href: '/services/fabrication',
    },
    {
      name: 'Electrical Jobs',
      description: 'Comprehensive electrical installation, maintenance, and repair services. Expert technicians ensuring safety and compliance with standards.',
      icon: <Wrench className="w-10 h-10" />,
      image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=80',
      href: '/services/electrical-jobs',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Products <span className="text-primary-600">&</span> Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive industrial solutions including a wide range of products and expert services.
          </p>
        </div>

        {/* Product Categories */}
        <div className="mb-24">
          <div className="flex items-center space-x-4 mb-12">
            <div className="h-px bg-gray-300 flex-1"></div>
            <h2 className="text-3xl font-bold text-gray-800">Product Categories</h2>
            <div className="h-px bg-gray-300 flex-1"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <Link
                key={index}
                href={category.href}
                className="group relative bg-white rounded-3xl p-8 hover:-translate-y-2 transition-all duration-300 shadow-sm hover:shadow-xl border border-gray-100 overflow-hidden"
              >
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${category.color} opacity-10 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-150 duration-500`}></div>

                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${category.color} text-white mb-6 shadow-lg`}>
                  {category.icon}
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-3">{category.name}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {category.description}
                </p>

                <div className="flex items-center text-primary-600 font-semibold group-hover:translate-x-2 transition-transform">
                  Explore Products <span className="ml-2 text-xl">→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Services Section */}
        <div>
          <div className="flex items-center space-x-4 mb-12">
            <div className="h-px bg-gray-300 flex-1"></div>
            <h2 className="text-3xl font-bold text-gray-800">Our Services</h2>
            <div className="h-px bg-gray-300 flex-1"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {services.map((service, index) => (
              <div key={index} className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute bottom-6 left-6 z-20 text-white flex items-center space-x-3">
                    <div className="p-3 bg-white/20 backdrop-blur-md rounded-xl border border-white/30">
                      {service.icon}
                    </div>
                    <h3 className="text-3xl font-bold">{service.name}</h3>
                  </div>
                </div>
                <div className="p-8">
                  <p className="text-lg text-gray-600 leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <Link
                    href={service.href}
                    className="block w-full py-4 bg-gray-50 text-gray-900 rounded-xl font-bold hover:bg-primary-600 hover:text-white transition-all duration-300 border border-gray-200 hover:border-transparent text-center"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
