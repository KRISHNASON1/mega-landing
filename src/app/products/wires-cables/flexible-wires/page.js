import ProductListing from '@/components/products/ProductListing';

export default function FlexibleWiresPage() {
    const products = [
        {
            name: 'Single Core Flexible Wire',
            description: 'Multi-strand copper flexible wires for panel wiring and general purpose.',
            image: '/images/Products_preview/Abrasives.jpg',
            specs: ['0.5 to 400 sq.mm', 'Annealed Copper', 'PVC Insulated'],
        },
        {
            name: 'Multi Core Flexible Cable',
            description: 'Round flexible cables with multiple cores for portable equipment.',
            image: '/images/Products_preview/Abrasives.jpg',
            specs: ['2/3/4 Core', 'Oil Resistant', 'Heavy Duty Sheath'],
        },
        {
            name: 'Submersible Flat Cable',
            description: 'Flat three-core cables designed for submersible pump applications.',
            image: '/images/Products_preview/Abrasives.jpg',
            specs: ['Water Resistant', 'High Flexibility', 'Abrasion Proof'],
        },
        {
            name: 'Welding Cable',
            description: 'Extra flexible rubber cables for welding machines and electrode holders.',
            image: '/images/Products_preview/Abrasives.jpg',
            specs: ['EPR/CPE Sheathed', 'High Current Capacity', 'Extreme Flexibility'],
        },
    ];

    const benefits = ['High Flexibility', 'Stranded Conductor', 'Color Coded', 'Easy Installation'];

    return (
        <ProductListing
            title="Flexible Wires"
            description="High flexibility wires and cables for applications requiring frequent movement, bending, and easy installation."
            benefits={benefits}
            products={products}
            categoryBackLink="/products/wires-cables"
        />
    );
}
