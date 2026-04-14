import ProductListing from '@/components/products/ProductListing';

export default function ControlCablesPage() {
    const products = [
        {
            name: 'PVC Control Cable',
            description: 'Multi-core PVC insulated control cables for industrial instrumentation.',
            image: '/images/Products_preview/Abrasives.jpg',
            specs: ['2 to 61 Cores', 'Copper Conductor', 'Screened/Unscreened'],
        },
        {
            name: 'XLPE Control Cable',
            description: 'Cross-linked polyethylene insulated cables for higher temperature ratings.',
            image: '/images/Products_preview/Abrasives.jpg',
            specs: ['90°C Operating Temp', 'Low Smoke', 'Flame Retardant'],
        },
        {
            name: 'Instrumentation Cable',
            description: 'Precision cables for process control and measurement with shielding.',
            image: '/images/Products_preview/Abrasives.jpg',
            specs: ['Individual/Overall Screen', 'Twisted Pairs', 'Low Capacitance'],
        },
        {
            name: 'Thermocouple Extension Cable',
            description: 'Temperature sensing extension cables matched to thermocouple types.',
            image: '/images/Products_preview/Abrasives.jpg',
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
