import ProductListing from '@/components/products/ProductListing';

export default function TerminalBlocksPage() {
    const products = [
        {
            name: 'Screw Type Terminal Block',
            description: 'Standard DIN rail mounted screw clamp terminal blocks.',
            image: '/images/Products_preview/Abrasives.jpg',
            specs: ['2.5 to 240 sq.mm', 'Grey/Blue/Green-Yellow', 'Touch Safe'],
        },
        {
            name: 'Spring Clamp Terminal',
            description: 'Tool-free spring loaded terminal blocks for quick wiring.',
            image: '/images/Products_preview/Abrasives.jpg',
            specs: ['Push-In Type', 'Vibration Proof', 'Compact Size'],
        },
        {
            name: 'Fuse Terminal Block',
            description: 'Terminal blocks with integrated fuse holder for circuit protection.',
            image: '/images/Products_preview/Abrasives.jpg',
            specs: ['5x20mm Fuse', 'LED Indication', 'Easy Fuse Change'],
        },
        {
            name: 'Disconnect Terminal',
            description: 'Knife disconnect terminals for easy circuit testing and isolation.',
            image: '/images/Products_preview/Abrasives.jpg',
            specs: ['Knife Blade', 'Test Point', 'Multiple Levels'],
        },
    ];

    const benefits = ['DIN Rail Mount', 'Clear Marking', 'Tool-Free Options', 'Wide Range'];

    return (
        <ProductListing
            title="Terminal Blocks"
            description="DIN rail terminal blocks and connectors for organized and reliable panel wiring connections."
            benefits={benefits}
            products={products}
            categoryBackLink="/products/panel-accessories"
        />
    );
}
