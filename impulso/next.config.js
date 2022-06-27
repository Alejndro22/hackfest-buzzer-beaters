/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "images.unsplash.com",
      "firebasestorage.googleapis.com",
      "lh3.googleusercontent.com",
    ],
  },
  experimental: {
    // Enables the styled-components SWC transform
    styledComponents: true,
  },
  swcMinify: true,
};

module.exports = nextConfig;
