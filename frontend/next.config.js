/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: ["localhost"],
    unoptimized: true,
  },
  env: {
    CUSTOM_KEY: "my-value",
  },
  // Output configuration for Vercel deployment
  output: 'standalone',
  // Disable styled-jsx completely
  compiler: {
    styledJsx: false,
  },
  experimental: {
    serverComponentsExternalPackages: ['styled-jsx'],
  },
  // Generate unique build ID
  generateBuildId: async () => {
    return 'build-' + Date.now()
  },
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: `${process.env.NEXT_PUBLIC_API_URL}/api/:path*`,
      },
    ]
  },
  webpack: (config) => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
    }
    return config
  },
}

module.exports = nextConfig
