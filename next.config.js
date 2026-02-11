/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true
  },
  output: 'export',
  basePath: '/test-repo',
  assetPrefix: '/test-repo/'
}

module.exports = nextConfig
