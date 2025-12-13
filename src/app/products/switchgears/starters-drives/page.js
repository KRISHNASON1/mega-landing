import ProductListing from '@/components/products/ProductListing';

export default function StartersDrivesPage() {
    const products = [
        {
            name: 'DOL Starter',
            description: 'Direct-on-line starters for small motor starting applications.',
            image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=80',
            specs: ['Up to 7.5kW', 'Integrated Overload', 'Sheet Steel Enclosure'],
        },
        {
            name: 'Star-Delta Starter',
            description: 'Reduced voltage starters for larger motors to limit starting current.',
            image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=80',
            specs: ['7.5kW to 150kW', 'Auto Transition', 'Timer Controlled'],
        },
        {
            name: 'Soft Starter',
            description: 'Electronic soft starters for smooth motor acceleration and deceleration.',
            image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=80',
            specs: ['Thyristor Based', 'Programmable Ramp', 'Built-in Bypass'],
        },
        {
            name: 'VFD / VSD',
            description: 'Variable frequency drives for precise speed control and energy savings.',
            image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=80',
            specs: ['0.37kW to 500kW', 'V/F & Vector Control', 'Modbus/Profibus'],
        },
    ];

    const benefits = ['Energy Efficient', 'Soft Starting', 'Speed Control', 'Motor Protection'];

    return (
        <ProductListing
            title="Starters & Drives"
            description="Motor starting solutions from basic DOL starters to advanced variable frequency drives for optimal motor control and energy efficiency."
            benefits={benefits}
            products={products}
            categoryBackLink="/products/switchgears"
        />
    );
}
