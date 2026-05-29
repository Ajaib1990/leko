import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",  // <=== enables static exports
  basePath: "/leko", // <=== Add your repository name here
  // reactStrictMode: true,
  images: {
    unoptimized: true, // Add this line
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },

};

export default nextConfig;
