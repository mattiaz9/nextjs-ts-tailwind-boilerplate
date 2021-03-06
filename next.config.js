/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["www.gravatar.com"],
  },
  webpack(config) {
    // Svgr
    config.module.rules.push({
      test: /\.svg$/,
      issuer: /\.(jsx|tsx)$/,
      use: ["@svgr/webpack", "url-loader"],
    })
    // TailwindCSS Dark mode fix
    const rules = config.module.rules.find((r) => !!r.oneOf)
    rules.oneOf.forEach((loaders) => {
      if (Array.isArray(loaders.use)) {
        loaders.use.forEach((l) => {
          if (typeof l !== "string" && typeof l.loader === "string" && /(?<!post)css-loader/.test(l.loader)) {
            if (!l.options.modules) return
            const { getLocalIdent, ...others } = l.options.modules
            l.options = {
              ...l.options,
              modules: {
                ...others,
                getLocalIdent: (ctx, localIdentName, localName) => {
                  if (localName === "dark") return localName
                  return getLocalIdent(ctx, localIdentName, localName)
                },
              },
            }
          }
        })
      }
    })
    return config
  },
}
