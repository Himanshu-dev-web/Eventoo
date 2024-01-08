/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ['utfs.io','images.unsplash.com','img.freepik.com'],
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'utfs.io',
          port: ''
        }
      ]
    }
  }
module.exports = nextConfig
