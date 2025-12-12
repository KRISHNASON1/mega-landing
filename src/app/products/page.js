'use client';

import { useState } from 'react';
import { Search, Filter } from 'lucide-react';

export default function ProductsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    'All Products',
    'Cables & Wires',
    'Electrical Switchgear',
    'LED Lighting',
    'Pipes & Fittings',
    'Safety Equipment',
    'Paints & Coatings',
    'Power Tools',
    'Valves & Fittings',
    'Welding Materials',
  ];

  const products = [
    {
      name: 'Industrial Cables',
      category: 'Cables & Wires',
      description: 'High-quality industrial cables for various applications',
      brands: ['Polycab', 'Havells', 'Finolex'],
      image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=400&q=80',
    },
    {
      name: 'LED Tube Lights',
      category: 'LED Lighting',
      description: 'Energy-efficient LED lighting solutions',
      brands: ['OSRAM', 'Philips', 'Syska'],
      image: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=400&q=80',
    },
    {
      name: 'Safety Helmets',
      category: 'Safety Equipment',
      description: 'Industrial safety helmets and protective gear',
      brands: ['Karam', '3M', 'Honeywell'],
      image: 'https://images.unsplash.com/photo-1581578017093-cd30b0e417bf?w=400&q=80',
    },
    {
      name: 'MCB & RCCB',
      category: 'Electrical Switchgear',
      description: 'Circuit breakers and protection devices',
      brands: ['Siemens', 'L&T', 'Schneider'],
      image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=400&q=80',
    },
    {
      name: 'PVC Pipes',
      category: 'Pipes & Fittings',
      description: 'Durable PVC pipes and fittings',
      brands: ['Supreme', 'Astral', 'Prince'],
      image: 'https://images.unsplash.com/photo-1581244277943-fe4a9c777189?w=400&q=80',
    },
    {
      name: 'Angle Grinder',
      category: 'Power Tools',
      description: 'Professional-grade power tools',
      brands: ['Bosch', 'Makita', 'Dewalt'],
      image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?w=400&q=80',
    },
  ];

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || product.category.toLowerCase() === selectedCategory.toLowerCase();
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Our <span className="bg-gradient-to-r from-primary-600 to-primary-700 bg-clip-text text-transparent">Product Catalog</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Browse through our extensive range of 1000+ products from leading brands
          </p>
        </div>

        {/* Search & Filter */}
        <div className="mb-12">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200 p-6">
            <div className="flex flex-col md:flex-row gap-4">
              {/* Search */}
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all bg-white/50"
                />
              </div>

              {/* Category Filter */}
              <div className="relative">
                <Filter className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="pl-12 pr-8 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all bg-white/50 appearance-none cursor-pointer"
                >
                  {categories.map((category) => (
                    <option key={category} value={category === 'All Products' ? 'all' : category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl transform hover:scale-105 transition-all duration-300 cursor-pointer h-[420px]"
              style={{
                boxShadow: `
                  0 2px 4px rgba(255, 255, 255, 0.9) inset,
                  0 -2px 4px rgba(0, 0, 0, 0.05) inset,
                  0 8px 24px rgba(0, 0, 0, 0.08),
                  0 2px 8px rgba(0, 0, 0, 0.04),
                  0 0 0 1px rgba(255, 255, 255, 0.8),
                  0 0 0 2px rgba(0, 0, 0, 0.03)
                `,
                background: 'linear-gradient(145deg, #ffffff 0%, #fafafa 100%)',
              }}
            >
              <div className="relative h-full w-full overflow-hidden rounded-3xl flex flex-col">
                {/* Image */}
                <div className="h-48 overflow-hidden rounded-t-3xl">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="flex-1 p-6 flex flex-col">
                  <span className="text-xs font-semibold text-primary-600 mb-2">
                    {product.category}
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 mb-4 flex-1">
                    {product.description}
                  </p>

                  {/* Brands */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {product.brands.map((brand) => (
                      <span
                        key={brand}
                        className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-xs font-medium"
                      >
                        {brand}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <button className="w-full py-2 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-lg font-semibold hover:shadow-lg transition-all">
                    Get Quote
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-xl text-gray-600">No products found matching your search.</p>
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-lg border border-gray-200 p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Can't Find What You're Looking For?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              We have 1000+ products in stock. Contact us for custom requirements.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
