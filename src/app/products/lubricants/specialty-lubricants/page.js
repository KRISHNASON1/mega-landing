import ProductListing from '@/components/products/ProductListing';

export default function SpecialtyLubricantsPage() {
    const products = [
        {
            name: 'Cutting Oil',
            description: 'Neat and soluble cutting oils for machining operations.',
            image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
            specs: ['Neat/Soluble', 'Low Staining', 'Bio-Stable'],
        },
        {
            name: 'Rust Preventive Oil',
            description: 'Temporary rust protection for metal storage and transit.',
            image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
            specs: ['Indoor/Outdoor', 'Thin/Thick Film', 'Easy Removal'],
        },
        {
            name: 'Chain Lubricant',
            description: 'Specialty oils and greases for chain and conveyor lubrication.',
            image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
            specs: ['Drip/Spray Type', 'High Temp Options', 'Food Grade Available'],
        },
        {
            name: 'Release Agent',
            description: 'Mould release agents for rubber and plastic manufacturing.',
            image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
            specs: ['Silicone/Non-Silicone', 'Clean Release', 'No Buildup'],
        },
    ];

    const benefits = ['Application Specific', 'Technical Support', 'Custom Formulation', 'Bulk Supply'];

    return (
        <ProductListing
            title="Specialty Lubricants"
            description="Specialized lubricants and fluids for specific industrial applications including metalworking, rust prevention, and more."
            benefits={benefits}
            products={products}
            categoryBackLink="/products/lubricants"
        />
    );
}
