import ProductListing from '@/components/products/ProductListing';

export default function EnclosuresBusbarsPage() {
    const products = [
        {
            name: 'Metal Enclosure',
            description: 'Sheet steel panel enclosures with powder coating.',
            image: '/images/Products_preview/Abrasives.jpg',
            specs: ['Wall/Floor Mount', 'IP55/IP65', 'RAL 7035 Color'],
        },
        {
            name: 'Polyester Enclosure',
            description: 'Non-metallic enclosures for outdoor and corrosive environments.',
            image: '/images/Products_preview/Abrasives.jpg',
            specs: ['GRP/SMC Material', 'UV Resistant', 'Double Insulation'],
        },
        {
            name: 'Copper Busbar',
            description: 'Electrolytic copper busbars for power distribution.',
            image: '/images/Products_preview/Abrasives.jpg',
            specs: ['EC Grade Copper', 'Tin/Silver Plated', 'Custom Sizes'],
        },
        {
            name: 'Busbar Support',
            description: 'Epoxy/DMC insulators for busbar mounting.',
            image: '/images/Products_preview/Abrasives.jpg',
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
