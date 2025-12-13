import ProductListing from '@/components/products/ProductListing';

export default function SolarInvertersPage() {
    const products = [
        {
            name: 'On-Grid Solar Inverter',
            description: 'Grid-tied inverters with net metering support for connected installations.',
            image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80',
            specs: ['1kW to 100kW', 'MPPT Tracking', 'Wi-Fi Monitoring'],
        },
        {
            name: 'Off-Grid Solar Inverter',
            description: 'Standalone inverters with battery charging for remote locations.',
            image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80',
            specs: ['1kVA to 10kVA', 'PWM/MPPT Charge', 'LCD Display'],
        },
        {
            name: 'Hybrid Solar Inverter',
            description: 'Combined on-grid and off-grid capability with battery backup.',
            image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80',
            specs: ['Best of Both', 'Priority Settings', 'App Control'],
        },
        {
            name: 'Micro Inverter',
            description: 'Panel-level inverters for module-level power optimization.',
            image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80',
            specs: ['Per Panel', 'Max Output', 'Easy Monitoring'],
        },
    ];

    const benefits = ['High Efficiency', 'Remote Monitoring', 'MPPT Technology', 'Long Warranty'];

    return (
        <ProductListing
            title="Solar Inverters"
            description="Advanced solar inverters for converting DC power to AC, with options for on-grid, off-grid, and hybrid configurations."
            benefits={benefits}
            products={products}
            categoryBackLink="/products/solar"
        />
    );
}
