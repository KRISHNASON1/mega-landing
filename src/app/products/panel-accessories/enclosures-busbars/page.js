import ProductListing from '@/components/products/ProductListing';

export default function EnclosuresBusbarsPage() {
    const products = [
        {
            name: 'Metal Enclosure',
            description: 'Sheet steel panel enclosures with powder coating.',
            image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=80',
            specs: ['Wall/Floor Mount', 'IP55/IP65', 'RAL 7035 Color'],
        },
        {
            name: 'Polyester Enclosure',
            description: 'Non-metallic enclosures for outdoor and corrosive environments.',
            image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=80',
            specs: ['GRP/SMC Material', 'UV Resistant', 'Double Insulation'],
        },
        {
            name: 'Copper Busbar',
            description: 'Electrolytic copper busbars for power distribution.',
            image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=80',
            specs: ['EC Grade Copper', 'Tin/Silver Plated', 'Custom Sizes'],
        },
        {
            name: 'Busbar Support',
            description: 'Epoxy/DMC insulators for busbar mounting.',
            image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=80',
            specs: ['High Voltage Grade', 'Self-Extinguishing', 'Various Heights'],
        },
    ];

    const benefits = ['Custom Sizes', 'High Quality', 'Powder Coated', 'Complete Range'];

    return (
        <ProductListing
            title="Enclosures & Busbars"
            description="Panel enclosures, busbars, and mounting accessories for professional control panel construction."
            benefits={benefits}
            products={products}
            categoryBackLink="/products/panel-accessories"
        />
    );
}
