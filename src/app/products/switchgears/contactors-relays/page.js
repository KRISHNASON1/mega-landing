import ProductListing from '@/components/products/ProductListing';

export default function ContactorsRelaysPage() {
    const products = [
        {
            name: 'Power Contactor',
            description: 'AC power contactors for motor switching and control panel applications.',
            image: '/images/Products_preview/Abrasives.png',
            specs: ['9A to 630A', 'AC1/AC3 Rated', 'Coil: 24V to 415V'],
        },
        {
            name: 'Auxiliary Contactor',
            description: 'Control relays for interlocking and auxiliary circuit switching.',
            image: '/images/Products_preview/Abrasives.png',
            specs: ['4NO/4NC', 'Front Mount', 'Side Mount Add-on'],
        },
        {
            name: 'Thermal Overload Relay',
            description: 'Bimetallic overload relays for motor overload protection.',
            image: '/images/Products_preview/Abrasives.png',
            specs: ['Adjustable Range', 'Manual/Auto Reset', 'Class 10/20'],
        },
        {
            name: 'Timer Relay',
            description: 'Electronic and mechanical timers for on-delay and off-delay applications.',
            image: '/images/Products_preview/Abrasives.png',
            specs: ['0.1s to 100h Range', 'Multi-Function', 'DIN Rail Mount'],
        },
    ];

    const benefits = ['Million Operations', 'Wide Coil Range', 'Easy Mounting', 'Reliable Switching'];

    return (
        <ProductListing
            title="Contactors & Relays"
            description="Power contactors, auxiliary relays, and thermal overloads for motor control and industrial automation applications."
            benefits={benefits}
            products={products}
            categoryBackLink="/products/switchgears"
        />
    );
}
