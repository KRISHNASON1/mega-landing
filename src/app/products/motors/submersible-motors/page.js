import ProductListing from '@/components/products/ProductListing';

export default function SubmersibleMotorsPage() {
    const products = [
        {
            name: 'Water Filled Submersible Motor',
            description: 'Submersible motors with water lubrication for borewell applications.',
            image: '/images/Products_preview/Abrasives.jpg',
            specs: ['1HP to 100HP', 'Deep Well', 'Stainless Steel'],
        },
        {
            name: 'Oil Filled Submersible Motor',
            description: 'Oil-cooled submersible motors for industrial pump applications.',
            image: '/images/Products_preview/Abrasives.jpg',
            specs: ['High Efficiency', 'Longer Life', 'Heavy Duty'],
        },
        {
            name: 'Sewage Submersible Motor',
            description: 'Motors designed for sewage and effluent pump applications.',
            image: '/images/Products_preview/Abrasives.jpg',
            specs: ['Non-Clog Design', 'Cast Iron Body', 'IP68 Protection'],
        },
    ];

    const benefits = ['Fully Submersible', 'Corrosion Resistant', 'Long Service Life', 'Energy Efficient'];

    return (
        <ProductListing
            title="Submersible Motors"
            description="Motors designed for underwater operation in borewell, sewage, and industrial pump applications."
            benefits={benefits}
            products={products}
            categoryBackLink="/products/motors"
        />
    );
}
