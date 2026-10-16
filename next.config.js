/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Migrated from deprecated `domains` to `remotePatterns` (Next.js 14+).
    // Neither domain is currently used in the codebase; kept for future use.
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn.pixabay.com',
      },
    ],
  },
}

module.exports = nextConfig
