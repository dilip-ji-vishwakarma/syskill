import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["m.media-amazon.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
