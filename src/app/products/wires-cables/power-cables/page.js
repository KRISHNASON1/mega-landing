import ProductListing from '@/components/products/ProductListing';

export default function PowerCablesPage() {
    const products = [
        {
            name: 'LT XLPE Power Cable',
            description: 'Low tension XLPE insulated power cables for underground distribution up to 1.1kV.',
            image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=80',
            specs: ['Copper/Aluminum Conductor', 'XLPE Insulation', '1.1kV Grade'],
        },
        {
            name: 'HT Power Cable',
            description: 'High tension cables for 11kV/22kV/33kV power transmission applications.',
            image: 'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=800&q=80',
            specs: ['Up to 33kV Rating', 'Copper Conductor', 'XLPE/PVC Sheathed'],
        },
        {
            name: 'Armoured Power Cable',
            description: 'Steel wire/strip armoured cables for direct burial and harsh environments.',
            image: 'https://images.unsplash.com/photo-1601924638867-3a6de6b7a500?w=800&q=80',
            specs: ['Steel Wire Armour', 'Mechanical Protection', 'Underground Laying'],
        },
        {
            name: 'Aerial Bunched Cable (ABC)',
            description: 'Overhead distribution cables with weather-resistant insulation.',
            image: 'https://images.unsplash.com/photo-1504274066651-8d31a536b11a?w=800&q=80',
            specs: ['XLPE Insulated', 'UV Resistant', 'Reduced Power Theft'],
        },
    ];

    const benefits = ['ISI Marked', 'Fire Retardant Options', 'Custom Lengths', 'Test Certificates'];

    return (
        <ProductListing
            title="Power Cables"
            description="High-quality power transmission cables for LT and HT applications. Suitable for underground, overhead, and industrial power distribution."
            benefits={benefits}
            products={products}
            categoryBackLink="/products/wires-cables"
        />
    );
}
