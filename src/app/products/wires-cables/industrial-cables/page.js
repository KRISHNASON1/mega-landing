import ProductListing from '@/components/products/ProductListing';

export default function IndustrialCablesPage() {
    const products = [
        {
            name: 'Mining Cable',
            description: 'Heavy-duty trailing cables for mining equipment and draglines.',
            image: '/images/Products_preview/Abrasives.png',
            specs: ['Rubber Sheathed', 'Ground Check Conductor', 'High Flexibility'],
        },
        {
            name: 'Crane & Reeling Cable',
            description: 'Flexible cables for cranes, hoists, and festoon systems.',
            image: '/images/Products_preview/Abrasives.png',
            specs: ['Flat/Round Type', 'Oil Resistant', 'High Cycle Life'],
        },
        {
            name: 'VFD/VSD Cable',
            description: 'Shielded cables designed for variable frequency drive applications.',
            image: '/images/Products_preview/Abrasives.png',
            specs: ['Symmetric Design', 'EMI Shielded', 'Low Capacitance'],
        },
        {
            name: 'Fire Survival Cable',
            description: 'Cables that maintain circuit integrity during fire conditions.',
            image: '/images/Products_preview/Abrasives.png',
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
