import { NextConfig } from "next";
import CompressionPlugin from "compression-webpack-plugin";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    domains: ["lux-rust.vercel.app"], // Add actual image domains
    deviceSizes: [320, 420, 768, 1024, 1200],
    imageSizes: [16, 32, 48, 64, 96],
  },

  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Encoding",
            value: "gzip",
          },
        ],
      },
    ];
  },

  experimental: {
    optimizeCss: true, // Minify CSS
    scrollRestoration: true, // Improves UX
  },

  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.plugins?.push(new CompressionPlugin());
    }
    return config;
  },
};

export default nextConfig;
