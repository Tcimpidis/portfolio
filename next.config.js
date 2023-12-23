/** @type {import('next').NextConfig} */

const envBaseRoute = { 
  test: "/dev",
  development: "",
  production: ""
}

const nextConfig = {
  output: 'standalone',
}

module.exports = nextConfig
