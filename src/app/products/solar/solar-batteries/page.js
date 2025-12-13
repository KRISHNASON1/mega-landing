import ProductListing from '@/components/products/ProductListing';

export default function SolarBatteriesPage() {
    const products = [
        {
            name: 'Tubular Lead Acid Battery',
            description: 'Deep cycle tubular batteries for solar and inverter applications.',
            image: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=800&q=80',
            specs: ['100Ah to 200Ah', 'C10 Rating', '5 Year Warranty'],
        },
        {
            name: 'Lithium-Ion Solar Battery',
            description: 'Advanced lithium batteries with BMS for solar storage.',
            image: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=800&q=80',
            specs: ['LiFePO4 Chemistry', '10+ Year Life', 'Lightweight'],
        },
        {
            name: 'Gel Battery',
            description: 'Maintenance-free gel batteries for reliable solar backup.',
            image: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=800&q=80',
            specs: ['VRLA Type', 'No Topping', 'Safe Operation'],
        },
        {
            name: 'Solar Battery Bank',
            description: 'Pre-configured battery banks for larger solar installations.',
            image: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=800&q=80',
            specs: ['48V/96V/120V', 'Rack Mounted', 'BMS Included'],
        },
    ];

    const benefits = ['Deep Cycle Design', 'Long Life', 'Low Maintenance', 'High DoD'];

    return (
        <ProductListing
            title="Solar Batteries"
            description="Energy storage solutions for solar systems, from traditional lead-acid to advanced lithium-ion batteries."
            benefits={benefits}
            products={products}
            categoryBackLink="/products/solar"
        />
    );
}
