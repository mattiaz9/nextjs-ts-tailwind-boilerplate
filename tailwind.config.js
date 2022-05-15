const plugin = require("tailwindcss/plugin")

module.exports = {
  content: ["./src/components/**/*.tsx", "./pages/**/*.tsx"],
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
        accent: "#3482F6",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    plugin(function ({ addUtilities, theme }) {
      const utils = {
        ".absolute-center": {
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translateX(-50%) translateY(-50%)",
        },
      }

      addUtilities(utils, ["responsive"])
    }),
  ],
}
