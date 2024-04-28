/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: ['pdf2json'],
  },
  images: {
    domains: ['i.pinimg.com', "img.evbuc.com", "images.lumacdn.com"],
  },
};

export default nextConfig;
