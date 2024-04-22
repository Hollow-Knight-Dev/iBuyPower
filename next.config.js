/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/ibuypower',
  output: 'export',
  images: {
    formats: ['image/avif', 'image/webp']
  }
}

module.exports = nextConfig
