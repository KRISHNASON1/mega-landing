import ProductListing from '@/components/products/ProductListing';

export default function PowerCablesPage() {
    const products = [
        {
            name: 'LT XLPE Power Cable',
            description: 'Low tension XLPE insulated power cables for underground distribution up to 1.1kV.',
            image: '/images/Products_preview/Abrasives.png',
            specs: ['Copper/Aluminum Conductor', 'XLPE Insulation', '1.1kV Grade'],
        },
        {
            name: 'HT Power Cable',
            description: 'High tension cables for 11kV/22kV/33kV power transmission applications.',
            image: '/images/Products_preview/Abrasives.png',
            specs: ['Up to 33kV Rating', 'Copper Conductor', 'XLPE/PVC Sheathed'],
        },
        {
            name: 'Armoured Power Cable',
            description: 'Steel wire/strip armoured cables for direct burial and harsh environments.',
            image: '/images/Products_preview/Abrasives.png',
            specs: ['Steel Wire Armour', 'Mechanical Protection', 'Underground Laying'],
        },
        {
            name: 'Aerial Bunched Cable (ABC)',
            description: 'Overhead distribution cables with weather-resistant insulation.',
            image: '/images/Products_preview/Abrasives.png',
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
