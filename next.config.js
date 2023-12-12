/** @type {import('next').NextConfig} */

const envBaseRoute = { 
  test: "/dev",
  development: "/",
  production: "/"
}
const nextConfig = {
  output: 'export',
  assetPrefix: envBaseRoute[process.env.NODE_ENV],
  basePath: envBaseRoute[process.env.NODE_ENV]
}

module.exports = nextConfig
