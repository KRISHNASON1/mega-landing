import { BreadcrumbSchema } from '@/components/SchemaMarkup';

export const metadata = {
  title: 'About MEGA Enterprise | GeM Approved Industrial Supplier',
  description: 'Learn about MEGA Enterprise, a trusted B2B partner for structural steel, electrical accessories, and factory automation equipment in Navi Mumbai.',
};

export default function AboutLayout({ children }) {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://megaenterprise.in/' },
        { name: 'About', url: 'https://megaenterprise.in/about' }
      ]} />
      {children}
    </>
  );
}
