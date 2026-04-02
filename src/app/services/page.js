'use client';

import Link from 'next/link';
import { ArrowLeft, ArrowRight, Wrench, Zap } from 'lucide-react';

const services = [
    {
        title: 'Fabrication',
        description:
            'Heavy-duty industrial fabrication — structural steel sheds, precision assemblies, portable site infrastructure, and custom MS/SS engineering for India\'s leading contractors.',
        href: '/services/fabrication',
        icon: <Wrench className="w-7 h-7" />,
        image: '/images/projects/fabrication-1.png',
        color: 'from-orange-500 to-orange-700',
        tags: ['Structural Steel', 'MS Fabrication', 'EOT Cranes', 'Porta Cabins'],
    },
    {
        title: 'Electrical Jobs',
        description:
            'Full-spectrum electrical contracting — HT/LT panel installation, substation erection, cable tray & earthing, fire alarm systems, and industrial lighting for datacentres, factories & infrastructure projects.',
        href: '/services/electrical-jobs',
        icon: <Zap className="w-7 h-7" />,
        image: '/images/electrical-jobs/hero.png',
        color: 'from-blue-500 to-primary-700',
        tags: ['HT/LT Panels', 'Substations', 'Fire Alarm', 'Cable Trays', 'Lighting'],
    },
];

export default function ServicesPage() {
    return (
        <div className="min-h-screen bg-gray-50 pt-32 pb-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Breadcrumb */}
                <div className="mb-8">
                    <Link
                        href="/"
                        className="inline-flex items-center text-gray-600 hover:text-primary-600 transition-colors font-medium"
                    >
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back to Home
                    </Link>
                </div>

                {/* Hero */}
                <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 mb-14 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary-50 rounded-bl-full -mr-16 -mt-16 opacity-50" />
                    <div className="relative z-10">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            Our Services
                        </h1>
                        <p className="text-xl text-gray-600 leading-relaxed max-w-3xl">
                            From precision fabrication to turnkey electrical contracting — we bring
                            engineering excellence, branded materials, and end-to-end execution to
                            every project.
                        </p>
                    </div>
                </div>

                {/* Service Cards */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {services.map((service) => (
                        <Link
                            key={service.title}
                            href={service.href}
                            className="group relative bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-500"
                        >
                            {/* Image */}
                            <div className="relative h-64 overflow-hidden">
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div
                                    className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-20 group-hover:opacity-30 transition-opacity duration-500`}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                                {/* Icon badge */}
                                <div className="absolute top-5 left-5">
                                    <div className={`flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br ${service.color} text-white shadow-lg`}>
                                        {service.icon}
                                    </div>
                                </div>

                                {/* Title on image */}
                                <div className="absolute bottom-5 left-5 right-5">
                                    <h2 className="text-2xl font-bold text-white">{service.title}</h2>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6 sm:p-8">
                                <p className="text-gray-600 leading-relaxed text-[15px] mb-5">
                                    {service.description}
                                </p>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {service.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="inline-flex items-center px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* CTA */}
                                <div className="inline-flex items-center text-primary-600 font-semibold group-hover:text-primary-700 transition-colors">
                                    View Portfolio
                                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
