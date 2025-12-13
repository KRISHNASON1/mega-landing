import ProductListing from '@/components/products/ProductListing';

export default function BuildingWiresPage() {
    const products = [
        {
            name: 'House Wiring Cable (FR)',
            description: 'Flame retardant PVC insulated wires for residential electrical wiring.',
            image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=80',
            specs: ['FR PVC Insulation', '1.0 to 6.0 sq.mm', 'ISI Marked'],
        },
        {
            name: 'FRLS House Wire',
            description: 'Fire retardant low smoke wires for enhanced safety in buildings.',
            image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
            specs: ['Low Smoke Emission', 'Halogen Free Option', 'HR Insulation'],
        },
        {
            name: 'Flat Twin + Earth Cable',
            description: 'Flat profile cables for concealed wiring with earth conductor.',
            image: 'https://images.unsplash.com/photo-1504274066651-8d31a536b11a?w=800&q=80',
            specs: ['2.5/4.0 sq.mm', 'Easy Stripping', 'Gray Sheath'],
        },
        {
            name: 'Conduit Wiring Cable',
            description: 'Solid/stranded conductor wires designed for conduit installations.',
            image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800&q=80',
            specs: ['Solid Conductor', 'Easy Pull-through', 'Color Coded'],
        },
    ];

    const benefits = ['ISI Certified', 'Fire Safe', '20+ Year Life', 'Easy Installation'];

    return (
        <ProductListing
            title="Building Wires"
            description="Safe and reliable house wiring solutions for residential and commercial buildings. Designed for long life and fire safety."
            benefits={benefits}
            products={products}
            categoryBackLink="/products/wires-cables"
        />
    );
}
