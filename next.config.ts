import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["images.pexels.com", "images.unsplash.com", "plus.unsplash.com"], // ✅ Allow this image domain
  },
};

export default nextConfig;
