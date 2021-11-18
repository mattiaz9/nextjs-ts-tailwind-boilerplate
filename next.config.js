/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: /\.(jsx|tsx)$/,
      use: ["@svgr/webpack"]
    })
    return config
  }
}
