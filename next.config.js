/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true
  },
  reactStrictMode: true,
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'],
  turbopack: {
    root: '/Users/user/Desktop/Tempo',
  },
}

module.exports = nextConfig
