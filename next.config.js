/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images:{
    domains:["links.papareact.com","fakestoreapi.com"],
  }
}

module.exports = nextConfig
