import ProductListing from '@/components/products/ProductListing';

export default function BuildingWiresPage() {
    const products = [
        {
            name: 'House Wiring Cable (FR)',
            description: 'Flame retardant PVC insulated wires for residential electrical wiring.',
            image: '/images/Products_preview/Abrasives.jpg',
            specs: ['FR PVC Insulation', '1.0 to 6.0 sq.mm', 'ISI Marked'],
        },
        {
            name: 'FRLS House Wire',
            description: 'Fire retardant low smoke wires for enhanced safety in buildings.',
            image: '/images/Products_preview/Abrasives.jpg',
            specs: ['Low Smoke Emission', 'Halogen Free Option', 'HR Insulation'],
        },
        {
            name: 'Flat Twin + Earth Cable',
            description: 'Flat profile cables for concealed wiring with earth conductor.',
            image: '/images/Products_preview/Abrasives.jpg',
            specs: ['2.5/4.0 sq.mm', 'Easy Stripping', 'Gray Sheath'],
        },
        {
            name: 'Conduit Wiring Cable',
            description: 'Solid/stranded conductor wires designed for conduit installations.',
            image: '/images/Products_preview/Abrasives.jpg',
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
