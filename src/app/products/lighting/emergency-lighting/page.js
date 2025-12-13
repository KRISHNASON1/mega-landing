import ProductListing from '@/components/products/ProductListing';

export default function EmergencyLightingPage() {
    const products = [
        {
            name: 'Emergency Exit Light',
            description: 'Illuminated exit signs with battery backup for safe evacuation.',
            image: 'https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=800&q=80',
            specs: ['Maintained/Non-Maintained', '3 Hour Backup', 'Self-Test'],
        },
        {
            name: 'Emergency Bulkhead',
            description: 'Wall-mounted emergency lights for corridors and stairways.',
            image: 'https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=800&q=80',
            specs: ['LED Technology', 'IP65 Option', 'Easy Maintenance'],
        },
        {
            name: 'Emergency Conversion Kit',
            description: 'Battery backup kit to convert normal lights to emergency lights.',
            image: 'https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=800&q=80',
            specs: ['Universal Fit', 'Li-Ion Battery', '90 Min Backup'],
        },
        {
            name: 'Central Battery System',
            description: 'Centralized emergency lighting power supply systems.',
            image: 'https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=800&q=80',
            specs: ['Central Monitoring', 'Large Buildings', 'Auto-Test'],
        },
    ];

    const benefits = ['Life Safety', 'Code Compliant', 'Low Maintenance', 'Reliable Backup'];

    return (
        <ProductListing
            title="Emergency Lighting"
            description="Life safety lighting equipment for emergency egress and evacuation during power failures."
            benefits={benefits}
            products={products}
            categoryBackLink="/products/lighting"
        />
    );
}
