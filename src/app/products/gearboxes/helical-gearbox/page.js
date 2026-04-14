import ProductListing from '@/components/products/ProductListing';

export default function HelicalGearboxPage() {
    const products = [
        {
            name: 'Inline Helical Gearbox',
            description: 'Coaxial helical gear reducers with input and output on same axis.',
            image: '/images/Products_preview/Abrasives.jpg',
            specs: ['High Efficiency >96%', 'Hardened Gears', 'IEC Motor Adapter'],
        },
        {
            name: 'Parallel Shaft Helical Gearbox',
            description: 'Offset helical gearboxes with parallel input and output shafts.',
            image: '/images/Products_preview/Abrasives.jpg',
            specs: ['Multiple Stages', 'High Torque', 'Foot/Flange Mount'],
        },
        {
            name: 'Shaft Mounted Helical Gearbox',
            description: 'Direct shaft mounting reducers for conveyor applications.',
            image: '/images/Products_preview/Abrasives.jpg',
            specs: ['No Foundation', 'Torque Arm', 'Easy Installation'],
        },
    ];

    const benefits = ['High Efficiency', 'Low Noise', 'Long Life', 'Modular Design'];

    return (
        <ProductListing
            title="Helical Gearboxes"
            description="Precision helical gear reducers offering high efficiency and smooth, quiet operation for demanding industrial applications."
            benefits={benefits}
            products={products}
            categoryBackLink="/products/gearboxes"
        />
    );
}
