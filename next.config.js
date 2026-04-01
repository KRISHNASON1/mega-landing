/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com', 'via.placeholder.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  experimental: {
    optimizeCss: true,
  },
  async headers() {
    return [
      {
        source: '/MEGA-Enterprise-Catalog.pdf',
        headers: [
          {
            key: 'Content-Disposition',
            value: 'attachment; filename="MEGA-Enterprise-Catalog.pdf"',
          },
        ],
      },
    ]
  },
  // Note: No 'output: standalone' needed — Vercel handles Next.js natively
}

module.exports = nextConfig
