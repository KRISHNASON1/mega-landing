import ProductListing from '@/components/products/ProductListing';

export default function CraneDutyMotorsPage() {
    const products = [
        {
            name: 'Squirrel Cage Crane Motor',
            description: 'High slip motors designed for crane travel and hoist applications.',
            image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&q=80',
            specs: ['S3/S4 Duty', 'High Starting Torque', 'Frequent Starts'],
        },
        {
            name: 'Slip Ring Crane Motor',
            description: 'Wound rotor motors for precise speed and torque control in cranes.',
            image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&q=80',
            specs: ['Resistance Starting', 'Speed Control', 'Heavy Duty'],
        },
        {
            name: 'Flame Proof Crane Motor',
            description: 'Explosion-proof crane motors for hazardous environments.',
            image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&q=80',
            specs: ['Ex Rated', 'ATEX Certified', 'Crane Duty Class'],
        },
    ];

    const benefits = ['High Duty Cycle', 'Robust Construction', 'Frequent Reversals', 'Long Life'];

    return (
        <ProductListing
            title="Crane Duty Motors"
            description="Specialized motors designed for crane and hoist applications with high starting torques and frequent operation cycles."
            benefits={benefits}
            products={products}
            categoryBackLink="/products/motors"
        />
    );
}
