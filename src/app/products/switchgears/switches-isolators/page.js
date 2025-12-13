import ProductListing from '@/components/products/ProductListing';

export default function SwitchesIsolatorsPage() {
    const products = [
        {
            name: 'Load Break Switch',
            description: 'On-load switching devices for safe isolation of electrical circuits.',
            image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=80',
            specs: ['63A to 630A', '3P/4P Versions', 'Visible Break'],
        },
        {
            name: 'Isolator Switch',
            description: 'Off-load disconnectors for maintenance isolation purposes.',
            image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=80',
            specs: ['Padlockable', 'Front Operated', 'IP65 Available'],
        },
        {
            name: 'Changeover Switch',
            description: 'Manual and automatic changeover switches for dual supply applications.',
            image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=80',
            specs: ['On-Off-On', 'Center Off', 'Motorized Option'],
        },
        {
            name: 'Rotary Cam Switch',
            description: 'Selector switches for motor control and panel applications.',
            image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=80',
            specs: ['Multi-Position', 'Door Interlock', 'Various Circuits'],
        },
    ];

    const benefits = ['Safe Isolation', 'Lockout-Tagout', 'Visible Break', 'IP Rated'];

    return (
        <ProductListing
            title="Switches & Isolators"
            description="Manual switching and isolation devices for safe operation and maintenance of electrical systems."
            benefits={benefits}
            products={products}
            categoryBackLink="/products/switchgears"
        />
    );
}
