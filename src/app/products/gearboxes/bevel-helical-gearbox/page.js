import ProductListing from '@/components/products/ProductListing';

export default function BevelHelicalGearboxPage() {
    const products = [
        {
            name: 'Right Angle Bevel Helical',
            description: 'Bevel-helical gear units for right-angle power transmission.',
            image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&q=80',
            specs: ['90° Output', 'High Efficiency', 'Heavy Duty'],
        },
        {
            name: 'Bevel Planetary Gearbox',
            description: 'Combined bevel and planetary stages for very high torque applications.',
            image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&q=80',
            specs: ['Extreme Torque', 'Compact Size', 'Industrial Grade'],
        },
        {
            name: 'Agitator Drive Gearbox',
            description: 'Specialized gearboxes for mixer and agitator applications.',
            image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&q=80',
            specs: ['Axial Load Capacity', 'Thrust Bearing', 'Seal Options'],
        },
    ];

    const benefits = ['Right Angle Drive', 'High Torque Density', 'Robust Design', 'Multiple Ratios'];

    return (
        <ProductListing
            title="Bevel Helical Gearboxes"
            description="Right-angle bevel-helical gear units combining high efficiency with compact right-angle configurations."
            benefits={benefits}
            products={products}
            categoryBackLink="/products/gearboxes"
        />
    );
}
