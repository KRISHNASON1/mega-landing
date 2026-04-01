'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import {
    ArrowLeft,
    Phone,
    CheckCircle2,
    Zap,
    Cable,
    Lightbulb,
    Shield,
    Settings,
    Factory,
    Power,
    ChevronRight,
    ArrowRight,
    Bolt,
    CircuitBoard,
    Gauge,
    Flame,
    Building2,
    HardHat,
} from 'lucide-react';

/* ─────────────────────────────────────────────
   IMAGES
───────────────────────────────────────────── */
const IMAGES = {
    hero: '/images/electrical-jobs/hero.png',
    htlt: '/images/electrical-jobs/ht-lt-panels.png',
    cableTray: '/images/electrical-jobs/cable-tray.png',
    substation: '/images/electrical-jobs/substation.png',
    fireAlarm: '/images/electrical-jobs/fire-alarm.png',
    lighting: '/images/electrical-jobs/led-lighting.png',
};

/* ─────────────────────────────────────────────
   SERVICE CATEGORIES DATA
───────────────────────────────────────────── */
const serviceCategories = [
    {
        id: 'datacentre-electrical',
        title: 'Turnkey Datacentre — Electrical Work',
        subtitle: 'End-to-end electrical infrastructure for datacentres & industrial facilities',
        icon: <CircuitBoard className="w-6 h-6" />,
        image: IMAGES.htlt,
        color: 'from-blue-600 to-primary-700',
        items: [
            'Supply, Installation, Testing & Commissioning of HT/LT panels, HT/LT cables, Transformers, DG sets, HI-Mast & Motors',
            'HT/LT Panel Termination with precision cable routing',
            'Supply, Installation & Fabrication of cable trays & earthing strips',
            'Supply and Installation of all types of light fittings — LED, industrial, flameproof',
            'Supply of panels — PCC, MCC, PMCC, Isolator Panel, Battery Charger Panel & UPS Panel',
            'Supply and Installation of Fire Alarm Systems (addressable & conventional)',
        ],
    },
    {
        id: 'sitc-hv',
        title: 'SITC — High Voltage Works',
        subtitle: 'Substation erection, transformer commissioning & HV infrastructure',
        icon: <Bolt className="w-6 h-6" />,
        image: IMAGES.substation,
        color: 'from-amber-500 to-orange-700',
        items: [
            'Erection of 22 KV / 100 KV Sub-Stations, 33/11 KV Lines',
            'Fabrication and erection of equipment supporting structures for HV systems',
            'Erection, Testing & Commissioning of power transformers up to 250 MVA — including loading/unloading operations',
            'Erection, Testing & Commissioning of Cooling Towers',
        ],
    },
    {
        id: 'cable-tray',
        title: 'Cable Tray & Earthing Systems',
        subtitle: 'Custom fabrication and installation of industrial cable management',
        icon: <Cable className="w-6 h-6" />,
        image: IMAGES.cableTray,
        color: 'from-cyan-500 to-teal-700',
        items: [
            'Perforated, ladder, and wire-mesh cable tray supply & installation',
            'GI & MS cable tray fabrication to custom dimensions',
            'Earthing strip supply and installation — copper & GI earth conductors',
            'Complete earthing systems — chemical earthing, plate earthing, pipe earthing',
            'Earth pit installation with test points and maintenance access',
            'Lightning protection systems — air terminals, down conductors & earth electrodes',
        ],
    },
    {
        id: 'fire-alarm',
        title: 'Fire Alarm & Safety Systems',
        subtitle: 'Complete fire detection, alarm & suppression system integration',
        icon: <Flame className="w-6 h-6" />,
        image: IMAGES.fireAlarm,
        color: 'from-red-500 to-rose-700',
        items: [
            'Addressable and Conventional Fire Alarm Panel supply & installation',
            'Smoke detectors, heat detectors & multi-sensor detector installation',
            'Manual call point and response indicator installation',
            'Public address & voice alarm system integration',
            'Fire suppression system wiring & control panel integration',
            'Annual maintenance contracts (AMC) for fire safety systems',
        ],
    },
    {
        id: 'lighting',
        title: 'Industrial & Commercial Lighting',
        subtitle: 'Energy-efficient lighting solutions for every industrial environment',
        icon: <Lightbulb className="w-6 h-6" />,
        image: IMAGES.lighting,
        color: 'from-yellow-500 to-amber-700',
        items: [
            'High-bay LED lighting for warehouses, factories & logistics hubs',
            'Flameproof (FLP) & weatherproof lighting for hazardous areas',
            'Street lighting & HI-Mast tower light installation',
            'Office and cleanroom lighting — panel lights, downlighters, track lights',
            'Emergency lighting & exit signage as per NBC guidelines',
            'Energy audit and retrofit solutions for legacy lighting systems',
        ],
    },
    {
        id: 'panels',
        title: 'Panel Supply & Integration',
        subtitle: 'PCC, MCC, PMCC, VFD panels and complete motor control solutions',
        icon: <Gauge className="w-6 h-6" />,
        image: IMAGES.htlt,
        color: 'from-indigo-500 to-violet-700',
        items: [
            'Power Control Centres (PCC) — main incoming & outgoing feeders',
            'Motor Control Centres (MCC) — DOL, Star-Delta, VFD starters',
            'Programmable MCC (PMCC) with PLC integration',
            'VFD Panels with ABB, Siemens & Schneider drives',
            'Automatic Power Factor Correction (APFC) panels',
            'Battery Charger Panels & UPS Panels for critical power backup',
            'Isolator Panels, Bus Duct systems & Change-Over switches',
        ],
    },
];

/* ─────────────────────────────────────────────
   STATS
───────────────────────────────────────────── */
const stats = [
    { value: '8+', label: 'Years in Electrical Contracting', icon: <Factory className="w-5 h-5" /> },
    { value: '50+', label: 'Electrical Projects Delivered', icon: <Zap className="w-5 h-5" /> },
    { value: '250', label: 'MVA Transformer Capacity', icon: <Power className="w-5 h-5" /> },
    { value: '100%', label: 'On-Time Project Delivery', icon: <Shield className="w-5 h-5" /> },
];

/* ─────────────────────────────────────────────
   KEY CAPABILITIES
───────────────────────────────────────────── */
const capabilities = [
    {
        title: 'HT/LT Installation',
        description: 'Complete supply, installation, testing and commissioning of HT & LT electrical systems including panels, cables, and terminations.',
        icon: <Power className="w-8 h-8" />,
    },
    {
        title: 'Substation Erection',
        description: 'Turnkey erection of 22KV/33KV/11KV substations with transformer commissioning up to 250 MVA capacity.',
        icon: <Building2 className="w-8 h-8" />,
    },
    {
        title: 'Cable Management',
        description: 'Fabrication and installation of cable trays, earthing strips, conduit systems and complete cable routing solutions.',
        icon: <Cable className="w-8 h-8" />,
    },
    {
        title: 'Panel Engineering',
        description: 'Custom panel design, supply and commissioning — PCC, MCC, PMCC, APFC, VFD, UPS and Battery Charger panels.',
        icon: <CircuitBoard className="w-8 h-8" />,
    },
    {
        title: 'Fire & Safety',
        description: 'Complete fire alarm system integration — addressable panels, detectors, manual call points and suppression controls.',
        icon: <Flame className="w-8 h-8" />,
    },
    {
        title: 'Industrial Lighting',
        description: 'Energy-efficient lighting solutions for industrial, commercial and hazardous environments with full installation support.',
        icon: <Lightbulb className="w-8 h-8" />,
    },
];

/* ─────────────────────────────────────────────
   MAJOR PROJECTS (DUMMY DATA)
───────────────────────────────────────────── */
const majorProjects = [
    {
        id: 1,
        client: 'Confidential — Major IT Datacentre',
        location: 'Navi Mumbai, Maharashtra',
        scope: 'Complete electrical infrastructure — HT/LT panels, 2×2000 KVA transformers, DG synchronization panel, cable trays, earthing, LED lighting',
        value: '₹4.2 Cr',
        status: 'Completed',
    },
    {
        id: 2,
        client: 'Confidential — Pharmaceutical MIDC',
        location: 'Tarapur, Maharashtra',
        scope: 'Supply & erection of 33/11 KV substation, APFC panel, MCC panel with VFD drives, fire alarm system',
        value: '₹2.8 Cr',
        status: 'Completed',
    },
    {
        id: 3,
        client: 'Confidential — Logistics Hub',
        location: 'Bhiwandi, Maharashtra',
        scope: 'Turnkey electrical — LT panels, cable tray with earthing, high-bay LED lighting (40,000 sq.ft), fire alarm system',
        value: '₹1.5 Cr',
        status: 'Completed',
    },
    {
        id: 4,
        client: 'Confidential — Chemical Processing',
        location: 'Patalganga MIDC, Maharashtra',
        scope: 'FLP electrical installation, flameproof lighting, hazardous area cable routing, FLP panel termination & earthing',
        value: '₹3.1 Cr',
        status: 'In Progress',
    },
];

/* ─────────────────────────────────────────────
   ANIMATED COUNTER HOOK
───────────────────────────────────────────── */
function useAnimatedCounter(target, duration = 2000) {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const hasAnimated = useRef(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated.current) {
                    hasAnimated.current = true;
                    const numTarget = parseInt(target.replace(/[^0-9]/g, ''), 10);
                    if (isNaN(numTarget)) {
                        setCount(target);
                        return;
                    }
                    const startTime = Date.now();
                    const animate = () => {
                        const elapsed = Date.now() - startTime;
                        const progress = Math.min(elapsed / duration, 1);
                        const eased = 1 - Math.pow(1 - progress, 3);
                        setCount(Math.floor(eased * numTarget));
                        if (progress < 1) requestAnimationFrame(animate);
                    };
                    requestAnimationFrame(animate);
                }
            },
            { threshold: 0.5 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [target, duration]);

    return { ref, count };
}

/* ─────────────────────────────────────────────
   STAT CARD COMPONENT
───────────────────────────────────────────── */
function StatCard({ stat }) {
    const { ref, count } = useAnimatedCounter(stat.value);
    const suffix = stat.value.replace(/[0-9]/g, '');

    return (
        <div ref={ref} className="group relative">
            <div className="relative bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 overflow-hidden">
                {/* Background glow */}
                <div className="absolute -top-12 -right-12 w-32 h-32 bg-primary-100 rounded-full opacity-0 group-hover:opacity-60 transition-opacity duration-500" />

                <div className="relative z-10 flex items-center gap-4">
                    <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-primary-50 to-primary-100 text-primary-700 group-hover:scale-110 transition-transform duration-300">
                        {stat.icon}
                    </div>
                    <div>
                        <div className="text-3xl font-bold bg-gradient-to-r from-primary-700 to-primary-500 bg-clip-text text-transparent">
                            {typeof count === 'number' ? count : stat.value}{suffix}
                        </div>
                        <div className="text-sm text-gray-500 font-medium mt-0.5">{stat.label}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

/* ─────────────────────────────────────────────
   SERVICE SECTION COMPONENT
───────────────────────────────────────────── */
function ServiceSection({ service, index }) {
    const isEven = index % 2 === 0;

    return (
        <section id={service.id} className="scroll-mt-32">
            <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-12 items-stretch`}>
                {/* Image */}
                <div className="lg:w-5/12 flex-shrink-0">
                    <div className="relative rounded-3xl overflow-hidden shadow-lg group h-full min-h-[320px]">
                        <img
                            src={service.image}
                            alt={service.title}
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-20 group-hover:opacity-30 transition-opacity duration-500`} />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                        {/* Floating badge */}
                        <div className="absolute top-5 left-5">
                            <div className="flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full text-sm font-semibold text-gray-800 shadow-lg">
                                {service.icon}
                                <span>MEGA Enterprise</span>
                            </div>
                        </div>

                        {/* Section number */}
                        <div className="absolute bottom-5 right-5">
                            <span className="text-6xl font-black text-white/15">0{index + 1}</span>
                        </div>
                    </div>
                </div>

                {/* Content */}
                <div className="lg:w-7/12">
                    <div className="bg-white rounded-3xl p-8 sm:p-10 border border-gray-100 shadow-sm h-full">
                        {/* Header */}
                        <div className="flex items-start gap-4 mb-2">
                            <div className={`flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br ${service.color} text-white shrink-0`}>
                                {service.icon}
                            </div>
                            <div>
                                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 leading-tight">
                                    {service.title}
                                </h2>
                                <p className="text-gray-500 mt-1 text-sm">{service.subtitle}</p>
                            </div>
                        </div>

                        {/* Divider */}
                        <div className={`h-1 w-16 rounded-full bg-gradient-to-r ${service.color} mb-6 mt-4`} />

                        {/* Items */}
                        <ul className="space-y-4">
                            {service.items.map((item, i) => (
                                <li key={i} className="flex items-start group/item">
                                    <div className="flex-shrink-0 mt-1 mr-3">
                                        <CheckCircle2 className="w-5 h-5 text-primary-500 group-hover/item:text-primary-600 transition-colors" />
                                    </div>
                                    <span className="text-gray-700 leading-relaxed text-[15px]">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

/* ─────────────────────────────────────────────
   CAPABILITY CARD
───────────────────────────────────────────── */
function CapabilityCard({ cap, index }) {
    return (
        <div
            className="group relative bg-white rounded-2xl p-7 border border-gray-100 hover:border-primary-200 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 overflow-hidden"
            style={{ animationDelay: `${index * 100}ms` }}
        >
            {/* Background gradient on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-50/0 to-primary-100/0 group-hover:from-primary-50/50 group-hover:to-primary-100/30 transition-all duration-500 rounded-2xl" />

            <div className="relative z-10">
                <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-50 to-primary-100 text-primary-700 mb-5 group-hover:scale-110 group-hover:shadow-lg transition-all duration-300">
                    {cap.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{cap.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{cap.description}</p>
            </div>
        </div>
    );
}

/* ─────────────────────────────────────────────
   PROJECT ROW COMPONENT
───────────────────────────────────────────── */
function ProjectRow({ project }) {
    return (
        <div className="group bg-white rounded-2xl p-6 sm:p-8 border border-gray-100 hover:border-primary-200 shadow-sm hover:shadow-lg transition-all duration-300">
            <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-6">
                {/* Index */}
                <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-primary-700 text-white font-bold text-sm shrink-0">
                    {String(project.id).padStart(2, '0')}
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-2">
                        <h3 className="text-lg font-bold text-gray-900">{project.client}</h3>
                        <span className={`inline-flex items-center px-3 py-0.5 rounded-full text-xs font-semibold ${project.status === 'Completed'
                                ? 'bg-success-50 text-success-800'
                                : 'bg-warning-50 text-warning-600'
                            }`}>
                            {project.status}
                        </span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {project.location}
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed">{project.scope}</p>
                </div>

                {/* Value */}
                <div className="sm:text-right shrink-0">
                    <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Project Value</div>
                    <div className="text-2xl font-bold bg-gradient-to-r from-primary-700 to-primary-500 bg-clip-text text-transparent">
                        {project.value}
                    </div>
                </div>
            </div>
        </div>
    );
}

/* ─────────────────────────────────────────────
   PROCESS STEP
───────────────────────────────────────────── */
const processSteps = [
    { step: '01', title: 'Site Survey', desc: 'Detailed site survey and load assessment to understand your exact requirements.' },
    { step: '02', title: 'Engineering Design', desc: 'Comprehensive SLD, cable schedule, and panel GA drawings per IS/IEC standards.' },
    { step: '03', title: 'Material Procurement', desc: 'Supply of ISI-marked, branded materials — Polycab, KEI, Siemens, ABB, Schneider.' },
    { step: '04', title: 'Installation', desc: 'Expert installation by qualified electricians and engineers with strict safety protocols.' },
    { step: '05', title: 'Testing & Commissioning', desc: 'Comprehensive testing — IR values, earth resistance, relay testing, load trial runs.' },
    { step: '06', title: 'Handover & Support', desc: 'Complete documentation, as-built drawings, test certificates, and AMC support.' },
];

/* ═══════════════════════════════════════════
   MAIN PAGE
═══════════════════════════════════════════ */
export default function ElectricalJobsPage() {
    // Reveal animation
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            },
            { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
        );

        const revealElements = document.querySelectorAll('.reveal');
        revealElements.forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    return (
        <div className="min-h-screen bg-gray-50">

            {/* ── HERO ── */}
            <section className="relative min-h-[85vh] flex items-center overflow-hidden">
                {/* Background image */}
                <div className="absolute inset-0">
                    <img
                        src={IMAGES.hero}
                        alt="Electrical panel installation"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/75 to-gray-900/40" />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent" />
                </div>

                {/* Animated decorative elements */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-20 right-20 w-96 h-96 border border-primary-400/10 rounded-full animate-pulse" />
                    <div className="absolute bottom-40 right-40 w-64 h-64 border border-primary-400/10 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
                    <div className="absolute top-1/2 right-1/4 w-2 h-2 bg-primary-400/30 rounded-full animate-ping" style={{ animationDelay: '0.5s' }} />
                    <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-yellow-400/30 rounded-full animate-ping" style={{ animationDelay: '1.5s' }} />

                    {/* Electric circuit-board style lines */}
                    <svg className="absolute right-0 top-0 w-1/2 h-full opacity-5" viewBox="0 0 500 800" fill="none">
                        <path d="M50 0 V200 H250 V400 H150 V600 H350 V800" stroke="#7AB2D3" strokeWidth="2" />
                        <path d="M150 0 V100 H350 V300 H250 V500 H450 V700" stroke="#7AB2D3" strokeWidth="1.5" />
                        <circle cx="250" cy="200" r="6" fill="#7AB2D3" />
                        <circle cx="150" cy="400" r="6" fill="#7AB2D3" />
                        <circle cx="350" cy="600" r="6" fill="#7AB2D3" />
                        <circle cx="350" cy="300" r="4" fill="#7AB2D3" />
                    </svg>
                </div>

                {/* Content */}
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-40 pb-20">
                    <div className="max-w-3xl">
                        {/* Back Button */}
                        <div className="mb-8">
                            <Link href="/services" className="inline-flex items-center justify-center px-5 py-2.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white font-medium hover:bg-white/20 hover:-translate-y-0.5 transition-all duration-300 shadow-lg">
                                <ArrowLeft className="w-5 h-5 mr-2" />
                                Back to Services
                            </Link>
                        </div>


                        {/* Title */}
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-[1.1]">
                            Electrical{' '}
                            <span className="bg-gradient-to-r from-primary-300 via-primary-400 to-primary-300 bg-clip-text text-transparent">
                                Jobs
                            </span>
                            <br />
                            <span className="text-3xl sm:text-4xl md:text-5xl text-gray-300 font-semibold">
                                & Contracting Services
                            </span>
                        </h1>

                        {/* Description */}
                        <p className="text-lg sm:text-xl text-gray-300 max-w-2xl leading-relaxed mb-10">
                            Full-spectrum electrical contracting — from HT/LT panel installation and
                            substation erection to fire alarm systems and industrial lighting. We deliver
                            precision-engineered solutions for datacentres, factories, and infrastructure projects.
                        </p>

                        {/* CTAs */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link
                                href="/contact"
                                className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-700 text-white rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
                            >
                                <Phone className="w-5 h-5 mr-2" />
                                Get an Estimate
                                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <a
                                href="#datacentre-electrical"
                                className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-full font-semibold text-lg border border-white/20 hover:bg-white/20 transition-all duration-300"
                            >
                                Explore Services
                                <ChevronRight className="w-5 h-5 ml-2" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom gradient fade */}
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-50 to-transparent" />
            </section>

            {/* ── STATS ── */}
            <section className="relative z-10 -mt-10 mb-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                        {stats.map((stat, i) => (
                            <StatCard key={i} stat={stat} />
                        ))}
                    </div>
                </div>
            </section>

            {/* ── KEY CAPABILITIES ── */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-14 reveal">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                            Our{' '}
                            <span className="bg-gradient-to-r from-primary-700 to-primary-500 bg-clip-text text-transparent">
                                Key Capabilities
                            </span>
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                            A comprehensive range of electrical contracting services backed by experienced
                            engineers, skilled technicians, and industry-leading brands.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 reveal">
                        {capabilities.map((cap, i) => (
                            <CapabilityCard key={i} cap={cap} index={i} />
                        ))}
                    </div>
                </div>
            </section>

            {/* ── SERVICE DETAILS ── */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Section header */}
                    <div className="text-center mb-16 reveal">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                            Detailed{' '}
                            <span className="bg-gradient-to-r from-primary-700 to-primary-500 bg-clip-text text-transparent">
                                Service Portfolio
                            </span>
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                            Explore our complete range of electrical contracting services — each section covers
                            a specialized domain with full scope details.
                        </p>
                    </div>

                    <div className="flex gap-10">
                        {/* Service sections */}
                        <div className="flex-1 space-y-16">
                            {serviceCategories.map((service, i) => (
                                <div key={service.id} className="reveal">
                                    <ServiceSection service={service} index={i} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ── OUR PROCESS ── */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16 reveal">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                            How We{' '}
                            <span className="bg-gradient-to-r from-primary-700 to-primary-500 bg-clip-text text-transparent">
                                Deliver
                            </span>
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                            Our proven 6-step process ensures every electrical project is delivered to the highest
                            quality standards — on time, on budget.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 reveal">
                        {processSteps.map((step, i) => (
                            <div key={i} className="relative group">
                                <div className="bg-gray-50 rounded-2xl p-7 border border-gray-100 hover:bg-white hover:shadow-xl hover:border-primary-200 transition-all duration-500 hover:-translate-y-1 h-full">
                                    {/* Step number */}
                                    <div className="text-5xl font-black text-primary-100 group-hover:text-primary-200 transition-colors mb-4 leading-none">
                                        {step.step}
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
                                </div>

                                {/* Connector line */}
                                {i < processSteps.length - 1 && (
                                    <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-primary-200" style={{ display: (i + 1) % 3 === 0 ? 'none' : '' }} />
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── MAJOR PROJECTS ── */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-14 reveal">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                            Major{' '}
                            <span className="bg-gradient-to-r from-primary-700 to-primary-500 bg-clip-text text-transparent">
                                Projects
                            </span>
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                            A selection of our landmark electrical contracting projects across Maharashtra.
                        </p>
                    </div>

                    <div className="space-y-6 reveal">
                        {majorProjects.map((project) => (
                            <ProjectRow key={project.id} project={project} />
                        ))}
                    </div>
                </div>
            </section>

            {/* ── BRANDS WE WORK WITH ── */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-10 reveal">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                            Trusted{' '}
                            <span className="bg-gradient-to-r from-primary-700 to-primary-500 bg-clip-text text-transparent">
                                Brands
                            </span>
                            {' '}We Work With
                        </h2>
                        <p className="text-gray-500 text-sm">
                            We use only ISI-marked, branded materials from India's top manufacturers
                        </p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-6 sm:gap-8 reveal">
                        {['Siemens', 'ABB', 'Schneider Electric', 'Polycab', 'KEI', 'Havells', 'Crompton', 'Bajaj Electricals', 'Philips', 'Anchor', 'Finolex', 'L&T'].map((brand) => (
                            <div
                                key={brand}
                                className="flex items-center justify-center px-6 py-3 bg-gray-50 rounded-xl border border-gray-100 hover:border-primary-200 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
                            >
                                <span className="text-sm font-semibold text-gray-600">{brand}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── CTA ── */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="relative bg-gradient-to-br from-primary-800 via-primary-900 to-gray-900 rounded-3xl p-12 sm:p-16 text-center text-white overflow-hidden reveal">
                        {/* Background decorations */}
                        <div className="absolute inset-0 overflow-hidden pointer-events-none">
                            <div className="absolute top-0 left-0 w-full h-full opacity-10">
                                <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                                    <path d="M0 100 C 20 0 50 0 100 100 Z" fill="white" />
                                </svg>
                            </div>
                            <div className="absolute -top-32 -right-32 w-64 h-64 bg-primary-500/20 rounded-full blur-3xl" />
                            <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-primary-400/10 rounded-full blur-3xl" />
                            {/* Circuit lines */}
                            <svg className="absolute right-10 top-10 w-40 h-40 opacity-10" viewBox="0 0 100 100" fill="none">
                                <path d="M10 10 H50 V50 H90" stroke="white" strokeWidth="2" />
                                <path d="M30 30 V70 H70" stroke="white" strokeWidth="1.5" />
                                <circle cx="50" cy="50" r="4" fill="white" />
                                <circle cx="90" cy="50" r="3" fill="white" />
                            </svg>
                        </div>

                        <div className="relative z-10 max-w-2xl mx-auto">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-primary-200 text-sm font-medium mb-6">
                                <Zap className="w-4 h-4" />
                                Ready to Power Your Next Project?
                            </div>

                            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                                Need Electrical Contracting <br className="hidden sm:block" />for Your Project?
                            </h2>
                            <p className="text-gray-300 mb-10 max-w-xl mx-auto leading-relaxed">
                                From site survey to commissioning — we bring precision engineering, branded
                                materials, and turnkey execution to every electrical project. Contact us
                                for a detailed estimate.
                            </p>

                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                <Link
                                    href="/contact"
                                    className="group inline-flex items-center px-8 py-4 bg-white text-primary-900 rounded-full font-bold hover:bg-gray-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5"
                                >
                                    <Phone className="w-5 h-5 mr-2" />
                                    Get a Quote Today
                                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                                </Link>
                                <a
                                    href="https://wa.me/917506070157?text=Hello%20MEGA%20Enterprise%2C%20I%20need%20electrical%20contracting%20services"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center px-8 py-4 bg-green-500 text-white rounded-full font-bold hover:bg-green-600 transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5"
                                >
                                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                                    </svg>
                                    Chat on WhatsApp
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
