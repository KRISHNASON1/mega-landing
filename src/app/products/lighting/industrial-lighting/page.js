import ProductListing from '@/components/products/ProductListing';

export default function IndustrialLightingPage() {
    const products = [
        {
            name: 'LED High Bay Light',
            description: 'High-output fixtures for warehouses, factories, and industrial facilities.',
            image: 'https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=800&q=80',
            specs: ['100W to 400W', 'IP65 Rating', '150 lm/W'],
        },
        {
            name: 'LED Flood Light',
            description: 'Area lighting for outdoor industrial spaces and yards.',
            image: 'https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=800&q=80',
            specs: ['50W to 500W', 'Weatherproof', 'Wide Beam'],
        },
        {
            name: 'Flameproof Light',
            description: 'Explosion-proof luminaires for hazardous area installations.',
            image: 'https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=800&q=80',
            specs: ['Zone 1 & 2', 'Ex d IIB/IIC', 'ATEX Certified'],
        },
        {
            name: 'Clean Room Light',
            description: 'IP65 sealed luminaires for pharmaceutical and food industries.',
            image: 'https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=800&q=80',
            specs: ['Dust Tight', 'Washable', 'Uniform Light'],
        },
    ];

    const benefits = ['High Lumen Output', 'Rugged Design', 'Low Maintenance', 'Energy Efficient'];

    return (
        <ProductListing
            title="Industrial Lighting"
            description="Heavy-duty lighting solutions designed for manufacturing, warehousing, and industrial environments."
            benefits={benefits}
            products={products}
            categoryBackLink="/products/lighting"
        />
    );
}
