const colors = require("tailwindcss/colors")
const plugin = require("tailwindcss/plugin")

module.exports = {
  purge: {
    content: [
      "./src/components/**/*.tsx",
      "./pages/**/*.tsx"
    ],
    options: {
      safelist: ["dark"]
    },
  },
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        xs: "360px",
        sm: "576px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        accent: "#3482F6",
        black: colors.black,
        white: colors.white,
        gray: colors.coolGray,
        red: colors.red,
        yellow: colors.amber,
        green: colors.emerald,
        blue: colors.blue,
        indigo: colors.indigo,
        purple: colors.violet,
        pink: colors.pink,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("tailwindcss-scroll-snap"),
    plugin(function ({ addUtilities, theme }) {
      const utils = {
        ".absolute-center": {
          "position": "absolute",
          "left": "50%",
          "top": "50%",
          "transform": "translateX(-50%) translateY(-50%)",
        },
      }

      addUtilities(utils, ["responsive"])
    }),
  ],
}
