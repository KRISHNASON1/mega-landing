import ProductListing from '@/components/products/ProductListing';

export default function IndustrialOilsPage() {
    const products = [
        {
            name: 'Hydraulic Oil',
            description: 'Premium anti-wear hydraulic fluids for industrial hydraulic systems.',
            image: '/images/Products_preview/Abrasives.jpg',
            specs: ['ISO VG 32/46/68', 'Anti-Wear Additives', 'High VI Index'],
        },
        {
            name: 'Gear Oil',
            description: 'EP gear oils for enclosed gear drives and gearboxes.',
            image: '/images/Products_preview/Abrasives.jpg',
            specs: ['ISO VG 220/320/460', 'Extreme Pressure', 'Synthetic Options'],
        },
        {
            name: 'Compressor Oil',
            description: 'Specialized oils for air and refrigeration compressors.',
            image: '/images/Products_preview/Abrasives.jpg',
            specs: ['Reciprocating/Rotary', 'High Oxidation Stability', 'Long Drain'],
        },
        {
            name: 'Turbine Oil',
            description: 'Premium turbine oils for steam and gas turbine lubrication.',
            image: '/images/Products_preview/Abrasives.jpg',
            specs: ['R&O Inhibited', 'Excellent Demulsibility', 'Long Life'],
        },
    ];

    const benefits = ['OEM Approved', 'Extended Drain', 'High Performance', 'Bulk Supply'];

    return (
        <ProductListing
            title="Industrial Oils"
            description="Premium quality industrial lubricants for hydraulic systems, gearboxes, compressors, and general machinery."
            benefits={benefits}
            products={products}
            categoryBackLink="/products/lubricants"
        />
    );
}
