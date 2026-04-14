import { ProductSchema, BreadcrumbSchema } from '@/components/SchemaMarkup';

export async function generateMetadata() {
  return {
    title: 'Industrial Lubricants | Hydraulic Oils & Greases | MEGA Enterprise',
    description: 'High performance industrial lubricants, hydraulic oils, gear oils, and specialty greases for heavy machinery and engineering applications.',
    openGraph: {
      title: 'Industrial Lubricants | MEGA Enterprise',
      description: 'High performance industrial lubricants, hydraulic oils, gear oils.',
      images: ['/images/Products_preview/Lubricants.jpg'],
    },
  };
}

export default function LubricantsLayout({ children }) {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://megaenterprise.in/' },
        { name: 'Products', url: 'https://megaenterprise.in/products' },
        { name: 'Lubricants', url: 'https://megaenterprise.in/products/lubricants' }
      ]} />
      <ProductSchema 
        name="Industrial Lubricants Collection"
        description="High performance industrial lubricants, hydraulic oils, gear oils, and specialty greases for heavy machinery."
        image="https://megaenterprise.in/images/Products_preview/Lubricants.jpg"
        brand="Castrol & Shell via MEGA Enterprise"
      />
      {children}
    </>
  );
}
