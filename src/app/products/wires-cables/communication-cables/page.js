import ProductListing from '@/components/products/ProductListing';

export default function CommunicationCablesPage() {
    const products = [
        {
            name: 'LAN Cable (Cat5e/Cat6)',
            description: 'High-speed ethernet cables for networking and data centers.',
            image: '/images/Products_preview/Abrasives.png',
            specs: ['Cat5e/Cat6/Cat6a', 'UTP/STP Options', '1Gbps to 10Gbps'],
        },
        {
            name: 'Coaxial Cable',
            description: 'RF cables for CCTV, cable TV, and antenna installations.',
            image: '/images/Products_preview/Abrasives.png',
            specs: ['RG6/RG11/RG59', '75 Ohm Impedance', 'Low Loss'],
        },
        {
            name: 'Telephone Cable',
            description: 'Multi-pair cables for EPABX and telephone installations.',
            image: '/images/Products_preview/Abrasives.png',
            specs: ['2 to 100 Pairs', 'Jelly Filled', 'Armoured Options'],
        },
        {
            name: 'Fiber Optic Cable',
            description: 'Single mode and multi-mode optical fiber for high-bandwidth communication.',
            image: '/images/Products_preview/Abrasives.png',
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
