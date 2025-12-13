import ProductListing from '@/components/products/ProductListing';

export default function ContactorsRelaysPage() {
    const products = [
        {
            name: 'Power Contactor',
            description: 'AC power contactors for motor switching and control panel applications.',
            image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=80',
            specs: ['9A to 630A', 'AC1/AC3 Rated', 'Coil: 24V to 415V'],
        },
        {
            name: 'Auxiliary Contactor',
            description: 'Control relays for interlocking and auxiliary circuit switching.',
            image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=80',
            specs: ['4NO/4NC', 'Front Mount', 'Side Mount Add-on'],
        },
        {
            name: 'Thermal Overload Relay',
            description: 'Bimetallic overload relays for motor overload protection.',
            image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=80',
            specs: ['Adjustable Range', 'Manual/Auto Reset', 'Class 10/20'],
        },
        {
            name: 'Timer Relay',
            description: 'Electronic and mechanical timers for on-delay and off-delay applications.',
            image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=80',
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
