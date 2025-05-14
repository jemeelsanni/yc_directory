import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // This is more correct than "*" for all hostnames
      },
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '**.sanity.io',
        port: '',
        pathname: '/**',
      }
    ],
    domains: ['placehold.co', 'cdn.sanity.io'],
  },
  experimental: {
    ppr: false,
  },
  // Fix the deprecated dev indicators
  devIndicators: {
    // Remove deprecated options
    // appIsrStatus: true, - deprecated
    // buildActivity: true, - deprecated
    // buildActivityPosition: "bottom-left", - renamed
    position: "bottom-left", // This replaces buildActivityPosition
  },
  eslint: {
    // Optional: Disable ESLint during development for faster builds
    ignoreDuringBuilds: process.env.NODE_ENV === 'development',
  }
};

export default nextConfig;