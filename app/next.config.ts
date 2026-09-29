import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Allow quality:100 for the hero image
    qualities: [75, 90, 100],
    // Unoptimised local static images — forces browser to always fetch fresh from /public
    // Remove this line if you want Next.js optimisation back
    // unoptimized: true,
  },
};

export default nextConfig;
