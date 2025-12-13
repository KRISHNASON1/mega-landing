'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Shield, Users, TrendingUp, CheckCircle, Factory, Building, Zap, Fuel, Hammer } from 'lucide-react';
import BubbleSurface from '@/components/ui/BubbleSurface';

const HorizontalScrollSection = () => {
    const targetRef = useRef(null);
    const scrollRef = useRef(null);
    const [scrollRange, setScrollRange] = useState(0);
    const [viewportWidth, setViewportWidth] = useState(0);

    // Update viewport width and scroll range calculation
    useEffect(() => {
        const updateScrollCalc = () => {
            if (scrollRef.current && targetRef.current) {
                setViewportWidth(window.innerWidth);
                const scrollWidth = scrollRef.current.scrollWidth;
                const clientWidth = window.innerWidth;
                // Total scrollable distance to reach the end (which aligns the last card)
                setScrollRange(scrollWidth - clientWidth);
            }
        };

        updateScrollCalc();
        window.addEventListener('resize', updateScrollCalc);
        return () => window.removeEventListener('resize', updateScrollCalc);
    }, []);

    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    // Transform maps 0-1 vertical scroll to 0 to -scrollRange horizontal translation
    // Mapping to [0, 0.93] ensures the horizontal scroll finishes slightly before the vertical scroll ends,
    // creating a "dwell" or "pause" effect where the last card sits centered for a moment before unpinning.
    const x = useTransform(scrollYProgress, [0, 0.93], [0, -scrollRange]);

    const cards = [
        {
            id: 1,
            title: 'Our Vision & Mission',
            content: (
                <div className="grid md:grid-cols-2 gap-8 h-full">
                    <div className="bg-primary-50/50 p-6 rounded-2xl border border-primary-100">
                        <h4 className="text-lg font-bold text-primary-700 mb-3 uppercase tracking-wider flex items-center">
                            <TrendingUp className="w-5 h-5 mr-2" /> Our Vision
                        </h4>
                        <p className="text-gray-600 leading-relaxed text-sm">
                            Market products & services which will ensure customers satisfaction and appreciation.
                            Create & maintain a friendly environment that ensures involvement & commitment in all of us to aim for total quality in everything we do.
                        </p>
                    </div>
                    <div className="bg-blue-50/50 p-6 rounded-2xl border border-blue-100">
                        <h4 className="text-lg font-bold text-primary-700 mb-3 uppercase tracking-wider flex items-center">
                            <Factory className="w-5 h-5 mr-2" /> Our Mission
                        </h4>
                        <p className="text-gray-600 leading-relaxed text-sm">
                            To be the absolute best electrical service provider in the market we serve and to offer our customers a one-stop solution for their entire electrical power distribution needs.
                            We believe in fostering positive business partnerships with our vendors.
                        </p>
                    </div>
                </div>
            ),
            icon: TrendingUp
        },
        {
            id: 2,
            title: 'Industries We Care',
            content: (
                <div className="h-full flex flex-col justify-center">
                    <p className="text-gray-500 mb-6 text-lg">Powering progress across diverse sectors with specialized solutions.</p>
                    <ul className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {[
                            { name: 'Construction', icon: Building },
                            { name: 'Infrastructure', icon: Hammer },
                            { name: 'Power & Energy', icon: Zap },
                            { name: 'Manufacturing', icon: Factory },
                            { name: 'Oil & Gas', icon: Fuel },
                            { name: 'Engineering', icon: Hammer },
                        ].map((item, idx) => (
                            <li key={idx} className="flex flex-col items-center justify-center text-center p-4 rounded-xl bg-gray-50 hover:bg-white hover:shadow-md transition-all duration-300 border border-gray-100 group">
                                <item.icon className="w-8 h-8 text-primary-400 mb-3 group-hover:text-primary-600 transition-colors" />
                                <span className="font-semibold text-gray-700 text-sm">{item.name}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            ),
            icon: Factory
        },
        {
            id: 3,
            title: 'Why Deal With Us?',
            content: (
                <div className="grid md:grid-cols-5 gap-6 h-full">
                    {/* Left Col: Dealers */}
                    <div className="md:col-span-3 bg-primary-50 p-6 rounded-2xl border border-primary-100 flex flex-col justify-center">
                        <h4 className="font-bold text-primary-800 mb-4 flex items-center text-lg">
                            <Shield className="w-6 h-6 mr-2" /> Authorized Dealers
                        </h4>
                        <p className="text-sm text-primary-600 mb-4">Genuine products from top global brands:</p>
                        <div className="flex flex-wrap gap-2">
                            {['Siemens', 'Polycab', 'Ledvance', 'Berger', 'Usha', 'Europa', 'Finolex', 'L&T', 'Schneider'].map(brand => (
                                <span key={brand} className="text-sm bg-white px-3 py-1.5 rounded-lg border border-primary-100 text-primary-700 shadow-sm font-medium">{brand}</span>
                            ))}
                        </div>
                    </div>
                    {/* Right Col: Benefits */}
                    <div className="md:col-span-2 flex flex-col justify-center space-y-3">
                        <div className="flex items-center p-3 bg-green-50 rounded-lg border border-green-100 text-green-800 font-medium">
                            <CheckCircle className="w-5 h-5 mr-3 text-green-600" /> Reasonable Prices
                        </div>
                        <div className="flex items-center p-3 bg-blue-50 rounded-lg border border-blue-100 text-blue-800 font-medium">
                            <CheckCircle className="w-5 h-5 mr-3 text-blue-600" /> Excellent Quality
                        </div>
                        <div className="flex items-center p-3 bg-purple-50 rounded-lg border border-purple-100 text-purple-800 font-medium">
                            <CheckCircle className="w-5 h-5 mr-3 text-purple-600" /> After Sales Support
                        </div>
                    </div>
                </div>
            ),
            icon: Shield
        },
        {
            id: 4,
            title: 'Consumer Satisfaction',
            content: (
                <div className="h-full flex flex-col">
                    <p className="text-gray-600 mb-6 text-lg">Trusted by over <span className="font-bold text-primary-600">50+ major companies</span> across India for their critical project needs.</p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 flex-1 content-start">
                        {['TATA Projects', 'Afcons Infra', 'L&T', 'Godrej', 'NCC Ltd', 'Shapoorji', 'Reliance', 'Adani'].map((client, idx) => (
                            <div key={idx} className="bg-white p-4 rounded-xl text-sm font-bold text-gray-700 border border-gray-100 flex items-center justify-center shadow-sm hover:shadow-md transition-shadow text-center">
                                {client}
                            </div>
                        ))}
                    </div>
                    <div className="mt-6 pt-4 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-3 md:gap-0 text-center md:text-left">
                        <span className="text-gray-500 text-sm">Consistent performance across all sectors</span>
                        <span className="text-primary-600 font-bold text-lg bg-primary-50 px-4 py-1 rounded-full whitespace-nowrap">100% Client Retention</span>
                    </div>
                </div>
            ),
            icon: Users
        }
    ];

    return (
        <section ref={targetRef} className="relative h-[500vh] bg-gray-50">
            <div className="sticky top-0 flex flex-col h-[100dvh] overflow-hidden">

                {/* Section Header (Flex Item, Natural Flow) */}
                <div className="flex-none w-full text-center z-10 px-4 py-8 md:py-12 flex flex-col justify-center bg-gray-50/80 backdrop-blur-sm">
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-2">
                        Reach For Everything You Need
                    </h2>
                </div>

                {/* Scroll Container (Flex-1 to fill remaining space) */}
                {/* Cards are normal height, no internal scrolling */}
                <motion.div
                    ref={scrollRef}
                    style={{ x }}
                    className="flex-1 flex gap-6 md:gap-24 relative z-20 items-center px-[5vw] md:px-[calc(50vw-400px)] w-full py-4 md:py-0"
                >
                    {cards.map((card) => {
                        const Icon = card.icon;
                        return (
                            <div key={card.id} className="w-[85vw] md:w-[800px] flex-shrink-0">
                                <div className="bg-white rounded-[2rem] md:rounded-[2.5rem] p-5 md:p-10 shadow-2xl border border-gray-100 flex flex-col relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300">
                                    {/* Decorative Background Blob */}
                                    <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary-50 to-transparent rounded-bl-[150px] -mr-16 -mt-16 transition-opacity duration-300 opacity-60" />

                                    <div className="relative z-10 flex flex-col">
                                        <div className="flex items-center mb-6 md:mb-8 border-b border-gray-100 pb-4 md:pb-6">
                                            <div className="w-10 h-10 md:w-14 md:h-14 rounded-2xl bg-primary-50 flex items-center justify-center mr-3 md:mr-5 shadow-sm border border-primary-100">
                                                <Icon className="w-5 h-5 md:w-7 md:h-7 text-primary-600" />
                                            </div>
                                            <h3 className="text-xl md:text-3xl font-bold text-gray-900 tracking-tight">{card.title}</h3>
                                        </div>

                                        <div className="text-gray-600">
                                            {card.content}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
};

export default HorizontalScrollSection;
