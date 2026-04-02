import ProductListing from '@/components/products/ProductListing';

export default function PushButtonsIndicatorsPage() {
    const products = [
        {
            name: 'Push Button Station',
            description: 'Industrial push buttons in metal or plastic enclosures.',
            image: '/images/Products_preview/Abrasives.png',
            specs: ['1 to 6 Button', 'Metal/Plastic', 'IP65 Rating'],
        },
        {
            name: 'Pilot Light',
            description: 'LED indicator lamps for panel status indication.',
            image: '/images/Products_preview/Abrasives.png',
            specs: ['22mm/16mm Size', 'LED Type', 'Various Colors'],
        },
        {
            name: 'Selector Switch',
            description: 'Rotary selector switches for mode selection.',
            image: '/images/Products_preview/Abrasives.png',
            specs: ['2/3 Position', 'Maintained/Spring', 'Key Operated Option'],
        },
        {
            name: 'Emergency Stop',
            description: 'Mushroom head emergency stop buttons with positive opening.',
            image: '/images/Products_preview/Abrasives.png',
            specs: ['40mm Head', 'Twist/Key Release', 'NC Contact'],
        },
    ];

    const benefits = ['Industrial Grade', 'Long Life', 'Easy Mounting', 'IP Rated'];

    return (
        <ProductListing
            title="Push Buttons & Indicators"
            description="Control station components including push buttons, pilot lights, and selector switches for panel and machine control."
            benefits={benefits}
            products={products}
            categoryBackLink="/products/panel-accessories"
        />
    );
}
