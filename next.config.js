/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['external-content.duckduckgo.com', 'upload.wikimedia.org'],
  },
}

module.exports = nextConfig
