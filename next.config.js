/** @type {import('next').NextConfig} */

const envBaseRoute = { 
  test: "/dev",
  development: "",
  production: ""
}

const nextConfig = {
  // output: 'export',
  // assetPrefix: envBaseRoute[process.env.NODE_ENV],
  // basePath: envBaseRoute[process.env.NODE_ENV],
  // images: {
  //   unoptimized: true,
  // },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '64.media.tumblr.com',
      },
      {
        protocol: 'https',
        hostname: 'encrypted-tbn0.gstatic.com',
      },
    ],
  },
}

module.exports = nextConfig
