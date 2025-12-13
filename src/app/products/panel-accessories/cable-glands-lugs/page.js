import ProductListing from '@/components/products/ProductListing';

export default function CableGlandsLugsPage() {
    const products = [
        {
            name: 'Brass Cable Gland',
            description: 'Nickel-plated brass cable glands for armoured and unarmoured cables.',
            image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=80',
            specs: ['A1/A2 Type', 'IP68 Rating', 'Metric/PG Thread'],
        },
        {
            name: 'Double Compression Gland',
            description: 'Industrial grade glands with inner and outer sealing.',
            image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=80',
            specs: ['E1W/CW Type', 'Weatherproof', 'For Armoured Cable'],
        },
        {
            name: 'Copper Lugs',
            description: 'Crimping type copper cable lugs for secure terminations.',
            image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=80',
            specs: ['Electrolytic Copper', '2.5 to 630 sq.mm', 'Tin Plated'],
        },
        {
            name: 'Aluminium Lugs',
            description: 'Bimetallic and aluminium lugs for aluminium cable terminations.',
            image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=80',
            specs: ['Palm Type', 'Various Hole Sizes', 'Crimping Grade'],
        },
    ];

    const benefits = ['IP Rated', 'Quality Material', 'Wide Range', 'Crimping Tools Available'];

    return (
        <ProductListing
            title="Cable Glands & Lugs"
            description="Cable entry and termination accessories for professional panel wiring and equipment connections."
            benefits={benefits}
            products={products}
            categoryBackLink="/products/panel-accessories"
        />
    );
}
