import ProductListing from '@/components/products/ProductListing';

export default function StreetLightingPage() {
    const products = [
        {
            name: 'LED Street Light',
            description: 'Energy-efficient street lights for roads and public areas.',
            image: 'https://images.unsplash.com/photo-1507034589631-9433cc6bc453?w=800&q=80',
            specs: ['30W to 250W', 'IP66 Rating', 'Type II/III Distribution'],
        },
        {
            name: 'Solar Street Light',
            description: 'Integrated solar LED street lights with lithium battery.',
            image: 'https://images.unsplash.com/photo-1507034589631-9433cc6bc453?w=800&q=80',
            specs: ['All-in-One', 'Motion Sensor', 'Dusk to Dawn'],
        },
        {
            name: 'Post Top Light',
            description: 'Decorative pole-mounted lights for gardens and pathways.',
            image: 'https://images.unsplash.com/photo-1507034589631-9433cc6bc453?w=800&q=80',
            specs: ['E27/E40 Base', 'Aluminum Body', 'Decorative Design'],
        },
        {
            name: 'Area Light',
            description: 'Large area lighting fixtures for parking lots and campuses.',
            image: 'https://images.unsplash.com/photo-1507034589631-9433cc6bc453?w=800&q=80',
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
