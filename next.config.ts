import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  devIndicators: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*.cloudinary.com',
      },
      {
        protocol: 'http',
        hostname: '*.cloudinary.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn.penguin.co.in',
      },
      {
        protocol: 'https',
        hostname: '**.unsplash.com',
        pathname: '*/**',
      },
    ],
  },
};

export default nextConfig;
