import ProductListing from '@/components/products/ProductListing';

export default function StreetLightingPage() {
    const products = [
        {
            name: 'LED Street Light',
            description: 'Energy-efficient street lights for roads and public areas.',
            image: '/images/Products_preview/Abrasives.jpg',
            specs: ['30W to 250W', 'IP66 Rating', 'Type II/III Distribution'],
        },
        {
            name: 'Solar Street Light',
            description: 'Integrated solar LED street lights with lithium battery.',
            image: '/images/Products_preview/Abrasives.jpg',
            specs: ['All-in-One', 'Motion Sensor', 'Dusk to Dawn'],
        },
        {
            name: 'Post Top Light',
            description: 'Decorative pole-mounted lights for gardens and pathways.',
            image: '/images/Products_preview/Abrasives.jpg',
            specs: ['E27/E40 Base', 'Aluminum Body', 'Decorative Design'],
        },
        {
            name: 'Area Light',
            description: 'Large area lighting fixtures for parking lots and campuses.',
            image: '/images/Products_preview/Abrasives.jpg',
            specs: ['150W to 400W', 'Pole Mount', 'Wide Coverage'],
        },
    ];

    const benefits = ['Weatherproof', 'Low Power', 'Long Life', 'Smart Control Option'];

    return (
        <ProductListing
            title="Street & Outdoor Lighting"
            description="Outdoor lighting solutions for streets, highways, parking areas, and public spaces."
            benefits={benefits}
            products={products}
            categoryBackLink="/products/lighting"
        />
    );
}
