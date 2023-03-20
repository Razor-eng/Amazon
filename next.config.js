/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images:{
    domains:["links.papareact.com","fakestoreapi.com","www.linkpicture.com"],
  }
}

module.exports = nextConfig
