/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true
  },
  images: {
    domains: ['elcrackdeportivo.com.ar', 'logodownload.org']
  },
  reactStrictMode: true
}

module.exports = nextConfig
