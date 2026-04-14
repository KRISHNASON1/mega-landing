import ProductListing from '@/components/products/ProductListing';

export default function SafetyWearPage() {
    const products = [
        {
            name: 'Safety Helmet',
            description: 'High-density polyethylene (HDPE) shell helmets with 6-point suspension system.',
            image: '/images/Products_preview/Abrasives.jpg', // Hard hat
            specs: ['IS 2925 Certified', 'Ratchet Adjustment', 'Ventilated Options'],
        },
        {
            name: 'Reflective Safety Vest',
            description: 'Polyester mesh safety vests with 2-inch reflective tape for high visibility.',
            image: '/images/Products_preview/Abrasives.jpg', // Vest
            specs: ['Green / Orange', 'Zipper / Velcro Front', 'ID Pocket'],
        },
        {
            name: 'Ear Muffs',
            description: 'Industrial ear muffs for high decibel noise attenuation in factories and airports.',
            image: '/images/Products_preview/Abrasives.jpg', // Ear protection
            specs: ['SNR 30dB+', 'Padded Headband', 'Dielectric Design'],
        },
        {
            name: 'Safety Rain Coat',
            description: 'Heavy duty PVC/Polyester rain coats with reflective strips for monsoon work.',
            image: '/images/Products_preview/Abrasives.jpg', // Rain gear vibe
            specs: ['100% Waterproof', 'Sealed Seams', 'Breathable Vents'],
        },
    ];

    const benefits = [
        'Head-to-Toe Safety',
        'Brand Customization',
        'Bulk Availability',
        'Standards Compliant'
    ];

    return (
        <ProductListing
            title="General Safety Wear"
            description="Essential safety accessories and apparel for everyday protection. Ensure compliance and safety for your entire workforce with our reliable gear."
            benefits={benefits}
            products={products}
            categoryBackLink="/products/safety-ppe"
        />
    );
}
