import ProductListing from '@/components/products/ProductListing';

export default function InductionMotorsPage() {
    const products = [
        {
            name: 'LT Squirrel Cage Motor',
            description: 'Standard efficiency three-phase induction motors for general purpose applications.',
            image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&q=80',
            specs: ['0.37kW to 315kW', 'IE1/IE2/IE3', '2/4/6/8 Pole'],
        },
        {
            name: 'Flameproof Motor',
            description: 'Explosion-proof motors for hazardous area installations.',
            image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&q=80',
            specs: ['Ex d IIB T4', 'Zone 1 & 2', 'ATEX Certified'],
        },
        {
            name: 'High Efficiency Motor (IE3)',
            description: 'Premium efficiency motors for energy savings and reduced operating costs.',
            image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&q=80',
            specs: ['IE3 Standard', 'Lower Losses', 'Quick Payback'],
        },
        {
            name: 'Slip Ring Motor',
            description: 'Wound rotor motors for high starting torque and speed control.',
            image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&q=80',
            specs: ['External Resistance', 'High Starting Torque', 'Rotor Control'],
        },
    ];

    const benefits = ['IS/IEC Standards', 'Long Life Bearings', 'IP55 Protection', 'Class F Insulation'];

    return (
        <ProductListing
            title="Induction Motors"
            description="Three-phase AC induction motors for industrial drives, pumps, fans, compressors, and general machinery applications."
            benefits={benefits}
            products={products}
            categoryBackLink="/products/motors"
        />
    );
}
