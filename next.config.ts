import type { NextConfig } from "next";


const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },typescript:{
    ignoreBuildErrors: true,
  }, images: {
    domains: ["assets.aceternity.com"],
  }
};

export default nextConfig;
