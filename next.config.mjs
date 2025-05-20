/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // This ensures that assets are properly referenced in static exports
  assetPrefix: process.env.NODE_ENV === 'production' ? '.' : '',
  basePath: '',
  trailingSlash: true,
  // Disable font optimization for static exports
  experimental: {
    optimizeFonts: false,
  }
}

export default nextConfig;
