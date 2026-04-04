import { BreadcrumbSchema } from '@/components/SchemaMarkup';

export const metadata = {
  title: 'Contact MEGA Enterprise | Industrial Materials Quotes',
  description: 'Get an instant quote for industrial materials, fabrication tools, electrical components, and safety equipment. Contact our Taloja MIDC office in Navi Mumbai.',
};

export default function ContactLayout({ children }) {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://megaenterprise.in/' },
        { name: 'Contact', url: 'https://megaenterprise.in/contact' }
      ]} />
      {children}
    </>
  );
}
