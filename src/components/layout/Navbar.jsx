'use client';

import { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ChevronDown, ChevronRight, Shield, Zap, Power, Settings, Sun, Lightbulb, PenTool, Droplet, Hammer, Wrench } from 'lucide-react';
import GlassSurface from '../ui/GlassSurface';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
  const [isMobileProductsOpen, setIsMobileProductsOpen] = useState(false);
  const [dropdownPosition, setDropdownPosition] = useState({ top: 0, left: 0 });
  const [mounted, setMounted] = useState(false);
  const productsButtonRef = useRef(null);
  const hoverTimeoutRef = useRef(null);

  const productCategories = [
    { name: 'Safety & PPE', href: '/products/safety-ppe', icon: <Shield className="w-4 h-4" /> },
    { name: 'Wires & Cables', href: '/products/wires-cables', icon: <Zap className="w-4 h-4" /> },
    { name: 'Switchgears', href: '/products/switchgears', icon: <Power className="w-4 h-4" /> },
    { name: 'Motors', href: '/products/motors', icon: <Settings className="w-4 h-4" /> },
    { name: 'Gearboxes', href: '/products/gearboxes', icon: <Settings className="w-4 h-4" /> },
    { name: 'Solar', href: '/products/solar', icon: <Sun className="w-4 h-4" /> },
    { name: 'Lighting', href: '/products/lighting', icon: <Lightbulb className="w-4 h-4" /> },
    { name: 'Panel Accessories', href: '/products/panel-accessories', icon: <PenTool className="w-4 h-4" /> },
    { name: 'Lubricants', href: '/products/lubricants', icon: <Droplet className="w-4 h-4" /> },
  ];

  const services = [
    { name: 'Fabrication', href: '/services/fabrication', icon: <Hammer className="w-4 h-4" /> },
    { name: 'Electrical Jobs', href: '/services/electrical-jobs', icon: <Wrench className="w-4 h-4" /> },
  ];

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 50;
      if (scrolled !== isScrolled) {
        setIsScrolled(scrolled);
        if (scrolled) {
          setIsProductsDropdownOpen(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isScrolled]);

  // Update dropdown position when button is hovered
  useEffect(() => {
    if (isProductsDropdownOpen && productsButtonRef.current) {
      const rect = productsButtonRef.current.getBoundingClientRect();
      setDropdownPosition({
        top: rect.bottom + 8,
        left: rect.left - 100,
      });
    }
  }, [isProductsDropdownOpen]);

  const handleMouseEnter = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
    setIsProductsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setIsProductsDropdownOpen(false);
    }, 300);
  };

  // Portal-based dropdown
  const ProductsDropdownPortal = () => {
    if (!mounted || !isProductsDropdownOpen) return null;

    return createPortal(
      <div
        className="fixed z-[9999] animate-in fade-in slide-in-from-top-2 duration-200"
        style={{ top: dropdownPosition.top, left: dropdownPosition.left }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="w-[520px] bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-200/50 overflow-hidden relative">
          {/* Background Logo Pattern */}
          <div
            className="absolute top-1/2 -translate-y-1/2 -right-12 w-[480px] h-[480px] opacity-[0.08] pointer-events-none"
            style={{
              backgroundImage: 'url(/logo-pattern.png)',
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center right',
            }}
          />

          <div className="p-6 relative z-10">
            <div className="grid grid-cols-2 gap-8">
              {/* Products Column */}
              <div>
                <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">Product Categories</h3>
                <div className="space-y-1">
                  {productCategories.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsProductsDropdownOpen(false)}
                      className="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-primary-50 text-gray-700 hover:text-primary-600 transition-all group"
                    >
                      <span className="text-gray-400 group-hover:text-primary-500">{item.icon}</span>
                      <span className="font-medium text-sm">{item.name}</span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Services Column */}
              <div>
                <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">Our Services</h3>
                <div className="space-y-1">
                  {services.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsProductsDropdownOpen(false)}
                      className="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-primary-50 text-gray-700 hover:text-primary-600 transition-all group"
                    >
                      <span className="text-gray-400 group-hover:text-primary-500">{item.icon}</span>
                      <span className="font-medium text-sm">{item.name}</span>
                    </Link>
                  ))}
                </div>

                {/* CTA */}
                <div className="mt-6 p-4 bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl">
                  <p className="text-sm text-gray-600 mb-3">Need help finding the right product?</p>
                  <Link
                    href="/contact"
                    onClick={() => setIsProductsDropdownOpen(false)}
                    className="inline-flex items-center text-sm font-semibold text-primary-600 hover:text-primary-700"
                  >
                    Contact Us <ChevronRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            </div>

            {/* View All Link */}
            <div className="mt-6 pt-4 border-t border-gray-200/50">
              <Link
                href="/products"
                onClick={() => setIsProductsDropdownOpen(false)}
                className="flex items-center justify-center text-sm font-semibold text-primary-600 hover:text-primary-700 py-2"
              >
                View All Products & Services <ChevronRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>,
      document.body
    );
  };

  // Navbar content (shared between glass and non-glass versions)
  const NavbarContent = () => (
    <div className="flex items-center justify-between h-full w-full px-6 lg:px-8">
      {/* Logo */}
      <Link href="/" className="flex items-center space-x-3 group flex-shrink-0">
        <div className="w-12 h-12 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 overflow-hidden">
          <Image src="/logo.png" alt="MEGA Logo" width={48} height={48} className="object-contain w-full h-full" />
        </div>
        <div className="hidden sm:flex flex-col">
          <span className={`text-lg font-bold ${isScrolled ? 'text-gray-900' : 'text-gray-900'}`}>MEGA</span>
          <span className={`text-[10px] -mt-1 ${isScrolled ? 'text-gray-600' : 'text-gray-600'}`}>Enterprise</span>
        </div>
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center space-x-8 flex-shrink-0">
        <Link
          href="/"
          className={`font-bold transition-colors duration-200 relative group py-2 ${isScrolled ? 'text-gray-700 hover:text-primary-600' : 'text-gray-700 hover:text-primary-600'}`}
        >
          Home
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-500 to-primary-700 group-hover:w-full transition-all duration-300"></span>
        </Link>

        {/* Products Dropdown Trigger */}
        <div
          className="relative"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <button
            ref={productsButtonRef}
            className={`flex items-center space-x-1 font-bold transition-colors duration-200 relative group py-2 ${isScrolled ? 'text-gray-700 hover:text-primary-600' : 'text-gray-700 hover:text-primary-600'}`}
          >
            <span>Products</span>
            <ChevronDown className={`w-4 h-4 transition-transform ${isProductsDropdownOpen ? 'rotate-180' : ''}`} />
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-500 to-primary-700 group-hover:w-full transition-all duration-300"></span>
          </button>
        </div>

        {navLinks.slice(1).map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className={`font-bold transition-colors duration-200 relative group py-2 ${isScrolled ? 'text-gray-700 hover:text-primary-600' : 'text-gray-700 hover:text-primary-600'}`}
          >
            {link.name}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-500 to-primary-700 group-hover:w-full transition-all duration-300"></span>
          </Link>
        ))}

        <Link
          href="/contact"
          className="px-5 py-2.5 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-200 text-sm"
        >
          Get Quote
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="md:hidden p-2 rounded-lg hover:bg-gray-100/50 transition-colors"
      >
        {isMobileMenuOpen ? (
          <X className="w-6 h-6 text-gray-900" />
        ) : (
          <Menu className="w-6 h-6 text-gray-900" />
        )}
      </button>
    </div>
  );

  return (
    <>
      {/* Main Navbar - Always visible, glass effect only when scrolled */}
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl transition-all duration-300">
        {isScrolled ? (
          // Glass effect navbar when scrolled
          <GlassSurface
            width="100%"
            height={80}
            borderRadius={44}
            brightness={98}
            opacity={0.85}
            blur={11}
            displace={4}
            backgroundOpacity={0.3}
            saturation={1.1}
            className="shadow-2xl"
          >
            <NavbarContent />
          </GlassSurface>
        ) : (
          // Transparent navbar at top (no background)
          <div className="w-full h-20">
            <NavbarContent />
          </div>
        )}
      </nav>

      {/* Portal-based Dropdown */}
      <ProductsDropdownPortal />

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${isMobileMenuOpen ? 'visible' : 'invisible'}`}
      >
        <div
          className={`absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0'}`}
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>

        <div
          className={`absolute top-0 right-0 h-full w-80 transition-transform duration-300 ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
        >
          <GlassSurface
            width="100%"
            height="100%"
            borderRadius={0}
            brightness={98}
            opacity={0.95}
            blur={20}
            backgroundOpacity={0.4}
            className="shadow-2xl"
          >
            <div className="flex flex-col p-6 space-y-2 mt-24 overflow-y-auto max-h-[calc(100vh-120px)]">
              <Link
                href="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-semibold text-gray-700 hover:text-primary-600 transition-colors py-3 border-b border-gray-200/50"
              >
                Home
              </Link>

              {/* Mobile Products Accordion */}
              <div className="border-b border-gray-200/50">
                <button
                  onClick={() => setIsMobileProductsOpen(!isMobileProductsOpen)}
                  className="w-full flex items-center justify-between text-lg font-semibold text-gray-700 hover:text-primary-600 transition-colors py-3"
                >
                  Products & Services
                  <ChevronDown className={`w-5 h-5 transition-transform ${isMobileProductsOpen ? 'rotate-180' : ''}`} />
                </button>

                {isMobileProductsOpen && (
                  <div className="pb-4 space-y-1">
                    <p className="text-xs font-bold text-gray-400 uppercase px-2 py-1">Products</p>
                    {productCategories.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="flex items-center space-x-3 px-4 py-2 text-gray-600 hover:text-primary-600 hover:bg-gray-50/50 rounded-lg"
                      >
                        {item.icon}
                        <span className="text-sm font-medium">{item.name}</span>
                      </Link>
                    ))}
                    <p className="text-xs font-bold text-gray-400 uppercase px-2 py-1 mt-3">Services</p>
                    {services.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="flex items-center space-x-3 px-4 py-2 text-gray-600 hover:text-primary-600 hover:bg-gray-50/50 rounded-lg"
                      >
                        {item.icon}
                        <span className="text-sm font-medium">{item.name}</span>
                      </Link>
                    ))}
                    <Link
                      href="/products"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="flex items-center px-4 py-2 mt-2 text-primary-600 font-semibold"
                    >
                      View All <ChevronRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                )}
              </div>

              <Link
                href="/about"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-semibold text-gray-700 hover:text-primary-600 transition-colors py-3 border-b border-gray-200/50"
              >
                About
              </Link>
              <Link
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-semibold text-gray-700 hover:text-primary-600 transition-colors py-3 border-b border-gray-200/50"
              >
                Contact
              </Link>
              <Link
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-6 py-3 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-full font-semibold text-center hover:shadow-lg hover:scale-105 transition-all duration-200 mt-4"
              >
                Get Quote
              </Link>
            </div>
          </GlassSurface>
        </div>
      </div>
    </>
  );
};

export default Navbar;
