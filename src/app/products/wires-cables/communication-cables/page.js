import ProductListing from '@/components/products/ProductListing';

export default function CommunicationCablesPage() {
    const products = [
        {
            name: 'LAN Cable (Cat5e/Cat6)',
            description: 'High-speed ethernet cables for networking and data centers.',
            image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80',
            specs: ['Cat5e/Cat6/Cat6a', 'UTP/STP Options', '1Gbps to 10Gbps'],
        },
        {
            name: 'Coaxial Cable',
            description: 'RF cables for CCTV, cable TV, and antenna installations.',
            image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800&q=80',
            specs: ['RG6/RG11/RG59', '75 Ohm Impedance', 'Low Loss'],
        },
        {
            name: 'Telephone Cable',
            description: 'Multi-pair cables for EPABX and telephone installations.',
            image: 'https://images.unsplash.com/photo-1516321165247-4aa89a48be28?w=800&q=80',
            specs: ['2 to 100 Pairs', 'Jelly Filled', 'Armoured Options'],
        },
        {
            name: 'Fiber Optic Cable',
            description: 'Single mode and multi-mode optical fiber for high-bandwidth communication.',
            image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&q=80',
            specs: ['SM/MM Fiber', '6 to 96 Core', 'Aerial/Duct Type'],
        },
    ];

    const benefits = ['High Bandwidth', 'Low Attenuation', 'EMI Immune', 'Future Ready'];

    return (
        <ProductListing
            title="Communication Cables"
            description="Data and telecommunication cables for building networks, security systems, and high-speed internet infrastructure."
            benefits={benefits}
            products={products}
            categoryBackLink="/products/wires-cables"
        />
    );
}
