import ProductListing from '@/components/products/ProductListing';

export default function GearedMotorsPage() {
    const products = [
        {
            name: 'Helical Geared Motor',
            description: 'Inline helical gear motors for smooth, quiet operation and high efficiency.',
            image: '/images/Products_preview/Abrasives.png',
            specs: ['0.12kW to 45kW', 'Up to 200:1 Ratio', 'IEC Mounting'],
        },
        {
            name: 'Worm Geared Motor',
            description: 'Right-angle worm gear motors for compact installations.',
            image: '/images/Products_preview/Abrasives.png',
            specs: ['Self-Locking', 'High Reduction', 'Hollow Shaft Option'],
        },
        {
            name: 'Bevel Helical Geared Motor',
            description: 'Right-angle bevel-helical gear units for high torque applications.',
            image: '/images/Products_preview/Abrasives.png',
            specs: ['Right Angle Drive', 'High Efficiency', 'Modular Design'],
        },
        {
            name: 'Planetary Geared Motor',
            description: 'Compact planetary gearboxes with high power density.',
            image: '/images/Products_preview/Abrasives.png',
            specs: ['Coaxial Input/Output', 'High Torque/Size', 'Precision Grade'],
        },
    ];

    const benefits = ['Complete Unit', 'Multiple Ratios', 'Compact Design', 'Long Service Life'];

    return (
        <ProductListing
            title="Geared Motors"
            description="Integrated motor and gearbox units for applications requiring reduced speed and increased torque."
            benefits={benefits}
            products={products}
            categoryBackLink="/products/motors"
        />
    );
}
