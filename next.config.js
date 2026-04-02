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
  // Enable standalone output for Cloud Run deployment
  output: 'standalone',
}

module.exports = nextConfig
