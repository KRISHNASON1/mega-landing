import { BreadcrumbSchema } from '@/components/SchemaMarkup';

export const metadata = {
  title: 'Our Services | Fabrication & Industrial Engineering | MEGA',
  description: 'Expert industrial services by MEGA Enterprise, including structural steel fabrication, electrical jobs, and custom engineering components in Maharashtra.',
};

export default function ServicesLayout({ children }) {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://megaenterprise.in/' },
        { name: 'Services', url: 'https://megaenterprise.in/services' }
      ]} />
      {children}
    </>
  );
}
