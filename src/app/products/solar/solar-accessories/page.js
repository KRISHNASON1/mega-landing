import ProductListing from '@/components/products/ProductListing';

export default function SolarAccessoriesPage() {
    const products = [
        {
            name: 'Solar Mounting Structure',
            description: 'Aluminum and GI mounting structures for rooftop installations.',
            image: '/images/Products_preview/Abrasives.png',
            specs: ['Roof / Ground Mount', 'Hot-Dip Galvanized', 'Adjustable Tilt'],
        },
        {
            name: 'DC Solar Cable',
            description: 'UV-resistant DC cables for panel-to-inverter connections.',
            image: '/images/Products_preview/Abrasives.png',
            specs: ['4 sq.mm / 6 sq.mm', 'TUV Certified', '25 Year Life'],
        },
        {
            name: 'MC4 Connectors',
            description: 'IP67 rated solar connectors for reliable DC connections.',
            image: '/images/Products_preview/Abrasives.png',
            specs: ['Male/Female Pairs', 'Crimping Tool', 'Waterproof'],
        },
        {
            name: 'DC Combiner Box',
            description: 'String combiner boxes with DC disconnects and fuses.',
            image: '/images/Products_preview/Abrasives.png',
            specs: ['4/6/8 String', 'SPD Included', 'IP65 Rating'],
        },
    ];

    const benefits = ['Quality Components', 'Long Life', 'Easy Installation', 'Complete BOS'];

    return (
        <ProductListing
            title="Solar Accessories"
            description="Balance of system components including mounting structures, cables, connectors, and protection devices for solar installations."
            benefits={benefits}
            products={products}
            categoryBackLink="/products/solar"
        />
    );
}
