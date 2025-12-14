'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  const productCategories = [
    'Cables & Wires',
    'Electrical Switchgear',
    'LED Lighting',
    'Pipes & Fittings',
    'Safety Equipment',
    'Paints & Coatings',
  ];

  const quickLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Products', href: '/products' },
    { name: 'Contact', href: '/contact' },
    { name: 'Privacy Policy', href: '/privacy' },
  ];

  const services = [
    { name: 'Fabrication', href: '/services/fabrication' },
    { name: 'Electrical Jobs', href: '/services/electrical-jobs' },
  ];

  const contacts = [
    { name: 'NIRMAL DEWASI', phone: '+91 750 6070 157', email: 'nirmal@megaenterprise.in' },
    { name: 'KAILASH DEWASI', phone: '+91 9029652621', email: 'kailash@megaenterprise.in' },
  ];

  const emails = [
    'info@megaenterprise.in',
    'sales@megaenterprise.in',
    'megaenterprise.info@gmail.com',
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-16">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Company Info - Order 1 */}
          <div className="col-span-2 lg:col-span-1 order-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center overflow-hidden bg-white/10">
                <Image src="/logo.png" alt="MEGA Logo" width={48} height={48} className="object-contain" />
              </div>
              <div>
                <h3 className="text-xl font-bold">MEGA</h3>
                <p className="text-sm text-gray-400">Enterprise</p>
              </div>
            </div>
            <p className="hidden lg:block text-gray-400 mb-4 leading-relaxed">
              Your trusted partner in industrial & project materials with 20+ years of excellence.
            </p>
            {/* GST Number Badge */}
            <div className="mb-6 inline-flex items-center px-3 py-1.5 bg-white/10 rounded-lg border border-white/20">
              <span className="text-xs text-gray-400 mr-2">GST:</span>
              <span className="text-sm font-mono font-semibold text-primary-400">27DRGPD9065L1ZA</span>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-primary-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-primary-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-primary-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-primary-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links - Order 2 (Hidden on Mobile) */}
          <div className="hidden lg:block order-2 lg:order-2">
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-primary-500 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile Only: Products & Services Combined Column - Order 2 */}
          <div className="lg:hidden order-2 space-y-8">
            {/* Products */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Product Categories</h4>
              <ul className="space-y-3">
                {productCategories.slice(0, 6).map((category) => (
                  <li key={category}>
                    <Link
                      href="/products"
                      className="text-gray-400 hover:text-primary-500 transition-colors duration-200"
                    >
                      {category}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Services</h4>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service.name}>
                    <Link
                      href={service.href}
                      className="text-gray-400 hover:text-primary-500 transition-colors duration-200"
                    >
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Services - Desktop Only - Order 3 */}
          <div className="hidden lg:block lg:order-3">
            <h4 className="text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-gray-400 hover:text-primary-500 transition-colors duration-200"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products - Desktop Only - Order 4 */}
          <div className="hidden lg:block lg:order-4">
            <h4 className="text-lg font-semibold mb-6">Product Categories</h4>
            <ul className="space-y-3">
              {productCategories.slice(0, 6).map((category) => (
                <li key={category}>
                  <Link
                    href="/products"
                    className="text-gray-400 hover:text-primary-500 transition-colors duration-200"
                  >
                    {category}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info - Order 3 (Mobile Right) / Order 5 (Desktop) */}
          <div className="order-3 lg:order-5">
            <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary-500 mt-1 flex-shrink-0" />
                <span className="text-gray-400 text-sm">
                  Plot No. 57, Opp M.I.D.C Water Tank TALOJA, Navi Mumbai - 410208
                </span>
              </li>
              {/* Contact Persons */}
              {contacts.map((contact) => (
                <li key={contact.name} className="flex items-start space-x-3">
                  <Phone className="w-5 h-5 text-primary-500 mt-1 flex-shrink-0" />
                  <div className="flex flex-col">
                    <span className="text-white font-medium text-sm">{contact.name}</span>
                    <a href={`tel:${contact.phone.replace(/\s/g, '')}`} className="text-gray-400 hover:text-primary-500 transition-colors text-sm">
                      {contact.phone}
                    </a>
                    <a href={`mailto:${contact.email}`} className="text-gray-500 hover:text-primary-500 transition-colors text-xs break-all">
                      {contact.email}
                    </a>
                  </div>
                </li>
              ))}
              {/* Emails */}
              <li className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-primary-500 mt-1 flex-shrink-0" />
                <div className="flex flex-col space-y-1">
                  {emails.map((email) => (
                    <a key={email} href={`mailto:${email}`} className="text-gray-400 hover:text-primary-500 transition-colors text-sm break-all">
                      {email}
                    </a>
                  ))}
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 lg:mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm text-center md:text-left">
              &copy; {new Date().getFullYear()} MEGA Enterprise. All Rights Reserved.
            </p>
            <div className="flex space-x-6">
              <Link href="/privacy" className="text-gray-400 hover:text-primary-500 text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-primary-500 text-sm transition-colors">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
