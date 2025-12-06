'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { gsap } from 'gsap';
import GlassSurface from '../ui/GlassSurface';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isStaticMenuOpen, setIsStaticMenuOpen] = useState(false);
  const navRef = useRef(null);
  const staticLogoRef = useRef(null);
  const staticMenuRef = useRef(null);
  const staticDropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 100;
      if (scrolled !== isScrolled) {
        setIsScrolled(scrolled);
        // Close static menu when scrolling
        if (scrolled) {
          setIsStaticMenuOpen(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isScrolled]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        staticDropdownRef.current &&
        !staticDropdownRef.current.contains(event.target) &&
        staticMenuRef.current &&
        !staticMenuRef.current.contains(event.target)
      ) {
        setIsStaticMenuOpen(false);
      }
    };

    if (isStaticMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isStaticMenuOpen]);

  useEffect(() => {
    if (!navRef.current) return;

    // Animate floating navbar (shows when scrolled)
    if (isScrolled) {
      gsap.to(navRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.5,
        ease: 'power3.out',
      });
    } else {
      gsap.to(navRef.current, {
        y: -100,
        opacity: 0,
        duration: 0.3,
        ease: 'power3.in',
      });
    }

    // Animate static elements (hide when scrolled)
    if (staticLogoRef.current && staticMenuRef.current) {
      if (isScrolled) {
        gsap.to([staticLogoRef.current, staticMenuRef.current], {
          y: -100,
          opacity: 0,
          duration: 0.3,
          ease: 'power3.in',
        });
      } else {
        gsap.to([staticLogoRef.current, staticMenuRef.current], {
          y: 0,
          opacity: 1,
          duration: 0.5,
          ease: 'power3.out',
          delay: 0.1,
        });
      }
    }
  }, [isScrolled]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Products', href: '/products' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <>
      {/* Static Logo - Top Left (shows when NOT scrolled) */}
      <div
        ref={staticLogoRef}
        className="fixed top-6 left-6 z-50 transition-all duration-300"
      >
        <Link href="/" className="flex items-center space-x-4 group">
          <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 overflow-hidden p-2 shadow-xl">
            <Image
              src="/logo.png"
              alt="MEGA Logo"
              width={64}
              height={64}
              className="object-contain w-full h-full"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-bold text-gray-900 drop-shadow-sm">MEGA</span>
            <span className="text-sm text-gray-700 -mt-1 font-medium">Enterprise</span>
          </div>
        </Link>
      </div>

      {/* Static Menu Bubble - Top Right (shows when NOT scrolled) */}
      <div
        ref={staticMenuRef}
        className="fixed top-6 right-6 z-50 transition-all duration-300"
      >
        <GlassSurface
          width={70}
          height={70}
          borderRadius={20}
          brightness={98}
          opacity={0.85}
          blur={11}
          displace={2}
          backgroundOpacity={0.3}
          saturation={1.1}
          className="shadow-xl"
        >
          <button
            onClick={() => setIsStaticMenuOpen(!isStaticMenuOpen)}
            className="w-full h-full flex items-center justify-center hover:scale-110 transition-transform duration-300"
            aria-label="Toggle Menu"
          >
            {isStaticMenuOpen ? (
              <X className="w-6 h-6 text-gray-900" />
            ) : (
              <Menu className="w-6 h-6 text-gray-900" />
            )}
          </button>
        </GlassSurface>

        {/* Dropdown Menu */}
        {isStaticMenuOpen && (
          <div
            ref={staticDropdownRef}
            className="absolute top-20 right-0 w-56 animate-in fade-in slide-in-from-top-2 duration-300"
          >
            <GlassSurface
              width="100%"
              height="auto"
              borderRadius={20}
              brightness={98}
              opacity={0.9}
              blur={15}
              displace={2}
              backgroundOpacity={0.4}
              saturation={1.1}
              className="shadow-2xl"
            >
              <div className="flex flex-col py-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsStaticMenuOpen(false)}
                    className="px-6 py-3 text-gray-700 hover:text-primary-600 hover:bg-gray-50/50 font-semibold transition-all duration-200 border-b border-gray-200/30 last:border-b-0"
                  >
                    {link.name}
                  </Link>
                ))}
                <Link
                  href="/contact"
                  onClick={() => setIsStaticMenuOpen(false)}
                  className="mx-4 mt-3 px-6 py-2.5 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-full font-semibold text-center hover:shadow-lg hover:scale-105 transition-all duration-200"
                >
                  Get Quote
                </Link>
              </div>
            </GlassSurface>
          </div>
        )}
      </div>

      {/* Floating Glass Navbar - Only appears on scroll */}
      <nav
        ref={navRef}
        className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl opacity-0"
        style={{ transform: 'translateX(-50%) translateY(-100px)' }}
      >
        <GlassSurface
          width="100%"
          height={80}
          borderRadius={44}
          brightness={98}
          opacity={0.85}
          blur={11}
          displace={2}
          backgroundOpacity={0.3}
          saturation={1.1}
          className="shadow-2xl"
        >
          <div className="flex items-center justify-between h-full w-full px-6 lg:px-8">
            {/* Logo - Left aligned */}
            <Link href="/" className="flex items-center space-x-3 group flex-shrink-0">
              <div className="w-11 h-11 bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 overflow-hidden p-1.5">
                {/*
                  Replace this with your actual logo:
                  <Image src="/logo.png" alt="MEGA Logo" width={44} height={44} className="object-contain w-full h-full" />
                */}
                <Image src="/logo.png" alt="MEGA Logo" width={54} height={54} className="object-contain w-full h-full" />
                {/* <span className="text-white font-bold text-lg">M</span> */}
              </div>
              <div className="hidden sm:flex flex-col">
                <span className="text-lg font-bold text-gray-900">MEGA</span>
                <span className="text-[10px] text-gray-600 -mt-1">Enterprise</span>
              </div>
            </Link>

            {/* Desktop Navigation - Right aligned */}
            <div className="hidden md:flex items-center space-x-8 flex-shrink-0">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-gray-700 hover:text-primary-600 font-bold transition-colors duration-200 relative group py-2"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-500 to-primary-700 group-hover:w-full transition-all duration-300"></span>
                </Link>
              ))}

              {/* CTA Button */}
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
        </GlassSurface>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
          isMobileMenuOpen ? 'visible' : 'invisible'
        }`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
            isMobileMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>

        {/* Menu Panel */}
        <div
          className={`absolute top-0 right-0 h-full w-72 transition-transform duration-300 ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
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
            <div className="flex flex-col p-6 space-y-6 mt-24">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-semibold text-gray-700 hover:text-primary-600 transition-colors py-2 border-b border-gray-200/50"
                >
                  {link.name}
                </Link>
              ))}
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
