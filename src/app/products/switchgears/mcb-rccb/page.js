import ProductListing from '@/components/products/ProductListing';

export default function McbRccbPage() {
    const products = [
        {
            name: 'Single Pole MCB',
            description: 'Miniature circuit breakers for single phase protection in distribution boards.',
            image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=80',
            specs: ['6A to 63A Rating', 'B/C/D Curve', '10kA Breaking Capacity'],
        },
        {
            name: 'TP+N MCB',
            description: 'Three pole plus neutral MCBs for three-phase applications.',
            image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=80',
            specs: ['4 Module Width', 'DIN Rail Mount', 'IS/IEC 60898'],
        },
        {
            name: 'RCCB',
            description: 'Residual current circuit breakers for earth leakage protection.',
            image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=80',
            specs: ['30mA/100mA/300mA', '2P/4P Versions', 'Type A/AC'],
        },
        {
            name: 'RCBO',
            description: 'Combined MCB and RCCB in single unit for comprehensive protection.',
            image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=80',
            specs: ['Overcurrent + Earth Fault', 'Compact Design', 'Individual Protection'],
        },
    ];

    const benefits = ['ISI Marked', 'High Breaking Capacity', 'Easy Installation', 'Indicator Window'];

    return (
        <ProductListing
            title="MCB & RCCB"
            description="Miniature circuit breakers and residual current devices for reliable circuit protection in residential and commercial installations."
            benefits={benefits}
            products={products}
            categoryBackLink="/products/switchgears"
        />
    );
}
