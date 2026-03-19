'use client';

import Link from 'next/link';
import { ChevronRight, Hammer, Wrench } from 'lucide-react';

export default function ProductsPage() {
  const categories = [
    {
      id: 'electrical',
      name: 'Electrical',
      subcategories: [
        { name: 'Wires & Cables', href: '/products/electrical/wires-cables', image: '/images/Products_preview/Wires&Cables.png' },
        { name: 'Switchgears', href: '/products/electrical/switchgears', image: '/images/Products_preview/Switchgears.png' },
        { name: 'Lugs & Glands', href: '/products/electrical/lugs-glands', image: '/images/Products_preview/Lugs&Glands.png' },
        { name: 'Motors & Pumps', href: '/products/electrical/motors', image: '/images/Products_preview/Motors&Pumps.png' },
        { name: 'Fans', href: '/products/electrical/fans', image: '/images/Products_preview/Fans.png' },
        { name: 'LED', href: '/products/electrical/led', image: '/images/Products_preview/LED.png' },
        { name: 'Electrical Panels', href: '/products/electrical/electrical-panels', image: '/images/Products_preview/ElectricalPanels.png' },
        { name: 'Cable Tray (GI/SS/PVC)', href: '/products/electrical/cable-tray', image: '/images/Products_preview/CableTray.png' },
      ],
    },
    {
      id: 'hardware',
      name: 'Hardware',
      subcategories: [
        { name: 'Power Tools & Hand Tools', href: '/products/hardware/power-hand-tools', image: '/images/Products_preview/PowerTools&HandTools.png' },
        { name: 'Tarpaulin (All Types)', href: '/products/hardware/tarpaulin', image: '/images/Products_preview/Tarpaulin.png' },
        { name: 'Hessian Cloths', href: '/products/hardware/hessian-cloths', image: '/images/Products_preview/HessianCloths.png' },
        { name: 'Nuts, Bolts & Fasteners (All Types)', href: '/products/hardware/fasteners', image: '/images/Products_preview/NutsBolts&Fasteners.png' },
        { name: 'Lubricants', href: '/products/hardware/lubricants', image: '/images/Products_preview/Lubricants.png' },
        { name: 'Abrasives', href: '/products/hardware/abrasives', image: '/images/Products_preview/Abrasives.png' },
        { name: 'Water Tanks', href: '/products/hardware/water-tanks', image: '/images/Products_preview/WaterTanks.png' },
      ],
    },
    {
      id: 'construction-chemicals',
      name: 'Construction Chemicals & Paints',
      subcategories: [
        { name: 'Waterproofing', href: '/products/construction-chemicals/waterproofing', image: '/images/Products_preview/waterProofing.png' },
        { name: 'Adhesives & Sealants', href: '/products/construction-chemicals/adhesives-sealants', image: '/images/Products_preview/Adhesives&Sealants.webp' },
        { name: 'Concrete Admixtures', href: '/products/construction-chemicals/concrete-admixtures', image: '/images/Products_preview/ConcreteAdmixtures.png' },
        { name: 'Wall Putty & Primers', href: '/products/construction-chemicals/wall-putty-primers', image: '/images/Products_preview/WallPuttyPrimers.png' },
        { name: 'Interior Paints', href: '/products/construction-chemicals/interior-paints', image: '/images/Products_preview/InteriorPaints.png' },
        { name: 'Exterior Paints', href: '/products/construction-chemicals/exterior-paints', image: '/images/Products_preview/ExteriorPaints.png' },
        { name: 'Wood Coatings', href: '/products/construction-chemicals/wood-coatings', image: '/images/Products_preview/woodPainting.png' },
      ],
    },
    {
      id: 'structural-steel',
      name: 'Structural Steel',
      subcategories: [
        { name: 'TMT Bars', href: '/products/structural-steel/tmt-bars', image: '/images/Products_preview/TMTBars.png' },
        { name: 'MS Angles', href: '/products/structural-steel/ms-angles', image: '/images/Products_preview/MSAngles.png' },
        { name: 'MS Channels', href: '/products/structural-steel/ms-channels', image: '/images/Products_preview/MSChannels.png' },
        { name: 'MS Beams', href: '/products/structural-steel/ms-beams', image: '/images/Products_preview/MSBeams.png' },
        { name: 'MS Plates & Sheets', href: '/products/structural-steel/ms-plates', image: '/images/Products_preview/MSPlates&Sheets.png' },
        { name: 'MS Pipes & Tubes', href: '/products/structural-steel/ms-pipes', image: '/images/Products_preview/MSPipes&Tubes.png' },
        { name: 'Porta Cabins', href: '/products/structural-steel/porta-cabins', image: '/images/Products_preview/PortaCabins.png' },
      ],
    },
    {
      id: 'safety',
      name: 'Safety',
      subcategories: [
        { name: 'Safety Gloves', href: '/products/safety/safety-gloves', image: '/images/Products_preview/SafetyGloves.png' },
        { name: 'Fall Protection', href: '/products/safety/fall-protection', image: '/images/Products_preview/FallProtection.png' },
        { name: 'Eye Protection', href: '/products/safety/eye-protection', image: '/images/Products_preview/EyeProtection.png' },
        { name: 'Fire Safety', href: '/products/safety/fire-safety', image: '/images/Products_preview/FireSafety.png' },
        { name: 'Road Safety', href: '/products/safety/road-safety', image: '/images/Products_preview/RoadSafety.png' },
        { name: 'Respiratory Protection', href: '/products/safety/respiratory-protection', image: '/images/Products_preview/RespiratoryProtection.png' },
        { name: 'Rainy Season Items', href: '/products/safety/rainy-season', image: '/images/Products_preview/RainySeasonItems.png' },
      ],
    },
    {
      id: 'construction-equipment',
      name: 'Construction Equipment',
      subcategories: [
        { name: 'Concrete Mixers', href: '/products/construction-equipment/concrete-mixers', image: '/images/Products_preview/ConcreteMixers.png' },
        { name: 'Scaffolding & Shuttering', href: '/products/construction-equipment/scaffolding', image: '/images/Products_preview/Scaffolding&Shuttering.png' },
        { name: 'Compactors & Rollers', href: '/products/construction-equipment/compactors-rollers', image: '/images/Products_preview/Compactors&Rollers.png' },
        { name: 'Bar Bending & Cutting', href: '/products/construction-equipment/bar-bending-cutting', image: '/images/Products_preview/BarBending&Cutting.png' },
        { name: 'Concrete Vibrators', href: '/products/construction-equipment/concrete-vibrators', image: '/images/Products_preview/ConcreteVibrators.png' },
        { name: 'Welding Machines', href: '/products/construction-equipment/welding-machines', image: '/images/Products_preview/WeldingMachines.png' },
        { name: 'Earth Moving Equipment', href: '/products/construction-equipment/earth-moving', image: '/images/Products_preview/EarthMovingEquipment.png' },
        { name: 'Tower Cranes & Hoists', href: '/products/construction-equipment/tower-cranes', image: '/images/Products_preview/TowerCranes&Hoists.png' },
      ],
    },
    {
      id: 'pipes-fittings',
      name: 'Pipes, Pipe Fittings & Valves',
      subcategories: [
        { name: 'PVC Pipes & Fittings', href: '/products/pipes-fittings/pvc', image: '/images/Products_preview/PVCPipes&Fittings.png' },
        { name: 'UPVC Pipes & Fittings', href: '/products/pipes-fittings/upvc', image: '/images/Products_preview/UPVCPipes&Fittings.png' },
        { name: 'CPVC Pipes & Fittings', href: '/products/pipes-fittings/cpvc', image: '/images/Products_preview/CPVCPipes&Fittings.png' },
        { name: 'HDPE Pipes & Fittings', href: '/products/pipes-fittings/hdpe', image: '/images/Products_preview/HDPEPipes&Fittings.png' },
        { name: 'MS Pipes & Fittings', href: '/products/pipes-fittings/ms', image: '/images/Products_preview/MSPipes&Fittings.png' },
        { name: 'GI Pipes & Fittings', href: '/products/pipes-fittings/gi', image: '/images/Products_preview/GIPipes&Fittings.png' },
        { name: 'SS Pipes & Fittings', href: '/products/pipes-fittings/ss', image: '/images/Products_preview/SSPipes&Fittings.png' },
        { name: 'Valves (All Types)', href: '/products/pipes-fittings/valves', image: '/images/Products_preview/Valves.png' },
        { name: 'Flanges & Gaskets', href: '/products/pipes-fittings/flanges-gaskets', image: '/images/Products_preview/Flanges&Gaskets.png' },
      ],
    },
  ];

  const services = [
    {
      name: 'Fabrication',
      description: 'Custom metal fabrication services tailored to your specific industrial needs. Precision engineering and high-quality materials ensuring durability.',
      icon: <Hammer className="w-10 h-10" />,
      image: '/images/Products_preview/Fabrication.png',
      href: '/services/fabrication',
    },
    {
      name: 'Electrical Jobs',
      description: 'Comprehensive electrical installation, maintenance, and repair services. Expert technicians ensuring safety and compliance with standards.',
      icon: <Wrench className="w-10 h-10" />,
      image: '/images/Products_preview/electrical.png',
      href: '/services/electrical-jobs',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Products <span className="text-primary-600">&</span> Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive industrial solutions including a wide range of products and expert services.
          </p>
        </div>

        <div className="mb-24">
          <div className="flex items-center space-x-4 mb-14">
            <div className="h-px bg-gray-300 flex-1"></div>
            <h2 className="text-3xl font-bold text-gray-800">Product Categories</h2>
            <div className="h-px bg-gray-300 flex-1"></div>
          </div>

          <div className="space-y-16">
            {categories.map((category, catIndex) => (
              <div key={catIndex} id={category.id} className="scroll-mt-32">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-1.5 h-8 bg-primary-600 rounded-full"></div>
                  <h3 className="text-2xl font-bold text-gray-900">{category.name}</h3>
                  <span className="text-sm text-gray-400 font-medium">
                    {category.subcategories.length} {category.subcategories.length === 1 ? 'type' : 'types'}
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                  {category.subcategories.map((sub, subIndex) => (
                    <Link
                      key={subIndex}
                      href={sub.href}
                      className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-primary-200 shadow-sm hover:shadow-lg transition-all duration-300"
                    >
                      <div className="aspect-[4/3] overflow-hidden bg-gray-100">
                        <img src={sub.image} alt={sub.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      </div>
                      <div className="px-4 py-3 flex items-center justify-between">
                        <h4 className="font-semibold text-gray-900 text-sm group-hover:text-primary-700 transition-colors">{sub.name}</h4>
                        <ChevronRight className="w-4 h-4 text-gray-300 group-hover:text-primary-600 group-hover:translate-x-0.5 transition-all shrink-0" />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="flex items-center space-x-4 mb-12">
            <div className="h-px bg-gray-300 flex-1"></div>
            <h2 className="text-3xl font-bold text-gray-800">Our Services</h2>
            <div className="h-px bg-gray-300 flex-1"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {services.map((service, index) => (
              <div key={index} className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                  <img src={service.image} alt={service.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute bottom-6 left-6 z-20 text-white flex items-center space-x-3">
                    <div className="p-3 bg-white/20 backdrop-blur-md rounded-xl border border-white/30">{service.icon}</div>
                    <h3 className="text-3xl font-bold">{service.name}</h3>
                  </div>
                </div>
                <div className="p-8">
                  <p className="text-lg text-gray-600 leading-relaxed mb-6">{service.description}</p>
                  <Link href={service.href} className="block w-full py-4 bg-gray-50 text-gray-900 rounded-xl font-bold hover:bg-primary-600 hover:text-white transition-all duration-300 border border-gray-200 hover:border-transparent text-center">
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
