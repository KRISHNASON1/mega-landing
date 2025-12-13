import ProductListing from '@/components/products/ProductListing';

export default function SurgeProtectionPage() {
    const products = [
        {
            name: 'Type 1 SPD',
            description: 'Lightning current arresters for main distribution board protection.',
            image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=80',
            specs: ['25kA/50kA Imp', 'Class I Test', 'Outdoor Rated'],
        },
        {
            name: 'Type 2 SPD',
            description: 'Surge arresters for sub-distribution and equipment protection.',
            image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=80',
            specs: ['20kA/40kA In', 'Remote Signaling', 'Pluggable Modules'],
        },
        {
            name: 'Type 3 SPD',
            description: 'Fine protection devices installed close to sensitive equipment.',
            image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=80',
            specs: ['Socket Outlet Type', 'Compact Design', 'LED Indication'],
        },
        {
            name: 'Data Line SPD',
            description: 'Surge protection for communication lines, Ethernet, and coaxial cables.',
            image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=80',
            specs: ['RJ45/Coax/RS485', 'PoE Compatible', 'Fast Response'],
        },
    ];

    const benefits = ['Equipment Protection', 'Fast Clamping', 'Status Indication', 'Coordinated System'];

    return (
        <ProductListing
            title="Surge Protection"
            description="Transient voltage surge suppression devices to protect electrical equipment from lightning and switching surges."
            benefits={benefits}
            products={products}
            categoryBackLink="/products/switchgears"
        />
    );
}
