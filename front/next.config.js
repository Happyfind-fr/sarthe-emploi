/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  poweredByHeader: false,
  env: {
    API_GET_ALL_USERS: "https://192.168.1.39:3000/users",
    API_ENDPOINT: "https://192.168.1.39:3000/"
  }
}

module.exports = nextConfig
