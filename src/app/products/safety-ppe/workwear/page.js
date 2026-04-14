import ProductListing from '@/components/products/ProductListing';

export default function WorkwearPage() {
    const products = [
        {
            name: 'Cotton Industrial Coverall',
            description: '100% cotton breathable boiler suits designed for general industrial work and comfort.',
            image: '/images/Products_preview/Abrasives.jpg', // Mechanic/Worker
            specs: ['240 GSM Fabric', 'Sanforized/Mercerized', 'Elasticated Waist'],
        },
        {
            name: 'FR (Flame Retardant) Workwear',
            description: 'Inherent flame retardant coveralls for protections against flash fire and electric arc.',
            image: '/images/Products_preview/Abrasives.jpg', // Welder
            specs: ['NFPA 2112 Certified', 'Arc Flash Rated', 'Self-Extinguishing'],
        },
        {
            name: 'High Visibility Jacket',
            description: 'Fluorescent safety jackets with high-performance reflective tapes for low-light visibility.',
            image: '/images/Products_preview/Abrasives.jpg', // Construction worker with jacket
            specs: ['EN 20471 Class 2/3', '3M Reflective Tape', 'Water Repellent'],
        },
        {
            name: 'Acid Resistant Suits',
            description: 'Chemical protective suits treated to repel acid and alkali splashes.',
            image: '/images/Products_preview/Abrasives.jpg', // Hazmat suit vibe
            specs: ['Acid & Alkali Repellent', 'Double Stitched', 'Custom Colors'],
        },
    ];

    const benefits = [
        'Custom Logo Embroidery',
        'Wide Size Range (S-4XL)',
        'Durable Fabric Blends',
        'Bulk Manufacturing'
    ];

    return (
        <ProductListing
            title="Industrial Workwear"
            description="Professional grade workwear combining safety, comfort, and durability. From basic coveralls to specialized FR clothing, we outfit your workforce for success."
            benefits={benefits}
            products={products}
            categoryBackLink="/products/safety-ppe"
        />
    );
}
