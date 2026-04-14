import ProductListing from '@/components/products/ProductListing';

export default function SolarPanelsPage() {
    const products = [
        {
            name: 'Monocrystalline Solar Panel',
            description: 'High-efficiency mono PERC panels for maximum power generation.',
            image: '/images/Products_preview/Abrasives.jpg',
            specs: ['400W to 550W', '21%+ Efficiency', '25 Year Warranty'],
        },
        {
            name: 'Polycrystalline Solar Panel',
            description: 'Cost-effective poly panels for budget-conscious installations.',
            image: '/images/Products_preview/Abrasives.jpg',
            specs: ['320W to 400W', 'Blue Color', 'Good Performance'],
        },
        {
            name: 'Bifacial Solar Panel',
            description: 'Dual-sided panels capturing light from both surfaces.',
            image: '/images/Products_preview/Abrasives.jpg',
            specs: ['Up to 30% More Output', 'Glass-Glass', 'Ideal for Ground Mount'],
        },
        {
            name: 'Half-Cut Cell Panel',
            description: 'Advanced half-cut cell technology for reduced losses.',
            image: '/images/Products_preview/Abrasives.jpg',
            specs: ['Lower Hot Spots', 'Better Shade Tolerance', 'Higher Output'],
        },
    ];

    const benefits = ['Tier 1 Brands', 'Long Warranty', 'High Efficiency', 'BIS Approved'];

    return (
        <ProductListing
            title="Solar Panels"
            description="Premium quality photovoltaic modules from leading manufacturers for residential, commercial, and utility-scale solar installations."
            benefits={benefits}
            products={products}
            categoryBackLink="/products/solar"
        />
    );
}
