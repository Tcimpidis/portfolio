/** @type {import('next').NextConfig} */

const envBaseRoute = { 
  test: "/dev",
  development: "/",
  production: "/"
}
const nextConfig = {
  output: 'export',
  assetPrefix: '/',
  basePath: envBaseRoute[process.env.NODE_ENV]
}

module.exports = nextConfig
