import ProductListing from '@/components/products/ProductListing';

export default function CommercialLightingPage() {
    const products = [
        {
            name: 'Office Panel Light',
            description: 'Glare-free LED panels for office false ceiling installations.',
            image: 'https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=800&q=80',
            specs: ['UGR<19', 'Flicker-Free', 'Uniform Light'],
        },
        {
            name: 'Track Light',
            description: 'Adjustable track-mounted spotlights for retail displays.',
            image: 'https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=800&q=80',
            specs: ['COB/SMD LED', 'Adjustable Angle', 'Various Wattages'],
        },
        {
            name: 'Retail Spotlight',
            description: 'High CRI spotlights for product highlighting in showrooms.',
            image: 'https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=800&q=80',
            specs: ['CRI>90', 'Narrow/Wide Beam', 'Accent Lighting'],
        },
        {
            name: 'Troffer Light',
            description: 'Recessed troffers for grid ceiling in commercial buildings.',
            image: 'https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=800&q=80',
            specs: ['2x2 / 2x4', 'Center Basket', 'Easy Install'],
        },
    ];

    const benefits = ['High CRI', 'Glare Control', 'Dimmable', 'Modern Design'];

    return (
        <ProductListing
            title="Commercial Lighting"
            description="Professional lighting solutions for offices, retail stores, hotels, and commercial establishments."
            benefits={benefits}
            products={products}
            categoryBackLink="/products/lighting"
        />
    );
}
