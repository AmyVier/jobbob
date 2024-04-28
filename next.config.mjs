/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: ['pdf2json'],
  },
  images: {
    domains: ['i.pinimg.com'],
  },
};

export default nextConfig;
