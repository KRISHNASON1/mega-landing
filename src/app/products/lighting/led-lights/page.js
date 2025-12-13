import ProductListing from '@/components/products/ProductListing';

export default function LedLightsPage() {
    const products = [
        {
            name: 'LED Bulb',
            description: 'Energy-efficient LED bulbs for general household and commercial lighting.',
            image: 'https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=800&q=80',
            specs: ['7W to 23W', 'Warm/Cool White', 'B22/E27 Base'],
        },
        {
            name: 'LED Tube Light',
            description: 'T8/T5 LED tube lights to replace traditional fluorescent tubes.',
            image: 'https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=800&q=80',
            specs: ['18W/20W/22W', '4ft Length', 'Direct Replacement'],
        },
        {
            name: 'LED Panel Light',
            description: 'Slim LED panels for false ceiling and office lighting.',
            image: 'https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=800&q=80',
            specs: ['2x2 / 1x4 / 2x4', 'Edge-Lit/Back-Lit', 'Flicker-Free'],
        },
        {
            name: 'LED Downlight',
            description: 'Recessed LED downlights for residential and commercial spaces.',
            image: 'https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=800&q=80',
            specs: ['6W to 24W', 'Various Cut-outs', 'Dimmable Option'],
        },
    ];

    const benefits = ['Energy Saving', 'Long Life', 'No UV Emission', 'BIS Approved'];

    return (
        <ProductListing
            title="LED Lights"
            description="Energy-efficient LED lighting products for homes, offices, and commercial spaces with significant energy savings."
            benefits={benefits}
            products={products}
            categoryBackLink="/products/lighting"
        />
    );
}
