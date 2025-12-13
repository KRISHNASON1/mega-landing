import ProductListing from '@/components/products/ProductListing';

export default function BrakeMotorsPage() {
    const products = [
        {
            name: 'DC Brake Motor',
            description: 'Motors with fail-safe DC electromagnetic brakes for quick stopping.',
            image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&q=80',
            specs: ['Spring Applied', 'Fail-Safe Design', '< 0.5s Stop Time'],
        },
        {
            name: 'AC Brake Motor',
            description: 'AC operated brake motors for non-critical braking applications.',
            image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&q=80',
            specs: ['AC Coil Operation', 'Simple Wiring', 'Cost Effective'],
        },
        {
            name: 'Conical Rotor Brake Motor',
            description: 'Self-braking motors with conical rotor design for hoists.',
            image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&q=80',
            specs: ['No External Brake', 'Built-in Braking', 'Hoist Duty'],
        },
    ];

    const benefits = ['Quick Stopping', 'Fail-Safe', 'Manual Release', 'Adjustable Torque'];

    return (
        <ProductListing
            title="Brake Motors"
            description="Electric motors with integrated brakes for applications requiring precise stopping and holding."
            benefits={benefits}
            products={products}
            categoryBackLink="/products/motors"
        />
    );
}
