import ProductListing from '@/components/products/ProductListing';

export default function MetersInstrumentsPage() {
    const products = [
        {
            name: 'Digital Panel Meter',
            description: 'Multifunction digital meters for voltage, current, power, and energy.',
            image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=80',
            specs: ['Single/Three Phase', 'Modbus Communication', 'LCD/LED Display'],
        },
        {
            name: 'Analog Panel Meter',
            description: 'Moving coil ammeter and voltmeter for panel indication.',
            image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=80',
            specs: ['48/72/96 mm Size', 'AC/DC Range', 'Class 1.5 Accuracy'],
        },
        {
            name: 'Energy Meter',
            description: 'kWh meters for energy monitoring and billing applications.',
            image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=80',
            specs: ['Single/Three Phase', 'CT Operated', 'Pulse Output'],
        },
        {
            name: 'Current Transformer',
            description: 'Measuring CTs for ammeter and energy meter applications.',
            image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=80',
            specs: ['Window/Bar Type', '5A Secondary', 'Class 1/0.5'],
        },
    ];

    const benefits = ['Accurate Measurement', 'Easy Installation', 'Communication Options', 'Wide Range'];

    return (
        <ProductListing
            title="Meters & Instruments"
            description="Electrical measuring instruments for monitoring voltage, current, power, and energy in control panels."
            benefits={benefits}
            products={products}
            categoryBackLink="/products/panel-accessories"
        />
    );
}
