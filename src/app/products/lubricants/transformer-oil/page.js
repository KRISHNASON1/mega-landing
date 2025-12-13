import ProductListing from '@/components/products/ProductListing';

export default function TransformerOilPage() {
    const products = [
        {
            name: 'Uninhibited Transformer Oil',
            description: 'High-grade mineral insulating oil for power transformers.',
            image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
            specs: ['IS 335 Grade', 'High BDV', 'Low Pour Point'],
        },
        {
            name: 'Inhibited Transformer Oil',
            description: 'Oxidation-inhibited oils for extended transformer life.',
            image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
            specs: ['IEC 60296', 'Antioxidant Added', 'Longer Life'],
        },
        {
            name: 'Synthetic Ester Oil',
            description: 'Biodegradable synthetic esters for eco-sensitive installations.',
            image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
            specs: ['Fire Resistant', 'Biodegradable', 'High Flash Point'],
        },
    ];

    const benefits = ['High Purity', 'Excellent Dielectric', 'Low Moisture', 'Test Certified'];

    return (
        <ProductListing
            title="Transformer Oil"
            description="Premium insulating oils for power transformers, switchgear, and electrical equipment with high dielectric strength."
            benefits={benefits}
            products={products}
            categoryBackLink="/products/lubricants"
        />
    );
}
