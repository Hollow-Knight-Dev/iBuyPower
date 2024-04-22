/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/iBuyPower',
  output: 'export',
  images: {
    formats: ['image/avif', 'image/webp']
  }
}

module.exports = nextConfig
