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
  experimental: {
    disableOptimizedLoading: true,
    optimizeCss: false,
  },
  generateBuildId: async () => {
    return "build-" + Date.now();
  },
  webpack: (config) => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
    };
    return config;
  },
  trailingSlash: false,
  compiler: {
    // Remove styledJsx as it's not a valid compiler option
    // styledJsx is handled by Next.js automatically
  },
  // Disable all static optimization
  optimizeFonts: false, // Prevent Google Fonts network requests during build
  swcMinify: false,
  // Disable error page generation
  generateEtags: false,
  poweredByHeader: false,
};

module.exports = nextConfig;
