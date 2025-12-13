import ProductListing from '@/components/products/ProductListing';

export default function PlanetaryGearboxPage() {
    const products = [
        {
            name: 'Standard Planetary Gearbox',
            description: 'General-purpose planetary reducers with high power density.',
            image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&q=80',
            specs: ['Inline Design', '1 to 4 Stages', 'Low Backlash'],
        },
        {
            name: 'Precision Planetary Gearbox',
            description: 'High-precision reducers for servo motor and robotics applications.',
            image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&q=80',
            specs: ['< 3 arcmin Backlash', 'Servo Rated', 'High Acceleration'],
        },
        {
            name: 'Heavy Duty Planetary',
            description: 'Industrial planetary gearboxes for extreme torque applications.',
            image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&q=80',
            specs: ['Mining/Steel', 'High Shock Load', 'Extreme Duty'],
        },
    ];

    const benefits = ['Highest Torque/Size', 'Coaxial I/O', 'Multiple Stages', 'Precision Options'];

    return (
        <ProductListing
            title="Planetary Gearboxes"
            description="High power density planetary gear reducers offering exceptional torque in a compact package for precision and industrial applications."
            benefits={benefits}
            products={products}
            categoryBackLink="/products/gearboxes"
        />
    );
}
