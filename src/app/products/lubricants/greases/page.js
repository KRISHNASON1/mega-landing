import ProductListing from '@/components/products/ProductListing';

export default function GreasesPage() {
    const products = [
        {
            name: 'Multi-Purpose Grease',
            description: 'Lithium-based grease for general industrial lubrication.',
            image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
            specs: ['NLGI Grade 2/3', 'Lithium Thickener', 'EP Additives'],
        },
        {
            name: 'High Temperature Grease',
            description: 'Synthetic grease for high-temperature bearing applications.',
            image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
            specs: ['Up to 200°C', 'Synthetic Base', 'Long Relubrication'],
        },
        {
            name: 'Calcium Grease',
            description: 'Water-resistant grease for wet and outdoor applications.',
            image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
            specs: ['Excellent Water Resistance', 'Calcium Thickener', 'Marine Grade'],
        },
        {
            name: 'Moly Grease',
            description: 'Molybdenum disulfide grease for heavy load applications.',
            image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
            specs: ['MoS2 Additive', 'Extreme Pressure', 'Shock Load Protection'],
        },
    ];

    const benefits = ['Wide Temp Range', 'Water Resistant', 'EP Protection', 'Long Life'];

    return (
        <ProductListing
            title="Industrial Greases"
            description="Multi-purpose and specialty greases for bearings, joints, and heavy-duty industrial lubrication applications."
            benefits={benefits}
            products={products}
            categoryBackLink="/products/lubricants"
        />
    );
}
