import { BreadcrumbSchema } from '@/components/SchemaMarkup';

export const metadata = {
  title: 'Industrial Products Catalog | MEGA Enterprise',
  description: 'Browse our extensive catalog of industrial materials, safety equipment, electrical switchgears, structural steel, and fabrication tools.',
};

export default function ProductsLayout({ children }) {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://megaenterprise.in/' },
        { name: 'Products', url: 'https://megaenterprise.in/products' }
      ]} />
      {children}
    </>
  );
}
