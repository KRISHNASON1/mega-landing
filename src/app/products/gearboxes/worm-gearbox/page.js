import ProductListing from '@/components/products/ProductListing';

export default function WormGearboxPage() {
    const products = [
        {
            name: 'Aluminum Worm Gearbox',
            description: 'Lightweight aluminum body worm reducers for general purpose applications.',
            image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&q=80',
            specs: ['Size 25 to 90', 'Ratio 5:1 to 100:1', 'Aluminum Housing'],
        },
        {
            name: 'Cast Iron Worm Gearbox',
            description: 'Heavy-duty cast iron worm gear units for industrial applications.',
            image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&q=80',
            specs: ['Size 100 to 250', 'High Torque', 'Multiple Mounting'],
        },
        {
            name: 'Double Reduction Worm Gearbox',
            description: 'Two-stage worm reducers for very high reduction ratios.',
            image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&q=80',
            specs: ['Ratio up to 3600:1', 'Compact Design', 'Self-Locking'],
        },
    ];

    const benefits = ['Self-Locking Option', 'Compact Size', 'Quiet Operation', 'Easy Mounting'];

    return (
        <ProductListing
            title="Worm Gearboxes"
            description="Right-angle worm gear speed reducers for applications requiring high reduction ratios in a compact package."
            benefits={benefits}
            products={products}
            categoryBackLink="/products/gearboxes"
        />
    );
}
