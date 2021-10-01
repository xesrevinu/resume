const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  mode: "jit",
  purge: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    ...defaultTheme,
    extend: {
      colors: {
        red: {
          400: "#b90017",
          500: "#a2071a",
        },
      },
    },
  },
  variants: {},
  plugins: [],
}
