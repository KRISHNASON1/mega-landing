import ProductListing from '@/components/products/ProductListing';

export default function EyeProtectionPage() {
    const products = [
        {
            name: 'Safety Spectacles',
            description: 'Lightweight polycarbonate safety glasses with anti-scratch and anti-fog coating.',
            image: '/images/Products_preview/Abrasives.jpg', // Safety glasses
            specs: ['ANSI Z87.1', '99.9% UV Protection', 'Adjustable Temples'],
        },
        {
            name: 'Chemical Splash Goggles',
            description: 'Indirect vented goggles providing hermetic seal against chemical splashes and fumes.',
            image: '/images/Products_preview/Abrasives.jpg', // Goggles
            specs: ['Soft PVC Frame', 'Fits Over Glasses', 'Wide Field of Vision'],
        },
        {
            name: 'Face Shield',
            description: 'Full face protection visor with ratchet headgear for grinding and medical applications.',
            image: '/images/Products_preview/Abrasives.jpg', // Face shield
            specs: ['Polycarbonate Visor', 'Aluminum Bound Edge', 'Impact Resistant'],
        },
        {
            name: 'Welding Goggles',
            description: 'Flip-up welding goggles with IR lenses for gas welding and cutting operations.',
            image: '/images/Products_preview/Abrasives.jpg', // Welding
            specs: ['Shade 5 / Shade 11', 'Indirect Ventilation', 'Soft Comfort Fit'],
        },
    ];

    const benefits = [
        'Optical Class 1 Clarity',
        'Anti-Fog Technology',
        'Comfortable Fit',
        'Prescription Options'
    ];

    return (
        <ProductListing
            title="Eye & Face Protection"
            description="Protect your vision with our high-quality eye protection range. Engineered for clarity, comfort, and impact resistance in harsh industrial environments."
            benefits={benefits}
            products={products}
            categoryBackLink="/products/safety-ppe"
        />
    );
}
