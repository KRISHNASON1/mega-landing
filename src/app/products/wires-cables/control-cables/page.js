import ProductListing from '@/components/products/ProductListing';

export default function ControlCablesPage() {
    const products = [
        {
            name: 'PVC Control Cable',
            description: 'Multi-core PVC insulated control cables for industrial instrumentation.',
            image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
            specs: ['2 to 61 Cores', 'Copper Conductor', 'Screened/Unscreened'],
        },
        {
            name: 'XLPE Control Cable',
            description: 'Cross-linked polyethylene insulated cables for higher temperature ratings.',
            image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=80',
            specs: ['90°C Operating Temp', 'Low Smoke', 'Flame Retardant'],
        },
        {
            name: 'Instrumentation Cable',
            description: 'Precision cables for process control and measurement with shielding.',
            image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80',
            specs: ['Individual/Overall Screen', 'Twisted Pairs', 'Low Capacitance'],
        },
        {
            name: 'Thermocouple Extension Cable',
            description: 'Temperature sensing extension cables matched to thermocouple types.',
            image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80',
            specs: ['J/K/T/E/R/S Types', 'Compensating Grade', 'High Accuracy'],
        },
    ];

    const benefits = ['EMI Shielded', 'Oil Resistant', 'Custom Configurations', 'Reliable Signal'];

    return (
        <ProductListing
            title="Control Cables"
            description="Multi-core control and instrumentation cables designed for industrial automation, process control, and signal transmission applications."
            benefits={benefits}
            products={products}
            categoryBackLink="/products/wires-cables"
        />
    );
}
