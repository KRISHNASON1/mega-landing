import ProductListing from '@/components/products/ProductListing';

export default function IndustrialCablesPage() {
    const products = [
        {
            name: 'Mining Cable',
            description: 'Heavy-duty trailing cables for mining equipment and draglines.',
            image: 'https://images.unsplash.com/photo-1504274066651-8d31a536b11a?w=800&q=80',
            specs: ['Rubber Sheathed', 'Ground Check Conductor', 'High Flexibility'],
        },
        {
            name: 'Crane & Reeling Cable',
            description: 'Flexible cables for cranes, hoists, and festoon systems.',
            image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=80',
            specs: ['Flat/Round Type', 'Oil Resistant', 'High Cycle Life'],
        },
        {
            name: 'VFD/VSD Cable',
            description: 'Shielded cables designed for variable frequency drive applications.',
            image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
            specs: ['Symmetric Design', 'EMI Shielded', 'Low Capacitance'],
        },
        {
            name: 'Fire Survival Cable',
            description: 'Cables that maintain circuit integrity during fire conditions.',
            image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800&q=80',
            specs: ['2 Hour Fire Rating', 'IEC 60331', 'Mica Tape Insulation'],
        },
    ];

    const benefits = ['Heavy Duty', 'Harsh Environment', 'Long Life', 'Custom Manufacturing'];

    return (
        <ProductListing
            title="Industrial Cables"
            description="Specialized cables engineered for demanding industrial environments including mining, manufacturing, and process industries."
            benefits={benefits}
            products={products}
            categoryBackLink="/products/wires-cables"
        />
    );
}
