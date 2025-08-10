import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // Allow unescaped entities like apostrophes
    ignoreDuringBuilds: false,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
};

export default nextConfig;
