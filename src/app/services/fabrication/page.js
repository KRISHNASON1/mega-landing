'use client';

import Link from 'next/link';
import { ArrowLeft, Phone, CheckCircle2, Wrench, Settings, Factory } from 'lucide-react';

/* ───────── Dummy images per project ───────── */
const DUMMY_IMAGES = {
    1: 'https://placehold.co/900x400/4A628A/DFF2EB?text=OHE+Outriggers+–+Railway',
    2: 'https://placehold.co/900x400/3A4F6F/DFF2EB?text=Industrial+Shed+–+EOT+Crane',
    3: 'https://placehold.co/900x400/4A628A/DFF2EB?text=HVAC+Frames+–+Cold+Chain',
    4: 'https://placehold.co/900x400/3A4F6F/DFF2EB?text=SS304+Contra+Mixer',
    5: 'https://placehold.co/900x400/4A628A/DFF2EB?text=Portable+Office+Cabins',
    6: 'https://placehold.co/900x400/3A4F6F/DFF2EB?text=Porta+Cabins+–+MMRDA',
    7: 'https://placehold.co/900x400/4A628A/DFF2EB?text=Base+Plate+Assemblies',
    8: 'https://placehold.co/900x400/3A4F6F/DFF2EB?text=Anchor+Bolt+Assemblies',
};

/* ───────── Dummy Image Block ───────── */
const ProjectImage = ({ id }) => (
    <img
        src={DUMMY_IMAGES[id]}
        alt="Project image placeholder"
        className="w-full h-64 sm:h-80 object-cover rounded-2xl"
    />
);

/* ───────── Single Article Section ───────── */
function ProjectArticle({ project }) {
    return (
        <article className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
            {/* Image */}
            <div className="p-6 sm:p-8 pb-0 sm:pb-0">
                <ProjectImage id={project.id} />
            </div>

            {/* Content */}
            <div className="p-6 sm:p-10 pt-6 sm:pt-8">
                {/* Title Row */}
                <div className="flex items-start gap-4 mb-6">
                    <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary-50 text-primary-700 font-bold text-lg shrink-0 mt-1">
                        {project.id}
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 leading-tight">
                        {project.title}
                    </h2>
                </div>

                {/* Description */}
                <div className="mb-8">
                    <h3 className="flex items-center text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">
                        Project Description
                    </h3>
                    <p className="text-gray-700 leading-relaxed text-[15px]">{project.description}</p>
                </div>

                {/* Materials */}
                <div className="mb-8">
                    <h3 className="flex items-center text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">
                        <Wrench className="w-4 h-4 mr-2 text-primary-500" />
                        Materials Used
                    </h3>
                    <p className="text-gray-700 leading-relaxed text-[15px] pl-6">{project.materials}</p>
                </div>

                {/* Technical Specifications */}
                <div className="mb-8">
                    <h3 className="flex items-center text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">
                        <Settings className="w-4 h-4 mr-2 text-primary-500" />
                        Technical Specifications
                    </h3>

                    {/* Table (for project 5) */}
                    {project.specsTable && (
                        <div className="overflow-x-auto mb-4 pl-6">
                            <table className="w-full text-sm border-collapse">
                                <thead>
                                    <tr className="bg-gray-50">
                                        <th className="text-left px-4 py-3 font-semibold text-gray-900 border border-gray-200 rounded-tl-lg">Unit</th>
                                        <th className="text-left px-4 py-3 font-semibold text-gray-900 border border-gray-200">Size</th>
                                        <th className="text-left px-4 py-3 font-semibold text-gray-900 border border-gray-200 rounded-tr-lg">Key Features</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {project.specsTable.map((row, i) => (
                                        <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}>
                                            <td className="px-4 py-3 text-gray-700 border border-gray-200 font-medium whitespace-nowrap">{row.unit}</td>
                                            <td className="px-4 py-3 text-gray-700 border border-gray-200 whitespace-nowrap">{row.size}</td>
                                            <td className="px-4 py-3 text-gray-600 border border-gray-200">{row.features}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}

                    {/* Spec list items */}
                    {project.specs && project.specs.length > 0 && (
                        <ul className="space-y-3 pl-6">
                            {project.specs.map((spec, i) => (
                                <li key={i} className="flex items-start">
                                    <CheckCircle2 className="w-5 h-5 text-success-500 mr-3 shrink-0 mt-0.5" />
                                    <span className="text-gray-700 leading-relaxed text-[15px]">{spec}</span>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>

                {/* Scale / Quantity */}
                <div className="bg-gray-50 rounded-2xl p-5 sm:p-6">
                    <h3 className="flex items-center text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">
                        <Factory className="w-4 h-4 mr-2 text-primary-500" />
                        Scale / Quantity
                    </h3>
                    <p className="text-gray-900 font-semibold text-lg pl-6">{project.scale}</p>
                </div>
            </div>
        </article>
    );
}

/* ───────── Data ───────── */
const projects = [
    {
        id: 1,
        title: 'Hot-Dip Galvanized OHE Outriggers – WDFCC CTP-11 Railway Project',
        description: 'Fabrication and manual erection of hot-dip galvanized outriggers for Over-Head Equipment (OHE) foundations along the Western Dedicated Freight Corridor (WDFCC) viaduct sections at Kalamboli and Kopar, Maharashtra. Work was executed as a balance works contract under Tata Projects Limited, the prime contractor for DFCCIL. All work was carried out strictly as per approved drawings and site engineer instructions.',
        materials: 'Hot-dip galvanized steel (outrigger assemblies)',
        specs: [
            'Complete supply, fabrication, and erection scope including all manpower and resources',
            'Hot-dip galvanizing finish for corrosion protection',
            'Executed across active railway viaduct sites at Kalamboli and Kopar',
        ],
        scale: '50 Metric Tons total (split across two work phases of 19.5 MT and 30.5 MT)',
    },
    {
        id: 2,
        title: 'MS Industrial Shed Complex with EOT Crane – Taloja MIDC',
        description: 'Complete design and build of a heavy-duty industrial steel shed complex for Montex Forge at Plot C-12, Taloja MIDC. The scope covered the full structural shell — including columns, rafters, bracings, and purlins — along with GI roofing, MS compound gates, GI drainage gutters, surface painting, and the supply and commissioning of a 5-ton EOT crane. This was a turnkey fabrication and erection project for an industrial manufacturing facility.',
        materials: 'MS structural steel (IS:2062), 0.50mm GI colour-coated roofing sheets, GI box gutters, MS hollow section for gates',
        specs: [
            'Structural steel shed: columns, rafters, bracings, purlins, all connections per approved drawings',
            'GI roofing: 0.50mm colour-coated sheets with Z-purlins, J-bolts, ridge covers, and end flashings',
            'MS compound gates: heavy-duty sliding/swing type, square hollow section frame, MS flat bar infill, guide wheels, locking arrangement, primer + enamel paint finish',
            'GI box gutters: 200×150mm size with 100mm dia GI downpipes, hangers, brackets, endcaps',
            'Surface treatment: mechanical wire brushing + 2 coats red oxide zinc chromate primer + 2 coats synthetic enamel paint',
            'EOT Crane: 5-ton capacity, double girder, end carriages, crab unit, wire rope hoist, pendant-operated controls, end stops, rails, all electrical fittings as per IS:3177',
        ],
        scale: '12.5 MT structural steel, 420 SQM GI roofing, 85 RMT GI gutters, 2 nos. compound gates, 1 no. 5-ton EOT crane',
    },
    {
        id: 3,
        title: 'MS Structural Frames for HVAC Cooling & Condensing Units – Coldstar Logistics, Pune',
        description: 'Fabrication and site erection of custom MS structural frames for industrial cooling units and condensing units at Coldstar Logistics\' cold storage facility at Bhamboli, Tal-Khed, Pune. Work involved precision cutting, welding, and fitment at site. An additional scope covered structural shed fabrication with GI sheet fitting and erection. This project supported the expansion of cold chain infrastructure in Maharashtra.',
        materials: 'Mild Steel (MS) structural sections',
        specs: [
            'Frames for cooling units and condensing units fabricated and erected individually',
            'Complete cutting, welding, and site fitment',
            'GI sheet cladding on structural shed',
        ],
        scale: '78 nos. cooling unit frames, 67 nos. condensing unit frames, 244 sq.ft structural shed with GI sheet',
    },
    {
        id: 4,
        title: 'Custom SS304 Contra Mixer – 3,000 Litre Capacity',
        description: 'Engineering and fabrication of a high-specification 3,000-litre industrial contra mixer for Sathvaro Coatings Pvt. Ltd. at their Patalganga, MIDC facility. The machine features a triple-drive configuration with FLP (flameproof) motors and a comprehensive electrical control panel with ABB drives, designed for chemical processing in a hazardous area environment. All product-contact parts are fabricated in SS304.',
        materials: 'SS304 (all contact parts), Mild Steel (non-contact frame); ABB make VFD drives; Schneider/Siemens contactors and MCCBs; Polycab/Finolex cables; Anchor make electrical switches',
        specs: [
            'Vessel: 1500mm Dia × 2000mm H, SS304, 8mm shell, 10mm bottom dish, 2" flush bottom Y-type valve, MS jacket',
            'Agitator shaft: 100mm Dia SS304 — 30 HP FLP motor (Crompton make)',
            'Screw shaft: 80mm Dia SS304 — 30 HP FLP motor (Crompton make)',
            'Cowl blade shaft: 80mm Dia SS304 — 60 HP FLP motor (Crompton make)',
            'Mixing tools: Butterfly/cowl blades, agitator, screw shaft',
            'Control panel: Floor-mounted, 16 SWG MS body, 14 SWG doors, powder-coated Siemens Grey, dual drive console with RPM meters, emergency stop, MCCB, contactors, lids up/down control, designed for non-hazardous area installation',
            'Nozzles: 3" × 2 nos., 18" main hole, 8" vent',
            'Discharge: 3" Y-type flush bottom valve',
            'Finish: 220 grit internal finish',
            'Working capacity: 3,000 kg; total vessel volume: 3,250 litres',
        ],
        scale: '1 no. complete custom contra mixer unit (with panel and drives)',
    },
    {
        id: 5,
        title: 'MS Portable Office Cabins & Store Containers – Afcons Infrastructure, Bhiwandi–Mulund Water Tunnel Project',
        description: 'Fabrication and supply of a range of customized MS portable office cabins and store containers for Afcons Infrastructure\'s Water Conveyance Tunnel project (Kasheli–Bhiwandi to Mulund). Units were fully fitted with electrical wiring, workstations, AC points, LED lighting, and weather-resistant industrial paint finishes with Afcons branding. All cabins featured 19mm plywood flooring with vinyl overlay and were delivered ready-to-use at site.',
        materials: 'MS fabricated structure, 19mm plywood flooring with vinyl, Polycab/KEI cables and wiring, Anchor electrical switches, Syska/Bajaj/Philips LED fixtures, industrial grade exterior paint (white and sky blue)',
        specsTable: [
            { unit: 'Mobile Office Container', size: "20' × 8'", features: 'Overhead storage cabinet, 2 AC points, MS Godrej door closer, 3 windows, 5 × 20W LED lights, 3 wall fans, fully insulated' },
            { unit: 'Store Container', size: "20' × 8' × 8'", features: 'Leak-proof, 19mm plywood flooring, sky-blue + white Afcons livery' },
            { unit: 'Office Container', size: "40' × 10'", features: 'HOD cabin (half), L-shape furniture, 3 AC points (1.5T each), 15 workstations with drawers and revolving chairs, 4 windows, 6 ceiling fans, 8 × 20W LED lights, RJ45 internet sockets at all workstations' },
            { unit: 'Office Cabin', size: "10' × 8' × 8'", features: '1 AC point, 2 windows, 2 ceiling fans, 2 × 20W LEDs, RJ45 sockets, fully insulated' },
        ],
        specs: [
            'All units: fully insulated walls and roof, internal conduit wiring, Anchor switches, RJ45 data sockets, weather-resistant industrial paint, strong vibration-free base structure',
        ],
        scale: '1 no. 40ft office container, 2 nos. 20ft containers (office + store), 1 no. 10ft office cabin (across multiple Afcons site deployments)',
    },
    {
        id: 6,
        title: 'Porta Cabins & MS Toilet Units – Afcons Infrastructure, MMRDA Creek Bridge Project',
        description: 'Fabrication and supply of MS porta cabins and toilet units for Afcons Infrastructure\'s Kasarvadavli–Kharbav Creek Bridge project under MMRDA. Units were delivered as a complete set covering office, utility, and sanitation needs for the site team. All units were built to Afcons specifications and delivered with test and warranty certificates.',
        materials: 'MS fabricated structure (HSN 86090000 / 73082020)',
        specs: [
            'Porta Office Cabin: 20\' × 10\' × 8.6"',
            'Utility Cabin: 10\' × 8\' × 8.6"',
            'MS Toilet Porta Cabins: 4\' × 4\' × 8.6" (2 nos.)',
        ],
        scale: '4 nos. total units (1 × 20ft office cabin, 1 × 10ft cabin, 2 × toilet cabins)',
    },
    {
        id: 7,
        title: 'GI & MS Base Plate Assemblies for Railway Tunnel (OHE / Cable Tray Brackets) – WDFCC CTP-11',
        description: 'Precision fabrication and supply of a large series of galvanized iron and mild steel base plate assemblies used for OHE bracket and cable tray mounting within railway tunnels for the WDFCC CTP-11 project, Tata Projects Limited. Assemblies were fabricated to tight dimensional drawings with drilled, cut, and galvanized finishes, including angle brackets, lug plates, flat sections, and large GI viaduct anchor plates. Multiple repeat orders confirm ongoing quality and delivery performance.',
        materials: 'GI (hot-dip galvanized) plate — IS:7010 / 73011000; MS flat and angle sections — IS:2062; ISA 50×50×6 angle; MS base plates; GI flat bar',
        specs: [
            'Standard MS base plate assembly (small): ISA 50×50×6 angle, 150mm length, 2 nos. 12mm dia holes + MS base plate 100×100×10mm',
            'Standard MS base plate assembly (long): ISA 50×50×6 angle, 300mm length, 4 nos. 12mm dia holes + MS base plate 100×100×10mm',
            'GI flat bracket: 50×6mm GI flat, 8 nos. 14mm dia holes, M10×40 fasteners',
            'MS lug plate assembly: MS lug plate 100×75×10mm, 1 no. 14mm dia hole + MS base plate 100×100×10mm',
            'Large GI viaduct anchor plate (Type A): GI plate 890×890×22mm — with cutting, bending, galvanizing, holes for anchor fasteners',
            'Large GI viaduct anchor plate (Type B): GI plate 22mm×890mm×825mm — with cutting, galvanizing, anchor fastener holes',
            'Steel base plate 40mm: Heavy-duty single plate per approved drawing',
            'GI base plate (narrow): 22mm×100mm×825mm — cutting, galvanizing, anchor holes',
        ],
        scale: 'Across multiple supply orders — approximately 5,000+ nos. standard base plate assemblies, 75 nos. large GI viaduct anchor plates (890mm class), and 60 nos. heavy 40mm steel base plates',
    },
    {
        id: 8,
        title: 'MS Anchor Bolt Assemblies for Winch Foundation – WDFCC CTP-11 Tunnel',
        description: 'Fabrication of custom-engineered MS anchor bolt assemblies for winch machine foundations within the WDFCC CTP-11 railway tunnel. Each anchor was fabricated to a specific drawing with long thread length, double plain washers, and high-grade nuts — a critical structural fastening application requiring precise dimensional accuracy and Grade 10.9 nut specification compliance.',
        materials: 'Mild Steel, Grade 10.9 nuts, plain washers',
        specs: [
            'M20 dia anchor bolt, 700mm total length',
            '200mm thread length',
            'With 2 nos. plain washers and 2 nos. Grade 10.9 nuts each',
            'As per approved engineering drawing',
        ],
        scale: '66 nos.',
    },
];

/* ───────── Main Page ───────── */
export default function FabricationPortfolio() {
    return (
        <div className="min-h-screen bg-gray-50 pt-32 pb-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Breadcrumb */}
                <div className="mb-8">
                    <Link href="/services" className="inline-flex items-center text-gray-600 hover:text-primary-600 transition-colors font-medium">
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back to Services
                    </Link>
                </div>

                {/* Hero */}
                <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 mb-14 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary-50 rounded-bl-full -mr-16 -mt-16 opacity-50" />
                    <div className="relative z-10">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Fabrication Portfolio</h1>
                        <p className="text-xl text-gray-600 leading-relaxed">
                            A curated selection of our mechanical and structural fabrication projects — from heavy-duty industrial sheds and precision assemblies to portable site infrastructure for India's leading contractors.
                        </p>
                    </div>
                </div>

                {/* Articles */}
                <div className="space-y-12">
                    {projects.map((project) => (
                        <ProjectArticle key={project.id} project={project} />
                    ))}
                </div>

                {/* CTA */}
                <div className="mt-20 bg-primary-900 rounded-3xl p-12 text-center text-white relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-full opacity-10">
                        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                            <path d="M0 100 C 20 0 50 0 100 100 Z" fill="white" />
                        </svg>
                    </div>
                    <div className="relative z-10">
                        <h2 className="text-3xl font-bold mb-4">Need a Custom Fabrication Job?</h2>
                        <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                            We bring engineering precision and turnkey execution to your next major project. Contact us to discuss your requirements.
                        </p>
                        <Link href="/contact" className="inline-flex items-center px-8 py-4 bg-white text-primary-900 rounded-full font-bold hover:bg-gray-100 transition-colors">
                            <Phone className="w-5 h-5 mr-2" />
                            Get a Quote Today
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
